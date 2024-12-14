import React from 'react'
import { cn } from "../lib/utils"

export function Button({ className, variant, size, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        variant === "outline" && "border border-input hover:bg-accent hover:text-accent-foreground",
        variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
        size === "icon" && "h-10 w-10",
        className
      )}
      {...props}
    />
  )
}

