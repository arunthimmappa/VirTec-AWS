"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type NavProduct = {
  label: string;
  href: string;
  description: string;
};

type NavCategory = {
  label: string;
  href: string;
  description: string;
  products?: NavProduct[];
};

type NavChild = {
  label: string;
  href: string;
  description: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  categories?: NavCategory[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "#",
    categories: [
      {
        label: "Flow Meters",
        href: "/products#flow-meters",
        description: "High-precision ultrasonic and electromagnetic flow measurement",
        products: [
          {
            label: "VIR-800 Series",
            href: "/products/vir-800",
            description: "Electromagnetic Flow Meter and Heat Meter - Inline Flanged",
          },
          {
            label: "VIR-INSRT-800 Series",
            href: "/products/vir-insrt-800",
            description: "Electromagnetic Flow Meter - Insertion Type",
          },
          {
            label: "VIR-850 Series",
            href: "/products/vir-850",
            description: "Ultrasonic Flow Meter -In Line Type",
          },
          {
            label: "VIR-832 M Insertion",
            href: "/products/vir-832-insertion",
            description: "Ultrasonic Flow Meter - Insertion Type",
          },
          {
            label: "VIR-832 M Clamp On",
            href: "/products/vir-832-clamp",
            description: "Non-Invasive Clamp On Flow  Meter",
          },
          {
            label: "LXC Water Meter",
            href: "/products/lxc-water",
            description: "Electronic Flow Meter for Water",
          },
        ],
      },
      {
        label: "Heat Meters",
        href: "/products#heat-meters",
        description: "Thermal energy measurement",
        products: [
          {
            label: "LXC Series",
            href: "/products/lxc-series",
            description: "Ultrasonic Heat Meter - Range 15mm to 300mm",
          },
          {
            label: "VIR UF VIR-850 upto 800mm",
            href: "/products/vir-uf",
            description: "Ultrasonic Heat Meter -In Line Type +Pt100/PT500 Temp Sensor",
          },
          {
            label: "VIR-832 M Insertion",
            href: "/products/vir-832-insertion-heat",
            description: "Ultrasonic Heat Meter - Insertion Type+ Pt100/PT500 Temp Sensor",
          },
          {
            label: "VIR-832 M/VIR DX-900 Clamp On- upto 1200mm",
            href: "/products/vir-832-clamp-heat",
            description: "Non-Invasive Clamp On Heat  Meter +Pt100/PT500/PT-1000 Temp Sensor",
          },
          {
            label: "VIR-800 Series",
            href: "/products/vir-800-heat",
            description: "Electromagnetic Heat Meter - Inline Flanged",
          },
          {
            label: "VIR-INSRT-800 Series",
            href: "/products/vir-insrt-800-heat",
            description: "Electromagnetic Heat Meter - Inline Insertion Type",
          },
        ],
      },
      {
        label: "Variable Speed Drives",
        href: "/products#vsd",
        description: "Intelligent motor control for energy efficiency",
        products: [
          {
            label: "Eco EM-700",
            href: "/products/em-700",
            description: "VSD for Ventilation",
          },
          {
            label: "Basic EM-750 Series",
            href: "/products/em-750",
            description: "VSD for AHU",
          },
          {
            label: "Advanced EM-760",
            href: "/products/em-760",
            description: "Advanced control logic for AHU and Pumps",
          },
        ],
      },
      {
        label: "IAQ Sensors",
        href: "/products#iaq",
        description: "Advanced monitoring for temperature, humidity, CO₂, PM",
        products: [
          {
            label: "VIR-IAQ-6-Series",
            href: "/products/vir-iaq-6",
            description: "Multi Sensor Option",
          },
        ],
      },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

const chevron = (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    className="h-4 w-4"
    fill="none"
  >
    <path
      d="M5 8l5 5 5-5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const chevronUp = (
  <svg
    aria-hidden="true"
    viewBox="0 0 20 20"
    className="h-4 w-4"
    fill="none"
  >
    <path
      d="M5 12l5-5 5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [expandedDesktopCategory, setExpandedDesktopCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Check if a nav item is active
  const isActive = (href: string, label?: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "#" && label === "Products") {
      // Show indicator for Products when on any products page
      return pathname.startsWith("/products");
    }
    return pathname.startsWith(href);
  };

  // Check if indicator should be shown for a nav item
  const shouldShowIndicator = (href: string, label?: string, hasDropdown?: boolean) => {
    // If any dropdown is open, only show indicator for that dropdown item
    if (openDesktopDropdown) {
      return openDesktopDropdown === label;
    }
    // Otherwise, show based on active state
    return isActive(href, label);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-dropdown-container]')) {
        setOpenDesktopDropdown(null);
        setExpandedDesktopCategory(null);
      }
    };

    if (openDesktopDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openDesktopDropdown]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`w-full bg-slate-50/80 backdrop-blur-sm py-2.5 px-4 transition-all duration-300 sm:py-3 sm:px-6 md:py-3.5 md:px-8 lg:py-4 lg:px-10 xl:px-12 border-b border-slate-200/80 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.15)] border-slate-200' 
          : 'shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
      }`}>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl text-slate-900"
          >
            <Image
              src="/virtec-logo.png"
              alt="Virtec Logo"
              width={180}
              height={180}
              className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-4 md:flex md:gap-6 lg:gap-8 xl:gap-10">
            {navItems.map((item) =>
              item.categories ? (
                <div 
                  key={item.label} 
                  className="relative"
                  data-dropdown-container
                  onMouseEnter={() => setOpenDesktopDropdown(item.label)}
                  onMouseLeave={() => {
                    setOpenDesktopDropdown(null);
                    setExpandedDesktopCategory(null);
                  }}
                >
                  <div className="flex items-center gap-1.5 relative pb-1">
                    <button
                      type="button"
                      className={`text-base font-medium transition ${
                        openDesktopDropdown === item.label ? "text-slate-900" : "text-slate-700 hover:text-slate-900"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={openDesktopDropdown === item.label}
                    >
                      {item.label}
                    </button>
                    <button
                      type="button"
                      className={`transition ${
                        openDesktopDropdown === item.label ? "text-slate-800" : "text-slate-600 hover:text-slate-800"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={openDesktopDropdown === item.label}
                    >
                      <span className={`transition-transform duration-200 ${openDesktopDropdown === item.label ? 'rotate-180' : ''}`}>
                        {chevron}
                      </span>
                    </button>
                    <AnimatePresence mode="wait">
                      {shouldShowIndicator(item.href, item.label, true) && (
                        <motion.div
                          key={`indicator-${item.label}`}
                          className="absolute bottom-0 left-1/2 h-0.5 bg-primary-yellow rounded-full"
                          style={{ 
                            transformOrigin: "center",
                            width: "100%"
                          }}
                          initial={{ opacity: 0, scaleX: 0, x: "-50%" }}
                          animate={{ opacity: 1, scaleX: 1, x: "-50%" }}
                          exit={{ opacity: 0, scaleX: 0, x: "-50%" }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Main Categories Dropdown */}
                  {openDesktopDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-5 z-50">
                      <div className="flex gap-2">
                        <div className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px] rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur">
                          <div className="flex flex-col gap-1">
                            {item.categories.map((category) => (
                              <div
                                key={category.label}
                                className="relative"
                              >
                                <div 
                                  className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-50 ${
                                    category.products && category.products.length > 0 ? 'cursor-pointer' : 'cursor-default'
                                  }`}
                                  onClick={() => {
                                    if (category.products && category.products.length > 0) {
                                      setExpandedDesktopCategory(
                                        expandedDesktopCategory === category.label ? null : category.label
                                      );
                                    }
                                  }}
                                >
                                  <div className="flex-1">
                                    <div className="text-sm font-semibold text-slate-900">
                                      {category.label}
                                    </div>
                                    <div className="mt-1 text-xs text-slate-600 leading-relaxed">
                                      {category.description}
                                    </div>
                                  </div>
                                  {category.products && category.products.length > 0 && (
                                    <span className="text-slate-400 transition-transform duration-200">
                                      {expandedDesktopCategory === category.label ? chevronUp : chevron}
                                    </span>
                                  )}
                                </div>
                                
                                {/* Products Sub-Dropdown - Positioned relative to clicked category */}
                                {category.products && category.products.length > 0 && (
                                  <div
                                    className={`absolute left-full top-0 ml-5 w-full sm:w-[300px] md:w-[320px] lg:w-[340px] rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur transition-all duration-200 ${
                                      expandedDesktopCategory === category.label
                                        ? 'opacity-100 pointer-events-auto z-10' 
                                        : 'opacity-0 pointer-events-none z-0'
                                    }`}
                                  >
                                    <div className="grid gap-2">
                                      {category.products.map((product) => (
                                        <Link
                                          key={product.label}
                                          href={product.href}
                                          className="group/product block rounded-lg border border-slate-100 p-3 transition hover:border-primary-yellow hover:bg-yellow-50/50"
                                          onClick={() => {
                                            setOpenDesktopDropdown(null);
                                            setExpandedDesktopCategory(null);
                                          }}
                                        >
                                          <div className="text-sm font-semibold text-slate-900 group-hover/product:text-primary-yellow transition-colors">
                                            {product.label}
                                          </div>
                                          <div className="mt-1 text-xs text-slate-600 leading-relaxed">
                                            {product.description}
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : item.children ? (
                <div 
                  key={item.label} 
                  className="relative"
                  data-dropdown-container
                  onMouseEnter={() => setOpenDesktopDropdown(item.label)}
                  onMouseLeave={() => {
                    setOpenDesktopDropdown(null);
                  }}
                >
                  <div className="flex items-center gap-1.5 relative pb-1">
                    <button
                      type="button"
                      className={`text-base font-medium transition ${
                        openDesktopDropdown === item.label ? "text-slate-900" : "text-slate-700 hover:text-slate-900"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={openDesktopDropdown === item.label}
                    >
                      {item.label}
                    </button>
                    <button
                      type="button"
                      className={`transition ${
                        openDesktopDropdown === item.label ? "text-slate-800" : "text-slate-600 hover:text-slate-800"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={openDesktopDropdown === item.label}
                    >
                      <span className={`transition-transform duration-200 ${openDesktopDropdown === item.label ? 'rotate-180' : ''}`}>
                        {chevron}
                      </span>
                    </button>
                    <AnimatePresence mode="wait">
                      {shouldShowIndicator(item.href, item.label, true) && (
                        <motion.div
                          key={`indicator-${item.label}`}
                          className="absolute bottom-0 left-1/2 h-0.5 bg-primary-yellow rounded-full"
                          style={{ 
                            transformOrigin: "center",
                            width: "100%"
                          }}
                          initial={{ opacity: 0, scaleX: 0, x: "-50%" }}
                          animate={{ opacity: 1, scaleX: 1, x: "-50%" }}
                          exit={{ opacity: 0, scaleX: 0, x: "-50%" }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut",
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Children Dropdown */}
                  {openDesktopDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-5 z-50">
                      <div className="w-full sm:w-[320px] md:w-[360px] lg:w-[380px] rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur">
                        <div className="grid gap-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="group/item rounded-xl border border-slate-100 p-3 transition hover:border-primary-yellow hover:bg-yellow-50/50"
                              onClick={() => {
                                setOpenDesktopDropdown(null);
                              }}
                            >
                              <div className="text-sm font-medium text-slate-900 group-hover/item:text-primary-yellow transition-colors">
                                {child.label}
                              </div>
                              <div className="mt-1 text-xs leading-relaxed text-slate-600">
                                {child.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-base font-medium text-slate-700 transition hover:text-slate-900 pb-1"
                >
                  {item.label}
                  <AnimatePresence mode="wait">
                    {shouldShowIndicator(item.href, item.label) && (
                      <motion.div
                        key={`indicator-${item.label}`}
                        className="absolute bottom-0 left-1/2 h-0.5 bg-primary-yellow rounded-full"
                        style={{ 
                          transformOrigin: "center",
                          width: "100%"
                        }}
                        initial={{ opacity: 0, scaleX: 0, x: "-50%" }}
                        animate={{ opacity: 1, scaleX: 1, x: "-50%" }}
                        exit={{ opacity: 0, scaleX: 0, x: "-50%" }}
                        transition={{
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="mailto:sales@virtec.us"
              className="rounded-full bg-primary-yellow px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-2.5 text-sm sm:text-base text-slate-900 shadow-[0_14px_30px_rgba(255,203,8,0.35)] transition hover:brightness-95 min-h-[44px] flex items-center justify-center"
            >
              Get a quote
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 p-2.5 sm:p-3 text-slate-700 transition hover:border-slate-400 md:hidden min-h-[44px] min-w-[44px]"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((open) => {
                if (open) {
                  setExpanded(null);
                  setExpandedCategory(null);
                }
                return !open;
              });
            }}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="w-full mt-0 rounded-2xl border-x-0 border-t-0 border-b border-slate-200 bg-white px-4 py-4 sm:px-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] md:hidden">
          <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-4">
            {navItems.map((item) =>
              item.categories ? (
                <div key={item.label} className="rounded-2xl border border-slate-200">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm sm:text-base font-semibold text-slate-800 min-h-[44px] cursor-pointer touch-manipulation"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setExpanded((current) => {
                        const newExpanded = current === item.label ? null : item.label;
                        if (newExpanded !== item.label) {
                          setExpandedCategory(null);
                        }
                        return newExpanded;
                      });
                    }}
                    aria-expanded={expanded === item.label}
                  >
                    <span className="flex-1">{item.label}</span>
                    <span
                      className={`transition flex-shrink-0 pointer-events-none ${expanded === item.label ? "rotate-180" : ""}`}
                    >
                      {chevron}
                    </span>
                  </button>
                  {expanded === item.label ? (
                    <div className="space-y-2 px-3 sm:px-4 pb-3 sm:pb-4">
                      {item.categories.map((category) => (
                        <div key={category.label} className="rounded-xl border border-slate-100 bg-slate-50 overflow-hidden">
                          {category.products && category.products.length > 0 ? (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setExpandedCategory(
                                  expandedCategory === category.label ? null : category.label
                                );
                              }}
                              className="flex w-full items-center justify-between px-3 py-2.5 cursor-pointer touch-manipulation"
                              aria-expanded={expandedCategory === category.label}
                            >
                              <div className="flex-1 text-left">
                                <div className="text-sm font-semibold text-slate-900">
                                  {category.label}
                                </div>
                                <div className="mt-1 text-xs text-slate-600">
                                  {category.description}
                                </div>
                              </div>
                              <span
                                className={`transition flex-shrink-0 pointer-events-none ${expandedCategory === category.label ? "rotate-180" : ""}`}
                              >
                                {chevron}
                              </span>
                            </button>
                          ) : (
                            <div className="flex items-center justify-between px-3 py-2.5">
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-slate-900">
                                  {category.label}
                                </div>
                                <div className="mt-1 text-xs text-slate-600">
                                  {category.description}
                                </div>
                              </div>
                            </div>
                          )}
                          {category.products && expandedCategory === category.label && (
                            <div className="px-3 pb-2 space-y-1.5 border-t border-slate-200 pt-2">
                              {category.products.map((product) => (
                                <Link
                                  key={product.label}
                                  href={product.href}
                                  className="block rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  <div className="font-medium text-slate-900">
                                    {product.label}
                                  </div>
                                  <div className="mt-0.5 text-[10px] text-slate-500">
                                    {product.description}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : item.children ? (
                <div key={item.label} className="rounded-2xl border border-slate-200">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm sm:text-base font-semibold text-slate-800 min-h-[44px]"
                    onClick={() =>
                      setExpanded((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                    aria-expanded={expanded === item.label}
                  >
                    {item.label}
                    <span
                      className={`transition ${expanded === item.label ? "rotate-180" : ""}`}
                    >
                      {chevron}
                    </span>
                  </button>
                  {expanded === item.label ? (
                    <div className="space-y-3 px-4 pb-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition hover:border-slate-300 hover:bg-slate-50"
                          onClick={() => setMobileOpen(false)}
                        >
                          <div className="text-sm font-semibold text-slate-900">
                            {child.label}
                          </div>
                          <div className="mt-1 text-xs text-slate-600 leading-relaxed">
                            {child.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm sm:text-base font-semibold text-slate-800 px-4 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition min-h-[44px] flex items-center"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="flex flex-col gap-3 pt-2">
              <Link
                href="tel:+13045194567"
                className="rounded-full border border-slate-300 px-4 py-3 text-center text-sm sm:text-base text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 min-h-[44px] flex items-center justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Contact us
              </Link>
              <Link
                href="mailto:sales@virtec.us"
                className="rounded-full bg-primary-yellow px-4 py-3 text-center text-sm sm:text-base text-slate-900 shadow-[0_14px_30px_rgba(255,203,8,0.35)] transition hover:brightness-95 min-h-[44px] flex items-center justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}