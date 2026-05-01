import { TestimonialCarousel } from "@/components/ui/testimonial"

const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "Amara Diallo",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&q=80",
    description: "\"Working with The John Adeniyi was the single best investment I made for my business. In 3 weeks, we went from a scattered, confusing brand to something I'm genuinely proud of.\""
  },
  {
    id: 2,
    name: "Kofi Mensah",
    avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&q=80",
    description: "\"I finally understand what makes my brand different. The positioning work was eye-opening I've been saying the wrong things for two years.\""
  },
  {
    id: 3,
    name: "Sade Okonkwo",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80",
    description: "\"The offer redesign session alone was worth 10x the investment. We restructured two offers and immediately saw better conversion on our sales calls.\""
  },
  {
    id: 4,
    name: "David Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
    description: "\"The visual identity perfectly captured our brand's essence. We've seen a 40% increase in brand recognition since the relaunch. Truly transformative work.\""
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&q=80",
    description: "\"As a founder, I was struggling with clarity. John's mentorship helped me streamline my vision and focus on what truly matters. Highly recommended!\""
  }
]

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 dark:text-white text-black">Client Success Stories</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          See how our brand strategy and positioning work has transformed businesses and clarified their message.
        </p>
        <TestimonialCarousel 
          testimonials={TESTIMONIAL_DATA}
          className="max-w-2xl mx-auto"
        />
      </div>
    </section>
  )
}

