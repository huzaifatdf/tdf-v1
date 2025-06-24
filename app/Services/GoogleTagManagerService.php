<?php
namespace App\Services;

use Google\Client as GoogleClient;
use Google\Service\TagManager as GoogleTagManager;
use Google\Service\TagManager\Account;
use Google\Service\TagManager\Container;
use Google\Service\TagManager\Workspace;
use Google\Service\TagManager\Tag;
use Google\Service\TagManager\Trigger;
use Google\Service\TagManager\Variable;
use Google\Service\TagManager\BuiltInVariable;
use Exception;
use Illuminate\Support\Facades\Log;

class GoogleTagManagerService
{
    private $client;
    private $service;

    public function __construct()
    {
        $this->initializeClient();
    }

    /**
     * Initialize Google Client with Service Account
     */
    private function initializeClient()
    {
        try {
            $this->client = new GoogleClient();

            // Set application name
            $this->client->setApplicationName('Laravel Tag Manager Integration');

            // Service Account authentication
            $serviceAccountPath = storage_path('app/private/tdf-search-console-api-f2b9a47d2722.json');

            if (!$serviceAccountPath || !file_exists($serviceAccountPath)) {
                throw new Exception('Service account key file not found. Please check the service account key path');
            }

            // Set authentication using service account
            $this->client->setAuthConfig($serviceAccountPath);

            // Set required scopes
            $this->client->setScopes([
                GoogleTagManager::TAGMANAGER_READONLY,
                GoogleTagManager::TAGMANAGER_EDIT_CONTAINERS,
                GoogleTagManager::TAGMANAGER_DELETE_CONTAINERS,
                GoogleTagManager::TAGMANAGER_EDIT_CONTAINERVERSIONS,
                GoogleTagManager::TAGMANAGER_MANAGE_ACCOUNTS,
                GoogleTagManager::TAGMANAGER_MANAGE_USERS,
                GoogleTagManager::TAGMANAGER_PUBLISH
            ]);

            // Initialize the Tag Manager service
            $this->service = new GoogleTagManager($this->client);

            Log::info('Google Tag Manager service initialized successfully with Service Account');

        } catch (Exception $e) {
            Log::error('Failed to initialize Google Tag Manager client: ' . $e->getMessage());
            throw new Exception('Google Tag Manager initialization failed: ' . $e->getMessage());
        }
    }

