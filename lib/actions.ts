"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

type Theme = "light" | "dark"

export async function toggleTheme(formData: FormData) {
  const cookieStore = cookies()
  const currentTheme = cookieStore.get("theme")?.value as Theme | undefined

  // Toggle the theme
  const newTheme: Theme = currentTheme === "dark" ? "light" : "dark"

  // Set the cookie with a long expiration (1 year)
  cookieStore.set("theme", newTheme, {
    expires: Date.now() + 365 * 24 * 60 * 60 * 1000,
    path: "/",
  })

  // Redirect to the same page to refresh with the new theme
  redirect(`${formData.get("path") || "/"}`)
}

export async function setTheme(theme: Theme) {
  const cookieStore = cookies()

  // Set the cookie with a long expiration (1 year)
  cookieStore.set("theme", theme, {
    expires: Date.now() + 365 * 24 * 60 * 60 * 1000,
    path: "/",
  })
}

export function getTheme(): Theme {
  const cookieStore = cookies()
  return (cookieStore.get("theme")?.value as Theme) || "light"
}

