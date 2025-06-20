<?php

namespace App\Services;

use Google\Client;
use Google\Service\SearchConsole;
use Google\Service\SearchConsole\SearchAnalyticsQueryRequest;
use Exception;
use Illuminate\Support\Facades\Log;

class GoogleSearchConsoleService
{
    private $client;
    private $service;
    private $siteUrl;

    public function __construct()
    {
        $this->initializeClient();
    }

    /**
     * Initialize Google Client with service account credentials
     */
    private function initializeClient()
    {
        try {
            $this->client = new Client();

            // Path to your service account JSON file
            $credentialsPath = storage_path('app/private/tdf-search-console-api-df4af3a0bc8a.json');

            if (!file_exists($credentialsPath)) {
                throw new Exception('Service account credentials file not found');
            }

            // Set the credentials
            $this->client->setAuthConfig($credentialsPath);

            // Set the required scopes
            $this->client->setScopes([
                'https://www.googleapis.com/auth/webmasters.readonly',
                'https://www.googleapis.com/auth/webmasters'
            ]);

            // Initialize the Search Console service
            $this->service = new SearchConsole($this->client);

        } catch (Exception $e) {
            Log::error('Failed to initialize Google Search Console client: ' . $e->getMessage());
            throw $e;
        }
    }

    /**
     * Set the site URL for queries
     */
    public function setSiteUrl($siteUrl)
    {
        $this->siteUrl = $siteUrl;
        return $this;
    }

    /**
     * Get list of sites from Search Console
     */
    public function getSites()
    {
        try {
            $sites = $this->service->sites->listSites();
            return $sites->getSiteEntry();
        } catch (Exception $e) {
            Log::error('Failed to get sites: ' . $e->getMessage());
            throw $e;
        }
    }

    /**
     * Get search analytics data
     */
    public function getSearchAnalytics($siteUrl, $startDate, $endDate, $options = [])
    {
        try {
            $request = new SearchAnalyticsQueryRequest();

            // Set date range
            $request->setStartDate($startDate);
            $request->setEndDate($endDate);

            // Set dimensions (what data to group by)
            $dimensions = $options['dimensions'] ?? ['query'];
            $request->setDimensions($dimensions);

            // Set search type (web, image, video)
            $searchType = $options['searchType'] ?? 'web';
            $request->setSearchType($searchType);

            // Set row limit
            $rowLimit = $options['rowLimit'] ?? 1000;
            $request->setRowLimit($rowLimit);

            // Set start row for pagination
            if (isset($options['startRow'])) {
                $request->setStartRow($options['startRow']);
            }

            // Execute the query
            $response = $this->service->searchanalytics->query($siteUrl, $request);

            return $response->getRows();

        } catch (Exception $e) {
            Log::error('Failed to get search analytics: ' . $e->getMessage());
            throw $e;
        }
    }

    /**
     * Get top queries
     */
    public function getTopQueries($siteUrl, $startDate, $endDate, $limit = 100)
    {
        return $this->getSearchAnalytics($siteUrl, $startDate, $endDate, [
            'dimensions' => ['query'],
            'rowLimit' => $limit
        ]);
    }

    /**
     * Get top pages
     */
    public function getTopPages($siteUrl, $startDate, $endDate, $limit = 100)
    {
        return $this->getSearchAnalytics($siteUrl, $startDate, $endDate, [
            'dimensions' => ['page'],
            'rowLimit' => $limit
        ]);
    }

    /**
     * Get performance by country
     */
    public function getPerformanceByCountry($siteUrl, $startDate, $endDate, $limit = 50)
    {
        return $this->getSearchAnalytics($siteUrl, $startDate, $endDate, [
            'dimensions' => ['country'],
            'rowLimit' => $limit
        ]);
    }

    /**
     * Get performance by device
     */
    public function getPerformanceByDevice($siteUrl, $startDate, $endDate)
    {
        return $this->getSearchAnalytics($siteUrl, $startDate, $endDate, [
            'dimensions' => ['device'],
            'rowLimit' => 10
        ]);
    }

    /**
     * Get detailed analytics with multiple dimensions
     */
    public function getDetailedAnalytics($siteUrl, $startDate, $endDate, $dimensions = ['query', 'page'], $limit = 500)
    {
        return $this->getSearchAnalytics($siteUrl, $startDate, $endDate, [
            'dimensions' => $dimensions,
            'rowLimit' => $limit
        ]);
    }

    /**
     * Get performance data for a specific query
     */
    public function getQueryPerformance($siteUrl, $query, $startDate, $endDate)
    {
        try {
            $request = new SearchAnalyticsQueryRequest();
            $request->setStartDate($startDate);
            $request->setEndDate($endDate);
            $request->setDimensions(['query', 'page']);

            // Filter by specific query
            $dimensionFilter = new \Google\Service\SearchConsole\ApiDimensionFilter();
            $dimensionFilter->setDimension('query');
            $dimensionFilter->setOperator('equals');
            $dimensionFilter->setExpression($query);

            $dimensionFilterGroup = new \Google\Service\SearchConsole\ApiDimensionFilterGroup();
            $dimensionFilterGroup->setFilters([$dimensionFilter]);

            $request->setDimensionFilterGroups([$dimensionFilterGroup]);

            $response = $this->service->searchanalytics->query($siteUrl, $request);

            return $response->getRows();

        } catch (Exception $e) {
            Log::error('Failed to get query performance: ' . $e->getMessage());
            throw $e;
        }
    }

    /**
     * Get site information
     */
    public function getSiteInfo($siteUrl)
    {
        try {
            return $this->service->sites->get($siteUrl);
        } catch (Exception $e) {
            Log::error('Failed to get site info: ' . $e->getMessage());
            throw $e;
        }
    }

    /**
     * Submit URL for indexing
     */
    public function submitUrl($url)
    {
        try {
            // Note: This requires the Indexing API, which is separate from Search Console API
            // You'll need to enable the Indexing API and add the scope
            Log::info('URL submission requested for: ' . $url);
            // Implementation would go here for Indexing API
            return true;
        } catch (Exception $e) {
            Log::error('Failed to submit URL: ' . $e->getMessage());
            throw $e;
        }
    }

    /**
     * Format the response data for easier consumption
     */
    public function formatAnalyticsData($rows)
    {
        $formatted = [];

        if (!$rows) {
            return $formatted;
        }

        foreach ($rows as $row) {
            $formatted[] = [
                'keys' => $row->getKeys(),
                'clicks' => $row->getClicks(),
                'impressions' => $row->getImpressions(),
                'ctr' => round($row->getCtr() * 100, 2), // Convert to percentage
                'position' => round($row->getPosition(), 1)
            ];
        }

        return $formatted;
    }

    /**
     * Get aggregated data for a date range
     */
    public function getAggregatedData($siteUrl, $startDate, $endDate)
    {
        try {
            $request = new SearchAnalyticsQueryRequest();
            $request->setStartDate($startDate);
            $request->setEndDate($endDate);
            // No dimensions = aggregated data

            $response = $this->service->searchanalytics->query($siteUrl, $request);
            $rows = $response->getRows();

            if (!empty($rows)) {
                $row = $rows[0];
                return [
                    'total_clicks' => $row->getClicks(),
                    'total_impressions' => $row->getImpressions(),
                    'average_ctr' => round($row->getCtr() * 100, 2),
                    'average_position' => round($row->getPosition(), 1)
                ];
            }

            return null;

        } catch (Exception $e) {
            Log::error('Failed to get aggregated data: ' . $e->getMessage());
            throw $e;
        }
    }
}
