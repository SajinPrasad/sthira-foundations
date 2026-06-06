import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-amber-400 text-8xl font-bold mb-4">404</p>
        <h1 className="font-serif text-3xl text-stone-100 mb-3">Page Not Found</h1>
        <p className="text-stone-500 text-base mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-stone-950"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;