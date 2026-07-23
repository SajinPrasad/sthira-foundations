import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-serif text-clay-600 text-8xl md:text-9xl mb-4 tracking-[-0.02em]">404</p>
        <h1 className="font-serif text-3xl md:text-4xl text-ink mb-3">Page not found</h1>
        <p className="text-ink-muted text-base mb-8 max-w-sm mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <NavLink
          to="/"
          className="group inline-flex items-center gap-2 bg-clay-600 hover:bg-clay-700 text-cream-50 font-medium px-7 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
