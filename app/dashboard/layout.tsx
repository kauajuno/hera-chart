"use client"

import '@/app/globals.css'
import { SidebarProvider, SidebarTrigger, SidebarFooter, SidebarInset } from "@/components/ui/sidebar"
import { HeraSidebar } from "@/components/Hera/HeraSidebar"
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import { useState } from 'react'




export default function Layout({ children }: { children: React.ReactNode }) {

  const [darkMode, setDarkmode] = useState(false)


  return (
    <html>
      <body className={`h-screen overflow-hidden ${darkMode ? "dark" : ""}`}>
        <SidebarProvider>
          <HeraSidebar
            darkMode={darkMode}
            setDarkMode={setDarkmode}
          />
          <SidebarInset className="h-screen overflow-auto">
            <header className="flex items-center justify-between h-16 p-4 border-b bg-background">
              <div className='flex items-center gap-2'>
                <SidebarTrigger />
                <div className="ml-4 text-2xl font-bold">
                  HERADASH
                </div>
              </div>
              <nav>
                <Button>
                  <LogOut />
                </Button>
              </nav>
            </header>
            <main className="flex-1 px-4 py-4">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}