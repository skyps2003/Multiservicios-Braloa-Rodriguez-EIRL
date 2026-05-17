import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Sparkles } from 'lucide-react';

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 px-6 overflow-hidden relative">
      <div className="absolute top-[10%] left-[-10%] w-[60%] h-[60%] bg-apple-green/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="text-center relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-apple-green/10 text-apple-green font-black text-[12px] uppercase tracking-[0.5em] mb-12"
        >
          <Sparkles size={16} className="animate-pulse" />
          ERROR 404
        </motion.div>
        
        <h1 className="text-[10rem] md:text-[15rem] font-black text-slate-900 dark:text-white leading-none tracking-tighter mb-8">
          Ops<span className="text-apple-green">!</span>
        </h1>
        
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-slate-100 mb-10 tracking-tight">
          Página no encontrada
        </h2>
        
        <p className="text-xl text-slate-500 dark:text-slate-400 mb-16 leading-relaxed font-medium">
          Lo sentimos, el proyecto o la sección que buscas parece estar fuera de nuestro radar técnico. 
          Vuelve al inicio para retomar el rumbo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/"
            className="w-full sm:w-auto px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition-all group"
          >
            <Home size={18} />
            IR AL INICIO
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-12 py-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-white/5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            VOLVER ATRÁS
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
