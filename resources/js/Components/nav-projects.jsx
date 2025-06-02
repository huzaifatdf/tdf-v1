import { Folder, FormInput, Forward, GalleryHorizontal, MoreHorizontal, PlusCircle, Trash2, Users } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Link, router } from "@inertiajs/react";

export function NavProjects() {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Managment</SidebarGroupLabel>
      <SidebarMenu>

          <SidebarMenuItem >
            <SidebarMenuButton asChild>
              <Link href={route('user.index')}>
                <Users/>
                <span>Users</span>
              </Link>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}>

                <DropdownMenuItem  onClick={() => router.get(route('user.create'))} className="cursor-pointer">
                  <PlusCircle className="text-muted-foreground" />
                  <span>Add</span>
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>

          </SidebarMenuItem>
          <SidebarMenuItem >
            <SidebarMenuButton asChild>
              <Link href={route('form.index')}>
                <FormInput/>
                <span>Form</span>
              </Link>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}>

                <DropdownMenuItem  onClick={() => router.get(route('form.create'))} className="cursor-pointer">
                  <PlusCircle className="text-muted-foreground" />
                  <span>Add</span>
                </DropdownMenuItem>

              </DropdownMenuContent>
            </DropdownMenu>

          </SidebarMenuItem>
             <SidebarMenuItem >
            <SidebarMenuButton asChild>
              <Link href={route('media.index')}>
                <GalleryHorizontal />
                <span>Media</span>
              </Link>
            </SidebarMenuButton>


          </SidebarMenuItem>


        {/* <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem> */}
      </SidebarMenu>
    </SidebarGroup>
  );
}
