"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote: "Fast, reliable, and clean designs. Moonboy Studio delivered exactly what we needed for our tournament.",
    author: "Alex Chen",
    role: "Tournament Organizer",
    avatar: "AC",
  },
  {
    quote: "Best Discord setup I have ever used. The automation and security features are top-notch.",
    author: "Sarah Kim",
    role: "Community Manager",
    avatar: "SK",
  },
  {
    quote: "Perfect for my esports team. The website they built has helped us attract sponsors.",
    author: "Marcus Rivera",
    role: "Team Captain",
    avatar: "MR",
  },
  {
    quote: "The video edits for my YouTube channel were incredible. Subscriptions went up 40% after the rebrand.",
    author: "Jake Thompson",
    role: "Content Creator",
    avatar: "JT",
  },
  {
    quote: "Professional, responsive, and they truly understand gaming culture. Highly recommend!",
    author: "Emma Zhang",
    role: "Indie Game Dev",
    avatar: "EZ",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real feedback from gamers, creators, and businesses who trusted us with their projects.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {`"${testimonial.quote}"`}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-sm font-semibold text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 p-6">
            <Quote className="h-8 w-8 text-primary/30 mb-4" />
            <p className="text-muted-foreground mb-6 leading-relaxed min-h-[80px]">
              {`"${testimonials[currentIndex].quote}"`}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-sm font-semibold text-primary">
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <div className="font-medium text-sm">{testimonials[currentIndex].author}</div>
                <div className="text-xs text-muted-foreground">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prev} className="h-10 w-10 rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  )}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} className="h-10 w-10 rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
