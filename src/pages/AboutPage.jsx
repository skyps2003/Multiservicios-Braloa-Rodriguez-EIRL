import React, { useEffect } from 'react';
import About from '../components/sections/About';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import Clients from '../components/sections/Clients';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-white dark:bg-slate-950 min-h-screen"
    >
      <PageHeader 
        title="Nuestra Historia"
        description="7 años de excelencia operativa y compromiso inquebrantable en el sector industrial."
        className="pt-20 pb-16 md:pt-32 md:pb-28"
      />

      <About />
      
      <Clients />
      
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-apple-green/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-slate-900 dark:text-white">
              Compromiso <span className="text-apple-green">Real</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium italic">
              "En Braloa Rodriguez EIRL, no solo construimos estructuras; construimos relaciones basadas en la confianza y la transparencia. Nuestra gestión SSOMA garantiza la seguridad de nuestro activo más valioso: nuestro equipo."
            </p>
            <div className="mt-12 h-1.5 w-24 bg-apple-green mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
