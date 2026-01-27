"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navbarCategories, getNavbarProductsByCategory, type ProductCategory } from "@/data/navbar-products";
import { getProductBySlug } from "@/lib/products";

/**
 * Extract and highlight series number from product label
 * Returns an object with the series part and the rest
 */
function parseProductLabel(label: string): { series: string; rest: string } {
  // Special cases first
  if (label.startsWith("VIR UF VIR-850")) {
    return { series: "VIR UF VIR-850", rest: " upto 800mm" };
  }
  if (label.startsWith("VIR-832 M/VIR DX-900")) {
    return { series: "VIR-832 M/VIR DX-900", rest: " Clamp On- upto 1200mm" };
  }
  
  // Match patterns like "Eco EM-700", "Basic EM-750", "Advanced EM-760"
  const prefixModelMatch = label.match(/^([A-Za-z]+\s+[A-Z]{2,}-[0-9]+)/);
  if (prefixModelMatch) {
    const series = prefixModelMatch[1];
    const rest = label.substring(series.length).trim();
    return { series, rest: rest ? ` ${rest}` : "" };
  }
  
  // Match model numbers like VIR-800, VIR-850, EM-700, EM-750, VIR-INSRT-800, etc.
  const modelMatch = label.match(/^([A-Z]{2,}(?:-[0-9]+(?:-[A-Z]+)?)?)/);
  if (modelMatch) {
    const model = modelMatch[1];
    const rest = label.substring(model.length).trim();
    return { series: model, rest: rest ? ` ${rest}` : "" };
  }
  
  // Match "LXC" followed by words
  const lxcMatch = label.match(/^(LXC)(\s+.+)?$/);
  if (lxcMatch) {
    return { series: lxcMatch[1], rest: lxcMatch[2] || "" };
  }
  
  // Fallback: return full label as series
  return { series: label, rest: "" };
}

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("flow");

  // Get products from Navbar structure (source of truth)
  const navbarProducts = getNavbarProductsByCategory(activeCategory);
  
  // Get full product details for images and descriptions
  const filteredProducts = navbarProducts.map((navbarProduct) => {
    const fullProduct = getProductBySlug(navbarProduct.slug);
    return {
      ...navbarProduct,
      image: fullProduct?.image,
      description: fullProduct?.description || navbarProduct.description,
    };
  });
  
  // Get categories from Navbar
  const categories = navbarCategories.map((cat) => ({
    id: cat.id,
    name: cat.label,
    description: cat.description,
  }));

  return (
    <section id="products" className="relative py-12 sm:py-16 md:py-12 lg:py-20 xl:py-24 2xl:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900 mb-3 sm:mb-4 md:mb-6">
            Featured <span className="text-primary-yellow">Products</span>
          </h2>
          
          {/* Product Portfolio Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700 max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 px-4"
          >
            Virtec offers a comprehensive range of advanced solutions designed to optimize efficiency, accuracy, and sustainability:
          </motion.p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-3 lg:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 min-h-[44px] flex items-center justify-center ${
                  activeCategory === category.id
                    ? "bg-primary-yellow text-slate-900 shadow-[0_4px_20px_rgba(255,203,8,0.35)]"
                    : "bg-white text-slate-700 hover:bg-primary-yellow/20 border border-slate-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
          >
            {filteredProducts.map((product, index) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="block group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:border-primary-yellow/30 transition-all duration-300 bg-white cursor-pointer h-full"
                >
                  {/* Product Image */}
                  <div className={`relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden ${
                    product.image?.includes("VIR-832-M TRANSMITTER") || product.slug === "vir-insrt-800" ? "bg-white" : "bg-slate-100"
                  }`}>
                    {product.image ? (
                      product.image.includes("VIR-832-M TRANSMITTER") ? (
                        <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-10 md:p-12 lg:p-14">
                          <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                              src={product.image}
                              alt={product.label}
                              width={800}
                              height={600}
                              className="object-contain max-w-[70%] max-h-[70%] w-auto h-auto group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                        </div>
                      ) : product.slug === "vir-insrt-800" ? (
                        <Image
                          src={product.image}
                          alt={product.label}
                          fill
                          className="object-contain scale-[1.3] group-hover:scale-[1.35] transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <Image
                          src={product.image}
                          alt={product.label}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      )
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-yellow/20 to-slate-900/10">
                        <div className="text-3xl sm:text-4xl font-display text-primary-yellow/30">V</div>
                      </div>
                    )}
                    {product.slug !== "vir-insrt-800" && (
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4 sm:p-5 md:p-6">
                    {(() => {
                      const { series, rest } = parseProductLabel(product.label);
                      return (
                        <h3 className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-900 mb-2 group-hover:text-primary-yellow transition-colors leading-tight font-bold">
                          <span>{series}</span>
                          {rest && <span>{rest}</span>}
                        </h3>
                      );
                    })()}
                    {product.description && (
                      <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-600 font-medium line-clamp-2 sm:line-clamp-3">
                        {product.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
