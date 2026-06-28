"use client"

import * as React from "react"
import { useAuthStore } from "@/context/useAuthstore"

import { NavUser } from "@/components/nav-user"

import  {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { GalleryVerticalEndIcon, AudioLinesIcon, TerminalIcon,Plane, TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, FrameIcon, PieChartIcon, MapIcon } from "lucide-react"



export function AppSidebar({
  ...props
}) {
  const {user} = useAuthStore()
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Plane/>
        Trip Pal
      </SidebarHeader>
      <SidebarContent>
        
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
