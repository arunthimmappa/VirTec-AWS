"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon: Icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary-yellow/10 flex items-center justify-center group-hover:bg-primary-yellow/20 transition-colors duration-300">
          <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary-yellow" />
        </div>
        <div className="flex-1 space-y-3">
          <h3 className="font-display text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-900 font-semibold group-hover:text-primary-yellow transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
