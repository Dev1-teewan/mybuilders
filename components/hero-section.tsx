"use client";

import type React from "react";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(0.1, 0.35 - scrollY / 3000);
        heroRef.current.style.setProperty("--map-opacity", opacity.toString());
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center w-full"
      style={
        {
          "--map-opacity": "0.35",
          overflow: "hidden",
          maxWidth: "100vw",
          paddingTop: "80px",
        } as React.CSSProperties
      }
    >
      {/* Background Image - Only in Hero */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          opacity: "var(--map-opacity)",
          overflow: "hidden",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src="/hero-bg.jpg"
          alt="Southeast Asia Map"
          fill
          className="object-cover object-center"
          priority
          quality={90}
          style={{
            maxWidth: "100%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Lighter Overlay for Better Visibility - Theme Aware */}
      <div className="absolute inset-0 bg-background/20 dark:bg-background/50 pointer-events-none" />

      {/* Gradient Overlays for Text Readability - Theme Aware */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/60 dark:from-background/70 dark:via-background/30 dark:to-background/95 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30 dark:from-background/60 dark:via-transparent dark:to-background/60 pointer-events-none" />

      {/* Smooth Bottom Fade Out - Theme Aware */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/60 to-transparent dark:via-background/90 pointer-events-none" />

      {/* Subtle Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-br from-primary/10 via-emerald-500/10 to-purple-500/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading with Smooth Animation */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] tracking-tight mb-8 animate-fade-in-up-smooth">
          <span className="block text-balance">
            <span className="text-foreground">Malaysia's </span>
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Web3
            </span>
            <span className="text-foreground"> builders community.</span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-balance">
          MyBuilders is a community of{" "}
          <span className="text-primary font-semibold">500+ founders</span> and
          builders working on web3 projects.
        </p>

        {/* CTA Button */}
        <div className="flex items-center justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] transition-all duration-300 text-base px-12 py-6 rounded-lg font-medium group"
          >
            <a href="https://forms.gle/ysEDQf5S7sBB6uAN6" target="_blank" rel="noopener noreferrer">
              Join now
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
