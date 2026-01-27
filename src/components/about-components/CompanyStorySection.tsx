"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CompanyStorySection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-12 lg:py-20 xl:py-24 2xl:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-56 sm:h-64 md:h-72 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          >
            <Image
              src="/images/VIR-850 FLOW METER.jpg"
              alt="Virtec Company Story"
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
            <h2 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900">
              Our <span className="text-primary-yellow">Story</span>
            </h2>
            
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
              <p>
                Founded with a vision to revolutionize heat and flow measurement technology, Virtec Instruments Inc. emerged from a deep understanding of the growing need for precision instrumentation in HVAC and water management systems. Our journey began with a simple yet powerful mission: to provide solutions that combine cutting-edge technology with practical applications.
              </p>
              <p>
                From our headquarters in Salt Lake City, Utah, we have grown into a globally recognized brand, serving clients across continents with our comprehensive portfolio of ultrasonic and electromagnetic measurement devices. Our commitment to innovation has driven us to continuously push the boundaries of what&apos;s possible in flow and heat measurement technology.
              </p>
              <p>
                Today, Virtec stands as a testament to what can be achieved when technical expertise meets customer-focused innovation. We have built lasting relationships with clients who trust us not just for our products, but for our dedication to their success and our shared commitment to creating a more sustainable future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
