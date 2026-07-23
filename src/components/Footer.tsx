import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';

const socials = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/sthira_spaces?igsh=MTlhZ3QyY3U4Y3p1eA==',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1JDmwH5r8i/',
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream-300 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-5">
            <img src={logo} alt="Sthira Spaces" className="h-16 w-auto object-contain -ml-1 mb-5" />
            <p className="text-ink-muted text-base leading-relaxed max-w-sm">
              Sthira Spaces — designing and building spaces that inspire, for generations. Complete
              design and build solutions, under one roof.
            </p>
            <p className="text-clay-600 font-medium mt-6 tracking-wide">#BuildWithSthira</p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-line bg-cream-50 text-ink-soft hover:text-cream-50 hover:bg-clay-600 hover:border-clay-600 flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-600"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h3 className="text-ink text-xs font-semibold uppercase tracking-eyebrow mb-5">Explore</h3>
            <ul className="space-y-3.5">
              <li>
                <NavLink
                  to="/"
                  className="text-ink-muted text-[15px] hover:text-clay-600 transition-colors duration-200 focus:outline-none focus-visible:underline"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a
                  href="/#projects"
                  className="text-ink-muted text-[15px] hover:text-clay-600 transition-colors duration-200 focus:outline-none focus-visible:underline"
                >
                  Our Work
                </a>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-ink-muted text-[15px] hover:text-clay-600 transition-colors duration-200 focus:outline-none focus-visible:underline"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-ink text-xs font-semibold uppercase tracking-eyebrow mb-5">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+918593930903"
                  className="group flex items-center gap-3 text-ink-muted text-[15px] hover:text-clay-600 transition-colors duration-200 focus:outline-none focus-visible:underline"
                >
                  <Phone className="w-4 h-4 text-clay-600 flex-shrink-0" strokeWidth={1.7} />
                  +91 85939 30903
                </a>
              </li>
              <li>
                <a
                  href="mailto:sthiraspaces@gmail.com"
                  className="group flex items-center gap-3 text-ink-muted text-[15px] hover:text-clay-600 transition-colors duration-200 focus:outline-none focus-visible:underline"
                >
                  <Mail className="w-4 h-4 text-clay-600 flex-shrink-0" strokeWidth={1.7} />
                  sthiraspaces@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-ink-muted text-[15px]">
                <MapPin className="w-4 h-4 text-clay-600 flex-shrink-0 mt-0.5" strokeWidth={1.7} />
                Amaravathi, Muthukulam, Alappuzha, Kerala
              </li>
            </ul>
            <NavLink
              to="/contact"
              className="group inline-flex items-center gap-1.5 text-clay-600 font-medium mt-6 hover:text-clay-700 transition-colors focus:outline-none focus-visible:underline"
            >
              Get a Consultation
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </NavLink>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ink-faint text-sm">© 2026 Sthira Spaces. All rights reserved.</p>
          <p className="text-ink-faint text-xs uppercase tracking-eyebrow">Design · Build · Live</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
