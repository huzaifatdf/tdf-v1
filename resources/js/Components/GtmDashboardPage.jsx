import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';

// Helper Icon Components (emulating lucide-react)
const ChevronDown = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m6 9 6 6 6-6" />
    </svg>
);
const TagIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/>
    </svg>
);

const ZapIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
);

const VariableIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 21s-4-3-4-9 4-9 4-9"/><path d="M16 3s4 3 4 9-4 9-4 9"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/>
    </svg>
);

const AlertCircle = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
    </svg>
);

// Shadcn-style UI Components (built with Tailwind CSS)
const Card = ({ children, className = '' }) => (
    <div className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm ${className}`}>
        {children}
    </div>
);

const CardHeader = ({ children, className = '' }) => <div className={`p-6 ${className}`}>{children}</div>;
const CardContent = ({ children, className = '' }) => <div className={`p-6 pt-0 ${className}`}>{children}</div>;
const CardTitle = ({ children, className = '' }) => <h3 className={`text-xl font-semibold leading-none tracking-tight text-gray-800 dark:text-gray-200 ${className}`}>{children}</h3>;
const CardDescription = ({ children, className = '' }) => <p className={`text-sm text-gray-500 dark:text-gray-400 ${className}`}>{children}</p>;

const Badge = ({ children, variant = 'default', className = '' }) => {
    const variants = {
        default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
        primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
    };
    return (
        <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

const Alert = ({ children, className = '' }) => (
    <div className={`relative w-full rounded-lg border border-red-200 dark:border-red-800 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-red-600 dark:[&>svg]:text-red-400 bg-red-50 dark:bg-red-950/50 ${className}`}>
        {children}
    </div>
);

const AlertDescription = ({ children, className = '' }) => (
    <div className={`text-sm text-red-700 dark:text-red-300 [&_p]:leading-relaxed ${className}`}>
        {children}
    </div>
);

const Table = ({ children, className = '' }) => <div className={`w-full text-sm ${className}`}><table className="w-full caption-bottom">{children}</table></div>;
const TableHeader = ({ children, className = '' }) => <thead className={`[&_tr]:border-b [&_tr]:border-gray-200 dark:[&_tr]:border-gray-800 ${className}`}>{children}</thead>;
const TableBody = ({ children, className = '' }) => <tbody className={`[&_tr:last-child]:border-0 ${className}`}>{children}</tbody>;
const TableRow = ({ children, className = '' }) => <tr className={`border-b border-gray-200 dark:border-gray-800 transition-colors hover:bg-gray-100/50 dark:hover:bg-gray-800/50 ${className}`}>{children}</tr>;
const TableHead = ({ children, className = '' }) => <th className={`h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-gray-400 ${className}`}>{children}</th>;
const TableCell = ({ children, className = '' }) => <td className={`p-4 align-middle text-gray-800 dark:text-gray-200 ${className}`}>{children}</td>;

const AccordionContext = React.createContext({});
const Accordion = ({ children, defaultValue }) => {
    const [openItem, setOpenItem] = useState(defaultValue);
    return <AccordionContext.Provider value={{ openItem, setOpenItem }}>{children}</AccordionContext.Provider>;
};
const AccordionItem = ({ children, value, className = '' }) => (
    <div className={`border-b border-gray-200 dark:border-gray-800 ${className}`}>
        {React.Children.map(children, child => React.cloneElement(child, { value }))}
    </div>
);
const AccordionTrigger = ({ children, value }) => {
    const { openItem, setOpenItem } = React.useContext(AccordionContext);
    const isOpen = openItem === value;
    return (
        <button
            className="flex flex-1 items-center justify-between w-full py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
            onClick={() => setOpenItem(isOpen ? null : value)}
            data-state={isOpen ? 'open' : 'closed'}
        >
            {children}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-gray-500" />
        </button>
    );
};
const AccordionContent = ({ children, value }) => {
    const { openItem } = React.useContext(AccordionContext);
    const isOpen = openItem === value;
    return <div className={`overflow-hidden text-sm transition-all ${isOpen ? 'max-h-[1000px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>{children}</div>;
};

const TabsContext = React.createContext({});
const Tabs = ({ children, defaultValue }) => {
    const [activeTab, setActiveTab] = useState(defaultValue);
    return <TabsContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabsContext.Provider>;
};
const TabsList = ({ children, className = '' }) => <div className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800 p-1 text-gray-500 dark:text-gray-400 ${className}`}>{children}</div>;
const TabsTrigger = ({ children, value, className = '' }) => {
    const { activeTab, setActiveTab } = React.useContext(TabsContext);
    const isActive = activeTab === value;
    return (
        <button
            onClick={() => setActiveTab(value)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${isActive ? 'bg-white dark:bg-gray-950 text-gray-950 dark:text-gray-50 shadow-sm' : ''} ${className}`}
        >
            {children}
        </button>
    );
};
const TabsContent = ({ children, value }) => {
    const { activeTab } = React.useContext(TabsContext);
    return activeTab === value ? <div className="mt-4 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">{children}</div> : null;
};

