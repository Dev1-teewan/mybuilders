import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { VideoSection } from "@/components/video-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-background" style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <Header />
      <HeroSection />
      <WhatWeDoSection />
      <VideoSection />
      <EcosystemSection />
      <Footer />
    </main>
  )
}
