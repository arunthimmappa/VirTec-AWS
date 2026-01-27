"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function TurnkeyContractSection() {
  const benefits = [
    "Complete project management from initial concept to final commissioning",
    "Single point of responsibility for design, engineering, procurement, and construction",
    "Fixed-price contracts with guaranteed delivery timelines",
    "Comprehensive quality assurance and compliance with international standards",
    "Seamless integration of measurement and control systems",
    "Ongoing support and maintenance planning from day one",
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon and Title - Centered */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
            
            <h2 className="font-display text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900 font-semibold px-4">
              Turnkey Contract From Concept to Commissioning
            </h2>
          </div>

          {/* Main Description - Centered */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center mb-4 sm:mb-6 md:mb-8 px-4">
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
              The design and building of your facility will be our responsibility in accordance with the Turnkey contract. We will deliver the finished product at the predetermined cost and deadline.
            </p>
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
              Our comprehensive turnkey solutions encompass every aspect of your project, from initial consultation and design through engineering, procurement, installation, testing, and final commissioning. With Virtec as your single point of contact, you benefit from streamlined project execution, reduced complexity, and guaranteed performance outcomes.
            </p>
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
              We manage all project phases with meticulous attention to detail, ensuring seamless integration of advanced metering systems, data acquisition platforms, and control infrastructure. Our experienced team coordinates all stakeholders, manages timelines and budgets, and delivers fully operational systems that meet or exceed your specifications.
            </p>
          </div>

          {/* Benefits List - Centered with Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-display text-slate-900 font-semibold mb-3 sm:mb-4 md:mb-6 text-center px-4">
              Key Benefits of Our Turnkey Approach
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 text-left">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-50 hover:bg-primary-yellow/5 transition-colors duration-300"
                >
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary-yellow flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