// API Service Functions
const apiService = {
    async getAccounts() {
        try {
            const response = await fetch('/api/google-tag-manager/get-accounts');
            const data = await response.json();
            if (!data.success) {
                throw new Error(data.message || 'Failed to fetch accounts');
            }
            return data;
        } catch (error) {
            console.error('Error fetching accounts:', error);
            throw error;
        }
    },

    async getAccountReport(accountId) {
        try {
            const response = await fetch(`/api/google-tag-manager/get-account-report/${accountId}`);
            const data = await response.json();
            if (!data.success) {
                throw new Error(data.message || 'Failed to fetch account report');
            }
            return data;
        } catch (error) {
            console.error('Error fetching account report:', error);
            throw error;
        }
    },

    async getContainers(accountId) {
        try {
            const response = await fetch(`/api/google-tag-manager/get-containers/${accountId}`);
            const data = await response.json();
            if (!data.success) {
                throw new Error(data.message || 'Failed to fetch containers');
            }
            return data;
        } catch (error) {
            console.error('Error fetching containers:', error);
            throw error;
        }
    },

    async getContainerSummary(accountId, containerId) {
        try {
            const response = await fetch(`/api/google-tag-manager/get-container-summary/${accountId}/${containerId}`);
            const data = await response.json();
            if (!data.success) {
                throw new Error(data.message || 'Failed to fetch container summary');
            }
            return data;
        } catch (error) {
            console.error('Error fetching container summary:', error);
            throw error;
        }
    }
};

