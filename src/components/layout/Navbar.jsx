import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../../data/siteContent';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center justify-center">
      <label className="relative inline-block w-12 h-5 cursor-pointer" aria-label="Cambiar tema">
        <input 
          type="checkbox" 
          className="sr-only" 
          checked={isDark}
          onChange={toggleTheme}
        />
        <div className={`absolute inset-0 rounded-full transition-colors duration-500 ${
          isDark ? 'bg-apple-green/20' : 'bg-slate-200'
        }`} />
        
        <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full shadow-lg shadow-apple-green/20 transition-all duration-300 flex items-center justify-center overflow-hidden ${
          isDark 
            ? 'left-[16px] bg-slate-800 border border-apple-green/30' 
            : 'left-0 bg-apple-green shadow-apple-green/40'
        }`}>
          <div className="relative w-full h-full flex items-center justify-center">
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 20 20">
                <path fill="#fff" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 20 20">
                <path fill="#fff" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z" />
              </svg>
            )}
          </div>
        </div>
      </label>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isTransparent = !scrolled && [
    '/nosotros', '/servicios', '/proyectos', '/contacto',
    '/politica-medio-ambiente', '/responsabilidad-social', '/politica-calidad', '/politica-sgsst'
  ].includes(location.pathname);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
      scrolled 
        ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-3xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] py-5 border-b border-slate-100 dark:border-white/5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-12">
        
        <Link to="/" className="shrink-0 relative z-10 group">
          <div className="relative">
            <div className="absolute inset-0 bg-apple-green blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
            <img 
              src={(isTransparent || isDark) ? "/Logo/Oscuro.png" : "/Logo/Claro.png"} 
              alt="Logo Braloa" 
              className="h-10 md:h-12 w-auto object-contain transition-all duration-700 group-hover:scale-105"
            />
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 group overflow-hidden ${
                isTransparent 
                  ? 'text-white hover:text-white/80' 
                  : isActive(item.href) 
                    ? 'text-apple-green' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span className="relative z-10">{item.name}</span>
              {isActive(item.href) && (
                <motion.div 
                  layoutId="nav-active"
                  className={`absolute inset-0 rounded-xl -z-10 ${
                    isTransparent ? 'bg-white/15' : 'bg-apple-green/5 dark:bg-apple-green/10'
                  }`}
                />
              )}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-apple-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <ThemeToggle />
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="size-12 flex items-center justify-center bg-slate-900 dark:bg-white dark:text-slate-950 text-white rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-2xl border-b border-slate-100 dark:border-white/5 p-8 lg:hidden z-50 backdrop-blur-3xl bg-white/95 dark:bg-slate-900/95"
          >
            <div className="flex flex-col gap-4">
              {siteContent.navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-8 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-between group transition-all ${
                    isActive(item.href) ? 'bg-apple-green text-white' : 'bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-apple-green hover:text-white'
                  }`}
                >
                  {item.name}
                  <ChevronRight size={16} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                </Link>
              ))}
              {/* Removed SOLICITAR COTIZACIÓN button per request */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
