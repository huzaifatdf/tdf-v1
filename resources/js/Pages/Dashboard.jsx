import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";


import { useEffect } from "react";

import GoogleSearchConsoleTable from "@/Components/GoogleSearchConsoleTable";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import SectionSeoScreen from "@/Components/section-seo-screen";

export default function Page() {
    const {stats,report} = usePage().props

  return (
   <AuthenticatedLayout>
            <Head title="Profile" />

     <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
             <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
                <div className="border-b bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                    <div className="px-6 py-4">
                              <Tabs defaultValue="console" className="w-full">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="console">Google Search Console</TabsTrigger>
          <TabsTrigger value="seo">Website SEO Analysis</TabsTrigger>
        </TabsList>
           <TabsContent value="console">
                        {report.length !== 0  ? (
                            <GoogleSearchConsoleTable data={report }/>
                        )  : (

                                <p className="text-gray-500">No data available</p>

                        )}
    </TabsContent>
     <TabsContent value="seo">
            <SectionSeoScreen data={stats} />
     </TabsContent>
    </Tabs>
                    </div>
                </div>
            </div>

          </div>
        </div>

        </AuthenticatedLayout>
  );
}
