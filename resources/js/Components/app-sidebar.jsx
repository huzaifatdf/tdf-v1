import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Box,
  Command,
  Edit3,
  Frame,
  GalleryVerticalEnd,
  Layers2Icon,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  TableOfContents,
  Users,
  UsersRound,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { router, usePage } from "@inertiajs/react"

// This is sample data.

export function AppSidebar({
  ...props
}) {

       const user = usePage().props.auth.user;
       const dynamicFormsList = usePage().props.dynamicFormsList;


       const data = {

  teams: [
    {
      name: "TDF",
      logo: "/images/fav/logo2.png",
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: route('dashboard'),
        },

      ],
    },


    {
      title: "Page",
      url: "#",
      icon: TableOfContents,
      items: [
        {
          title: "Add",
          url: route('page.create'),
        },
        {
          title: "List",
          url: route('page.index'),
        },

      ],
    },
     {
      title: "Services",
      url: "#",
      icon: Layers2Icon,
      items: [
        {
          title: "Add",
          url: route('service.create'),
        },
        {
          title: "List",
          url: route('service.index'),
        },

      ],
    },
    {
      title: "Products",
      url: "#",
      icon: Box,
      items: [
        {
          title: "Add",
          url: route('product.create'),
        },
        {
          title: "List",
          url: route('product.index'),
        },

      ],
    },
      {
      title: "Case Studies",
      url: "#",
      icon: Box,
      items: [
        {
          title: "Add",
          url: route('case.create'),
        },
        {
          title: "List",
          url: route('case.index'),
        },

      ],
    },
      {
      title: "Industries",
      url: "#",
      icon: Box,
      items: [
        {
          title: "Add",
          url: route('industry.create'),
        },
        {
          title: "List",
          url: route('industry.index'),
        },

      ],
    },
    {
      title: "Our Clients",
      url: "#",
      icon: UsersRound,
      items: [
        {
          title: "Add",
          url: route('ourclient.create'),
        },
        {
          title: "List",
          url: route('ourclient.index'),
        },

      ],
    },
     // Spread the mapped dynamic forms into the navMain array
    ...(dynamicFormsList.length > 0 ? dynamicFormsList.map((form) => ({
      title: form.name,
      url: "#",
      icon: Frame,
      // You might want to add items/submenu for forms too
      items: [
        {
          title: "View Form",
          url: route('form.submission.create', { slug: form.slug }),
        },
        {
          title: "Submissions",
          url: route('form.submission.index', { slug: form.slug }),
        },
      ],
    })) : []),

  ],

}



  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects  />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
