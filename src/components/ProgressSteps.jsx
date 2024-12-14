import React from 'react'
import { Check } from 'lucide-react'
import { cn } from "../lib/utils"
import { FaRegCircle } from "react-icons/fa6";

const steps = [
  { id: "01", title: "Preliminary", status: "completed" },
  { id: "02", title: "Your Details", status: "completed" },
  { id: "03", title: "KYC", status: "current" },
  { id: "04", title: "Parties", status: "next-upcoming" },
  { id: "05", title: "Claim", status: "upcoming" },
  { id: "06", title: "Review", status: "upcoming" },
  { id: "07", title: "Payment", status: "upcoming" }
]

export function ProgressSteps() {
  return (
    <div className="w-full px-2 py-0 bg-[#EDEEF5]">
      <div className="relative flex justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col flex-1">
             <div className={cn(
                "text-sm",
                step.status === "upcoming" ? "text-gray-400" : "text-gray-600 font-medium", "m-0"
              )}>
                <span className='text-lg font-bold mr-1'>{step.id}</span>
                {step.title}
              </div>
            <div className="flex items-center w-full">
              
              <div
                className={cn(
                  "w-4 h-4 rounded-full flex items-center justify-center text-sm relative z-10",
                  step.status === "completed" && "bg-blue-500 text-white",
                  step.status === "current" && "bg-blue-500 text-white",
                  step.status === "next-upcoming" && "bg-gray-200 text-gray-400",
                  step.status === "upcoming" && "bg-gray-200 text-gray-400"
                )}
              >
                
                {step.status === "completed" ? (
                  <Check className="w-4 h-4" />
                ): <FaRegCircle className="w-4 h-4" />}
                {step.status === "current" ? (
                  <Check className="w-4 h-4" />
                ): null}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "h-[2px] w-full relative -mx-2",
                    step.status === "completed" && "bg-blue-500",
                    step.status === "current" && "bg-transparent border-t-2 border-dashed border-blue-500",
                    step.status === "next-upcoming" && "bg-blue-300",
                    step.status === "upcoming" && "bg-blue-300"
                  )}
                />
              )}
            </div>
            <div className="ml-[-25px]">
             
              {step.status === "upcoming" ? (
                <div className="text-xs text-gray-400">
                  (Approx 5 Min)
                </div>
              ) : null }
              {step.status === "next-upcoming" ? (
                <div className="text-xs text-gray-400">
                  (Approx 5 Min)
                </div>
              ) : null }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

