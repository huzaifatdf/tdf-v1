import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";


import { useEffect } from "react";
import { SectionSeoScreen } from "@/Components/section-seo-screen";
import GoogleSearchConsoleTable from "@/Components/GoogleSearchConsoleTable";


export default function Page() {
    const {rating,report} = usePage().props
    // console.log("report",report)
  return (
   <AuthenticatedLayout>
            <Head title="Profile" />

     <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
             <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
                <div className="border-b bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                    <div className="px-6 py-4">
                        {report?.data ? (
                            <GoogleSearchConsoleTable data={report }/>
                        )  : (

                                <p className="text-gray-500">No data available</p>

                        )}
                    </div>
                </div>
            </div>
            {/* <SectionSeoScreen/> */}
          </div>
        </div>

        </AuthenticatedLayout>
  );
}
