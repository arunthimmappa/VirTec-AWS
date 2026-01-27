"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Zap,
  Globe,
  Award,
  Factory,
  ArrowRight,
  Phone,
} from "lucide-react";
import Link from "next/link";

// Hero slides with Virtec products and content
const heroSlides = [
  {
    src: "/images/VIR-800-1.jpg",
    alt: "Electromagnetic Flow Meter- VIR EM- 800 series",
    badge: "Precision Flow Measurement upto 0.2% accuracy",
    title: "Electromagnetic Flow Meter- VIR EM- 800 series",
    subtitle: "Wide range (Range 6mm to 1000mm)",
    description:
      "State-of-the-art electromagnetic flow measurement technology delivering exceptional accuracy for water and HVAC applications worldwide.",
    icon: Factory,
    features: [
      "Inline Flanged with PN 16 and PN 25 rating and  Insertion Type",
      "Well structured programming Menu",
      "Low Maintenance",
      "Global Standards",
    ],
    ctaText: "Learn More",
    ctaLink: "/products/vir-800",
  },
  {
    src: "/images/VIR850 HEATMETER.jpg",
    alt: "Ultrasonic Flow and Heat Meter- VIR UF 850 series",
    badge: "Thermal Energy Measurement Simplified",
    title: "Ultrasonic Flow and Heat Meter- VIR UF 850 series",
    subtitle: "Low side and High Side measurement of Thermal Energy Dia : 125mm to 800 mm",
    description:
      "Precision Flow & Thermal energy measurement for district heating and cooling systems, ensuring optimal energy management and sustainability.",
    icon: Award,
    features: [
      "Modbus+4-20mA for Chiller interface",
      "Low Power Consumption",
      "Options to Integrate with 3rd party BTU calculators with pulse output.",
    ],
    ctaText: "Learn More",
    ctaLink: "/products/vir-uf",
  },
  {
    src: "/images/LXC-FAMILY.jpg",
    alt: "LXC Series Submetering Heat Meter",
    badge: "Built in Mbus Communication",
    title: "LXC Series Submetering Heat Meter - MID and NABL complied",
    subtitle: "Class 2 accuracy and .EN 1434-1:2022 being the latest general requirements version. Compliance ensures accuracy and reliability,",
    description:
      "Premium ultrasonic flow measurement solutions",
    icon: Globe,
    features: [
      "IP-65",
      "up to 500MM",
      "Battery Operated- 6 Years and 16 Years option",
      "Flow part built- in with one Temp Sensor",
    ],
    ctaText: "Learn More",
    ctaLink: "/products/lxc-series",
  },
  {
    src: "/images/VIR-832M- FLOW METER.jpg",
    alt: "Clamp-On UltraSonic Flow/Heat  Meter",
    badge: "Non-Invasive Technology",
    title: "VIR-832M and VIR-DX-900",
    subtitle: "Non-Invasive Ultrasonic Measurement Solution",
    description:
      "Revolutionary clamp-on ultrasonic flow measurement technology that requires no pipe modification, ideal for retrofit installations.",
    icon: CheckCircle,
    features: [
      "Non-Invasive Installation",
      "Modbus Communication",
      "Easy Retrofit",
      "Accuracy :+/-1%",
    ],
    ctaText: "Learn More",
    ctaLink: "/products/vir-832-clamp",
  },
  {
    src: "/images/VFD FAMILY.jpg",
    alt: "EM Series VFDs",
    badge: "AHUS, CSUs, Pumps , Ventilation applications",
    title: "EM760, EM 750, EM 700  Series",
    subtitle: "ISimple to Advanced Control Functions for HVAC",
    description:
      "Advanced HVAC inverter technology delivering energy-efficient motor control with precision and reliability for modern ventilation systems.",
    icon: Zap,
    features: [
      "Energy Efficient-Multiple PID loops",
      "Intelligent Control- Mini DDC algorithms",
      "Simple BMS Integration.",
      "HVAC Optimized",
    ],
    ctaText: "Learn More",
    ctaLink: "/products/em-760",
  },
  {
    src: "/images/WATER METER.jpg",
    alt: "Ultrasonic Smart Water Meter",
    badge: "Built in Mbus Communication",
    title: "Water Meter - LXC Series",
    subtitle: "Precision Water Flow Measurement Technology",
    description:
      "Premium ultrasonic flow measurement solutions",
    icon: Globe,
    features: [
      "IP-68",
      "upto 500MM",
      "Advanced Technology",
      "Export Ready",
    ],
    ctaText: "Learn More",
    ctaLink: "/products/lxc-water",
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    containScroll: "trimSnaps"
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const isInteracting = useRef(false);
  const AUTOPLAY_DELAY = 8000;

  // Slide change handler
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Autoplay function
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (emblaApi && !isInteracting.current) {
        emblaApi.scrollNext();
      }
    }, AUTOPLAY_DELAY);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  // Sync Autoplay & Interaction
  useEffect(() => {
    if (!emblaApi) return;

    startAutoplay();
    emblaApi.on("select", onSelect);

    // Pause on interaction
    const onPointerDown = () => {
      isInteracting.current = true;
      stopAutoplay();
    };
    const onPointerUp = () => {
      isInteracting.current = false;
      startAutoplay();
    };

    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);

    return () => {
      stopAutoplay();
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
    };
  }, [emblaApi, onSelect, startAutoplay, stopAutoplay]);

  // Navigation
  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      stopAutoplay();
      emblaApi.scrollPrev();
      startAutoplay();
    }
  }, [emblaApi, startAutoplay, stopAutoplay]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      stopAutoplay();
      emblaApi.scrollNext();
      startAutoplay();
    }
  }, [emblaApi, startAutoplay, stopAutoplay]);
  const scrollTo = useCallback(
    (idx: number) => emblaApi && emblaApi.scrollTo(idx),
    [emblaApi]
  );

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="hero-section relative bg-white pt-[8.75rem] sm:pt-[11.5rem] md:pt-[7.75rem] lg:pt-0 pb-4 sm:pb-6 md:pb-0 lg:h-screen lg:max-h-screen flex flex-col justify-center">
      {/* Embla Carousel */}
      <div
        className="relative w-full overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] select-none"
              style={{ minWidth: "100%" }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12">
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 items-center">
                  <div className="w-full lg:w-2/5 flex items-center">
                    <AnimatePresence mode="sync">
                      {selectedIndex === index && (
                        <motion.div
                          key={index}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="space-y-[1em] sm:space-y-[1.1em] md:space-y-[1.2em] lg:space-y-[1.3em] w-full"
                        >
                          {/* Badge with transition */}
                          <motion.div
                            variants={textVariants}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-flex items-center gap-[0.5em] px-[0.875em] py-[0.5em] bg-primary-yellow/10 rounded-full text-slate-900 text-[0.7rem] sm:text-xs md:text-xs lg:text-xs uppercase tracking-[0.2em] border border-primary-yellow/30"
                          >
                            <slide.icon className="w-[1em] h-[1em] text-primary-yellow" />
                            <span>{slide.badge}</span>
                          </motion.div>

                          {/* Main Heading with staggered animation */}
                          <div className="space-y-[0.4em]">
                            <motion.h1
                              variants={textVariants}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className="font-display text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl text-slate-900 leading-[1.1] sm:leading-tight"
                            >
                              {slide.title}
                            </motion.h1>

                          </div>

                          {/* Description with transition */}
                          <motion.p
                            variants={textVariants}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-slate-700 leading-relaxed"
                          >
                            {slide.description}
                          </motion.p>

                          {/* Features List - Hidden on mobile/tablet, visible on md+ */}
                          <motion.div
                            variants={textVariants}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="hidden md:flex flex-wrap gap-x-[1em] gap-y-[0.5em]"
                          >
                            {slide.features.map((feature, featureIndex) => (
                              <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: 0.6 + featureIndex * 0.1,
                                }}
                                className="flex items-center gap-[0.5em] text-slate-900"
                              >
                                <CheckCircle
                                  className="w-[1em] h-[1em] text-primary-yellow flex-shrink-0"
                                />
                                <span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-sm font-medium">
                                  {feature}
                                </span>
                              </motion.div>
                            ))}
                          </motion.div>

                          {/* CTA Buttons with transition */}
                          <motion.div
                            variants={textVariants}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3"
                          >
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-full sm:w-auto"
                            >
                              <Link
                                href={slide.ctaLink || "#products"}
                                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-primary-yellow px-[1.5em] py-[0.75em] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base text-slate-900 transition hover:brightness-95 font-semibold"
                              >
                                Learn More
                                <ArrowRight className="w-[1em] h-[1em] ml-[0.5em]" />
                              </Link>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-full sm:w-auto"
                            >
                              <Link
                                href="mailto:sales@virtec.us"
                                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-900 px-[1.5em] py-[0.75em] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base transition hover:bg-slate-50 hover:border-slate-400 font-semibold"
                              >
                                Contact Us
                              </Link>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right Column - Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full lg:w-3/5 relative h-56 sm:h-72 md:h-80 lg:h-[420px] xl:h-[500px] 2xl:h-[600px]"
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-contain"
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Navigation Arrows */}
      <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:left-6 lg:left-8 z-40 items-center">
        <button
          onClick={scrollPrev}
          className="group relative inline-flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-offset-2 focus:ring-offset-transparent min-h-[40px] min-w-[40px] sm:min-h-[48px] sm:min-w-[48px] lg:min-h-[56px] lg:min-w-[56px]"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 transition-transform group-hover:-translate-x-1" />
        </button>
      </div>
      <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:right-6 lg:right-8 z-40 items-center">
        <button
          onClick={scrollNext}
          className="group relative inline-flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-offset-2 focus:ring-offset-transparent min-h-[40px] min-w-[40px] sm:min-h-[48px] sm:min-w-[48px] lg:min-h-[56px] lg:min-w-[56px]"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Custom Pagination */}
      <div className="hero-pagination absolute bottom-4 sm:bottom-6 md:bottom-4 lg:bottom-6 xl:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 lg:h-3.5 lg:w-3.5 xl:h-4 xl:w-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:ring-offset-2 focus:ring-offset-transparent ${selectedIndex === index
              ? "w-6 sm:w-7 md:w-8 lg:w-10 xl:w-12 bg-primary-yellow"
              : "bg-slate-300 hover:bg-slate-400"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
