"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function VisionMissionSection() {
  const missionPoints = [
    "Accurate HVAC flow monitoring",
    "Save Energy with advanced VFD solutions",
    "Green sensing for reduced consumption with IAQ sensors",
    "Established excellence in thermal solutions",
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-12 lg:py-20 xl:py-24 2xl:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary-yellow/10 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-primary-yellow" strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900">
              Virtec <span className="text-primary-yellow">Mission</span>
            </h2>
          </div>
          
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center">
            <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-slate-900 leading-relaxed">
              Dependable know-how you trust.
            </p>
            
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700 max-w-3xl mx-auto px-4">
              We instill lasting sustainability in edifices for tenants and Developers. Our approach involves directing information and procedures to foster eco-conscious, hazard-free, and inviting atmospheres via cutting-edge metering tech.
            </p>
            
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 mt-4 sm:mt-6 md:mt-8 text-center max-w-2xl mx-auto px-4">
              {missionPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-center gap-2 sm:gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-yellow flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-lg leading-relaxed text-slate-700">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
