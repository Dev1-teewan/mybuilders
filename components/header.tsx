"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg" style={{ maxWidth: "100vw" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/mybuilders-icon.svg"
                alt="MyBuilders"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-baseline gap-0">
              <span className="text-foreground font-semibold text-lg md:text-xl tracking-tight">MY</span>
              <span className="text-foreground font-normal text-lg md:text-xl tracking-tight">Builders</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection("home")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-normal uppercase tracking-wide cursor-pointer bg-transparent border-none"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("what-we-do")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-normal uppercase tracking-wide cursor-pointer bg-transparent border-none"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-normal uppercase tracking-wide cursor-pointer bg-transparent border-none"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("ecosystem")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-normal uppercase tracking-wide cursor-pointer bg-transparent border-none"
            >
              Partners
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-transparent border-2 border-border/60 text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 uppercase tracking-wider text-xs font-normal px-6 py-2 rounded-full hover:scale-105">
              Apply Today
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-muted-foreground hover:text-foreground transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("what-we-do")}
                className="text-muted-foreground hover:text-foreground transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="text-muted-foreground hover:text-foreground transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection("ecosystem")}
                className="text-muted-foreground hover:text-foreground transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
              >
                Partners
              </button>
              <Button className="bg-transparent border-2 border-border/60 text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 w-full mt-2 rounded-full">
                Apply Today
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
