<?php

namespace App\Services;

use Google\Client;
use Google\Service\SearchConsole;
use Google\Service\SearchConsole\SearchAnalyticsQueryRequest;
use Exception;
use Illuminate\Support\Facades\Log;
use InvalidArgumentException;

class GoogleSearchConsoleService
{
    private $client;
    private $service;
    private $siteUrl;
    private $isInitialized = false;

    public function __construct()
    {
        // Lazy initialization - only initialize when needed
    }

    /**
     * Initialize Google Client with service account credentials
     */
    private function initializeClient()
    {
        if ($this->isInitialized) {
            return;
        }

        try {
            $this->client = new Client();

            // Get credentials path from config
            $credentialsPath =  storage_path('app/private/tdf-search-console-api-df4af3a0bc8a.json');

            if (!file_exists($credentialsPath)) {
                throw new Exception("Service account credentials file not found at: {$credentialsPath}");
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
            $this->isInitialized = true;

        } catch (Exception $e) {
            Log::error('Failed to initialize Google Search Console client', [
                'error' => $e->getMessage(),
                'credentials_path' => $credentialsPath ?? 'not_set'
            ]);
            throw $e;
        }
    }

    /**
     * Ensure client is initialized before API calls
     */
    private function ensureInitialized()
    {
        if (!$this->isInitialized) {
            $this->initializeClient();
        }
    }

    /**
     * Validate date format
     */
    private function validateDate($date, $paramName)
    {
        if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $date)) {
            throw new InvalidArgumentException("{$paramName} must be in YYYY-MM-DD format");
        }
    }

    /**
     * Validate site URL format
     */
    private function validateSiteUrl($siteUrl)
    {
        if (!filter_var($siteUrl, FILTER_VALIDATE_URL)) {
            throw new InvalidArgumentException("Invalid site URL format: {$siteUrl}");
        }
    }

    /**
     * Set the site URL for queries
     */
    public function setSiteUrl($siteUrl)
    {
        $this->validateSiteUrl($siteUrl);
        $this->siteUrl = $siteUrl;
        return $this;
    }

    /**
     * Get list of sites from Search Console
     */
    public function getSites()
    {
        try {
            $this->ensureInitialized();
            $sites = $this->service->sites->listSites();
            return $sites->getSiteEntry();
        } catch (Exception $e) {
            Log::error('Failed to get sites from Search Console', [
                'error' => $e->getMessage()
            ]);
            throw $e;
        }
    }

    /**
     * Get search analytics data with improved validation
     */
    public function getSearchAnalytics($siteUrl, $startDate, $endDate, $options = [])
    {
        try {
            $this->ensureInitialized();
            $this->validateSiteUrl($siteUrl);
            $this->validateDate($startDate, 'startDate');
            $this->validateDate($endDate, 'endDate');

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

            // Set row limit with bounds checking
            $rowLimit = $options['rowLimit'] ?? 1000;
            $rowLimit = min(max($rowLimit, 1), 25000); // API limits
            $request->setRowLimit($rowLimit);

            // Set start row for pagination
            if (isset($options['startRow'])) {
                $request->setStartRow(max(0, (int)$options['startRow']));
            }

            // Add filters if provided
            if (isset($options['filters'])) {
                $request->setDimensionFilterGroups($options['filters']);
            }

            // Execute the query
            $response = $this->service->searchanalytics->query($siteUrl, $request);

            return $response->getRows();

        } catch (Exception $e) {
            Log::error('Failed to get search analytics', [
                'error' => $e->getMessage(),
                'site_url' => $siteUrl,
                'start_date' => $startDate,
                'end_date' => $endDate,
                'options' => $options
            ]);
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
            $this->ensureInitialized();
            $this->validateSiteUrl($siteUrl);
            $this->validateDate($startDate, 'startDate');
            $this->validateDate($endDate, 'endDate');

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
            Log::error('Failed to get query performance', [
                'error' => $e->getMessage(),
                'site_url' => $siteUrl,
                'query' => $query,
                'start_date' => $startDate,
                'end_date' => $endDate
            ]);
            throw $e;
        }
    }

    /**
     * Get site information
     */
    public function getSiteInfo($siteUrl)
    {
        try {
            $this->ensureInitialized();
            $this->validateSiteUrl($siteUrl);
            return $this->service->sites->get($siteUrl);
        } catch (Exception $e) {
            Log::error('Failed to get site info', [
                'error' => $e->getMessage(),
                'site_url' => $siteUrl
            ]);
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
            $this->ensureInitialized();
            $this->validateSiteUrl($siteUrl);
            $this->validateDate($startDate, 'startDate');
            $this->validateDate($endDate, 'endDate');

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
            Log::error('Failed to get aggregated data', [
                'error' => $e->getMessage(),
                'site_url' => $siteUrl,
                'start_date' => $startDate,
                'end_date' => $endDate
            ]);
            throw $e;
        }
    }

    /**
     * Create a dimension filter for advanced queries
     */
    public function createDimensionFilter($dimension, $operator, $expression)
    {
        $filter = new \Google\Service\SearchConsole\ApiDimensionFilter();
        $filter->setDimension($dimension);
        $filter->setOperator($operator);
        $filter->setExpression($expression);

        $filterGroup = new \Google\Service\SearchConsole\ApiDimensionFilterGroup();
        $filterGroup->setFilters([$filter]);

        return $filterGroup;
    }
}
