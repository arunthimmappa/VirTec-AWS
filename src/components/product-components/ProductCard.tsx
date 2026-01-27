"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:border-primary-yellow/30 transition-all duration-300 bg-white"
    >
      <Link href={`/products/${product.slug}`} className="block">
        {/* Product Image */}
        <div className="relative h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden bg-slate-100">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-yellow/20 to-slate-900/10">
              <div className="text-4xl sm:text-5xl md:text-6xl font-display text-primary-yellow/30">V</div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-1.5 sm:gap-2 flex-wrap">
            {product.category.map((cat) => (
              <span
                key={cat}
                className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-primary-yellow/90 text-slate-900 backdrop-blur-sm"
              >
                {cat.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 sm:p-5 md:p-6">
          <h3 className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-display text-slate-900 mb-1.5 sm:mb-2 group-hover:text-primary-yellow transition-colors duration-300 leading-tight">
            {product.title}
          </h3>
          {product.subtitle && (
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-600 font-medium mb-2 sm:mb-3">
              {product.subtitle}
            </p>
          )}
          {product.description && (
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700 line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4 leading-relaxed">
              {product.description}
            </p>
          )}
          
          {/* CTA */}
          <div className="flex items-center text-primary-yellow group-hover:text-slate-900 transition-colors duration-300 font-medium text-xs sm:text-sm min-h-[44px]">
            Learn More
            <ArrowRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
