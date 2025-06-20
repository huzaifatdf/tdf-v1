<?php

namespace App\Http\Controllers;

use App\Services\GoogleSearchConsoleService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class SearchConsoleController extends Controller
{
    private $searchConsoleService;

    public function __construct(GoogleSearchConsoleService $searchConsoleService)
    {
        $this->searchConsoleService = $searchConsoleService;
    }

    /**
     * Verify service account connection
     */
    public function verifyConnection(): JsonResponse
    {
        try {
            $verification = $this->searchConsoleService->verifyConnection();

            return response()->json([
                'success' => $verification['status'] === 'success',
                'data' => $verification
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get all sites
     */
    public function getSites(): JsonResponse
    {
        try {
            $sites = $this->searchConsoleService->getSites();

            $sitesData = [];
            foreach ($sites as $site) {
                $sitesData[] = [
                    'site_url' => $site->getSiteUrl(),
                    'permission_level' => $site->getPermissionLevel()
                ];
            }

            return response()->json([
                'success' => true,
                'data' => $sitesData,
                'count' => count($sitesData)
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get site status
     */
    public function getSiteStatus(Request $request): JsonResponse
    {
        $request->validate([
            'site_url' => 'required|url'
        ]);

        try {
            $status = $this->searchConsoleService->getSiteStatus($request->site_url);

            return response()->json([
                'success' => true,
                'data' => $status
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get comprehensive site report
     */
    public function getSiteReport(Request $request): JsonResponse
    {
        $request->validate([
            'site_url' => 'required|url',
            'days' => 'nullable|integer|min:1|max:365'
        ]);

        try {
            $report = $this->searchConsoleService->getSiteReport(
                $request->site_url,
                $request->days ?? 30
            );

            return response()->json([
                'success' => true,
                'data' => $report
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get search analytics
     */
    public function getSearchAnalytics(Request $request): JsonResponse
    {
        $request->validate([
            'site_url' => 'required|url',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'dimensions' => 'nullable|array'
        ]);

        try {
            $analytics = $this->searchConsoleService->getSearchAnalytics(
                $request->site_url,
                $request->start_date,
                $request->end_date,
                $request->dimensions ?? ['query']
            );

            return response()->json([
                'success' => true,
                'data' => $analytics
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Inspect URL
     */
    public function inspectUrl(Request $request): JsonResponse
    {
        $request->validate([
            'site_url' => 'required|url',
            'inspection_url' => 'required|url'
        ]);

        try {
            $inspection = $this->searchConsoleService->inspectUrl(
                $request->site_url,
                $request->inspection_url
            );

            return response()->json([
                'success' => true,
                'data' => $inspection
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get sitemaps
     */
    public function getSitemaps(Request $request): JsonResponse
    {
        $request->validate([
            'site_url' => 'required|url'
        ]);

        try {
            $sitemaps = $this->searchConsoleService->getSitemaps($request->site_url);

            return response()->json([
                'success' => true,
                'data' => $sitemaps,
                'count' => count($sitemaps)
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Submit sitemap
     */
    public function submitSitemap(Request $request): JsonResponse
    {
        $request->validate([
            'site_url' => 'required|url',
            'sitemap_url' => 'required|url'
        ]);

        try {
            $result = $this->searchConsoleService->submitSitemap(
                $request->site_url,
                $request->sitemap_url
            );

            return response()->json([
                'success' => true,
                'data' => $result
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Delete sitemap
     */
    public function deleteSitemap(Request $request): JsonResponse
    {
        $request->validate([
            'site_url' => 'required|url',
            'sitemap_url' => 'required|url'
        ]);

        try {
            $result = $this->searchConsoleService->deleteSitemap(
                $request->site_url,
                $request->sitemap_url
            );

            return response()->json([
                'success' => true,
                'data' => $result
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
