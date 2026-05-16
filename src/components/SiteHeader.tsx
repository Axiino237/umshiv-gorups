import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/umshiv-logo.png";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Home", exact: true },
    { to: "/companies", label: "Companies" },
    { to: "/hierarchy", label: "Hierarchy" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-[200] ${isOpen ? "bg-[#0a1a0a]" : "glass"}`}>
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-3 md:px-6 py-1">
        <Link to="/" className="flex items-center gap-2 md:gap-3" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="UMSHIV" className="h-12 md:h-20 w-auto object-contain" />
          <div className="leading-tight shrink-0">
            <div className="font-display text-base md:text-xl text-gold tracking-wide">UMSHIV</div>
            <div className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] text-muted-foreground">Group of Companies</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.exact }}
              className="hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-gold focus:ring-0 z-[210] relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[190] bg-[#0a1a0a] md:hidden pt-28 px-6 flex flex-col"
            style={{ backgroundColor: "#0a1a0a" }}
          >
            <div className="flex flex-col gap-8 text-2xl font-display">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  activeOptions={{ exact: link.exact }}
                  className="text-gold/90 hover:text-gold transition-colors py-4 border-b border-gold/10"
                  activeProps={{ className: "text-gold font-bold" }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
