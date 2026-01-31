"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-12 sm:py-16 md:py-12 lg:py-20 xl:py-24 2xl:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900 mb-4 sm:mb-6 md:mb-8">
              Customer-Driven
              <br />
              <span className="text-primary-yellow">Services</span>
            </h2>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700"
          >
            <p>
              Virtec highly prioritizes the needs of its customers and the requirements of various industries. We ensure that customer preferences and inquiries are kept as the company&apos;s first priority. For this, we work endlessly on our customer care services. Our staff is specially trained to handle customer queries with patience and ease.
            </p>

            <p>
              The provision of maintenance contracts from Virtec includes inspection, servicing, recalibration, surveying, and training on how to use equipment as required.
            </p>

            <p>
              We possess the necessary on-site safety certifications to ensure the all-inclusive protection standards for safety equipment & project sites.
            </p>

            <p>
              We provide the pre-sales visit to our clients to give them a demonstration of all the products, aiming for the client-satisfaction as our first priority.
            </p>

            {/* Quote Section */}
            <div className="relative mt-6 sm:mt-8 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white border-l-4 border-l-primary-yellow border-t border-r border-b border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <Quote
                size={24}
                className="sm:w-8 sm:h-8 text-primary-yellow/30 absolute top-3 left-3 sm:top-4 sm:left-4"
              />
              <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg italic text-slate-800 pl-6 sm:pl-8 leading-relaxed">
                &quot;When we partner with our clients, we ensure that all their needs are met through a wide range of services, including on-site measurements, consulting services, lab analysis, instrument commissioning, instrument rentals, project handling, and training&quot;.
              </p>
            </div>

            <p className="mt-6">
              All our services are focused on providing modern and automated solutions for client satisfaction.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
