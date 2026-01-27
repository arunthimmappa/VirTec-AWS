"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ArrowRight
} from "lucide-react";

const quickLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-yellow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10">
        {/* Main Footer Content - Top Row: 3 Equal Columns */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8"
        >
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center">
                <Image
                  src={logoError ? "/virtec-logo.png" : "/virtec-logoYellow.png"}
                  alt="Virtec Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  onError={() => setLogoError(true)}
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">VIRTEC</h3>
                <p className="text-slate-300 text-xs">Instruments Inc.</p>
              </div>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Global leader in Heat and Flow Management Solutions for HVAC and Water applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary-yellow" />
              Quick Links
            </h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-primary-yellow transition-colors flex items-center gap-1.5 text-xs sm:text-sm"
                  >
                    <ArrowRight className="w-3 h-3 text-primary-yellow flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary-yellow" />
              Contact Us
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-primary-yellow mt-0.5 flex-shrink-0" />
                <div className="text-slate-300 leading-relaxed">
                  2005 E 2700 S, STE 200<br />
                  Salt Lake City, Utah 84109
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary-yellow flex-shrink-0" />
                <a
                  href="tel:+13045194567"
                  className="text-slate-300 hover:text-primary-yellow transition-colors"
                >
                  +1 (304) 519-4567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary-yellow flex-shrink-0" />
                <a
                  href="mailto:sales@virtec.us"
                  className="text-slate-300 hover:text-primary-yellow transition-colors break-all"
                >
                  sales@virtec.us
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Distributors Section - Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary-yellow" />
            Distributors
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Middle East */}
            <div className="bg-slate-800/40 rounded p-2.5 border border-slate-700/30">
              <div className="font-semibold text-white mb-1">Middle East</div>
              <div className="text-slate-300 space-y-1">
                <div className="font-medium">SUPRA CONTROLS</div>
                <div>Mr. Siva</div>
                <a href="tel:+971508887626" className="flex items-center gap-1 hover:text-primary-yellow transition-colors">
                  <Phone size={12} className="text-primary-yellow" />
                  +971 50 888 7626
                </a>
                <a href="mailto:Siva@supracontrolme.com" className="flex items-center gap-1 hover:text-primary-yellow transition-colors break-all">
                  <Mail size={12} className="text-primary-yellow" />
                  Siva@supracontrolme.com
                </a>
              </div>
            </div>

            {/* India */}
            <div className="bg-slate-800/40 rounded p-2.5 border border-slate-700/30">
              <div className="font-semibold text-white mb-1">India</div>
              <div className="text-slate-300 space-y-1">
                <div className="font-medium">Suneel Bhambere</div>
                <div className="text-xs text-slate-400">Country Manager</div>
                <div className="text-xs">VIRTEC INSTRUMENTS INC</div>
                <div className="flex items-start gap-1 text-xs">
                  <MapPin size={12} className="text-primary-yellow mt-0.5 flex-shrink-0" />
                  <span>B-24, Nisarg Upvan, Patlipada, Thane (W) - 400 607</span>
                </div>
                <a href="tel:+919967607445" className="flex items-center gap-1 hover:text-primary-yellow transition-colors">
                  <Phone size={12} className="text-primary-yellow" />
                  +91 99676 07445
                </a>
                <a href="mailto:sb@virtec.us" className="flex items-center gap-1 hover:text-primary-yellow transition-colors break-all">
                  <Mail size={12} className="text-primary-yellow" />
                  sb@virtec.us
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-4 border-t border-primary-yellow/30"
        >
          <p className="text-slate-300 text-xs text-center">
            © {currentYear} Virtec Instruments Inc. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}