import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { siteContent } from '../../data/siteContent';
import { Moon, Sun, Menu, X, HardHat } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200/30 dark:border-slate-800/30 shadow-sm' : 'py-8 bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-4 group">
          <img 
            src={isDark ? "/Logo/Oscuro.png" : "/Logo/Claro.png"} 
            alt="Logo Braloa" 
            className={`h-14 md:${scrolled ? 'h-14' : 'h-20'} w-auto object-contain transition-all duration-500`}
          />
          <img 
            src={isDark ? "/Letras/oscuro.png" : "/Letras/claro.png"} 
            alt="Braloa Rodriguez" 
            className={`h-12 md:${scrolled ? 'h-14' : 'h-20'} w-auto object-contain transition-all duration-500`}
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {siteContent.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-apple-green dark:hover:text-apple-green transition-colors"
            >
              {item.name}
            </a>
          ))}

          <div className="toggle-switch">
            <label className="switch-label">
              <input 
                type="checkbox" 
                className="checkbox" 
                checked={!isDark} 
                onChange={toggleTheme}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <div className="toggle-switch scale-75">
            <label className="switch-label">
              <input 
                type="checkbox" 
                className="checkbox" 
                checked={!isDark} 
                onChange={toggleTheme}
              />
              <span className="slider"></span>
            </label>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 dark:text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card rounded-none border-x-0 border-b-0 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {siteContent.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-slate-800 dark:text-white hover:text-apple-green transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
