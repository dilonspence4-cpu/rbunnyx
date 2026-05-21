import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'rbunnyx — Official Site',
  description: 'Official site of rbunnyx — alt girl, gym & gaming. Portfolio, socials, and updates.',
  keywords: ['rbunnyx', 'content creator', 'fitness', 'gaming', 'social media'],
  openGraph: {
    title: 'rbunnyx — Official Site',
    description: 'Official site of rbunnyx — alt girl, gym & gaming. Portfolio, socials, and updates.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'rbunnyx — Official Site',
    description: 'Official site of rbunnyx — alt girl, gym & gaming. Portfolio, socials, and updates.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0b1220',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
