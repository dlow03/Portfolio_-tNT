"use client"
import { useEffect } from "react"

interface ThemeSwitcherProps {
  theme: "light" | "dark"
}

export default function ThemeSwitcher({ theme }: ThemeSwitcherProps) {
  useEffect(() => {
    // Apply theme on component mount
    const html = document.documentElement

    if (theme === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }, [theme])

  return null // This is a utility component with no UI
}

