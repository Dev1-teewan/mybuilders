"use client";

import { useRef } from "react";
import { MapPin, TrendingUp, Wallet } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: MapPin,
    number: "01",
    title: "IRL Meetups & Events",
    description:
      "MyBuilders connects high-potential Malaysian projects with strategic investors across Southeast Asia. We organize regular meetups and events to identify promising ventures, provide comprehensive fundraising guidance, and introduce founders to the right VCs and angels.",
    gradient: "from-primary to-emerald-400",
    imageColor: "bg-gradient-to-br from-emerald-400/20 to-primary/10",
    imagePath: "/meetup.jpeg",
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "Mentorship & Support",
    description:
      "Get the guidance you need to build and scale in Malaysia's growing Web3 ecosystem. We connect you with experienced mentors who've launched and scaled successful Solana projects. From refining your pitch to navigating technical hurdles and local regulations, we offer practical advice tailored for Malaysian founders.",
    gradient: "from-emerald-400 to-teal-400",
    imageColor: "bg-gradient-to-br from-teal-400/20 to-emerald-400/10",
    imagePath: "/mentorship.jpeg",
  },
  {
    icon: Wallet,
    number: "03",
    title: "Fundraising & Capital",
    description:
      "MyBuilders helps Malaysian Web3 projects access global capital. We provide comprehensive fundraising support, from pitch deck refinement to investor introductions. As a trusted partner, we support projects beyond initial funding to help navigate Malaysia's unique regulatory landscape and connect with regional VCs.",
    gradient: "from-teal-400 to-cyan-400",
    imageColor: "bg-gradient-to-br from-cyan-400/20 to-teal-400/10",
    imagePath: "/fundraising.jpeg",
  },
];

export function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="what-we-do"
      ref={sectionRef}
      className="relative py-24 md:py-32"
      style={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance leading-tight w-full">
            Malaysia's Web3 builders community.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance w-full">
            Empowering founders and projects to launch and scale.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 shadow-lg"
              style={{
                animationDelay: `${index * 100}ms`,
                borderTop: "2px solid rgba(74, 222, 128, 0.3)",
                borderBottom: "2px solid rgba(15, 23, 42, 0.5)",
                borderLeft: "1px solid rgba(74, 222, 128, 0.15)",
                borderRight: "1px solid rgba(74, 222, 128, 0.15)",
              }}
            >
              {/* Icon Badge */}
              <div className="p-8 pb-2">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 border border-primary/40">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Title */}
              <div className="px-8 pb-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  {feature.title}
                </h3>
              </div>

              {/* Feature Image */}
              <div className="mx-8 mb-6 h-48 rounded-xl overflow-hidden border border-primary/10 relative">
                <Image
                  src={feature.imagePath}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>

              {/* Description */}
              <div className="px-8 pb-8">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect - Brighten Border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  border: "2px solid rgba(74, 222, 128, 0.5)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
