"use client";

import { motion } from "framer-motion";

export default function SettingTrendsSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-12 lg:py-20 xl:py-24 2xl:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-center">
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 max-w-4xl text-center"
          >
            <h2 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900">
              Setting Trends
            </h2>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
              <p>
                For years, Virtec has set bold trends in manufacturing through customer-driven innovations—delivering non-invasive energy solutions, IAQ sensing, and energy savings via advanced VFDs that slash costs, boost efficiency, and ensure seamless integration. Our rigorously certified, state-of-the-art products represent the gold standard in precise energy measurement, trusted worldwide for reliability and accuracy.
              </p>
              <p>
                With unwavering commitment to sustainable, environmentally harmless technologies, Virtec pioneers a greener future, empowering customers with forward-thinking solutions that protect the planet and drive long-term value.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
