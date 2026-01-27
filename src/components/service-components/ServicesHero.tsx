"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesHero() {
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
              Our <span className="text-primary-yellow">Services</span>
            </h1>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
              <p>
                In the arena of smart energy and water flow measurement solutions, we are one of the top manufacturers, and we pledge to offer the best assistance possible. By being our clients&apos; preferred decarbonization partner, we want to build long-term value for all of our stakeholders—customers, workers, shareholders, and partners. We always look ahead in search of a better energy future that improves our clientele&apos;s efficiency while generating long-term value for the communities they serve. We do this via our leadership, experience, and enthusiasm for partnerships.
              </p>
              <p>
                Our expertise enables us to completely grasp and meet the needs of various applications, markets, languages, legislation, standards, procedures, and requirements.
              </p>
              <p>
                We provide a range of service alternatives to satisfy our clients&apos; specific service demands. We offer low-cost and high-quality services.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-56 sm:h-64 md:h-72 lg:h-96 overflow-hidden"
          >
            <Image
              src="/images/VIR-800 DISPLAY2.jpg"
              alt="Virtec VIR-800 Display - Smart Energy and Water Flow Measurement Solutions"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
