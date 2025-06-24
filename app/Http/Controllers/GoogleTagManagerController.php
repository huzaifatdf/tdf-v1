<?php

namespace App\Http\Controllers;

use App\Services\GoogleTagManagerService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Exception;

class GoogleTagManagerController extends Controller
{
    protected $gtmService;

    public function __construct(GoogleTagManagerService $gtmService)
    {
        $this->gtmService = $gtmService;
    }

    /**
     * Verify GTM service connection
     */
    public function verifyConnection(): JsonResponse
    {
        try {
            $result = $this->gtmService->verifyConnection();

            return response()->json([
                'success' => $result['status'] === 'success',
                'data' => $result,
                'message' => $result['message']
            ], $result['status'] === 'success' ? 200 : 400);

        } catch (Exception $e) {
            Log::error('GTM connection verification failed: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to verify GTM connection',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get all GTM accounts
     */
    public function getAccounts(): JsonResponse
    {
        try {
            $accounts = $this->gtmService->getAccounts();

            return response()->json([
                'success' => true,
                'data' => $accounts,
                'count' => count($accounts),
                'message' => 'Accounts retrieved successfully'
            ]);

        } catch (Exception $e) {
            Log::error('Failed to get GTM accounts: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve GTM accounts',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get containers for a specific account
     */
    public function getContainers(Request $request, $accountId): JsonResponse
    {
        try {
            $containers = $this->gtmService->getContainers($accountId);

            return response()->json([
                'success' => true,
                'data' => $containers,
                'count' => count($containers),
                'account_id' => $accountId,
                'message' => 'Containers retrieved successfully'
            ]);

        } catch (Exception $e) {
            Log::error("Failed to get containers for account {$accountId}: " . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve containers',
                'error' => $e->getMessage(),
                'account_id' => $accountId
            ], 500);
        }
    }

    /**
     * Get workspaces for a specific container
     */
    public function getWorkspaces(Request $request, $accountId, $containerId): JsonResponse
    {
        try {
            $workspaces = $this->gtmService->getWorkspaces($accountId, $containerId);

            return response()->json([
                'success' => true,
                'data' => $workspaces,
                'count' => count($workspaces),
                'account_id' => $accountId,
                'container_id' => $containerId,
                'message' => 'Workspaces retrieved successfully'
            ]);

        } catch (Exception $e) {
            Log::error("Failed to get workspaces for container {$containerId}: " . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve workspaces',
                'error' => $e->getMessage(),
                'account_id' => $accountId,
                'container_id' => $containerId
            ], 500);
        }
    }

    /**
     * Get tags from a workspace
     */
    public function getTags(Request $request, $accountId, $containerId, $workspaceId): JsonResponse
    {
        try {
            $tags = $this->gtmService->getTags($accountId, $containerId, $workspaceId);

            return response()->json([
                'success' => true,
                'data' => $tags,
                'count' => count($tags),
                'account_id' => $accountId,
                'container_id' => $containerId,
                'workspace_id' => $workspaceId,
                'message' => 'Tags retrieved successfully'
            ]);

        } catch (Exception $e) {
            Log::error("Failed to get tags from workspace {$workspaceId}: " . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve tags',
                'error' => $e->getMessage(),
                'account_id' => $accountId,
                'container_id' => $containerId,
                'workspace_id' => $workspaceId
            ], 500);
        }
    }

    /**
     * Get triggers from a workspace
     */
    public function getTriggers(Request $request, $accountId, $containerId, $workspaceId): JsonResponse
    {
        try {
            $triggers = $this->gtmService->getTriggers($accountId, $containerId, $workspaceId);

            return response()->json([
                'success' => true,
                'data' => $triggers,
                'count' => count($triggers),
                'account_id' => $accountId,
                'container_id' => $containerId,
                'workspace_id' => $workspaceId,
                'message' => 'Triggers retrieved successfully'
            ]);

        } catch (Exception $e) {
            Log::error("Failed to get triggers from workspace {$workspaceId}: " . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve triggers',
                'error' => $e->getMessage(),
                'account_id' => $accountId,
                'container_id' => $containerId,
                'workspace_id' => $workspaceId
            ], 500);
        }
    }

    /**
     * Get variables from a workspace
     */
    public function getVariables(Request $request, $accountId, $containerId, $workspaceId): JsonResponse
    {
        try {
            $variables = $this->gtmService->getVariables($accountId, $containerId, $workspaceId);

            return response()->json([
                'success' => true,
                'data' => $variables,
                'count' => count($variables),
                'account_id' => $accountId,
                'container_id' => $containerId,
                'workspace_id' => $workspaceId,
                'message' => 'Variables retrieved successfully'
            ]);

        } catch (Exception $e) {
            Log::error("Failed to get variables from workspace {$workspaceId}: " . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve variables',
                'error' => $e->getMessage(),
                'account_id' => $accountId,
                'container_id' => $containerId,
                'workspace_id' => $workspaceId
            ], 500);
        }
    }

    /**
     * Get built-in variables from a workspace
     */
    public function getBuiltInVariables(Request $request, $accountId, $containerId, $workspaceId): JsonResponse
    {
        try {
            $builtInVariables = $this->gtmService->getBuiltInVariables($accountId, $containerId, $workspaceId);

            return response()->json([
                'success' => true,
                'data' => $builtInVariables,
                'count' => count($builtInVariables),
                'account_id' => $accountId,
                'container_id' => $containerId,
                'workspace_id' => $workspaceId,
                'message' => 'Built-in variables retrieved successfully'
            ]);

        } catch (Exception $e) {
            Log::error("Failed to get built-in variables from workspace {$workspaceId}: " . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve built-in variables',
                'error' => $e->getMessage(),
                'account_id' => $accountId,
                'container_id' => $containerId,
                'workspace_id' => $workspaceId
            ], 500);
        }
    }

