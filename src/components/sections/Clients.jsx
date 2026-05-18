import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../../data/siteContent';

const Clients = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-700 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6 w-full"
          >
            <span className="h-px flex-1 bg-slate-200/80 dark:bg-white/5"></span>
            <span className="shrink-0 px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Alianzas Estratégicas</span>
            <span className="h-px flex-1 bg-slate-200/80 dark:bg-white/5"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter"
          >
            Empresas que <span className="text-apple-green">Confían</span> en Nosotros
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 max-w-5xl mx-auto">
          {siteContent.clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col items-center justify-center w-44 sm:w-52 md:w-60"
            >
              <div className="relative h-16 w-full flex items-center justify-center transition-all duration-500">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 sm:max-h-14 max-w-full object-contain filter grayscale opacity-45 dark:opacity-35 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-108 transition-all duration-500 mix-blend-multiply dark:mix-blend-normal"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback text if image fails to load */}
                <div className="hidden absolute inset-0 items-center justify-center text-center p-4">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-tight">
                    {client.name}
                  </span>
                </div>
              </div>
              
              <div className="mt-3 overflow-hidden h-5">
                <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {client.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
