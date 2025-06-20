<?php
namespace App\Services;

use Google\Client as GoogleClient;
use Google\Service\SearchConsole as GoogleSearchConsole;
use Google\Service\SearchConsole\SearchAnalyticsQueryRequest;
use Google\Service\SearchConsole\InspectUrlIndexRequest;
use Exception;
use Illuminate\Support\Facades\Log;

class GoogleSearchConsoleService
{
    private $client;
    private $service;

    public function __construct()
    {
        $this->initializeClient();
    }

    /**
     * Initialize Google Client with Service Account only
     */


    private function initializeClient()
    {
        try {
            $this->client = new GoogleClient();

            // Set application name
            $this->client->setApplicationName('Laravel Search Console Integration');

            // Service Account authentication
            $serviceAccountPath = storage_path('app/private/tdf-search-console-api-df4af3a0bc8a.json');

            if (!$serviceAccountPath || !file_exists($serviceAccountPath)) {
                throw new Exception('Service account key file not found. Please check GOOGLE_SERVICE_ACCOUNT_KEY_PATH in your .env file');
            }

            // Set authentication using service account
            $this->client->setAuthConfig($serviceAccountPath);

            // Set required scopes
            $this->client->setScopes([
                GoogleSearchConsole::WEBMASTERS_READONLY,
                GoogleSearchConsole::WEBMASTERS
            ]);

            // Initialize the Search Console service
            $this->service = new GoogleSearchConsole($this->client);

            Log::info('Google Search Console service initialized successfully with Service Account');

        } catch (Exception $e) {
            Log::error('Failed to initialize Google Search Console client: ' . $e->getMessage());
            throw new Exception('Google Search Console initialization failed: ' . $e->getMessage());
        }
    }

    /**
     * Verify service account connection
     */
    public function verifyConnection()
    {
        try {
            $sites = $this->service->sites->listSites();
            return [
                'status' => 'success',
                'message' => 'Service account connected successfully',
                'sites_count' => count($sites->getSiteEntry() ?: []),
                'connected_at' => now()->toISOString()
            ];
        } catch (Exception $e) {
            Log::error('Service account verification failed: ' . $e->getMessage());
            return [
                'status' => 'error',
                'message' => 'Service account verification failed: ' . $e->getMessage(),
                'connected_at' => now()->toISOString()
            ];
        }
    }

    /**
     * Get all sites from Search Console
     */
    public function getSites()
    {
        try {
            $sites = $this->service->sites->listSites();
            $siteEntries = $sites->getSiteEntry() ?: [];

            Log::info('Retrieved ' . count($siteEntries) . ' sites from Search Console');

            return $siteEntries;
        } catch (Exception $e) {
            Log::error('Failed to get sites: ' . $e->getMessage());
            throw new Exception('Unable to fetch sites from Google Search Console: ' . $e->getMessage());
        }
    }

    /**
     * Get site status and verification details
     */
    public function getSiteStatus($siteUrl)
    {
        try {
            $site = $this->service->sites->get($siteUrl);

            return [
                'site_url' => $site->getSiteUrl(),
                'permission_level' => $site->getPermissionLevel(),
                'verification_status' => 'verified',
                'last_updated' => now()->toISOString(),
                'status' => 'active'
            ];
        } catch (Exception $e) {
            Log::error("Failed to get site status for {$siteUrl}: " . $e->getMessage());

            return [
                'site_url' => $siteUrl,
                'permission_level' => 'none',
                'verification_status' => 'not_verified',
                'last_updated' => now()->toISOString(),
                'status' => 'error',
                'error' => $e->getMessage()
            ];
        }
    }

