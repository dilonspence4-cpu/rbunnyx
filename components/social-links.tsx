"use client"

import { Instagram, Twitter, Facebook, Gift } from "lucide-react"

interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
}

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://instagram.com/rbunnyx",
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@rbunnyx",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/rbunnyxs",
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/18Pwbwfxd2/?mibextid=wwXIfr",
    icon: <Facebook className="h-5 w-5" />,
  },
  {
    name: "Throne",
    href: "https://throne.com/princessbunnyx",
    icon: <Gift className="h-5 w-5" />,
  },
]

export function SocialLinks() {
  return (
    <nav className="flex items-center justify-center gap-4" aria-label="Social links">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg shadow-black/30 backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 hover:shadow-xl"
        >
          {link.icon}
        </a>
      ))}
    </nav>
  )
}
