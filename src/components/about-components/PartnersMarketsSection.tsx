"use client";

import { motion } from "framer-motion";
import { Globe, Building2, Handshake, MapPin } from "lucide-react";

const markets = [
  {
    region: "North America",
    description: "Serving customers across the United States and Canada with comprehensive solutions and local support.",
  },
  {
    region: "Asia Pacific",
    description: "Growing network of partners and customers across Asia Pacific regions.",
  },
  {
    region: "Global",
    description: "Worldwide distribution network ensuring access to Virtec solutions wherever you are.",
  },
];

const partnerships = [
  {
    icon: Building2,
    title: "Manufacturing Partners",
    description: "Strategic partnerships with leading manufacturers and suppliers ensuring quality components and reliable supply chains.",
  },
  {
    icon: Handshake,
    title: "Distribution Network",
    description: "Extensive network of authorized distributors and representatives providing local expertise and support.",
  },
  {
    icon: MapPin,
    title: "Service Partners",
    description: "Trusted service partners worldwide offering installation, maintenance, and technical support services.",
  },
];

export default function PartnersMarketsSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-12 lg:py-20 xl:py-24 2xl:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 sm:space-y-12 md:space-y-14 lg:space-y-16"
        >
          {/* Global Markets */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-primary-yellow" />
                <h2 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900">
                  Global <span className="text-primary-yellow">Markets</span>
                </h2>
              </div>
              <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700 max-w-3xl mx-auto px-4">
                Virtec&apos;s solutions are deployed globally, supporting customers in diverse markets and applications.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-items-center lg:justify-items-stretch max-w-5xl mx-auto">
              {markets.map((market, index) => (
                <motion.div
                  key={market.region}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
                >
                  <h3 className="font-display text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-900 font-semibold mb-2 sm:mb-3 leading-tight">
                    {market.region}
                  </h3>
                  <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
                    {market.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partnerships */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">
              <h2 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900">
                Our <span className="text-primary-yellow">Partnerships</span>
              </h2>
              <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700 max-w-3xl mx-auto px-4">
                Building strong relationships with partners worldwide to deliver exceptional value and support to our customers.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {partnerships.map((partnership, index) => {
                const Icon = partnership.icon;
                return (
                  <motion.div
                    key={partnership.title}
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
                      {partnership.title}
                    </h3>
                    <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg leading-relaxed text-slate-700">
                      {partnership.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
