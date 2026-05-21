"use client"

import { useEffect, useState } from "react"

export function SafariTip() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const isInApp = () => {
      const ua = navigator.userAgent || ""
      return /Instagram|FBAN|FBAV|TikTok|Twitter|Snapchat|LinkedIn|Pinterest/i.test(ua)
    }
    const isMobile = () => {
      return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || "")
    }
    
    setShow(isInApp() && isMobile())
  }, [])

  if (!show) return null

  return (
    <div className="fixed right-3 top-3 z-40 w-56 rounded-xl bg-white/95 p-3 text-sm text-gray-800 shadow-xl md:hidden">
      <strong className="text-blue-600">Open in Safari</strong>
      <br />
      {"Tap the ⋯ in the top right → \"Open in Safari\" for full access."}
      <span className="absolute -top-4 right-2 text-xl text-white">↗</span>
    </div>
  )
}
