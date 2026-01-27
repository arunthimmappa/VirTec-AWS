"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, Star, FileCheck } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "ISO Standards",
    description: "Compliance with international quality management systems and standards for precision instrumentation.",
  },
  {
    icon: CheckCircle,
    title: "Industry Certifications",
    description: "Certified for use in HVAC, water utilities, and industrial applications across global markets.",
  },
  {
    icon: Star,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes ensuring reliability and accuracy in all our products.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Meet or exceed regulatory requirements in multiple jurisdictions, ensuring global compatibility.",
  },
];

const standards = [
  "MID (Measuring Instruments Directive) compliant",
  "EN 1434 Heat Meter Standards",
  "CE Marking for European Markets",
  "EMC Directive Compliance",
];

export default function CertificationsSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-12 lg:py-20 xl:py-24 2xl:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12"
        >
          <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
            <h2 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900">
              Certifications & <span className="text-primary-yellow">Standards</span>
            </h2>
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700 max-w-3xl mx-auto px-4">
              Virtec is committed to maintaining the highest standards of quality, safety, and compliance across all our products and services.
            </p>
          </div>

          {/* Certification Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-primary-yellow/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary-yellow/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-6.5 md:h-6.5 lg:w-7 lg:h-7 text-primary-yellow" />
                  </div>
                  <h3 className="font-display text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-900 font-semibold mb-2 sm:mb-3 group-hover:text-primary-yellow transition-colors duration-300 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
                    {cert.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Standards List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-200"
          >
            <h3 className="font-display text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-slate-900 font-semibold mb-4 sm:mb-6">
              Key Standards & Compliance
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {standards.map((standard, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-yellow mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-slate-700 leading-relaxed">
                    {standard}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
