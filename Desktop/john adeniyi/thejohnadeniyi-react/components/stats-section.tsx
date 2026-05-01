"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const stats = [
  { value: 5, label: "5 Years Experience", suffix: "" },
  { value: 30, label: "30+ Brands Transformed", suffix: "+" },
  { value: 90, label: "90% Client Retention", suffix: "%" },
  { value: 20, label: "20 Industries served", suffix: "" },
]

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-12 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
              {index < stats.length - 1 && (
                <div className="hidden md:block h-12 w-px bg-slate-200 dark:border-slate-800 ml-16" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
