import { TestimonialSection } from "@/components/testimonial-section";

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
        </div>

        <TestimonialSection />
      </main>
    </div>
  );
}
