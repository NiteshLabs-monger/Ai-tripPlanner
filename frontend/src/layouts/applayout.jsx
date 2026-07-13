import { AppSidebar } from "@/components/app-sidebar"
import Dashboard from "@/pages/Dashboard/Dashboard"
import TripPreferenceWizard from "@/components/tripform"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function DashboardLayout() {
  return (
    <TooltipProvider>
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Dashboard />
        
      </SidebarInset>
    </SidebarProvider>
    </TooltipProvider>
  )
}