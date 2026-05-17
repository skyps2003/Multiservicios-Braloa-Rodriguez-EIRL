import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../../data/siteContent';
import { MapPin, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = ({ limit }) => {
  const displayProjects = limit ? siteContent.projects.slice(0, limit) : siteContent.projects;

  return (
    <section id="proyectos" className="section-spacing bg-white dark:bg-slate-950 transition-colors duration-700 overflow-hidden relative">
      {/* Background Aura Elements */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-apple-green/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="content-width">
        <div className="flex flex-col items-center justify-center text-center mb-24 gap-8">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
              <span className="shrink-0 px-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">Nuestra Experiencia</span>
              <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-8">
              Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-green to-emerald-600 glow-text-green">Emblemáticos de Ingeniería</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-3xl text-lg md:text-xl font-medium leading-relaxed italic">
            "Nuestra trayectoria se consolida a través de ejecuciones impecables en los entornos industriales más exigentes. Cada obra representa un hito de precisión técnica, seguridad operativa y un compromiso inquebrantable con el desarrollo de infraestructura crítica en la región."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
          {displayProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-[4rem] overflow-hidden mb-10 shadow-2xl shadow-black/5 group-hover:shadow-apple-green/10 transition-all duration-700 border border-transparent hover:border-apple-green/20">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[10%] group-hover:grayscale-0 brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="size-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-2xl">
                    <Sparkles size={20} className="animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="px-8">
                <div className="flex items-center gap-3 text-apple-green text-[10px] font-black uppercase tracking-[0.3em] mb-5">
                  <MapPin size={16} className="animate-pulse" />
                  {project.location}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 group-hover:text-apple-green transition-colors tracking-tighter leading-none">
                  {project.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-lg">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {limit && (
          <div className="mt-28 text-center">
            <Link 
              to="/proyectos" 
              className="inline-flex items-center gap-4 px-14 py-7 bg-slate-950 dark:bg-white dark:text-slate-950 text-white font-black rounded-[2rem] shadow-2xl hover:scale-105 transition-all group tracking-[0.2em] text-xs uppercase"
            >
              EXPLORAR PORTAFOLIO COMPLETO
              <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
