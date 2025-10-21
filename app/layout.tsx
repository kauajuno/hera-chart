import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { HeraSidebar } from "@/components/Hera/HeraSidebar"
import '@/app/globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="h-screen overflow-hidden dark">
        <SidebarProvider>
          <HeraSidebar />
          <SidebarInset className="h-screen overflow-auto">
            <header className="flex items-center h-16 px-4 border-b bg-background">
              <SidebarTrigger />
              <div className="ml-4 text-2xl font-bold">
                HERADASH
              </div>
            </header>
            <main className="flex-1 p-4">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}