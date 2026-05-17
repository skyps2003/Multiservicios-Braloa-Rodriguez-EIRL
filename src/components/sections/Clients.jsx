import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../../data/siteContent';

const Clients = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-700 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10 w-full"
          >
            <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
            <span className="shrink-0 px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Alianzas Estratégicas</span>
            <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter"
          >
            Empresas que <span className="text-apple-green">Confían</span> en Nosotros
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 items-center">
          {siteContent.clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col items-center justify-center"
            >
              <div className="relative h-20 md:h-24 w-full flex items-center justify-center transition-all duration-500">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-[80%] object-contain opacity-50 dark:opacity-40 group-hover:opacity-100 group-hover:scale-108 transition-all duration-500"
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
              
              <div className="mt-4 text-center">
                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0">
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
