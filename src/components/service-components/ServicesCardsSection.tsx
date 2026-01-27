"use client";

import { motion } from "framer-motion";
import { Settings, GraduationCap, Search, Award, Users, LucideIcon } from "lucide-react";

interface ServiceCardData {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: ServiceCardData[] = [
  {
    icon: Settings,
    title: "Maintenance Contracts & Supply of Spare Parts",
    description: "With the aid of our maintenance services, we assist you in a successful transition to your new product or solution. Our team of experts is there to help in the event of mechanical issues or breakdowns. We are also there to help you get the spare parts that are not easily available in case you need any.",
  },
  {
    icon: GraduationCap,
    title: "Heat Meter Training",
    description: "Virtec is currently delivering BTU meter training for the selection of Heat Metering Technology. We will assist you in developing the knowledge and skills required for the proper installation, exchanging, testing, and commissioning of a portfolio of building controls and meters, as well as instructions for ongoing inspections.",
  },
  {
    icon: Search,
    title: "Troubleshooting",
    description: "To maintain smooth operation and high dependability, we provide troubleshooting and repair of your Virtec equipment. Equipment is examined, repaired, recalibrated, or reconditioned with the same care and accuracy that it is manufactured with.",
  },
  {
    icon: Award,
    title: "Quality Control",
    description: "To ensure the quality of our services, we closely adhere to well-defined development protocols as we move forward with our product development. We will appoint a quality-control manager to ensure that all developing procedures follow international standards, whether your project is basic hardware/software design or complex system development.",
  },
  {
    icon: Users,
    title: "Sales Coverage",
    description: "We continue to provide thorough sales coverage by employing educated, highly skilled & qualified application engineers and manufacturer representatives who are familiar with the particular demands and requirements of the market. Virtec is a service-oriented business with an unmatched dedication to client happiness. That matters the most to us.",
  },
];

export default function ServicesCardsSection() {
  // Grid positions for the custom layout
  // Row 1: Cards 1, 2, 3 (each taking 2 columns in a 6-column grid)
  // Row 2: Card 4 between 1&2 (cols 2-3), Card 5 between 2&3 (cols 4-5)
  const gridPositions = [
    "lg:col-span-2",           // Card 1: cols 1-2 on large screens
    "lg:col-span-2",           // Card 2: cols 3-4 on large screens
    "lg:col-span-2",           // Card 3: cols 5-6 on large screens
    "lg:col-span-2 lg:col-start-2", // Card 4: cols 2-3 (between 1&2)
    "lg:col-span-2 lg:col-start-4", // Card 5: cols 4-5 (between 2&3)
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const gridPosition = gridPositions[index];
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col ${gridPosition} ${
                  index >= 3 ? 'mt-0' : ''
                }`}
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-primary-yellow/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary-yellow/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-6.5 md:h-6.5 lg:w-7 lg:h-7 text-primary-yellow" />
                </div>
                <h3 className="font-display text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-900 font-semibold mb-2 sm:mb-3 group-hover:text-primary-yellow transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700 flex-grow">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
