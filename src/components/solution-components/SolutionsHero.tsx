"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SolutionsHero() {
  return (
    <section className="relative pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16 xl:pt-40 xl:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6"
          >
            <h1 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900 leading-tight">
              Our <span className="text-primary-yellow">Solutions</span>
            </h1>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
              <p>
                Virtec provides comprehensive solutions for energy measurement, HVAC optimization, water utility management, and industrial IoT applications. Our integrated approach combines advanced flow measurement, intelligent control systems, and data analytics to deliver measurable results.
              </p>
              <p>
                Each solution is designed to address specific industry challenges while providing scalability, reliability, and long-term value for our customers.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-56 sm:h-64 md:h-72 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          >
            <Image
              src="/images/VIR-850 FLOW METER.jpg"
              alt="Virtec Solutions"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
