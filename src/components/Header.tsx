import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Settings, Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const navLinks = [
  { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
  // { to: '/configurator', label: 'Configurator', icon: <Settings className="w-4 h-4" /> },
  { to: "/contact", label: "Contact", icon: <Phone className="w-4 h-4" /> },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-stone-950/95 backdrop-blur-md border-b border-stone-800/60 shadow-lg shadow-stone-950/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg"
        >
          <img src={logo} alt="Sthira Spaces Logo" className="h-12 w-auto object-contain" />
        </NavLink>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  isActive
                    ? "text-amber-400 bg-amber-400/10"
                    : "text-stone-400 hover:text-stone-100 hover:bg-stone-800/60"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* <NavLink
            to="/configurator"
            className="bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-stone-950"
          >
            Start Designing
          </NavLink> */}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
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
            className="md:hidden overflow-hidden bg-stone-950/98 border-t border-stone-800/60"
          >
            <nav className="px-6 py-4 space-y-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                      isActive
                        ? "text-amber-400 bg-amber-400/10"
                        : "text-stone-400 hover:text-stone-100 hover:bg-stone-800/60"
                    }`
                  }
                >
                  {link.icon}
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-2">
                <NavLink
                  to="/configurator"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  Start Designing
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
