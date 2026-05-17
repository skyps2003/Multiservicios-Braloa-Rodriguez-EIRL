import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../../data/siteContent';
import { ChevronRight, Clock, CheckCircle2, Users, Award, Sparkles, Shield, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-700">
        
        {/* Background Image Layer - Fixed Alignment */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent z-10" />
          <motion.div 
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute right-0 top-0 w-full lg:w-[60%] h-full overflow-hidden"
          >
            <img 
              src="/img/about/EXPERIENCIA.png" 
              alt="Infraestructura Braloa" 
              className="w-full h-full object-cover grayscale-[20%] dark:grayscale-[50%] brightness-110 dark:brightness-50 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-white/5 dark:bg-slate-950/10 backdrop-blur-[1px]" />
          </motion.div>
        </div>

        <div className="content-width relative z-20 w-full">
          <div className="max-w-4xl -ml-1 md:-ml-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-apple-green/10 dark:bg-apple-green/20 border border-apple-green/20 text-apple-green font-black text-[9px] tracking-[0.4em] mb-12 uppercase shadow-sm"
            >
              <div className="size-1.5 bg-apple-green rounded-full animate-pulse" />
              Corporación Multiservicios Braloa
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-slate-900 dark:text-white leading-[1.05] mb-10 tracking-tighter"
            >
              Conectamos desarrollo, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-green to-emerald-600 glow-text-green">
                construimos futuro.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 mb-16 max-w-2xl leading-relaxed font-medium"
            >
              En <span className="text-slate-900 dark:text-white font-black">Braloa Rodriguez E.I.R.L.</span>, impulsamos el crecimiento regional mediante soluciones integrales en ingeniería y gestión estratégica, orientadas a resultados sostenibles.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              <Link
                to="/contacto"
                className="px-12 py-6 bg-apple-green text-white rounded-2xl font-black shadow-2xl shadow-apple-green/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 tracking-[0.2em] text-[10px] uppercase group"
              >
                Cotizar Servicio
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/nosotros"
                className="px-12 py-6 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-2xl font-black flex items-center justify-center gap-4 tracking-[0.2em] text-[10px] uppercase hover:bg-slate-200 dark:hover:bg-white/10 transition-all backdrop-blur-md shadow-xl"
              >
                Conocer Más
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR - UPDATED WITH BRALOA DATA */}
      <section className="bg-slate-900 dark:bg-slate-950 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-apple-green/5 via-transparent to-blue-600/5 pointer-events-none" />
        <div className="content-width">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-0">
            {siteContent.stats.map((stat, i) => {
              const icons = { Award, Sparkles, Clock, Users, Shield, HardHat, CheckCircle2 };
              const Icon = icons[stat.icon] || Award;
              
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col items-center text-center px-10 ${i < 3 ? 'lg:border-r lg:border-white/10' : ''}`}
                >
                  <div className="size-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-apple-green mb-10 shadow-2xl group hover:bg-apple-green hover:text-white transition-all duration-500">
                    <Icon size={32} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-none">{stat.value}</p>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