// Main Application Component
export default function GtmDashboardPage() {
    const [accounts, setAccounts] = useState([]);
    const [selectedAccountId, setSelectedAccountId] = useState(null);
    const [reportData, setReportData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [error, setError] = useState(null);

    // Load accounts on component mount
    useEffect(() => {
        loadAccounts();
    }, []);

    const loadAccounts = async () => {
        try {
            setIsInitialLoading(true);
            setError(null);
            const accountsData = await apiService.getAccounts();
            setAccounts(accountsData.data);

            // Auto-select first account if available
            if (accountsData.data.length > 0) {
                const firstAccountId = accountsData.data[0].account_id;
                setSelectedAccountId(firstAccountId);
                await loadAccountReport(firstAccountId);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsInitialLoading(false);
        }
    };

    const loadAccountReport = async (accountId) => {
        try {
            setIsLoading(true);
            setError(null);
            const reportResponse = await apiService.getAccountReport(accountId);
            setReportData(reportResponse.data);
        } catch (err) {
            setError(err.message);
            setReportData(null);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAccountChange = async (accountId) => {
        if (accountId === selectedAccountId) return;

        setSelectedAccountId(accountId);
        await loadAccountReport(accountId);
    };

    const WorkspaceTabs = ({ workspace }) => (
        <Tabs defaultValue="tags">
            <TabsList>
                <TabsTrigger value="tags">Tags ({workspace.summary.tags_count})</TabsTrigger>
                <TabsTrigger value="triggers">Triggers ({workspace.summary.triggers_count})</TabsTrigger>
                <TabsTrigger value="variables">Variables ({workspace.summary.variables_count})</TabsTrigger>
                <TabsTrigger value="builtIn">Built-in ({workspace.summary.built_in_variables_count})</TabsTrigger>
            </TabsList>
            <EntityTable tab="tags" items={workspace.tags} icon={<TagIcon className="h-4 w-4 mr-2 text-blue-500" />} />
            <EntityTable tab="triggers" items={workspace.triggers} icon={<ZapIcon className="h-4 w-4 mr-2 text-orange-500" />} />
            <EntityTable tab="variables" items={workspace.variables} icon={<VariableIcon className="h-4 w-4 mr-2 text-purple-500" />} />
            <EntityTable tab="builtIn" items={workspace.built_in_variables} icon={<VariableIcon className="h-4 w-4 mr-2 text-green-500" />} />
        </Tabs>
    );

    const EntityTable = ({ tab, items, icon }) => (
       <TabsContent value={tab}>
            {items && items.length > 0 ? (
                <Card className="mt-4">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Type</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {items.map((item, index) => (
                                <TableRow key={item.name || index}>
                                    <TableCell className="font-medium flex items-center">{icon} {item.name}</TableCell>
                                    <TableCell><Badge>{item.type}</Badge></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            ) : (
                <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                    No {tab} found.
                </div>
            )}
        </TabsContent>
    );

    if (isInitialLoading) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 dark:border-gray-100 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Loading GTM Dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
            <div className="container mx-auto p-4 md:p-8">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight">Google Tag Manager Dashboard</h1>
                    <p className="text-gray-500 dark:text-gray-400">Select an account to view its detailed report.</p>
                </header>

                {error && (
                    <Alert className="mb-6">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                            {error}
                        </AlertDescription>
                    </Alert>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left Sidebar - Account Selection */}
                    <aside className="lg:col-span-1">
                        <h2 className="text-lg font-semibold mb-4 px-2">GTM Accounts</h2>
                        {accounts.length > 0 ? (
                            <div className="space-y-1">
                                {accounts.map(account => (
                                    <button
                                        key={account.account_id}
                                        onClick={() => handleAccountChange(account.account_id)}
                                        disabled={isLoading}
                                        className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                                            selectedAccountId === account.account_id
                                                ? 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                                                : 'hover:bg-gray-200/50 dark:hover:bg-gray-800/50'
                                        }`}
                                    >
                                        {account.name}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                                <p>No accounts found</p>
                                <button
                                    onClick={loadAccounts}
                                    className="mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    Retry
                                </button>
                            </div>
                        )}
                    </aside>

                    {/* Right Content - Report */}
                    <main className="lg:col-span-3">
                        {isLoading ? (
                            <div className="flex items-center justify-center h-96">
                                <div className="text-center">
                                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 dark:border-gray-100 mx-auto mb-4"></div>
                                    <p className="text-gray-600 dark:text-gray-400">Loading report...</p>
                                </div>
                            </div>
                        ) : reportData ? (
                            <div className="space-y-6">
                                {/* Account Summary Card */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{reportData.account_info.name}</CardTitle>
                                        <CardDescription>Account ID: {reportData.account_info.account_id}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                            <div className="space-y-1">
                                                <p className="text-gray-500 dark:text-gray-400">Containers</p>
                                                <p className="font-semibold text-lg">{reportData.summary.containers_count}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-gray-500 dark:text-gray-400">Workspaces</p>
                                                <p className="font-semibold text-lg">{reportData.summary.total_workspaces}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-gray-500 dark:text-gray-400">Versions</p>
                                                <p className="font-semibold text-lg">{reportData.summary.total_versions}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-gray-500 dark:text-gray-400">Generated</p>
                                                <p className="font-semibold">{new Date(reportData.generated_at).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Containers Accordion */}
                                {reportData.containers && reportData.containers.length > 0 ? (
                                    <Accordion type="single" collapsible className="w-full" defaultValue={reportData.containers[0]?.container_info.container_id}>
                                        {reportData.containers.map(container => (
                                            <AccordionItem key={container.container_info.container_id} value={container.container_info.container_id}>
                                                <Card>
                                                    <CardHeader className="p-0">
                                                         <AccordionTrigger>
                                                             <div className="p-6 text-left">
                                                                <CardTitle>{container.container_info.name}</CardTitle>
                                                                <CardDescription className="mt-1">
                                                                    {container.container_info.public_id}
                                                                    <Badge variant="primary" className="ml-2">{container.container_info.usage_context.join(', ')}</Badge>
                                                                </CardDescription>
                                                             </div>
                                                         </AccordionTrigger>
                                                    </CardHeader>
                                                    <AccordionContent>
                                                        <div className="px-6 pb-6">
                                                            {container.workspaces && container.workspaces.length > 0 ? (
                                                                container.workspaces.map(workspace => (
                                                                    <Card key={workspace.workspace_info.workspace_id} className="bg-gray-50 dark:bg-gray-900/50">
                                                                        <CardHeader>
                                                                            <CardTitle className="text-lg">{workspace.workspace_info.name}</CardTitle>
                                                                            <CardDescription>Workspace ID: {workspace.workspace_info.workspace_id}</CardDescription>
                                                                        </CardHeader>
                                                                        <CardContent>
                                                                            <WorkspaceTabs workspace={workspace} />
                                                                        </CardContent>
                                                                    </Card>
                                                                ))
                                                            ) : (
                                                                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                                                                    No workspaces found in this container.
                                                                </div>
                                                            )}
                                                        </div>
                                                    </AccordionContent>
                                                </Card>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                ) : (
                                    <Card>
                                        <CardContent className="py-12">
                                            <div className="text-center text-gray-500 dark:text-gray-400">
                                                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">No Containers Found</h3>
                                                <p>This account doesn't have any containers set up yet.</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}

                            </div>
                        ) : (
                             <div className="flex items-center justify-center h-96 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl">
                                <div className="text-center">
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">No Report Data</h3>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Select an account to view its report.</p>
                                 </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
