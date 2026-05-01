
import Link from "next/link";
import { StatsSection } from "@/components/stats-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-full pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl mb-6">
            Build something that lasts.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Brand strategy, visual identity, and mentorship for founders. Deep dive into your current brand, audience, and market position to uncover gaps and real opportunities for growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#portfolio"
              className="rounded-full bg-[#063b36] px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#042824] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#063b36] transition-all"
            >
              View Portfolio
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-teal-600 transition-colors"
            >
              Client Stories <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>


        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialSection />
      </main>
    </div>
  );
}

