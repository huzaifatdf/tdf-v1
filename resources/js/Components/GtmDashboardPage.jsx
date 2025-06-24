import React, { useState, useMemo } from 'react';

// Mock Data based on the provided API responses
// In a real Inertia app, this data would be passed as props from your Laravel controller.
const mockApiData = {
    accounts: {
        "success": true,
        "data": [
            { "account_id": "6209496184", "name": "The Design Firm" },
            { "account_id": "1234567890", "name": "Another Cool Client" }
        ],
        "count": 2,
        "message": "Accounts retrieved successfully"
    },
    reports: {
        "6209496184": {
            "success": true,
            "data": {
                "account_info": { "account_id": "6209496184", "name": "The Design Firm", "path": "accounts/6209496184" },
                "containers": [
                    {
                        "container_info": { "container_id": "173254724", "name": "thedesignsfirm.com", "public_id": "GTM-WB65WTFQ", "usage_context": ["web"] },
                        "workspaces": [
                            {
                                "workspace_info": { "workspace_id": "2", "name": "Default Workspace" },
                                "summary": { "tags_count": 2, "triggers_count": 3, "variables_count": 4, "built_in_variables_count": 5 },
                                "tags": [
                                    { "name": "Google Analytics 4", "type": "gaawe" },
                                    { "name": "Facebook Pixel", "type": "fbp" }
                                ],
                                "triggers": [
                                    { "name": "All Pages", "type": "pageview" },
                                    { "name": "Button Click", "type": "click" },
                                    { "name": "Form Submission", "type": "formSubmission" }
                                ],
                                "variables": [
                                    { "name": "GA4 Measurement ID", "type": "constant" },
                                    { "name": "Debug Mode", "type": "debugMode" },
                                    { "name": "Click Text", "type": "clickText" },
                                     { "name": "Error Message", "type": "autoEventVariable" }
                                ],
                                "built_in_variables": [
                                    { "name": "Page URL", "type": "pageUrl" },
                                    { "name": "Page Hostname", "type": "pageHostname" },
                                    { "name": "Page Path", "type": "pagePath" },
                                    { "name": "Referrer", "type": "referrer" },
                                    { "name": "Event", "type": "event" }
                                ]
                            }
                        ],
                        "summary": { "workspaces_count": 1 }
                    }
                ],
                "summary": { "containers_count": 1, "total_workspaces": 1, "total_versions": 0 },
                "generated_at": "2025-06-24T11:14:12.292595Z"
            }
        },
        "1234567890": {
            "success": true,
            "data": {
                "account_info": { "account_id": "1234567890", "name": "Another Cool Client", "path": "accounts/1234567890" },
                "containers": [],
                "summary": { "containers_count": 0, "total_workspaces": 0, "total_versions": 0 },
                "generated_at": "2025-06-24T12:00:00.000000Z"
            }
        }
    }
};

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


// Main Application Component
export default function GtmDashboardPage({ accounts: initialAccounts, initialReport }) {
    // In a real app, `initialAccounts` and `initialReport` would come from Inertia props.
    // We use mock data here for demonstration.
    const [accounts, setAccounts] = useState(mockApiData.accounts.data);
    const [selectedAccountId, setSelectedAccountId] = useState(mockApiData.accounts.data[0]?.account_id);
    const [reportData, setReportData] = useState(mockApiData.reports[mockApiData.accounts.data[0]?.account_id]?.data);
    const [isLoading, setIsLoading] = useState(false);

    const handleAccountChange = (accountId) => {
        setIsLoading(true);
        setSelectedAccountId(accountId);

        // --- API Call Simulation ---
        // In a real app, you might use Inertia.visit() or an axios call here
        // to fetch the new report data from your Laravel backend.
        console.log(`Fetching report for account: ${accountId}`);
        setTimeout(() => {
            setReportData(mockApiData.reports[accountId]?.data);
            setIsLoading(false);
        }, 500); // Simulate network delay
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
                            {items.map((item) => (
                                <TableRow key={item.name}>
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

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
            <div className="container mx-auto p-4 md:p-8">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight">Google Tag Manager Dashboard</h1>
                    <p className="text-gray-500 dark:text-gray-400">Select an account to view its detailed report.</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left Sidebar - Account Selection */}
                    <aside className="lg:col-span-1">
                        <h2 className="text-lg font-semibold mb-4 px-2">GTM Accounts</h2>
                        <div className="space-y-1">
                            {accounts.map(account => (
                                <button
                                    key={account.account_id}
                                    onClick={() => handleAccountChange(account.account_id)}
                                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${selectedAccountId === account.account_id ? 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100' : 'hover:bg-gray-200/50 dark:hover:bg-gray-800/50'}`}
                                >
                                    {account.name}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Right Content - Report */}
                    <main className="lg:col-span-3">
                        {isLoading ? (
                            <div className="flex items-center justify-center h-96">
                                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 dark:border-gray-100"></div>
                            </div>
                        ) : reportData ? (
                            <div className="space-y-6">
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
                                                <p className="text-gray-500 dark:text-gray-400">Generated</p>
                                                <p className="font-semibold">{new Date(reportData.generated_at).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Accordion type="single" collapsible className="w-full" defaultValue={reportData.containers?.[0]?.container_info.container_id}>
                                    {reportData.containers && reportData.containers.map(container => (
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
                                                    {container.workspaces.map(workspace => (
                                                        <Card key={workspace.workspace_info.workspace_id} className="bg-gray-50 dark:bg-gray-900/50">
                                                            <CardHeader>
                                                                <CardTitle className="text-lg">{workspace.workspace_info.name}</CardTitle>
                                                                <CardDescription>Workspace ID: {workspace.workspace_info.workspace_id}</CardDescription>
                                                            </CardHeader>
                                                            <CardContent>
                                                                <WorkspaceTabs workspace={workspace} />
                                                            </CardContent>
                                                        </Card>
                                                    ))}
                                                    </div>
                                                </AccordionContent>
                                            </Card>
                                        </AccordionItem>
                                    ))}
                                </Accordion>

                            </div>
                        ) : (
                             <div className="flex items-center justify-center h-96 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl">
                                <div className="text-center">
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">No Report Data</h3>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Select an account to view its report or the data is unavailable.</p>
                                 </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