    /**
     * Get search analytics data
     */
    public function getSearchAnalytics($siteUrl, $startDate = null, $endDate = null, $dimensions = ['query'])
    {
        try {
            $request = new SearchAnalyticsQueryRequest();

            $startDate = $startDate ?: date('Y-m-d', strtotime('-30 days'));
            $endDate = $endDate ?: date('Y-m-d', strtotime('-1 day'));

            $request->setStartDate($startDate);
            $request->setEndDate($endDate);
            $request->setDimensions($dimensions);
            $request->setRowLimit(1000);
            $request->setStartRow(0);

            Log::info("Fetching search analytics for {$siteUrl} from {$startDate} to {$endDate}");

            $response = $this->service->searchanalytics->query($siteUrl, $request);
            $rows = $response->getRows() ?: [];

            return [
                'rows' => $rows,
                'total_clicks' => $this->calculateTotal($rows, 'getClicks'),
                'total_impressions' => $this->calculateTotal($rows, 'getImpressions'),
                'average_ctr' => $this->calculateAverageCtr($rows),
                'average_position' => $this->calculateAveragePosition($rows),
                'date_range' => [
                    'start_date' => $startDate,
                    'end_date' => $endDate
                ],
                'dimensions' => $dimensions,
                'total_rows' => count($rows)
            ];
        } catch (Exception $e) {
            Log::error("Failed to get search analytics for {$siteUrl}: " . $e->getMessage());
            throw new Exception('Unable to fetch search analytics data: ' . $e->getMessage());
        }
    }

    /**
     * Calculate total for a metric using getter method
     */
    private function calculateTotal($rows, $getterMethod)
    {
        $total = 0;
        foreach ($rows as $row) {
            if (method_exists($row, $getterMethod)) {
                $total += $row->{$getterMethod}();
            }
        }
        return $total;
    }

    /**
     * Calculate average CTR
     */
    private function calculateAverageCtr($rows)
    {
        if (empty($rows)) return 0;

        $totalCtr = 0;
        foreach ($rows as $row) {
            $totalCtr += $row->getCtr();
        }
        return round($totalCtr / count($rows), 4);
    }

    /**
     * Calculate average position
     */
    private function calculateAveragePosition($rows)
    {
        if (empty($rows)) return 0;

        $totalPosition = 0;
        foreach ($rows as $row) {
            $totalPosition += $row->getPosition();
        }
        return round($totalPosition / count($rows), 2);
    }

    /**
     * Get URL inspection data
     */
    public function inspectUrl($siteUrl, $inspectionUrl)
    {
        try {
            $request = new InspectUrlIndexRequest();
            $request->setInspectionUrl($inspectionUrl);
            $request->setSiteUrl($siteUrl);

            Log::info("Inspecting URL: {$inspectionUrl} for site: {$siteUrl}");

            $response = $this->service->urlInspection->index->inspect($request);
            $inspectionResult = $response->getInspectionResult();

            return [
                'inspection_result' => [
                    'index_status_result' => $inspectionResult->getIndexStatusResult(),
                    'url_is_indexed' => $inspectionResult->getIndexStatusResult() ?
                        $inspectionResult->getIndexStatusResult()->getVerdict() : null,
                    'coverage_state' => $inspectionResult->getIndexStatusResult() ?
                        $inspectionResult->getIndexStatusResult()->getCoverageState() : null,
                ],
                'url' => $inspectionUrl,
                'site_url' => $siteUrl,
                'timestamp' => now()->toISOString()
            ];
        } catch (Exception $e) {
            Log::error("Failed to inspect URL {$inspectionUrl}: " . $e->getMessage());
            throw new Exception('Unable to inspect URL: ' . $e->getMessage());
        }
    }

    /**
     * Get sitemaps for a site
     */
/**
 * Get sitemaps for a site
 */
public function getSitemaps($siteUrl)
{
    try {
        $sitemaps = $this->service->sitemaps->listSitemaps($siteUrl);
        $sitemapList = $sitemaps->getSitemap() ?: [];

        $result = [];
        foreach ($sitemapList as $sitemap) {
            $result[] = [
                'path' => $sitemap->getPath(),  // Changed from getFeedpath() to getPath()
                'last_submitted' => $sitemap->getLastSubmitted(),
                'last_downloaded' => $sitemap->getLastDownloaded(),
                'type' => $sitemap->getType(),
                'warnings' => $sitemap->getWarnings(),
                'errors' => $sitemap->getErrors(),
                'is_pending' => $sitemap->getIsPending(),
                'is_sitemaps_index' => $sitemap->getIsSitemapsIndex()
            ];
        }

        Log::info("Retrieved " . count($result) . " sitemaps for {$siteUrl}");

        return $result;
    } catch (Exception $e) {
        Log::error("Failed to get sitemaps for {$siteUrl}: " . $e->getMessage());
        throw new Exception('Unable to fetch sitemaps: ' . $e->getMessage());
    }
}

