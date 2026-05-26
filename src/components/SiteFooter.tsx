import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/umshiv", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/umshiv", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/umshiv", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/umshiv", label: "LinkedIn" },
  ];

  const exploreLinks = [
    { to: "/", label: "Home" },
    { to: "/companies", label: "Companies" },
    { to: "/hierarchy", label: "Hierarchy" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="relative z-10 w-full mt-auto border-t border-gold/15 glass">
      {/* Upper Footer section */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
        
        {/* Left Column: Brand Description & Social Icons */}
        <div className="col-span-1 md:col-span-5 flex flex-col items-start space-y-5">
          <div className="font-display text-3xl font-extrabold tracking-widest text-gradient-gold uppercase">
            UMSHIV
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            One Root, Five Branches. Shaping travel, technology, graphic design, wedding styling, and event infrastructure under a unified philosophy of craft and kinship.
          </p>
          
          {/* Social Icons Container */}
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/60 bg-gold/5 transition-all duration-300 shadow-sm"
              >
                <s.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Middle Column: Quick Exploration links */}
        <div className="col-span-1 md:col-span-3 flex flex-col items-start space-y-4">
          <div className="font-display text-lg font-semibold text-gold tracking-wide">
            Explore
          </div>
          <ul className="flex flex-col space-y-2 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-muted-foreground hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Legal Policies & Quick Contacts */}
        <div className="col-span-1 md:col-span-4 flex flex-col items-start space-y-4">
          <div className="font-display text-lg font-semibold text-gold tracking-wide">
            Legal & Support
          </div>
          <ul className="flex flex-col space-y-2 text-sm mb-2">
            <li>
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-gold transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-gold transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>

          {/* Quick Contact info */}
          <div className="flex flex-col space-y-2 text-xs text-muted-foreground pt-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold/80" />
              <span>Flat No. 27, 1st Street, Kothari Nagar, Ramapuram, Chennai 600089</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gold/80" />
              <a href="mailto:hello@umshiv.com" className="hover:text-gold transition-colors">
                hello@umshiv.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold/80" />
              <a href="tel:+914431536968" className="hover:text-gold transition-colors">
                +91 44 3153 6968
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright & Developer Attribution */}
      <div className="border-t border-gold/10 py-6 px-6 glass">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          {/* Copyright */}
          <div className="text-center md:text-left">
            © {currentYear} UMSHIV Group of Companies. All rights reserved.
          </div>

          {/* Developer Attribution */}
          <div className="flex items-center gap-1.5">
            <span>Developed by </span>
            <a
              href="https://axiino.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-gradient-gold hover:opacity-80 transition-opacity tracking-wider text-sm"
              style={{ filter: "drop-shadow(0 0 3px oklch(0.78 0.13 85 / 0.3))" }}
            >
              Axiino
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
