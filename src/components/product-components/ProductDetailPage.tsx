"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Download, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

interface ProductDetailPageProps {
  product: Product;
}

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Hero Section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-display font-bold text-slate-900 leading-tight px-4">
                {product.title}
              </h1>
              {product.subtitle && (
                <h2 className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-display font-medium text-primary-yellow leading-tight px-4">
                  {product.subtitle}
                </h2>
              )}
            </div>

            {/* Product Image */}
            <div className="relative w-full -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10">
              {product.image ? (
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              ) : (
                <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center bg-slate-50">
                  <div className="text-center space-y-3 px-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary-yellow/20 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-primary-yellow"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base text-slate-500 font-medium">
                      Product Image
                    </p>
                    <p className="text-xs text-slate-400">
                      Image coming soon
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-slate-50 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-display font-bold text-slate-900 mb-4 sm:mb-6">
                Overview
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          {product.keyFeatures && product.keyFeatures.length > 0 && (
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-display font-bold text-slate-900 text-center">
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {product.keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 sm:gap-4 bg-white p-4 sm:p-6 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-yellow/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary-yellow" />
                    </div>
                    <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700 leading-relaxed">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Specifications Section */}
          {product.specifications && product.specifications.length > 0 && (
            <div className="bg-slate-50 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-display font-bold text-slate-900 mb-4 sm:mb-6">
                Specifications
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Download Brochure Section */}
          <div className="bg-gradient-to-r from-primary-yellow/10 to-primary-yellow/5 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-center">
            <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700">
                Get detailed technical specifications and information about this product.
              </p>
              {product.brochurePath ? (
                <Link
                  href={product.brochurePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-primary-yellow text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base shadow-[0_8px_30px_rgba(255,203,8,0.35)] hover:shadow-[0_12px_40px_rgba(255,203,8,0.45)] hover:brightness-105 transition-all duration-300 min-h-[44px]"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download Brochure
                </Link>
              ) : (
                <div className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-slate-300 text-slate-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base cursor-not-allowed min-h-[44px]">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Brochure Coming Soon
                </div>
              )}
            </div>
          </div>

          {/* FAQs Section */}
          {product.faqs && product.faqs.length > 0 && (
            <section className="bg-white w-full py-6 sm:py-8 md:py-12 lg:py-16">
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-display font-bold text-slate-900 mb-6 sm:mb-8 md:mb-12 text-center"
                >
                  Frequently Asked Questions
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-slate-50 p-3 sm:p-4 md:p-6 lg:p-8 space-y-2"
                >
                  {product.faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-slate-200 last:border-none overflow-hidden"
                    >
                      <motion.div
                        className="flex items-center justify-between py-3 sm:py-4 md:py-5 cursor-pointer min-h-[44px]"
                        onClick={() => toggleFaq(index)}
                      >
                        <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium text-slate-900 pr-3 sm:pr-4 leading-tight">
                          {index + 1}. {faq.question}
                        </p>
                        <motion.div
                          animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary-yellow" />
                        </motion.div>
                      </motion.div>

                      <AnimatePresence>
                        {openFaqIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700 pb-3 sm:pb-4 md:pb-5 pl-1 sm:pl-2 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
          )}

          {/* Contact CTA Section */}
          <div className="bg-slate-900 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-display font-bold text-white">
                Interested in this Product?
              </h2>
              <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-300">
                Contact our sales team to learn more about this product or request a quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <a
                  href="mailto:sales@virtec.us"
                  className="inline-flex items-center justify-center gap-2 bg-primary-yellow text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base shadow-[0_8px_30px_rgba(255,203,8,0.35)] hover:shadow-[0_12px_40px_rgba(255,203,8,0.45)] hover:brightness-105 transition-all duration-300 min-h-[44px]"
                >
                  Contact Us
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