    /**
     * Submit sitemap
     */
    public function submitSitemap($siteUrl, $feedpath)
    {
        try {
            $this->service->sitemaps->submit($siteUrl, $feedpath);
            Log::info("Sitemap {$feedpath} submitted successfully for {$siteUrl}");

            return [
                'status' => 'success',
                'message' => 'Sitemap submitted successfully',
                'sitemap_url' => $feedpath,
                'site_url' => $siteUrl,
                'submitted_at' => now()->toISOString()
            ];
        } catch (Exception $e) {
            Log::error("Failed to submit sitemap {$feedpath} for {$siteUrl}: " . $e->getMessage());
            throw new Exception('Unable to submit sitemap: ' . $e->getMessage());
        }
    }

    /**
     * Delete sitemap
     */
    public function deleteSitemap($siteUrl, $feedpath)
    {
        try {
            $this->service->sitemaps->delete($siteUrl, $feedpath);
            Log::info("Sitemap {$feedpath} deleted successfully for {$siteUrl}");

            return [
                'status' => 'success',
                'message' => 'Sitemap deleted successfully',
                'sitemap_url' => $feedpath,
                'site_url' => $siteUrl,
                'deleted_at' => now()->toISOString()
            ];
        } catch (Exception $e) {
            Log::error("Failed to delete sitemap {$feedpath} for {$siteUrl}: " . $e->getMessage());
            throw new Exception('Unable to delete sitemap: ' . $e->getMessage());
        }
    }

    /**
     * Get comprehensive site report
     */
    public function getSiteReport($siteUrl, $days = 30)
    {
        try {
            $startDate = date('Y-m-d', strtotime("-{$days} days"));
            $endDate = date('Y-m-d', strtotime('-1 day'));

            // Get basic site info
            $siteStatus = $this->getSiteStatus($siteUrl);

            // Get sitemaps
            $sitemaps = $this->getSitemaps($siteUrl);

            // Get analytics by query
            $queryAnalytics = $this->getSearchAnalytics($siteUrl, $startDate, $endDate, ['query']);

            // Get analytics by page
            $pageAnalytics = $this->getSearchAnalytics($siteUrl, $startDate, $endDate, ['page']);

            // Get analytics by date
            $dateAnalytics = $this->getSearchAnalytics($siteUrl, $startDate, $endDate, ['date']);

            return [
                'site_info' => $siteStatus,
                'sitemaps' => [
                    'count' => count($sitemaps),
                    'list' => $sitemaps
                ],
                'performance' => [
                    'period_days' => $days,
                    'date_range' => ['start' => $startDate, 'end' => $endDate],
                    'totals' => [
                        'clicks' => $queryAnalytics['total_clicks'],
                        'impressions' => $queryAnalytics['total_impressions'],
                        'average_ctr' => $queryAnalytics['average_ctr'],
                        'average_position' => $queryAnalytics['average_position']
                    ],
                    'top_queries' => array_slice($queryAnalytics['rows'], 0, 10),
                    'top_pages' => array_slice($pageAnalytics['rows'], 0, 10),
                    'daily_performance' => $dateAnalytics['rows']
                ],
                'generated_at' => now()->toISOString()
            ];
        } catch (Exception $e) {
            Log::error("Failed to generate site report for {$siteUrl}: " . $e->getMessage());
            throw new Exception('Unable to generate site report: ' . $e->getMessage());
        }
    }
}
