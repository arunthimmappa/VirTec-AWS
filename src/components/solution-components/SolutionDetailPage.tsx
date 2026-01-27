"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Solution } from "@/data/solutions";
import { getProductBySlug } from "@/lib/products";

interface SolutionDetailPageProps {
  solution: Solution;
}

export default function SolutionDetailPage({ solution }: SolutionDetailPageProps) {

  // Get related products if they exist
  const relatedProducts = solution.relatedProducts
    ? solution.relatedProducts
        .map((slug) => getProductBySlug(slug))
        .filter((product) => product !== undefined)
    : [];

  return (
    <div className="bg-white min-h-screen text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Hero Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-4 sm:space-y-6 px-4">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-display font-bold text-slate-900 leading-tight">
                {solution.title}
              </h1>
              {solution.subtitle && (
                <h2 className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-display font-medium text-primary-yellow leading-tight">
                  {solution.subtitle}
                </h2>
              )}
              <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {solution.description}
              </p>
            </div>
            
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            >
              <Image
                src="/images/VIR-850 FLOW METER.jpg"
                alt={solution.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
              />
            </motion.div>
          </div>

          {/* Overview Section - Business Focused */}
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-slate-200">
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary-yellow" />
                <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-display font-bold text-slate-900">
                  Solution Overview
                </h2>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                  {solution.overview}
                </p>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          {solution.howItWorks && solution.howItWorks.length > 0 && (
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center">
                <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-display font-bold text-slate-900">
                  How It Works
                </h2>
                <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-600 mt-2">Our implementation approach</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {solution.howItWorks.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative bg-white border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-primary-yellow/30 transition-all duration-300"
                  >
                    <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-yellow text-slate-900 font-bold text-sm sm:text-base flex items-center justify-center shadow-lg">
                      {index + 1}
                    </div>
                    <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700 leading-relaxed pt-1 sm:pt-2">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center">
                <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-display font-bold text-slate-900">
                  Products Used in This Solution
                </h2>
                <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-600 mt-2">Key products that power this solution</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {relatedProducts.map((product, index) => (
                  <motion.div
                    key={product.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white border border-slate-200 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-primary-yellow/30 transition-all duration-300"
                  >
                    <Link href={`/products/${product.slug}`} className="block">
                      <h3 className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-slate-900 mb-2 group-hover:text-primary-yellow transition-colors">
                        {product.title}
                      </h3>
                      {product.subtitle && (
                        <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-600 font-medium mb-2 sm:mb-3">
                          {product.subtitle}
                        </p>
                      )}
                      <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-600 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                      <div className="mt-3 sm:mt-4 flex items-center gap-2 text-primary-yellow text-xs sm:text-sm font-semibold group-hover:gap-3 transition-all min-h-[44px]">
                        <span>View Product</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Contact CTA Section */}
          <div className="bg-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-display font-bold text-white">
                Ready to Implement This Solution?
              </h2>
              <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-300">
                Contact our team to discuss how this solution can address your specific business needs and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <a
                  href="mailto:sales@virtec.us"
                  className="inline-flex items-center justify-center gap-2 bg-primary-yellow text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base shadow-[0_8px_30px_rgba(255,203,8,0.35)] hover:shadow-[0_12px_40px_rgba(255,203,8,0.45)] hover:brightness-105 transition-all duration-300 min-h-[44px]"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
