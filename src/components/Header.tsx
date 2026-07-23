import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  // { to: '/configurator', label: 'Configurator' },
  { to: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-cream-100/90 backdrop-blur-md border-b border-line shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          aria-label="Sthira Spaces — home"
          className="flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-600 focus-visible:ring-offset-4 focus-visible:ring-offset-cream-100"
        >
          <img
            src={logo}
            alt="Sthira Spaces"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative text-[15px] tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-600 rounded ${
                  isActive
                    ? "text-clay-600 font-medium"
                    : "text-ink-soft hover:text-clay-600"
                } after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-clay-600 after:transition-all after:duration-300 ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <NavLink
            to="/contact"
            className="group inline-flex items-center gap-2.5 bg-clay-600 hover:bg-clay-700 text-cream-50 text-sm font-medium pl-6 pr-5 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100"
          >
            Get a Consultation
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 -mr-2 rounded-lg text-ink-soft hover:text-clay-600 hover:bg-cream-300/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-600"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-cream-100 border-t border-line"
          >
            <nav className="px-6 py-5 space-y-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-600 ${
                      isActive
                        ? "text-clay-600 bg-cream-300/50"
                        : "text-ink-soft hover:text-clay-600 hover:bg-cream-300/40"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-3">
                <NavLink
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-clay-600 hover:bg-clay-700 text-cream-50 font-medium text-sm px-5 py-3.5 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-600"
                >
                  Get a Consultation
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
