import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../../data/siteContent';
import { CheckCircle2, Trophy, Users, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { id: 'years', icon: <Clock />, label: "Años", value: "7+" },
    { id: 'clients', icon: <Users />, label: "Clientes", value: "100+" },
    { id: 'projects', icon: <Trophy />, label: "Proyectos", value: "150+" },
  ];

  return (
    <section id="nosotros" className="bg-white dark:bg-slate-900 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="space-y-6"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="/img/img1.jpg"
                  alt="Obra 1"
                  className="w-full h-80 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="/img/img2.jpg"
                  alt="Obra 2"
                  className="w-full h-56 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="pt-16 space-y-6"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="/img/img3.jpg"
                  alt="Obra 3"
                  className="w-full h-56 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="/img/img4.jpg"
                  alt="Obra 4"
                  className="w-full h-80 object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-apple-green font-bold tracking-[0.3em] text-xs uppercase mb-6">Nuestra Esencia</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-10 leading-tight">
              Liderando la construcción civil con <span className="text-gradient">precisión</span> y valores.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              {siteContent.company.history}
            </p>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[2rem] border-l-4 border-apple-green mb-12">
              <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed text-lg">
                "{siteContent.company.mission}"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              {["Calidad Certificada", "Equipos Modernos", "Personal Experto", "Satisfacción Total"].map((item) => (
                <div key={item} className="flex items-center gap-4 group">
                  <div className="size-10 rounded-full bg-apple-green/10 flex items-center justify-center text-apple-green group-hover:bg-apple-green group-hover:text-white transition-all">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 md:gap-16 border-t border-slate-100 dark:border-slate-800 pt-12">
              {stats.map((stat) => (
                <div key={stat.id} className="group">
                  <p className="text-4xl font-semibold text-slate-900 dark:text-white group-hover:text-apple-green transition-colors">{stat.value}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