    /**
     * Get container versions
     */
    public function getContainerVersions(Request $request, $accountId, $containerId): JsonResponse
    {
        try {
            $versions = $this->gtmService->getContainerVersions($accountId, $containerId);

            return response()->json([
                'success' => true,
                'data' => $versions,
                'count' => count($versions),
                'account_id' => $accountId,
                'container_id' => $containerId,
                'message' => 'Container versions retrieved successfully'
            ]);

        } catch (Exception $e) {
            Log::error("Failed to get container versions for {$containerId}: " . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve container versions',
                'error' => $e->getMessage(),
                'account_id' => $accountId,
                'container_id' => $containerId
            ], 500);
        }
    }

    /**
     * Create a new workspace
     */
    public function createWorkspace(Request $request, $accountId, $containerId): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000'
        ]);

        try {
            $result = $this->gtmService->createWorkspace(
                $accountId,
                $containerId,
                $request->input('name'),
                $request->input('description', '')
            );

            return response()->json([
                'success' => true,
                'data' => $result,
                'message' => 'Workspace created successfully'
            ], 201);

        } catch (Exception $e) {
            Log::error("Failed to create workspace: " . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to create workspace',
                'error' => $e->getMessage(),
                'account_id' => $accountId,
                'container_id' => $containerId
            ], 500);
        }
    }

    /**
     * Get comprehensive account report
     */
    public function getAccountReport(Request $request, $accountId): JsonResponse
    {
        try {
            $report = $this->gtmService->getAccountReport($accountId);

            return response()->json([
                'success' => true,
                'data' => $report,
                'message' => 'Account report generated successfully'
            ]);

        } catch (Exception $e) {
            Log::error("Failed to generate account report for {$accountId}: " . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to generate account report',
                'error' => $e->getMessage(),
                'account_id' => $accountId
            ], 500);
        }
    }

    /**
     * Get container summary
     */
    public function getContainerSummary(Request $request, $accountId, $containerId): JsonResponse
    {
        try {
            $summary = $this->gtmService->getContainerSummary($accountId, $containerId);

            return response()->json([
                'success' => true,
                'data' => $summary,
                'message' => 'Container summary retrieved successfully'
            ]);

        } catch (Exception $e) {
            Log::error("Failed to get container summary for {$containerId}: " . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve container summary',
                'error' => $e->getMessage(),
                'account_id' => $accountId,
                'container_id' => $containerId
            ], 500);
        }
    }

    /**
     * Get all workspace data (tags, triggers, variables) in one call
     */
    public function getWorkspaceData(Request $request, $accountId, $containerId, $workspaceId): JsonResponse
    {
        try {
            $tags = $this->gtmService->getTags($accountId, $containerId, $workspaceId);
            $triggers = $this->gtmService->getTriggers($accountId, $containerId, $workspaceId);
            $variables = $this->gtmService->getVariables($accountId, $containerId, $workspaceId);
            $builtInVariables = $this->gtmService->getBuiltInVariables($accountId, $containerId, $workspaceId);

            return response()->json([
                'success' => true,
                'data' => [
                    'tags' => $tags,
                    'triggers' => $triggers,
                    'variables' => $variables,
                    'built_in_variables' => $builtInVariables,
                    'summary' => [
                        'tags_count' => count($tags),
                        'triggers_count' => count($triggers),
                        'variables_count' => count($variables),
                        'built_in_variables_count' => count($builtInVariables)
                    ]
                ],
                'account_id' => $accountId,
                'container_id' => $containerId,
                'workspace_id' => $workspaceId,
                'message' => 'Workspace data retrieved successfully'
            ]);

        } catch (Exception $e) {
            Log::error("Failed to get workspace data for {$workspaceId}: " . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve workspace data',
                'error' => $e->getMessage(),
                'account_id' => $accountId,
                'container_id' => $containerId,
                'workspace_id' => $workspaceId
            ], 500);
        }
    }

    /**
     * Get dashboard data (overview of all accounts)
     */
    public function getDashboard(): JsonResponse
    {
        try {
            $accounts = $this->gtmService->getAccounts();
            $dashboardData = [];

            foreach ($accounts as $account) {
                $containers = $this->gtmService->getContainers($account['account_id']);

                $accountData = [
                    'account_info' => $account,
                    'containers_count' => count($containers),
                    'containers' => []
                ];

                foreach ($containers as $container) {
                    $workspaces = $this->gtmService->getWorkspaces($account['account_id'], $container['container_id']);
                    $versions = $this->gtmService->getContainerVersions($account['account_id'], $container['container_id']);

                    $accountData['containers'][] = [
                        'container_info' => $container,
                        'workspaces_count' => count($workspaces),
                        'versions_count' => count($versions)
                    ];
                }

                $dashboardData[] = $accountData;
            }

            return response()->json([
                'success' => true,
                'data' => $dashboardData,
                'summary' => [
                    'accounts_count' => count($accounts),
                    'total_containers' => array_sum(array_column($dashboardData, 'containers_count'))
                ],
                'message' => 'Dashboard data retrieved successfully'
            ]);

        } catch (Exception $e) {
            Log::error("Failed to get dashboard data: " . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to retrieve dashboard data',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
