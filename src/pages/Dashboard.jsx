import React from 'react'
import { Bell } from 'lucide-react'
import { Sidebar } from '../components/Sidebar'
import { ProgressSteps } from '../components/ProgressSteps'
import { ClaimForm } from '../components/ClaimForm'
import { Button } from "../ui/Button"
import { CiUser } from "react-icons/ci";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#EDEEF5]">
      <Sidebar />
      <div className="flex-1">
        <header className="bg-white p-4 flex justify-end items-center border-b">
          <div className="flex items-center gap-0">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-9" />
            </Button>
            <Button variant="ghost" size="icon">
              <CiUser className="w-5 h-9" />
            </Button>
          </div>
        </header>
        <main className="p-8">
          <div className="mb-8">
            <ProgressSteps />
          </div>
          <div className="bg-white rounded-lg">
            <ClaimForm />
          </div>
        </main>
      </div>
    </div>
  )
}