"use client"

import { useEffect, useRef, useState } from "react"

export function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.65)

  useEffect(() => {
    const handleScroll = () => {
      if (!videoContainerRef.current) return

      const videoRect = videoContainerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const viewportCenter = viewportHeight / 2
      
      // Calculate video container's center position
      const videoCenter = videoRect.top + videoRect.height / 2
      
      // Calculate distance from video center to viewport center
      const distanceFromCenter = videoCenter - viewportCenter
      
      // Define the range where scaling happens
      // Start scaling when video center is below viewport center
      const scaleStartDistance = viewportHeight * 0.4 // Start scaling earlier
      const scaleEndDistance = 0 // Complete at center
      
      if (distanceFromCenter > scaleStartDistance) {
        // Video is below viewport - start scale
        setScale(0.65)
      } else if (distanceFromCenter <= scaleEndDistance) {
        // Video center is at or above viewport center - full scale
        setScale(1)
      } else {
        // Video is approaching center - interpolate scale
        const scrollProgress = 1 - (distanceFromCenter / scaleStartDistance)
        
        // Ease out cubic for smoother animation
        const easedProgress = 1 - Math.pow(1 - scrollProgress, 3)
        
        // Scale from 0.65 to 1
        const newScale = 0.65 + easedProgress * 0.35
        setScale(newScale)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 min-h-screen flex items-center" style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Past Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Experience the highlights from our Startup Village event, where Malaysia's Web3 community came together to connect, collaborate, and build the future of decentralized technology.
          </p>
        </div>

        {/* Video Container with Scroll Animation */}
        <div
          ref={videoContainerRef}
          className="relative mx-auto transition-transform duration-200 ease-out will-change-transform"
          style={{
            transform: `scale(${scale})`,
            maxWidth: "100%",
          }}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 bg-card shadow-2xl shadow-primary/10 bg-gradient-to-br from-secondary/30 to-background">
            {/* YouTube Embed with Autoplay and Loop */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/LNFtqbpgVmo?autoplay=1&mute=1&loop=1&playlist=LNFtqbpgVmo&rel=0&modestbranding=1"
              title="MyBuilders Startup Village - Past Events"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Decorative glow */}
          <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 via-emerald-500/10 to-teal-500/10 rounded-3xl blur-3xl -z-10 opacity-60" />
        </div>
      </div>
    </section>
  )
}
