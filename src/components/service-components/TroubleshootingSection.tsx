"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function TroubleshootingSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-primary-yellow/10 flex items-center justify-center">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 md:w-6.5 md:h-6.5 lg:w-7 lg:h-7 text-primary-yellow" />
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900 font-semibold mb-3 sm:mb-4">
                Troubleshooting
              </h2>
            </div>
          </div>
          <div className="pl-0 md:pl-16 lg:pl-20">
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
              To maintain smooth operation and high dependability, we provide troubleshooting and repair of your Virtec equipment. Equipment is examined, repaired, recalibrated, or reconditioned with the same care and accuracy that it is manufactured with.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
