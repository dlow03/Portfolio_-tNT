"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function switchToDarkMode() {
  const cookieStore = cookies()

  // Set the cookie with a long expiration (1 year)
  cookieStore.set("theme", "dark", {
    expires: Date.now() + 365 * 24 * 60 * 60 * 1000,
    path: "/",
  })

  // Redirect to the same page to refresh with the new theme
  redirect("/")
}

export async function switchToLightMode() {
  const cookieStore = cookies()

  // Set the cookie with a long expiration (1 year)
  cookieStore.set("theme", "light", {
    expires: Date.now() + 365 * 24 * 60 * 60 * 1000,
    path: "/",
  })

  // Redirect to the same page to refresh with the new theme
  redirect("/")
}

