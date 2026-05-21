"use client"

import { useState, useEffect } from "react"

interface AgeGateProps {
  onConfirm: () => void
}

export function AgeGate({ onConfirm }: AgeGateProps) {
  const handleNo = () => {
    window.location.href = "https://www.google.com"
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gate-title"
    >
      <div className="mx-4 w-full max-w-md rounded-2xl border border-white/10 bg-background p-6 text-center shadow-2xl">
        <h2 id="gate-title" className="mb-2 text-2xl font-bold text-foreground">
          Are you 18 or older?
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          We present mature content responsibly. Please confirm your age to proceed.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleNo}
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-foreground transition-colors hover:bg-white/10"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-gradient-to-r from-primary to-[oklch(0.55_0.15_220)] px-4 py-3 font-bold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            {"Yes, I'm 18+"}
          </button>
        </div>
      </div>
    </div>
  )
}

export function useAgeGate() {
  const [showGate, setShowGate] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const confirmed = localStorage.getItem("ageConfirmed") === "1"
    setShowGate(!confirmed)
    setIsLoading(false)
  }, [])

  const confirmAge = () => {
    localStorage.setItem("ageConfirmed", "1")
    setShowGate(false)
  }

  return { showGate, isLoading, confirmAge }
}
