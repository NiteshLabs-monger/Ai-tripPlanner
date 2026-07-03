"use client"

import * as React from "react"
import { useAuthStore } from "@/context/useAuthstore"

import { NavUser } from "@/components/nav-user"
import {

  SidebarTrigger,
} from "@/components/ui/sidebar"
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
    <Sidebar collapsible="icon"  {...props}>
      <SidebarHeader >
        <SidebarTrigger />
        <Plane/>
        <p>Trip Pal</p>
        
      </SidebarHeader>
      <SidebarContent>
        
        
      </SidebarContent>
      <SidebarFooter>
        
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
