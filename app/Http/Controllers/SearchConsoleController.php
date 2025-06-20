<?php

namespace App\Http\Controllers;

use App\Services\GoogleSearchConsoleService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class SearchConsoleController extends Controller
{
    private $searchConsoleService;

    public function __construct(GoogleSearchConsoleService $searchConsoleService)
    {
        $this->searchConsoleService = $searchConsoleService;
    }

    /**
     * Get list of sites
     */
    public function getSites()
    {
        try {
            $sites = $this->searchConsoleService->getSites();

            return response()->json([
                'success' => true,
                'data' => $sites
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch sites: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get search analytics data
     */
    public function getAnalytics(Request $request)
    {
        try {
            $request->validate([
                'site_url' => 'required|url',
                'start_date' => 'required|date',
                'end_date' => 'required|date|after_or_equal:start_date',
                'dimensions' => 'array',
                'limit' => 'integer|min:1|max:25000'
            ]);

            $siteUrl = $request->input('site_url');
            $startDate = $request->input('start_date');
            $endDate = $request->input('end_date');
            $dimensions = $request->input('dimensions', ['query']);
            $limit = $request->input('limit', 1000);

            $rawData = $this->searchConsoleService->getSearchAnalytics(
                $siteUrl,
                $startDate,
                $endDate,
                [
                    'dimensions' => $dimensions,
                    'rowLimit' => $limit
                ]
            );

            $formattedData = $this->searchConsoleService->formatAnalyticsData($rawData);

            return response()->json([
                'success' => true,
                'data' => $formattedData,
                'meta' => [
                    'site_url' => $siteUrl,
                    'date_range' => [
                        'start' => $startDate,
                        'end' => $endDate
                    ],
                    'dimensions' => $dimensions,
                    'total_rows' => count($formattedData)
                ]
            ]);

        } catch (\Exception $e) {
            Log::error('Search Console Analytics Error: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch analytics data: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get top performing queries
     */
    public function getTopQueries(Request $request)
    {
        try {
            $request->validate([
                'site_url' => 'required|url',
                'days' => 'integer|min:1|max:90'
            ]);

            $siteUrl = $request->input('site_url');
            $days = $request->input('days', 30);

            $endDate = Carbon::now()->format('Y-m-d');
            $startDate = Carbon::now()->subDays($days)->format('Y-m-d');

            $rawData = $this->searchConsoleService->getTopQueries($siteUrl, $startDate, $endDate, 100);
            $formattedData = $this->searchConsoleService->formatAnalyticsData($rawData);

            return response()->json([
                'success' => true,
                'data' => $formattedData,
                'meta' => [
                    'site_url' => $siteUrl,
                    'period_days' => $days,
                    'date_range' => [
                        'start' => $startDate,
                        'end' => $endDate
                    ]
                ]
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch top queries: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get top performing pages
     */
    public function getTopPages(Request $request)
    {
        try {
            $request->validate([
                'site_url' => 'required|url',
                'days' => 'integer|min:1|max:90'
            ]);

            $siteUrl = $request->input('site_url');
            $days = $request->input('days', 30);

            $endDate = Carbon::now()->format('Y-m-d');
            $startDate = Carbon::now()->subDays($days)->format('Y-m-d');

            $rawData = $this->searchConsoleService->getTopPages($siteUrl, $startDate, $endDate, 100);
            $formattedData = $this->searchConsoleService->formatAnalyticsData($rawData);

            return response()->json([
                'success' => true,
                'data' => $formattedData,
                'meta' => [
                    'site_url' => $siteUrl,
                    'period_days' => $days,
                    'date_range' => [
                        'start' => $startDate,
                        'end' => $endDate
                    ]
                ]
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch top pages: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get performance summary
     */
    public function getPerformanceSummary(Request $request)
    {
        try {
            $request->validate([
                'site_url' => 'required|url',
                'days' => 'integer|min:1|max:90'
            ]);

            $siteUrl = $request->input('site_url');
            $days = $request->input('days', 30);

            $endDate = Carbon::now()->format('Y-m-d');
            $startDate = Carbon::now()->subDays($days)->format('Y-m-d');

            // Get aggregated data
            $summary = $this->searchConsoleService->getAggregatedData($siteUrl, $startDate, $endDate);

            // Get device performance
            $deviceData = $this->searchConsoleService->getPerformanceByDevice($siteUrl, $startDate, $endDate);
            $formattedDeviceData = $this->searchConsoleService->formatAnalyticsData($deviceData);

            // Get country performance
            $countryData = $this->searchConsoleService->getPerformanceByCountry($siteUrl, $startDate, $endDate, 10);
            $formattedCountryData = $this->searchConsoleService->formatAnalyticsData($countryData);

            return response()->json([
                'success' => true,
                'data' => [
                    'summary' => $summary,
                    'by_device' => $formattedDeviceData,
                    'by_country' => $formattedCountryData
                ],
                'meta' => [
                    'site_url' => $siteUrl,
                    'period_days' => $days,
                    'date_range' => [
                        'start' => $startDate,
                        'end' => $endDate
                    ]
                ]
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch performance summary: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get query specific performance
     */
    public function getQueryPerformance(Request $request)
    {
        try {
            $request->validate([
                'site_url' => 'required|url',
                'query' => 'required|string',
                'start_date' => 'required|date',
                'end_date' => 'required|date|after_or_equal:start_date'
            ]);

            $siteUrl = $request->input('site_url');
            $query = $request->input('query');
            $startDate = $request->input('start_date');
            $endDate = $request->input('end_date');

            $rawData = $this->searchConsoleService->getQueryPerformance($siteUrl, $query, $startDate, $endDate);
            $formattedData = $this->searchConsoleService->formatAnalyticsData($rawData);

            return response()->json([
                'success' => true,
                'data' => $formattedData,
                'meta' => [
                    'site_url' => $siteUrl,
                    'query' => $query,
                    'date_range' => [
                        'start' => $startDate,
                        'end' => $endDate
                    ]
                ]
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch query performance: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get site information
     */
    public function getSiteInfo(Request $request)
    {
        try {
            $request->validate([
                'site_url' => 'required|url'
            ]);

            $siteUrl = $request->input('site_url');
            $siteInfo = $this->searchConsoleService->getSiteInfo($siteUrl);

            return response()->json([
                'success' => true,
                'data' => $siteInfo
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch site info: ' . $e->getMessage()
            ], 500);
        }
    }
}
