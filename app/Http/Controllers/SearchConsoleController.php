<?php

namespace App\Http\Controllers;

use App\Services\GoogleSearchConsoleService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
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
            Log::error('Failed to fetch sites', [
                'error' => $e->getMessage()
            ]);

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
            $validated = $request->validate([
                'site_url' => 'required|url',
                'start_date' => 'required|date_format:Y-m-d',
                'end_date' => 'required|date_format:Y-m-d|after_or_equal:start_date',
                'dimensions' => 'array',
                'dimensions.*' => 'string|in:query,page,country,device,date',
                'search_type' => 'string|in:web,image,video',
                'limit' => 'integer|min:1|max:25000'
            ]);

            $siteUrl = $validated['site_url'];
            $startDate = $validated['start_date'];
            $endDate = $validated['end_date'];
            $dimensions = $validated['dimensions'] ?? ['query'];
            $searchType = $validated['search_type'] ?? 'web';
            $limit = $validated['limit'] ?? 1000;

            $rawData = $this->searchConsoleService->getSearchAnalytics(
                $siteUrl,
                $startDate,
                $endDate,
                [
                    'dimensions' => $dimensions,
                    'searchType' => $searchType,
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
                    'search_type' => $searchType,
                    'total_rows' => count($formattedData)
                ]
            ]);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);

        } catch (\InvalidArgumentException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 400);

        } catch (\Exception $e) {
            Log::error('Search Console Analytics Error', [
                'error' => $e->getMessage(),
                'site_url' => $request->input('site_url'),
                'start_date' => $request->input('start_date'),
                'end_date' => $request->input('end_date')
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch analytics data'
            ], 500);
        }
    }

    /**
     * Get top performing queries
     */
    public function getTopQueries(Request $request)
    {
        try {
            $validated = $request->validate([
                'site_url' => 'required|url',
                'days' => 'integer|min:1|max:90',
                'limit' => 'integer|min:1|max:1000'
            ]);

            $siteUrl = $validated['site_url'];
            $days = $validated['days'] ?? 30;
            $limit = $validated['limit'] ?? 100;

            // Use proper date formatting for Search Console API
            $endDate = Carbon::yesterday()->format('Y-m-d'); // GSC data is delayed by ~2 days
            $startDate = Carbon::yesterday()->subDays($days - 1)->format('Y-m-d');

            $rawData = $this->searchConsoleService->getTopQueries($siteUrl, $startDate, $endDate, $limit);
            $formattedData = $this->searchConsoleService->formatAnalyticsData($rawData);

            return response()->json([
                'success' => true,
                'data' => $formattedData,
                'meta' => [
                    'site_url' => $siteUrl,
                    'period_days' => $days,
                    'limit' => $limit,
                    'date_range' => [
                        'start' => $startDate,
                        'end' => $endDate
                    ]
                ]
            ]);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);

        } catch (\InvalidArgumentException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 400);

        } catch (\Exception $e) {
            Log::error('Failed to fetch top queries', [
                'error' => $e->getMessage(),
                'site_url' => $request->input('site_url'),
                'days' => $request->input('days')
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch top queries'
            ], 500);
        }
    }

    /**
     * Get top performing pages
     */
    public function getTopPages(Request $request)
    {
        try {
            $validated = $request->validate([
                'site_url' => 'required|url',
                'days' => 'integer|min:1|max:90',
                'limit' => 'integer|min:1|max:1000'
            ]);

            $siteUrl = $validated['site_url'];
            $days = $validated['days'] ?? 30;
            $limit = $validated['limit'] ?? 100;

            $endDate = Carbon::yesterday()->format('Y-m-d');
            $startDate = Carbon::yesterday()->subDays($days - 1)->format('Y-m-d');

            $rawData = $this->searchConsoleService->getTopPages($siteUrl, $startDate, $endDate, $limit);
            $formattedData = $this->searchConsoleService->formatAnalyticsData($rawData);

            return response()->json([
                'success' => true,
                'data' => $formattedData,
                'meta' => [
                    'site_url' => $siteUrl,
                    'period_days' => $days,
                    'limit' => $limit,
                    'date_range' => [
                        'start' => $startDate,
                        'end' => $endDate
                    ]
                ]
            ]);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);

        } catch (\InvalidArgumentException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 400);

        } catch (\Exception $e) {
            Log::error('Failed to fetch top pages', [
                'error' => $e->getMessage(),
                'site_url' => $request->input('site_url'),
                'days' => $request->input('days')
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch top pages'
            ], 500);
        }
    }

    /**
     * Get performance summary
     */
    public function getPerformanceSummary(Request $request)
    {
        try {
            $validated = $request->validate([
                'site_url' => 'required|url',
                'days' => 'integer|min:1|max:90'
            ]);

            $siteUrl = $validated['site_url'];
            $days = $validated['days'] ?? 30;

            $endDate = Carbon::yesterday()->format('Y-m-d');
            $startDate = Carbon::yesterday()->subDays($days - 1)->format('Y-m-d');

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

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);

        } catch (\InvalidArgumentException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 400);

        } catch (\Exception $e) {
            Log::error('Failed to fetch performance summary', [
                'error' => $e->getMessage(),
                'site_url' => $request->input('site_url'),
                'days' => $request->input('days')
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch performance summary'
            ], 500);
        }
    }

    /**
     * Get query specific performance
     */
    public function getQueryPerformance(Request $request)
    {
        try {
            $validated = $request->validate([
                'site_url' => 'required|url',
                'query' => 'required|string|max:2048',
                'start_date' => 'required|date_format:Y-m-d',
                'end_date' => 'required|date_format:Y-m-d|after_or_equal:start_date'
            ]);

            $siteUrl = $validated['site_url'];
            $query = $validated['query'];
            $startDate = $validated['start_date'];
            $endDate = $validated['end_date'];

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
                    ],
                    'total_results' => count($formattedData)
                ]
            ]);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);

        } catch (\InvalidArgumentException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 400);

        } catch (\Exception $e) {
            Log::error('Failed to fetch query performance', [
                'error' => $e->getMessage(),
                'site_url' => $request->input('site_url'),
                'query' => $request->input('query'),
                'start_date' => $request->input('start_date'),
                'end_date' => $request->input('end_date')
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch query performance'
            ], 500);
        }
    }

    /**
     * Get site information
     */
    public function getSiteInfo(Request $request)
    {
        try {
            $validated = $request->validate([
                'site_url' => 'required|url'
            ]);

            $siteUrl = $validated['site_url'];
            $siteInfo = $this->searchConsoleService->getSiteInfo($siteUrl);

            return response()->json([
                'success' => true,
                'data' => $siteInfo
            ]);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);

        } catch (\InvalidArgumentException $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 400);

        } catch (\Exception $e) {
            Log::error('Failed to fetch site info', [
                'error' => $e->getMessage(),
                'site_url' => $request->input('site_url')
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch site info'
            ], 500);
        }
    }

    /**
     * Get comparison data between two periods
     */
    public function getComparisonData(Request $request)
    {
        try {
            $validated = $request->validate([
                'site_url' => 'required|url',
                'current_start' => 'required|date_format:Y-m-d',
                'current_end' => 'required|date_format:Y-m-d|after_or_equal:current_start',
                'previous_start' => 'required|date_format:Y-m-d',
                'previous_end' => 'required|date_format:Y-m-d|after_or_equal:previous_start',
                'dimensions' => 'array',
                'dimensions.*' => 'string|in:query,page,country,device'
            ]);

            $siteUrl = $validated['site_url'];
            $dimensions = $validated['dimensions'] ?? ['query'];

            // Get current period data
            $currentData = $this->searchConsoleService->getAggregatedData(
                $siteUrl,
                $validated['current_start'],
                $validated['current_end']
            );

            // Get previous period data
            $previousData = $this->searchConsoleService->getAggregatedData(
                $siteUrl,
                $validated['previous_start'],
                $validated['previous_end']
            );

            // Calculate changes
            $comparison = null;
            if ($currentData && $previousData) {
                $comparison = [
                    'clicks_change' => $currentData['total_clicks'] - $previousData['total_clicks'],
                    'clicks_change_percent' => $previousData['total_clicks'] > 0
                        ? round((($currentData['total_clicks'] - $previousData['total_clicks']) / $previousData['total_clicks']) * 100, 2)
                        : 0,
                    'impressions_change' => $currentData['total_impressions'] - $previousData['total_impressions'],
                    'impressions_change_percent' => $previousData['total_impressions'] > 0
                        ? round((($currentData['total_impressions'] - $previousData['total_impressions']) / $previousData['total_impressions']) * 100, 2)
                        : 0,
                    'ctr_change' => $currentData['average_ctr'] - $previousData['average_ctr'],
                    'position_change' => $currentData['average_position'] - $previousData['average_position']
                ];
            }

            return response()->json([
                'success' => true,
                'data' => [
                    'current_period' => $currentData,
                    'previous_period' => $previousData,
                    'comparison' => $comparison
                ],
                'meta' => [
                    'site_url' => $siteUrl,
                    'current_period' => [
                        'start' => $validated['current_start'],
                        'end' => $validated['current_end']
                    ],
                    'previous_period' => [
                        'start' => $validated['previous_start'],
                        'end' => $validated['previous_end']
                    ]
                ]
            ]);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            Log::error('Failed to fetch comparison data', [
                'error' => $e->getMessage(),
                'site_url' => $request->input('site_url')
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch comparison data'
            ], 500);
        }
    }
}
