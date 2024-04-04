"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light")
      }}
    >
      {theme === "light" ? (
        <>
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all border-gray-300" />
          <span className="sr-only">Dark Mode</span>
        </>
      ) : (
        <>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all border-gray-900" />
          <span className="sr-only">Light Mode</span>
        </>
      )}
    </Button>
  )
}
