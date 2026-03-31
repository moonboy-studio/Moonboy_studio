import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ValuePropsSection } from "@/components/home/value-props-section"
import { AudienceSection } from "@/components/home/audience-section"
import { ServicesPreviewSection } from "@/components/home/services-preview-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ValuePropsSection />
      <AudienceSection />
      <ServicesPreviewSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
