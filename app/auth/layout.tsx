"use client"

import '@/app/globals.css'
import { SidebarProvider, SidebarTrigger, SidebarFooter, SidebarInset } from "@/components/ui/sidebar"
import { HeraSidebar } from "@/components/Hera/HeraSidebar"
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'




export default function Layout({ children }: { children: React.ReactNode }) {

  const [darkMode, setDarkmode] = useState(false)


  return (
    <html>
      <body className={`h-screen overflow-hidden ${darkMode ? "dark" : ""}`}>
        <div className="grid grid-cols-4 gap-4 w-full h-dvh">
            <div className='col-span-2 relative p-2 h-full box-border overflow-hidden'>
                <img src="/images/blue-graphics-auth.jpg" className='rounded-2xl h-full w-full object-cover'></img>
            </div>
            <div className='col-span-2'>{children}</div>
            
        </div>
      </body>
    </html>
  )
}