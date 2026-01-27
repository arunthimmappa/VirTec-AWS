"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function TeamSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-12 lg:py-20 xl:py-24 2xl:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6 md:space-y-8"
        >
          <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary-yellow" />
              <h2 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900">
                Our <span className="text-primary-yellow">Team</span>
              </h2>
            </div>
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700 max-w-3xl mx-auto px-4">
              Behind Virtec&apos;s success is a dedicated team of professionals committed to excellence, innovation, and customer satisfaction.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          >
            <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700 text-center px-4">
              <p>
                Our team comprises experienced engineers, skilled technicians, dedicated customer service professionals, and forward-thinking leaders who bring decades of combined experience in measurement technology, HVAC systems, and industrial applications.
              </p>
              <p>
                From our headquarters in Salt Lake City, Utah, to our global network of representatives, every member of the Virtec team shares a common commitment: delivering solutions that exceed expectations and support our customers&apos; long-term success.
              </p>
              <p className="text-slate-700 font-semibold">
                We&apos;re always looking for talented individuals to join our growing team. Contact us to learn about career opportunities.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
