"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-12 lg:py-20 xl:py-24 2xl:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900">
              Our <span className="text-primary-yellow">Vision</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
              <p>
                At Virtec, our vision is to set HVAC industry benchmarks in the field of Heat/Flow measurement services, VFDs, and IAQ Sensors. We are committed to continuous technological advancement through innovation, precision, and reliability. By consistently enhancing our product portfolio with the latest solutions for the HVAC industry, we deliver advanced, practical, and sustainable technologies that meet evolving customer needs while supporting environmental responsibility.
              </p>
              <p>
                Our vision drives us to create long-term value through excellence, integrity, and forward-looking engineering.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Icon/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Target
                  size={80}
                  className="sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[120px] lg:h-[120px] text-primary-yellow"
                  strokeWidth={1.5}
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 sm:border-3 md:border-4 border-primary-yellow/30 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
