import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Edit3,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  TableOfContents,
  Users,
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
const data = {

  teams: [
    {
      name: "TDF",
      logo: GalleryVerticalEnd,
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
          url: "#",
        },
        {
          title: "List",
          url: "#",
        },

      ],
    },
  ],
  projects: [
    {
      name: "Users",
      url: route('user.index'),
      icon: Users,
    },

  ],
}

export function AppSidebar({
  ...props
}) {

       const user = usePage().props.auth.user;
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
