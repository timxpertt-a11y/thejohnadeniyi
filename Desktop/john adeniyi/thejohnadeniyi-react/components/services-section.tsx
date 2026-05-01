"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, TrendingUp, Users } from "lucide-react";

const services = [
  {
    title: "Brand Strategy",
    description: "Deep dive into your brand's core, audience, and market position to find your unique advantage.",
    icon: Target,
  },
  {
    title: "Visual Identity",
    description: "Crafting a distinctive visual language that resonates with your audience and stands out in the market.",
    icon: Lightbulb,
  },
  {
    title: "Growth Mentorship",
    description: "Personalized guidance for founders looking to scale their impact and build sustainable brands.",
    icon: TrendingUp,
  },
  {
    title: "Market Positioning",
    description: "Strategic analysis to ensure your brand occupies a premium space in your customer's mind.",
    icon: Users,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Services & Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Tailored solutions designed to help founders build influential and lasting brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-teal-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/20 rounded-lg flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
