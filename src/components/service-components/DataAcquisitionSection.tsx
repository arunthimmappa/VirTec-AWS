"use client";

import { motion } from "framer-motion";
import { Database } from "lucide-react";
import Image from "next/image";

export default function DataAcquisitionSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-12 lg:py-16 xl:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-56 sm:h-64 md:h-72 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] order-2 lg:order-1"
          >
            <Image
              src="/images/VIR-832-M TRANSMITTER.jpg"
              alt="Data Acquisition Systems"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-primary-yellow/10 flex items-center justify-center">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 md:w-6.5 md:h-6.5 lg:w-7 lg:h-7 text-primary-yellow" />
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900 font-semibold mb-3 sm:mb-4">
                  High-End Data Acquisition Systems
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
              Virtec provides AMR and Data Collections devices that use a combination of Pulsed and M-Bus technology. With this, you may achieve more accurate meter readings and billings with fewer site visits and manual readings.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
