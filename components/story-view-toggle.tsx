"use client"

import { Grid, List } from "lucide-react"

interface StoryViewToggleProps {
  viewMode: "grid" | "list"
  setViewMode: (mode: "grid" | "list") => void
}

export default function StoryViewToggle({ viewMode, setViewMode }: StoryViewToggleProps) {
  return (
    <div className="flex items-center space-x-2 bg-white/80 dark:bg-green-950/40 backdrop-blur-md border border-green-300/50 dark:border-green-400/30 rounded-full p-1">
      <button
        onClick={() => setViewMode("grid")}
        className={`p-2 rounded-full transition-colors ${
          viewMode === "grid"
            ? "bg-green-100 dark:bg-green-800/50 text-green-600 dark:text-green-400"
            : "text-gray-500 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/20"
        }`}
        aria-label="Grid view"
      >
        <Grid className="w-4 h-4" />
      </button>
      <button
        onClick={() => setViewMode("list")}
        className={`p-2 rounded-full transition-colors ${
          viewMode === "list"
            ? "bg-green-100 dark:bg-green-800/50 text-green-600 dark:text-green-400"
            : "text-gray-500 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/20"
        }`}
        aria-label="List view"
      >
        <List className="w-4 h-4" />
      </button>
    </div>
  )
}

