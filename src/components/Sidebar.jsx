import React from 'react'
import { Calendar, FileText, Activity, User, Briefcase, Scale } from 'lucide-react'
import { cn } from "../lib/utils"
import image from "../assets/image1.png"
import logo from "../assets/logo.png"

const navItems = [
  { title: "Dashboard", icon: User, href: "#" },
  { title: "My Cases", icon: Briefcase, href: "#" },
  { title: "Activities", icon: Activity, href: "#" },
  { title: "Calendar", icon: Calendar, href: "#" },
  { title: "Files", icon: FileText, href: "#" },
  { title: "Open a Dispute", icon: Scale, href: "#" },
]

export function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 p-2">
      <div className="flex items-center gap-2 mb-16">
        <div className="w-12 h-12">
          <img src={logo} alt="Jur_logo" />
        </div>
        <span className="text-[30px] font-bold">Jur</span>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors",
              item.title === "Dashboard" && "text-blue-600 bg-blue-50"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.title}</span>
          </a>
        ))}
      </nav>

      <div className="mt-8 p-4 bg-blue-100 rounded-lg">
        <h3 className="font-semibold text-gray-900">Get Justice on every Claims</h3>
        <div className="mt-4 relative h-70">
          <img
            src={image}
            alt="Justice illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}