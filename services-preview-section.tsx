import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Palette, Film, MessageCircle, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom, responsive websites for tournaments, portfolios, and businesses.",
    features: ["Mobile-Friendly", "Modern UI", "Fast Deployment"],
    href: "/services#web",
  },
  {
    icon: Palette,
    title: "Poster / Graphic Design",
    description: "Eye-catching visuals for events, social media, and brand identity.",
    features: ["Event Posters", "Social Content", "Branding Kits"],
    href: "/services#design",
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Professional edits for short-form content and gaming montages.",
    features: ["TikTok/Reels", "YouTube Edits", "Gaming Montages"],
    href: "/services#video",
  },
  {
    icon: MessageCircle,
    title: "Discord Server Setup",
    description: "Complete server configuration with bots, roles, and security.",
    features: ["Bot Integration", "Role Systems", "Security Setup"],
    href: "/services#discord",
  },
]

export function ServicesPreviewSection() {
  return (
    <section className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-96 bg-primary/5 rounded-r-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Everything you need to build, grow, and scale your digital presence — all under one roof.
            </p>
          </div>
          <Button variant="ghost" className="mt-4 lg:mt-0 gap-2" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
