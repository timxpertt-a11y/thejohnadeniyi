import Link from "next/link";

const PRODUCTS = [
  {
    title: "Brand Positioning Workbook",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&h=600&fit=crop",
  },
  {
    title: "Offer Design Crash Course",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
  },
  {
    title: "Brand Identity Starter Kit",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
  },
  {
    title: "Brand Clarity Audio Sessions",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
  },
  {
    title: "Group Brand Workshop (Live)",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  },
  {
    title: "Brand Clarity Scorecard",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen pt-24">
      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-teal-500"></div>
            <p className="text-teal-500 font-semibold tracking-widest uppercase text-sm">
              All Products
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight max-w-xl tracking-tight">
            Built for different stages of growth.
          </h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <article 
              key={index} 
              className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col group transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              {/* Product Image */}
              <div className="relative h-64 w-full bg-slate-100 dark:bg-slate-800">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Learn More Button */}
              <div className="p-4 flex justify-center border-t border-slate-100 dark:border-slate-800">
                <Link 
                  href="/contact" 
                  className="block w-full text-center px-6 py-3 rounded-full font-medium text-sm transition-colors bg-[#063b36] text-white hover:bg-[#042824]"
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>

      </main>
    </div>
  );
}
