import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";


import { useEffect } from "react";
import { SectionSeoScreen } from "@/Components/section-seo-screen";


export default function Page() {


  return (
   <AuthenticatedLayout>
            <Head title="Profile" />

     <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <SectionSeoScreen/>
          </div>
        </div>

        </AuthenticatedLayout>
  );
}
