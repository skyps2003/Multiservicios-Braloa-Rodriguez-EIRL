import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../../data/siteContent';
import { ChevronRight, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-40 pb-12 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-apple-green/5 dark:bg-apple-green/5 -skew-x-12 transform translate-x-1/4 hidden lg:block" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-baby-purple/20 dark:bg-apple-green/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-apple-green/20 dark:bg-baby-purple/10 rounded-full blur-[100px] animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-apple-green/10 dark:bg-apple-green/20 text-apple-green font-bold text-xs mb-8 tracking-[0.2em] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-apple-green animate-pulse" />
            Excelencia en Construcción
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[0.9] mb-8 tracking-tighter">
            Creamos <span className="relative">
              <span className="text-apple-green italic">estructuras</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-apple-green/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span> <br className="hidden md:block" /> de confianza
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-xl leading-relaxed font-light">
            Especialistas en ingeniería civil y soluciones integrales para proyectos que trascienden generaciones en San Juan de Marcona.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#servicios"
              className="px-8 py-4 bg-apple-green text-white rounded-xl font-bold shadow-lg shadow-apple-green/20 flex items-center justify-center gap-2"
            >
              Nuestros Servicios
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contacto"
              className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              Contactar Ahora
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]">
            <img
              src="/img/hero.jpg"
              alt="Obra de calidad"
              className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-transparent" />
          </div>

          {/* Finer Decorative Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-8 p-6 md:p-8 z-20 rounded-[2rem] bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 shadow-2xl shadow-black/10"
          >
            <div className="flex items-center gap-5">
              <div className="relative group">
                <div className="absolute inset-0 bg-apple-green blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-apple-green to-[#6DA32D] rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-apple-green/30 border border-white/20">
                  7+
                </div>
              </div>
              <div>
                <p className="font-display font-extrabold text-xl md:text-2xl text-slate-900 dark:text-white leading-none tracking-tight">Años de Éxito</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-apple-green" />
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Marcona, Perú</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600 animate-bounce cursor-pointer">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
