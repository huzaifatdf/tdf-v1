import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

import { AppSidebar } from "@/components/app-sidebar"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Breadcrumb from '@/Components/Breadcrumb';
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

export default function AuthenticatedLayout({ header, children }) {
      const { auth, flash } = usePage().props;
    const user = usePage().props.auth.user;
    const { toast } = useToast()
 const echoChannelRef = useRef(null);

    //useEffect for session flash toast
   useEffect(() => {
        // Handle success messages
        if (flash?.success) {
            toast({
                title: "Success",
                description: flash.success,
                variant: "default", // or "success" if you have custom variant
            });
        }

        // Handle error messages
        if (flash?.error) {
            toast({
                title: "Error",
                description: flash.error,
                variant: "destructive",
            });
        }

        // Handle warning messages
        if (flash?.warning) {
            toast({
                title: "Warning",
                description: flash.warning,
                variant: "default", // You might want to create a warning variant
            });
        }

        // Handle info messages
        if (flash?.info) {
            toast({
                title: "Information",
                description: flash.info,
                variant: "default",
            });
        }

        // Handle generic messages
        if (flash?.message) {
            toast({
                title: "Notification",
                description: flash.message,
                variant: "default",
            });
        }
    }, [flash, toast]);



// useEffect(() => {
//     console.log("Listening for messages...");
//     let chatChannel;
//     try {
//         chatChannel = window.Echo.channel('admin-notifications');
//         console.log("Chat channel created:", chatChannel);
//         chatChannel.subscribed(() => {
//             console.log("Successfully subscribed to admin-notifications channel");
//         });
//         chatChannel.listen('.NewNotification', (e) => {
//             console.log("Received event:", e);
//             toast({
//                 title: "New Message",
//                 description: e.message || "No message content",
//                 variant: "default",
//             });
//         });
//         chatChannel.error((err) => {
//             console.error("Channel subscription error:", err);
//         });
//     } catch (error) {
//         console.error("Error setting up Echo listener:", error);
//     }

//     return () => {
//         console.log("Leaving channel...");
//         if (chatChannel) {
//             chatChannel.stopListening('.NewNotification');
//             window.Echo.leaveChannel('admin-notifications');
//         }
//     };
// }, [toast]);


    return (
    <div>

 <SidebarProvider>

      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb/>
          </div>
        </header>

  {/* <button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </button> */}
             <main>{children}</main>

              <Toaster />

      </SidebarInset>

    </SidebarProvider>

    </div>

    );
}
