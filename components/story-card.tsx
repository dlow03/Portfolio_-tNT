"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

interface StoryCardProps {
  id: string
  title: string
  description: string
  image: string
  content: string
  date: string
  viewMode: "grid" | "list"
}

export default function StoryCard({ id, title, description, image, content, date, viewMode }: StoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`bg-white/80 dark:bg-green-950/40 backdrop-blur-md border border-green-300/50 dark:border-green-400/30 rounded-xl overflow-hidden transition-all duration-300 ${
        viewMode === "grid" ? "h-auto" : "flex flex-col md:flex-row"
      } ${
        isExpanded
          ? "shadow-lg transform scale-[1.01]"
          : "shadow-md hover:shadow-lg hover:border-green-400/70 dark:hover:border-green-400/50"
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${viewMode === "grid" ? "h-56" : "md:w-1/3 h-48 md:h-auto"}`}>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
        <div className="absolute bottom-3 left-3 text-xs text-white bg-green-500/80 px-2 py-1 rounded-full backdrop-blur-sm">
          {date}
        </div>
      </div>

      {/* Content */}
      <div className={`p-5 flex flex-col ${viewMode === "list" ? "md:w-2/3" : ""}`}>
        <h3 className="text-xl font-bold text-green-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-green-600 dark:text-green-400 text-sm font-medium mt-auto"
        >
          {isExpanded ? "Thu gọn" : "Xem thêm"}
          <ChevronDown
            className={`ml-1 w-4 h-4 transition-transform duration-300 ${isExpanded ? "transform rotate-180" : ""}`}
          />
        </button>

        {/* Expanded content */}
        <div
          className={`overflow-hidden transition-all duration-500 mt-2 ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 border-t border-green-200/50 dark:border-green-400/20">
            <p className="text-gray-700 dark:text-gray-200 text-sm whitespace-pre-line">{content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

