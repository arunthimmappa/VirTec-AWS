"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-12 lg:py-20 xl:py-24 2xl:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Mobile: About Us heading above image */}
          <h2 className="font-display text-2xl sm:text-2xl md:text-3xl text-slate-900 lg:hidden">
            About Us
          </h2>

          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-56 sm:h-64 md:h-72 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          >
            <Image
              src="/virtec-aboutus.png"
              alt="About Virtec"
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
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="hidden lg:block font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900">
              About Us
            </h2>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700 font-display">
              <p>
                Virtec is a global leader in Heat and Flow Management Solutions for HVAC and Water applications. Our solutions are built on advanced Ultrasonic and Electromagnetic measurement technologies, delivering exceptional accuracy, reliability, and performance. Through our high-end services and innovative product portfolio, Virtec has established itself as a trusted provider of technologically advanced heat and flow measurement instruments worldwide.
              </p>
              <p>
                Our comprehensive offering includes precision instrumentation, sophisticated software platforms, and specialized technical measurement services—engineered to meet the highest standards of quality, safety, and efficiency. We take complete responsibility for both the supply and overall performance of our installed systems, ensuring seamless integration and long-term reliability.
              </p>
              <p>
                At Virtec, we are committed to creating a greener tomorrow by delivering smart metering solutions today. Our devices are designed with a strong focus on high precision, measurement accuracy, low power consumption, and long-term stability, empowering sustainable energy and water management across industries.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
