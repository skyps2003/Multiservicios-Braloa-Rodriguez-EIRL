import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../../data/siteContent';
import { 
  HardHat, Hammer, Sun, Layout, Zap, Anchor, Truck, 
  ChevronRight, X, CheckCircle2, ArrowRight, Sparkles 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap = {
  HardHat: HardHat,
  Hammer: Hammer,
  Sun: Sun,
  Layout: Layout,
  Zap: Zap,
  Anchor: Anchor,
  Truck: Truck
};

const ServiceModal = ({ service, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!service) return null;
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        className="bg-white dark:bg-slate-900 w-full max-w-5xl rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative border border-white/5"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button 
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-10 right-10 size-14 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-2xl text-slate-500 hover:text-apple-green transition-all z-20 shadow-xl"
        >
          <X size={28} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="relative overflow-hidden group">
            <img 
              src={service.image} 
              alt={service.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-12 left-12">
              <div className="size-20 bg-apple-green rounded-3xl flex items-center justify-center text-white shadow-2xl mb-8">
                <Icon size={36} />
              </div>
              <h4 className="text-[11px] font-black text-apple-green uppercase tracking-[0.4em] mb-3">Especialidad Industrial</h4>
              <h3 className="text-4xl font-black text-white tracking-tighter leading-none">{service.category}</h3>
            </div>
          </div>

          <div className="p-12 lg:p-20 overflow-y-auto max-h-[85vh] bg-white dark:bg-slate-900">
            <h2 id="modal-title" className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-tight">
              {service.title}
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 font-medium leading-relaxed italic">
              "{service.description}"
            </p>

            <div className="space-y-8">
              <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6 border-b border-slate-100 dark:border-slate-800 pb-2">Capacidades Específicas</h4>
              <div className="grid grid-cols-1 gap-6">
                {service.details.map((detail, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="size-8 shrink-0 mt-1 flex items-center justify-center text-apple-green bg-apple-green/10 rounded-xl">
                      <CheckCircle2 size={22} />
                    </div>
                    <div>
                      <h5 className="font-black text-slate-900 dark:text-white text-base uppercase tracking-tight mb-1">{detail.label}</h5>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{detail.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-8">
              <a 
                href={`https://wa.me/${siteContent.company.whatsapp}?text=Hola%20Multiservicios%20Braloa%2C%20me%20gustar%C3%ADa%20cotizar%20el%20servicio%20de%3A%20${service.category}`}
                target="_blank"
                rel="noreferrer"
                className="px-12 py-5 bg-gradient-to-r from-apple-green to-emerald-600 text-white font-black rounded-2xl shadow-2xl shadow-apple-green/20 hover:scale-105 transition-all text-xs tracking-widest uppercase flex items-center gap-3"
              >
                Solicitar Cotización
                <ArrowRight size={18} />
              </a>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Certificación Vigente</p>
                <p className="text-sm font-black text-slate-900 dark:text-white tracking-tighter">SSOMA / ISO 9001:2015</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = ({ limit }) => {
  const [selectedService, setSelectedService] = useState(null);

  // Stable Bento Layout Logic - No Math.random
  const bentoServices = useMemo(() => {
    const services = limit ? siteContent.services.slice(0, limit) : siteContent.services;
    
    // Stable patterns for a 6-column grid
    const patterns = [
      "md:col-span-4 md:row-span-2 lg:col-span-4 lg:row-span-2",
      "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
      "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
      "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
      "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
      "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
      "md:col-span-6 md:row-span-1 lg:col-span-6 lg:row-span-1",
    ];

    return services.map((s, i) => ({
      ...s,
      gridClass: patterns[i % patterns.length]
    }));
  }, [limit]);

  return (
    <section id="servicios" className="pt-4 pb-12 lg:pt-8 lg:pb-16 bg-white dark:bg-slate-950 transition-colors duration-700 relative overflow-hidden">
      <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-apple-green/[0.03] rounded-full blur-[140px] pointer-events-none" />
      
      <div className="content-width">
        <div className="flex flex-col items-center justify-center text-center mb-20 md:mb-24 gap-8">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
              <span className="shrink-0 px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Nuestras Especialidades</span>
              <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-6">
              Portafolio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-green to-emerald-600 glow-text-green">Soluciones Especializadas</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-3xl text-lg md:text-xl font-medium leading-relaxed italic">
            "Desarrollamos ingeniería de alta precisión diseñada para superar los desafíos técnicos más exigentes del sector industrial y minero, garantizando seguridad operativa y resultados que impulsan el desarrollo regional."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 auto-rows-[260px]">
          {bentoServices.map((service, idx) => {
            const Icon = iconMap[service.icon];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedService(service)}
                className={`${service.gridClass} group relative rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-apple-green/10 transition-all duration-700 cursor-pointer border border-transparent hover:border-apple-green/20`}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0 brightness-75 group-hover:brightness-90"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent group-hover:via-slate-950/20 transition-all duration-500" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="size-14 bg-apple-green rounded-2xl flex items-center justify-center text-white mb-6 shadow-2xl shadow-apple-green/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon size={26} />
                    </div>
                    <h3 className={`font-black text-white leading-none mb-4 tracking-tighter ${service.gridClass.includes('row-span-2') ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2 text-apple-green text-[9px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span>Ver Detalles</span>
                      <ChevronRight size={14} />
                    </div>
                  </div>
                </div>

                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="size-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-2xl">
                    <Sparkles size={18} className="animate-pulse" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {limit && (
          <div className="mt-20 text-center">
            <Link 
              to="/servicios" 
              className="inline-flex items-center gap-4 px-12 py-6 bg-slate-950 dark:bg-white dark:text-slate-950 text-white font-black rounded-3xl shadow-2xl hover:scale-105 transition-all group tracking-[0.2em] text-[10px] uppercase"
            >
              EXPLORAR TODOS LOS SERVICIOS
              <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal 
            service={selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
