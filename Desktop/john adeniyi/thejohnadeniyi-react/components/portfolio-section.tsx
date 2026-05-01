import Link from "next/link";

const PROJECTS = [
  {
    title: "Brand Positioning Workbook",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&h=600&fit=crop",
  },
  {
    title: "Offer Design Crash Course",
    category: "Business",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
  },
  {
    title: "Brand Identity Starter Kit",
    category: "Design",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
  },
  {
    title: "Brand Clarity Audio Sessions",
    category: "Mentorship",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
  },
  {
    title: "Group Brand Workshop (Live)",
    category: "Training",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  },
  {
    title: "Brand Clarity Scorecard",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-teal-500"></div>
            <p className="text-teal-500 font-semibold tracking-widest uppercase text-sm">
              Portfolio & Products
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight max-w-xl tracking-tight">
            Built for different stages of growth.
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <article 
              key={index} 
              className="bg-zinc-50 dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col group transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              {/* Product Image */}
              <div className="relative h-64 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest rounded-full text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h3>
                
                <div className="mt-auto">
                  <Link 
                    href="https://wa.link/kvw9gr" 
                    target="_blank"
                    className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors group/link"
                  >
                    Learn More
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
