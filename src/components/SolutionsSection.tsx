"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Wind,
  Server,
  Building2,
  FileSearch,
  Fan,
} from "lucide-react";

const solutions = [
  {
    id: 1,
    name: "Energy Saving",
    icon: Zap,
  },
  {
    id: 2,
    name: "Air Conditioning",
    icon: Wind,
  },
  {
    id: 3,
    name: "Data Center",
    icon: Server,
  },
  {
    id: 4,
    name: "Building Automation Systems",
    icon: Building2,
  },
  {
    id: 5,
    name: "Energy Audit",
    icon: FileSearch,
  },
  {
    id: 6,
    name: "Heating, Ventilation & Air Conditioning (HVAC)",
    icon: Fan,
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-12 sm:py-16 md:py-12 lg:py-20 xl:py-24 2xl:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900 mb-3 sm:mb-4">
            Our <span className="text-primary-yellow">Solutions</span>
          </h2>
          <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700 max-w-3xl">
            We have a wide range of products and services for our clients that focus on:
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-8 xl:gap-10">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center p-4 sm:p-6 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-200 hover:border-primary-yellow/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                {/* Icon */}
                <div className="mb-2 sm:mb-3 md:mb-4 p-2.5 sm:p-3 md:p-4 rounded-full bg-primary-yellow/10 group-hover:bg-primary-yellow/20 transition-colors">
                  <IconComponent
                    size={36}
                    className="sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-[48px] xl:h-[48px] text-primary-yellow"
                    strokeWidth={1.5}
                  />
                </div>
                
                {/* Solution Name */}
                <h3 className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-900 leading-tight">
                  {solution.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