    /**
     * Verify service account connection
     */
    public function verifyConnection()
    {
        try {
            $accounts = $this->service->accounts->listAccounts();
            $accountList = $accounts->getAccount() ?: [];

            return [
                'status' => 'success',
                'message' => 'Service account connected successfully',
                'accounts_count' => count($accountList),
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
     * Get all accounts
     */
    public function getAccounts()
    {
        try {
            $accounts = $this->service->accounts->listAccounts();
            $accountList = $accounts->getAccount() ?: [];

            $result = [];
            foreach ($accountList as $account) {
                $result[] = [
                    'account_id' => $account->getAccountId(),
                    'name' => $account->getName(),
                    'path' => $account->getPath(),
                    'share_data' => $account->getShareData(),
                    'tag_manager_url' => $account->getTagManagerUrl(),
                    'fingerprint' => $account->getFingerprint()
                ];
            }

            Log::info('Retrieved ' . count($result) . ' accounts from Tag Manager');
            return $result;

        } catch (Exception $e) {
            Log::error('Failed to get accounts: ' . $e->getMessage());
            throw new Exception('Unable to fetch accounts from Google Tag Manager: ' . $e->getMessage());
        }
    }

    /**
     * Get containers for an account
     */
    public function getContainers($accountId)
    {
        try {
            $accountPath = "accounts/{$accountId}";
            $containers = $this->service->accounts_containers->listAccountsContainers($accountPath);
            $containerList = $containers->getContainer() ?: [];

            $result = [];
            foreach ($containerList as $container) {
                $result[] = [
                    'container_id' => $container->getContainerId(),
                    'name' => $container->getName(),
                    'path' => $container->getPath(),
                    'public_id' => $container->getPublicId(),
                    'usage_context' => $container->getUsageContext(),
                    'domain_name' => $container->getDomainName(),
                    'tag_manager_url' => $container->getTagManagerUrl(),
                    'notes' => $container->getNotes(),
                    'fingerprint' => $container->getFingerprint()
                ];
            }

            Log::info("Retrieved " . count($result) . " containers for account {$accountId}");
            return $result;

        } catch (Exception $e) {
            Log::error("Failed to get containers for account {$accountId}: " . $e->getMessage());
            throw new Exception('Unable to fetch containers: ' . $e->getMessage());
        }
    }

    /**
     * Get workspaces for a container
     */
    public function getWorkspaces($accountId, $containerId)
    {
        try {
            $containerPath = "accounts/{$accountId}/containers/{$containerId}";
            $workspaces = $this->service->accounts_containers_workspaces->listAccountsContainersWorkspaces($containerPath);
            $workspaceList = $workspaces->getWorkspace() ?: [];

            $result = [];
            foreach ($workspaceList as $workspace) {
                $result[] = [
                    'workspace_id' => $workspace->getWorkspaceId(),
                    'name' => $workspace->getName(),
                    'path' => $workspace->getPath(),
                    'description' => $workspace->getDescription(),
                    'tag_manager_url' => $workspace->getTagManagerUrl(),
                    'fingerprint' => $workspace->getFingerprint()
                ];
            }

            Log::info("Retrieved " . count($result) . " workspaces for container {$containerId}");
            return $result;

        } catch (Exception $e) {
            Log::error("Failed to get workspaces for container {$containerId}: " . $e->getMessage());
            throw new Exception('Unable to fetch workspaces: ' . $e->getMessage());
        }
    }

    /**
     * Get tags from a workspace
     */
    public function getTags($accountId, $containerId, $workspaceId)
    {
        try {
            $workspacePath = "accounts/{$accountId}/containers/{$containerId}/workspaces/{$workspaceId}";
            $tags = $this->service->accounts_containers_workspaces_tags->listAccountsContainersWorkspacesTags($workspacePath);
            $tagList = $tags->getTag() ?: [];

            $result = [];
            foreach ($tagList as $tag) {
                $result[] = [
                    'tag_id' => $tag->getTagId(),
                    'name' => $tag->getName(),
                    'path' => $tag->getPath(),
                    'type' => $tag->getType(),
                    'status' => $tag->getLiveOnly() ? 'live' : 'draft',
                    'firing_trigger_ids' => $tag->getFiringTriggerId() ?: [],
                    'blocking_trigger_ids' => $tag->getBlockingTriggerId() ?: [],
                    'parameter' => $tag->getParameter() ?: [],
                    'notes' => $tag->getNotes(),
                    'fingerprint' => $tag->getFingerprint(),
                    'tag_manager_url' => $tag->getTagManagerUrl()
                ];
            }

            Log::info("Retrieved " . count($result) . " tags from workspace {$workspaceId}");
            return $result;

        } catch (Exception $e) {
            Log::error("Failed to get tags from workspace {$workspaceId}: " . $e->getMessage());
            throw new Exception('Unable to fetch tags: ' . $e->getMessage());
        }
    }

    /**
     * Get triggers from a workspace
     */
    public function getTriggers($accountId, $containerId, $workspaceId)
    {
        try {
            $workspacePath = "accounts/{$accountId}/containers/{$containerId}/workspaces/{$workspaceId}";
            $triggers = $this->service->accounts_containers_workspaces_triggers->listAccountsContainersWorkspacesTriggers($workspacePath);
            $triggerList = $triggers->getTrigger() ?: [];

            $result = [];
            foreach ($triggerList as $trigger) {
                $result[] = [
                    'trigger_id' => $trigger->getTriggerId(),
                    'name' => $trigger->getName(),
                    'path' => $trigger->getPath(),
                    'type' => $trigger->getType(),
                    'parameter' => $trigger->getParameter() ?: [],
                    'filter' => $trigger->getFilter() ?: [],
                    'notes' => $trigger->getNotes(),
                    'fingerprint' => $trigger->getFingerprint(),
                    'tag_manager_url' => $trigger->getTagManagerUrl()
                ];
            }

            Log::info("Retrieved " . count($result) . " triggers from workspace {$workspaceId}");
            return $result;

        } catch (Exception $e) {
            Log::error("Failed to get triggers from workspace {$workspaceId}: " . $e->getMessage());
            throw new Exception('Unable to fetch triggers: ' . $e->getMessage());
        }
    }

    /**
     * Get variables from a workspace
     */
    public function getVariables($accountId, $containerId, $workspaceId)
    {
        try {
            $workspacePath = "accounts/{$accountId}/containers/{$containerId}/workspaces/{$workspaceId}";
            $variables = $this->service->accounts_containers_workspaces_variables->listAccountsContainersWorkspacesVariables($workspacePath);
            $variableList = $variables->getVariable() ?: [];

            $result = [];
            foreach ($variableList as $variable) {
                $result[] = [
                    'variable_id' => $variable->getVariableId(),
                    'name' => $variable->getName(),
                    'path' => $variable->getPath(),
                    'type' => $variable->getType(),
                    'parameter' => $variable->getParameter() ?: [],
                    'notes' => $variable->getNotes(),
                    'fingerprint' => $variable->getFingerprint(),
                    'tag_manager_url' => $variable->getTagManagerUrl()
                ];
            }

            Log::info("Retrieved " . count($result) . " variables from workspace {$workspaceId}");
            return $result;

        } catch (Exception $e) {
            Log::error("Failed to get variables from workspace {$workspaceId}: " . $e->getMessage());
            throw new Exception('Unable to fetch variables: ' . $e->getMessage());
        }
    }

    /**
     * Get built-in variables from a workspace
     */
    public function getBuiltInVariables($accountId, $containerId, $workspaceId)
    {
        try {
            $workspacePath = "accounts/{$accountId}/containers/{$containerId}/workspaces/{$workspaceId}";
            $builtInVariables = $this->service->accounts_containers_workspaces_built_in_variables->listAccountsContainersWorkspacesBuiltInVariables($workspacePath);
            $builtInVariableList = $builtInVariables->getBuiltInVariable() ?: [];

            $result = [];
            foreach ($builtInVariableList as $builtInVariable) {
                $result[] = [
                    'name' => $builtInVariable->getName(),
                    'path' => $builtInVariable->getPath(),
                    'type' => $builtInVariable->getType(),
                    'account_id' => $builtInVariable->getAccountId(),
                    'container_id' => $builtInVariable->getContainerId(),
                    'workspace_id' => $builtInVariable->getWorkspaceId()
                ];
            }

            Log::info("Retrieved " . count($result) . " built-in variables from workspace {$workspaceId}");
            return $result;

        } catch (Exception $e) {
            Log::error("Failed to get built-in variables from workspace {$workspaceId}: " . $e->getMessage());
            throw new Exception('Unable to fetch built-in variables: ' . $e->getMessage());
        }
    }

    /**
     * Get container versions
     */
   /**
 * Get container versions
 */
public function getContainerVersions($accountId, $containerId)
{
    try {
        $containerPath = "accounts/{$accountId}/containers/{$containerId}";
        // Changed from listAccountsContainersVersions() to list()
        $versions = $this->service->accounts_containers_versions->list($containerPath);
        $versionList = $versions->getContainerVersion() ?: [];

        $result = [];
        foreach ($versionList as $version) {
            $result[] = [
                'container_version_id' => $version->getContainerVersionId(),
                'name' => $version->getName(),
                'path' => $version->getPath(),
                'description' => $version->getDescription(),
                'deleted' => $version->getDeleted(),
                'tag_manager_url' => $version->getTagManagerUrl(),
                'fingerprint' => $version->getFingerprint()
            ];
        }

        Log::info("Retrieved " . count($result) . " versions for container {$containerId}");
        return $result;

    } catch (Exception $e) {
        Log::error("Failed to get container versions for {$containerId}: " . $e->getMessage());
        throw new Exception('Unable to fetch container versions: ' . $e->getMessage());
    }
}

    /**
     * Create a new workspace
     */
    public function createWorkspace($accountId, $containerId, $name, $description = '')
    {
        try {
            $containerPath = "accounts/{$accountId}/containers/{$containerId}";

            $workspace = new Workspace();
            $workspace->setName($name);
            $workspace->setDescription($description);

            $createdWorkspace = $this->service->accounts_containers_workspaces->create($containerPath, $workspace);

            Log::info("Created workspace '{$name}' for container {$containerId}");

            return [
                'status' => 'success',
                'message' => 'Workspace created successfully',
                'workspace' => [
                    'workspace_id' => $createdWorkspace->getWorkspaceId(),
                    'name' => $createdWorkspace->getName(),
                    'path' => $createdWorkspace->getPath(),
                    'description' => $createdWorkspace->getDescription(),
                    'tag_manager_url' => $createdWorkspace->getTagManagerUrl()
                ],
                'created_at' => now()->toISOString()
            ];

        } catch (Exception $e) {
            Log::error("Failed to create workspace '{$name}': " . $e->getMessage());
            throw new Exception('Unable to create workspace: ' . $e->getMessage());
        }
    }

    /**
     * Get comprehensive account report
     */
    public function getAccountReport($accountId)
    {
        try {
            // Get account info
            $accounts = $this->getAccounts();
            $accountInfo = collect($accounts)->firstWhere('account_id', $accountId);

            if (!$accountInfo) {
                throw new Exception("Account {$accountId} not found");
            }

            // Get containers
            $containers = $this->getContainers($accountId);

            $containerDetails = [];
            foreach ($containers as $container) {
                $containerId = $container['container_id'];

                // Get workspaces for each container
                $workspaces = $this->getWorkspaces($accountId, $containerId);

                $workspaceDetails = [];
                foreach ($workspaces as $workspace) {
                    $workspaceId = $workspace['workspace_id'];

                    // Get tags, triggers, and variables for each workspace
                    $tags = $this->getTags($accountId, $containerId, $workspaceId);
                    $triggers = $this->getTriggers($accountId, $containerId, $workspaceId);
                    $variables = $this->getVariables($accountId, $containerId, $workspaceId);
                    $builtInVariables = $this->getBuiltInVariables($accountId, $containerId, $workspaceId);

                    $workspaceDetails[] = [
                        'workspace_info' => $workspace,
                        'summary' => [
                            'tags_count' => count($tags),
                            'triggers_count' => count($triggers),
                            'variables_count' => count($variables),
                            'built_in_variables_count' => count($builtInVariables)
                        ],
                        'tags' => $tags,
                        'triggers' => $triggers,
                        'variables' => $variables,
                        'built_in_variables' => $builtInVariables
                    ];
                }

                // Get container versions
                $versions = $this->getContainerVersions($accountId, $containerId);

                $containerDetails[] = [
                    'container_info' => $container,
                    'workspaces' => $workspaceDetails,
                    'versions' => $versions,
                    'summary' => [
                        'workspaces_count' => count($workspaces),
                        'versions_count' => count($versions)
                    ]
                ];
            }

            return [
                'account_info' => $accountInfo,
                'containers' => $containerDetails,
                'summary' => [
                    'containers_count' => count($containers),
                    'total_workspaces' => array_sum(array_column(array_column($containerDetails, 'summary'), 'workspaces_count')),
                    'total_versions' => array_sum(array_column(array_column($containerDetails, 'summary'), 'versions_count'))
                ],
                'generated_at' => now()->toISOString()
            ];

        } catch (Exception $e) {
            Log::error("Failed to generate account report for {$accountId}: " . $e->getMessage());
            throw new Exception('Unable to generate account report: ' . $e->getMessage());
        }
    }

    /**
     * Get container summary
     */
    public function getContainerSummary($accountId, $containerId)
    {
        try {
            $containers = $this->getContainers($accountId);
            $containerInfo = collect($containers)->firstWhere('container_id', $containerId);

            if (!$containerInfo) {
                throw new Exception("Container {$containerId} not found");
            }

            $workspaces = $this->getWorkspaces($accountId, $containerId);
            $versions = $this->getContainerVersions($accountId, $containerId);

            // Get summary from default workspace if available
            $defaultWorkspace = collect($workspaces)->firstWhere('name', 'Default Workspace');
            $workspaceId = $defaultWorkspace ? $defaultWorkspace['workspace_id'] : ($workspaces[0]['workspace_id'] ?? null);

            $summary = [];
            if ($workspaceId) {
                $tags = $this->getTags($accountId, $containerId, $workspaceId);
                $triggers = $this->getTriggers($accountId, $containerId, $workspaceId);
                $variables = $this->getVariables($accountId, $containerId, $workspaceId);

                $summary = [
                    'tags_count' => count($tags),
                    'triggers_count' => count($triggers),
                    'variables_count' => count($variables)
                ];
            }

            return [
                'container_info' => $containerInfo,
                'workspaces_count' => count($workspaces),
                'versions_count' => count($versions),
                'content_summary' => $summary,
                'generated_at' => now()->toISOString()
            ];

        } catch (Exception $e) {
            Log::error("Failed to get container summary for {$containerId}: " . $e->getMessage());
            throw new Exception('Unable to get container summary: ' . $e->getMessage());
        }
    }
}
