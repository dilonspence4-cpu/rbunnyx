"use client"

import { SocialLinks } from "@/components/social-links"
import { EnterButton } from "@/components/enter-button"
import { AgeGate, useAgeGate } from "@/components/age-gate"
import { SafariTip } from "@/components/safari-tip"

export default function Home() {
  const { showGate, isLoading, confirmAge } = useAgeGate()
  const currentYear = new Date().getFullYear()

  // Show nothing while checking localStorage to prevent flash
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    )
  }

  return (
    <>
      <SafariTip />
      
      <main className="relative flex min-h-screen flex-col bg-background">
        {/* Hero section with image */}
        <section className="relative w-full overflow-hidden">
          {/* Blurred background image to fill sides */}
          <div 
            className="absolute inset-0 scale-110 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5433-EnjZAgtsqNkYhW2BTr7D1Zos6QonGq.jpeg')",
              filter: "blur(40px) saturate(1.2) brightness(0.5)"
            }}
          />
          {/* Color overlay to match border tint */}
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundColor: "rgba(14,27,42,0.6)"
            }}
          />
          
          {/* Main image - contained to show full photo */}
          <div 
            className="relative mx-auto w-full max-w-md"
            style={{ 
              aspectRatio: "3/4"
            }}
          >
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5433-EnjZAgtsqNkYhW2BTr7D1Zos6QonGq.jpeg"
              alt="rbunnyx"
              className="h-full w-full object-cover object-top"
              style={{ filter: "saturate(1.05) contrast(1.02)" }}
            />
            {/* Edge fade to blend into blurred background */}
            <div 
              className="pointer-events-none absolute inset-0"
              style={{
                boxShadow: "inset 0 0 120px 80px rgba(14,27,42,0.85)",
              }}
            />
            {/* Additional side fades for smoother blend */}
            <div 
              className="pointer-events-none absolute inset-0"
              style={{
                background: `
                  linear-gradient(90deg, rgba(14,27,42,0.8) 0%, transparent 25%, transparent 75%, rgba(14,27,42,0.8) 100%),
                  linear-gradient(180deg, rgba(14,27,42,0.5) 0%, transparent 15%, transparent 85%, transparent 100%)
                `
              }}
            />
            {/* Gradient fade at bottom of image */}
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, 
                  transparent 0%, 
                  transparent 50%, 
                  rgba(14,27,42,0.4) 70%,
                  rgba(14,27,42,0.8) 85%,
                  rgb(14,27,42) 100%
                )`
              }}
            />
            {/* Title, bio and social icons positioned at bottom of image */}
            <div className="absolute bottom-6 left-0 right-0 z-10 px-5">
              <header className="mb-4 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg">
                  rbunnyx
                </h1>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-gray-200 drop-shadow-md">
                  {"chaotic little gremlin with a gym membership, don't feed me after midnight... or do ;)"}
                </p>
              </header>
              <SocialLinks />
            </div>
          </div>
        </section>
        
        {/* Content section below image */}
        <section className="flex flex-1 flex-col items-center justify-start px-5 pb-8 pt-6" style={{ backgroundColor: "rgb(14,27,42)" }}>
          <div className="w-full max-w-lg">
            <EnterButton />

            <footer className="mt-8 text-center text-xs text-gray-500">
              © {currentYear} rbunnyx
            </footer>
          </div>
        </section>
      </main>

      {showGate && <AgeGate onConfirm={confirmAge} />}
    </>
  )
}
