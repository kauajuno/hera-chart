"use client"

import '@/src/app/globals.css'
import { SidebarProvider, SidebarTrigger, SidebarFooter, SidebarInset } from "@/src/components/ui/sidebar"
import { HeraSidebar } from "@/src/components/Hera/HeraSidebar"
import { Button } from '@/src/components/ui/button'
import { LogOut } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Layout({ children }: { children: React.ReactNode }) {

  const [darkMode, setDarkmode] = useState(false)

  return (
    <html>
      <body className={`h-screen overflow-hidden ${darkMode ? "dark" : ""}`}>
        <div className="grid grid-cols-4 gap-4 w-full h-dvh">
            <div className='hidden md:block md:col-span-2 relative p-2 h-full box-border overflow-hidden'>
                <img src="/images/blue-graphics-auth.jpg" className='rounded-2xl h-full w-full object-cover'></img>
            </div>
            <div className='col-span-4 md:col-span-2'>{children}</div>
        </div>
      </body>
    </html>
  )
}