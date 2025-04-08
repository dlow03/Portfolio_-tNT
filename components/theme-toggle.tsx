"use client"

import { usePathname } from "next/navigation"
import { Moon, Sun } from "lucide-react"
import { toggleTheme } from "@/lib/actions"
import { useEffect, useState } from "react"

interface ThemeToggleProps {
  initialTheme: "light" | "dark"
}

export default function ThemeToggle({ initialTheme }: ThemeToggleProps) {
  const pathname = usePathname()
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme)
  const [mounted, setMounted] = useState(false)

  // Update the theme when it changes
  useEffect(() => {
    setMounted(true)
    const html = document.documentElement

    if (theme === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }, [theme])

  // Handle client-side theme changes for a smoother experience
  const handleClientThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)

    // Also store in localStorage for client-side persistence
    localStorage.setItem("theme", newTheme)
  }

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null

  return (
    <form action={toggleTheme}>
      <input type="hidden" name="path" value={pathname} />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault()
          handleClientThemeChange()
          e.currentTarget.form?.requestSubmit()
        }}
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-green-100 dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
        aria-label="Toggle dark mode"
      >
        <Sun className="w-5 h-5 text-amber-500 dark:hidden" />
        <Moon className="w-5 h-5 text-green-400 hidden dark:block" />
      </button>
    </form>
  )
}

