import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, description, className = "py-12 md:py-20" }) => {
  return (
    <div className={`relative overflow-hidden transition-colors duration-700 bg-gradient-to-br from-apple-green to-emerald-600 dark:from-slate-900 dark:to-slate-950 ${className}`}>
      {/* Subtle Blurred Overlays - Dynamic Opacity */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 dark:bg-apple-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 dark:bg-blue-900/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
      
      {/* Dark Mode Aura Glows */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#89C13D_0%,transparent_70%)] opacity-20" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-lg tracking-tight uppercase">
            {title}
          </h1>
          <div className="h-1 w-16 bg-white/30 mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed italic">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
