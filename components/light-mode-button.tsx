"use client"

import { switchToLightMode } from "@/app/actions/theme"
import { Sun } from "lucide-react"

export default function LightModeButton() {
  return (
    <form action={switchToLightMode}>
      <button
        type="submit"
        className="fixed top-6 right-20 z-50 p-2 rounded-full bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hidden dark:block"
        aria-label="Switch to light mode"
      >
        <Sun className="w-5 h-5 text-yellow-500" />
        <span className="sr-only">Switch to light mode</span>
      </button>
    </form>
  )
}

