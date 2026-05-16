import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../../data/siteContent';
import { Construction, House, Layers, HardHat } from 'lucide-react';

const iconMap = {
  Construction: <Construction />,
  House: <House />,
  Layers: <Layers />,
  HardHat: <HardHat />,
};

const Services = () => {
  return (
    <section id="servicios" className="bg-slate-50 dark:bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-apple-green/10 dark:bg-apple-green/20 text-apple-green font-bold text-[10px] mb-6 tracking-[0.3em] uppercase"
          >
            Servicios de Élite
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-semibold text-slate-900 dark:text-white tracking-tight"
          >
            Especialistas en <span className="text-gradient">infraestructura</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {siteContent.services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group glass-card overflow-hidden hover:shadow-[0_40px_80px_-15px_rgba(137,193,61,0.15)]"
            >
              <div className="relative h-80 overflow-hidden">
                <motion.img 
                  key={service.image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                  <div>
                    <div className="p-4 bg-apple-green text-white rounded-2xl shadow-xl mb-4 w-fit group-hover:rotate-6 transition-transform">
                      {React.cloneElement(iconMap[service.icon], { size: 32 })}
                    </div>
                    <h4 className="text-3xl font-bold text-white tracking-tight">{service.title}</h4>
                  </div>
                </div>
              </div>
              <div className="p-10">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-lg font-light">
                  {service.description}
                </p>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="#contacto" 
                  className="text-apple-green font-bold flex items-center gap-3 text-lg hover:text-apple-green-dark transition-colors"
                >
                  Consultar proyecto <span className="text-2xl">→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
