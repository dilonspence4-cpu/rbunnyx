"use client"

import { useCallback } from "react"

export function EnterButton() {
  const handleClick = useCallback(() => {
    try {
      // Base64 encoded URL for privacy
      const encodedUrl = "aHR0cHM6Ly9vbmx5ZmFucy5jb20vcmJ1bm55eA=="
      const url = atob(encodedUrl)
      
      // Small delay for analytics if needed
      setTimeout(() => {
        window.location.href = url
      }, 75)
    } catch {
      console.error("Navigation error")
    }
  }, [])

  return (
    <div className="mt-4">
      <button
        onClick={handleClick}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full rounded-full bg-gradient-to-r from-primary to-[oklch(0.55_0.15_220)] px-6 py-4 text-lg font-extrabold tracking-wide text-white shadow-xl shadow-primary/40 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/50 active:translate-y-0.5"
        aria-label="Enter"
      >
        Enter
      </button>
      <p className="mt-3 text-center text-sm text-muted-foreground drop-shadow-md">
        By entering, you confirm you are 18+.
      </p>
    </div>
  )
}
