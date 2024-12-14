import React, { useState } from 'react'
import { cn } from "../lib/utils"

export function RadioGroup({ className, defaultValue, onValueChange, children, ...props }) {
  const [value, setValue] = useState(defaultValue)

  const handleValueChange = (newValue) => {
    setValue(newValue)
    if (onValueChange) {
      onValueChange(newValue)
    }
  }

  return (
    <div className={cn("grid gap-2", className)} {...props}>
      {React.Children.map(children, child => 
        React.cloneElement(child, { 
          checked: child.props.value === value,
          onChange: () => handleValueChange(child.props.value)
        })
      )}
    </div>
  )
}

export function RadioGroupItem({ className, checked, onChange, value, ...props }) {
  return (
    <div
      role="radio"
      aria-checked={checked}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        checked && "bg-primary",
        className
      )}
      onClick={onChange}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onChange();
        }
      }}
      tabIndex={0}
      {...props}
    />
  )
}

