"use client"

import { useState } from "react"

const partners = [
  // Placeholder Partners
  { name: "Partner 1", logo: "P1", type: "global" },
  { name: "Partner 2", logo: "P2", type: "global" },
  { name: "Partner 3", logo: "P3", type: "global" },
  { name: "Partner 4", logo: "P4", type: "global" },
  { name: "Partner 5", logo: "P5", type: "global" },
  { name: "Partner 6", logo: "P6", type: "global" },
  { name: "Partner 7", logo: "P7", type: "global" },
  { name: "Partner 8", logo: "P8", type: "global" },
  { name: "Partner 9", logo: "P9", type: "global" },
  { name: "Partner 10", logo: "P10", type: "global" },
  { name: "Partner 11", logo: "P11", type: "global" },
  { name: "Partner 12", logo: "P12", type: "global" },
  { name: "Partner 13", logo: "P13", type: "global" },
  { name: "Partner 14", logo: "P14", type: "global" },
  { name: "Partner 15", logo: "P15", type: "global" },
  { name: "Partner 16", logo: "P16", type: "global" },
  { name: "Partner 17", logo: "P17", type: "global" },
  { name: "Partner 18", logo: "P18", type: "global" },
  { name: "Partner 19", logo: "P19", type: "global" },
  { name: "Partner 20", logo: "P20", type: "global" },
  { name: "Partner 21", logo: "P21", type: "global" },
  { name: "Partner 22", logo: "P22", type: "global" },
  { name: "Partner 23", logo: "P23", type: "global" },
  { name: "Partner 24", logo: "P24", type: "global" },
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
                className={`flex flex-col items-center justify-center gap-2 transition-all duration-300 px-2 ${
                  hoveredIndex === index ? "opacity-100 scale-105" : "opacity-60 scale-100"
                }`}
              >
                {/* Placeholder Logo */}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                    hoveredIndex === index
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted/50 text-muted-foreground"
                  }`}
                >
                  {partner.logo.length <= 3 ? partner.logo : partner.logo.slice(0, 2)}
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
          <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300">
            <span className="font-medium">Get in touch</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
