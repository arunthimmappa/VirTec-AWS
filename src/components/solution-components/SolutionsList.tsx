"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllSolutions } from "@/lib/solutions";

export default function SolutionsList() {
  const solutions = getAllSolutions();

  return (
    <section className="relative py-12 sm:py-16 md:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:border-primary-yellow/30 transition-all duration-300 bg-white"
            >
              {/* Solution Content */}
              <Link href={`/solutions/${solution.slug}`} className="block">
                <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-display font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-primary-yellow transition-colors">
                    {solution.title}
                  </h3>
                  {solution.subtitle && (
                    <h4 className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-primary-yellow mb-3 sm:mb-4">
                      {solution.subtitle}
                    </h4>
                  )}
                  <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700 leading-relaxed mb-4 sm:mb-6">
                    {solution.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary-yellow font-semibold group-hover:gap-3 transition-all min-h-[44px]">
                    <span className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-lg">Learn More</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
