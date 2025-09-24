import type React from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from '@/modules/dashboard/ui/dashboard-sidebar';

interface Props{
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <SidebarProvider>
            <Sidebar>
            </Sidebar>
            <SidebarInset>
                <DashboardSidebar />
                
                <main>
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
       
           
        
    );
}