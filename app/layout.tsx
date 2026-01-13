import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MyBuilders | Malaysia's Premier Web3 Builders Community",
  description:
    "MyBuilders is a home for 500+ developers, founders, and creatives building the future on-chain in Malaysia.",
  generator: "v0.app",
  keywords: ["Web3", "Blockchain", "Malaysia", "Solana", "Ethereum", "Builders", "Community", "Crypto"],
  authors: [{ name: "MyBuilders" }],
  icons: {
    icon: [
      {
        url: "/mybuilders-icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/mybuilders-icon.svg",
  },
  openGraph: {
    title: "MyBuilders | Malaysia's Premier Web3 Builders Community",
    description:
      "MyBuilders is a home for 500+ developers, founders, and creatives building the future on-chain in Malaysia.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a12",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{ overflowX: "hidden", maxWidth: "100vw" }}>
      <body className={`font-sans antialiased min-h-screen w-full`} style={{ overflowX: "hidden", maxWidth: "100vw" }}>
        <div className="relative w-full" style={{ maxWidth: "100vw", overflowX: "hidden" }}>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
