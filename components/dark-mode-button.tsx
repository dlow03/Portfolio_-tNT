"use client"

import { switchToDarkMode } from "@/app/actions/theme"
import { Moon } from "lucide-react"

export default function DarkModeButton() {
  return (
    <form action={switchToDarkMode}>
      <button
        type="submit"
        className="fixed top-6 right-20 z-50 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 dark:hidden"
        aria-label="Switch to dark mode"
      >
        <Moon className="w-5 h-5 text-blue-500" />
        <span className="sr-only">Switch to dark mode</span>
      </button>
    </form>
  )
}

