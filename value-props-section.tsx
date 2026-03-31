import { Zap, Gamepad2, MessageSquare, Wallet } from "lucide-react"

const valueProps = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Get your projects done quickly with our streamlined workflow and dedicated team.",
    gradient: "from-yellow-400/20 to-orange-500/20",
  },
  {
    icon: Gamepad2,
    title: "Gamer-Focused Design",
    description: "We understand gaming culture and create designs that resonate with your audience.",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    icon: MessageSquare,
    title: "Discord-Based Workflow",
    description: "Communicate directly through Discord for real-time updates and seamless collaboration.",
    gradient: "from-indigo-400/20 to-primary/20",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description: "Quality digital services at prices that work for indie creators and small teams.",
    gradient: "from-accent/20 to-emerald-500/20",
  },
]

export function ValuePropsSection() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">Moonboy</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine speed, quality, and gaming expertise to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => (
            <div
              key={prop.title}
              className="group relative p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${prop.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <prop.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg mb-2">
                  {prop.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
