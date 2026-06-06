import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Sthira Spaces Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Visualize your dream space before a single wall is built.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: <Instagram className="w-4 h-4" />, label: 'Instagram' },
                { icon: <Twitter className="w-4 h-4" />, label: 'Twitter' },
                { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
                { icon: <Youtube className="w-4 h-4" />, label: 'YouTube' },
              ].map(social => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-stone-200 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-stone-200 text-sm font-semibold uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              {['Configurator', 'House Plans', 'Material Library', 'Theme Presets'].map(item => (
                <li key={item}>
                  <a href="#" className="text-stone-500 text-sm hover:text-stone-300 transition-colors duration-200 focus:outline-none focus:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-stone-200 text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Projects', 'Careers', 'Press'].map(item => (
                <li key={item}>
                  <a href="#" className="text-stone-500 text-sm hover:text-stone-300 transition-colors duration-200 focus:outline-none focus:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-stone-200 text-sm font-semibold uppercase tracking-wider mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/contact" className="text-stone-500 text-sm hover:text-stone-300 transition-colors duration-200 focus:outline-none focus:underline">
                  Contact Us
                </NavLink>
              </li>
              {['hello@interio.design', '+91 98765 43210'].map(item => (
                <li key={item}>
                  <span className="text-stone-500 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-8 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-sm">
            © 2026 Sthira Spaces. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" className="text-stone-600 text-xs hover:text-stone-400 transition-colors duration-200 focus:outline-none focus:underline">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;