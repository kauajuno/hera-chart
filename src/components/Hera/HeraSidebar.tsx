import { HandCoins, Handshake, Home, Moon, Package, ShoppingBag, Sun } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/ui/sidebar"

import { Button } from "../ui/button"

// Menu items.
const items = [
  {
    title: "Geral",
    url: "#",
    icon: Home,
  },
  {
    title: "Vendas",
    url: "#",
    icon: Handshake,
  },
  {
    title: "Caixa",
    url: "#",
    icon: HandCoins,
  },
  {
    title: "Compras x Vendas",
    url: "#",
    icon: ShoppingBag,
  },
  {
    title: "Produtos",
    url: "#",
    icon: Package,
  },
]



export function HeraSidebar({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) {

  function handleTheme() {
    setDarkMode(!darkMode)
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon style={{ width: '24px', height: '24px' }} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button onClick={handleTheme}>
          {darkMode ? <Sun /> : <Moon />}
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}