"use client"

import { useState } from "react"
import Image from "next/image"

const partners = [
  { name: "Jupiter", logo: "/logo/jupiter.svg" },
  { name: "Solscan", logo: "/logo/solscan-logo-light.svg" },
  { name: "Coingecko", logo: "/logo/coingeckgo.svg" },
  { name: "Solana Foundation", logo: "/logo/solanaLogoMark.svg" },
  { name: "Orca", logo: "/logo/orca.svg" },
  { name: "Circle", logo: "/logo/circle.svg" },
  { name: "Backpack", logo: "/logo/backpack.png" },
  { name: "Superteam", logo: "/logo/superteam.jpeg" },
  { name: "Zeus Network", logo: "/logo/zeus-network.jpeg" },
  { name: "Flash Trade", logo: "/logo/flash-trade.png" },
  { name: "Solana FM", logo: "/logo/solanafm.png" },
  { name: "Airfoil", logo: "/logo/airfoildesign_logo.jpeg" },
  { name: "Sanctum", logo: "/logo/santrum.svg" },
  { name: "Drift", logo: "/logo/drift.svg" },
  { name: "Birdeye", logo: "/logo/Birdeye Logo_White logomark 600x600.png" },
  { name: "Hawksight", logo: "/logo/hawkfi.png" },
  { name: "Wormhole", logo: "/logo/wormhole.svg" },
  { name: "Virtual Protocol", logo: "/logo/virtual-protocol.jpeg" },
]

export function EcosystemSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="ecosystem" className="relative py-24 md:py-32" style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
            • Partners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Strategic Partners Across Web3
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Collaborating with innovative projects across all blockchain ecosystems to drive the future of decentralized technology.
          </p>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group relative aspect-[3/2] bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center hover:border-primary/60 hover:bg-card/70 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.15)] shadow-lg cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Logo Container */}
              <div
                className={`flex flex-col items-center justify-center gap-3 transition-all duration-300 px-4 py-4 ${
                  hoveredIndex === index ? "opacity-100 scale-105" : "opacity-70 scale-100"
                }`}
              >
                {/* Partner Logo */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span
                  className={`font-medium text-xs text-center transition-colors duration-300 ${
                    hoveredIndex === index ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {partner.name}
                </span>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6 text-lg">Want to become a partner?</p>
          <a 
            href="https://forms.gle/ysEDQf5S7sBB6uAN6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300"
          >
            <span className="font-medium">Get in touch</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
