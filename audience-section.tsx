import { Users, Trophy, Briefcase, Video } from "lucide-react"

const audiences = [
  {
    icon: Users,
    title: "Gamers & Esports Teams",
    description: "Professional branding, websites, and social presence for competitive teams and players.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
  },
  {
    icon: Trophy,
    title: "Tournament Hosts",
    description: "Custom tournament websites with brackets, registration, and admin panels.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=600&q=80",
  },
  {
    icon: Briefcase,
    title: "Small Businesses & Startups",
    description: "Modern, responsive websites that help you stand out and convert visitors.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  },
  {
    icon: Video,
    title: "Content Creators",
    description: "Eye-catching graphics, video edits, and personal branding for your channels.",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&q=80",
  },
]

export function AudienceSection() {
  return (
    <section className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            Who We <span className="text-primary">Help</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From competitive gamers to growing businesses, we serve creators who want to level up their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={audience.image}
                  alt={audience.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full min-h-[240px] justify-end">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                  <audience.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-2">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
