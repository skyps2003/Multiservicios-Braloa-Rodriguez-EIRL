import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { Award, ShieldAlert, CheckCircle2, ChevronRight, Settings, Sliders } from 'lucide-react';
import ContactCTA from '../../components/ui/ContactCTA';
import { Link } from 'react-router-dom';

const QualityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const qualityCommitments = [
    {
      id: 1,
      title: "Desarrollo y Crecimiento Sostenible",
      desc: "Garantizamos un crecimiento corporativo responsable, integrando prácticas comerciales sólidas con la preservación del entorno y la optimización de los recursos."
    },
    {
      id: 2,
      title: "Protección de Nuestro Activo Más Valioso",
      desc: "Velamos celosamente por la seguridad de nuestro equipo humano y contratistas, asegurando que cuenten con las condiciones técnicas ideales para la excelencia constructiva."
    },
    {
      id: 3,
      title: "Cumplimiento Legal y Contractual",
      desc: "Aseguramos que cada entregable cumpla rigurosamente con los plazos pactados, requisitos técnicos, normativas legales vigentes y las altas expectativas de nuestros clientes."
    },
    {
      id: 4,
      title: "Preparación y Capacitación Continua",
      desc: "Fomentamos el entrenamiento técnico permanente de nuestros profesionales, empoderándolos para liderar procesos innovadores y resolver retos complejos en obra."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-700 relative overflow-hidden"
    >
      {/* Background Soft Orbs */}
      <div className="absolute top-[30%] left-[-10%] w-[40rem] h-[40rem] bg-apple-green/[0.02] dark:bg-apple-green/[0.005] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40rem] h-[40rem] bg-emerald-500/[0.02] dark:bg-emerald-500/[0.005] rounded-full blur-[160px] pointer-events-none" />

      <PageHeader 
        title="Política de Calidad"
        description="Nos comprometemos con la excelencia operativa y la mejora continua, asegurando la satisfacción absoluta de nuestros clientes en cada entrega."
        className="pt-20 pb-16 md:pt-32 md:pb-28"
      />

      <section className="py-16 md:py-24 bg-white dark:bg-slate-950 relative z-10">
        <div className="content-width">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Block: Declaración de Compromiso */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-apple-green"></span>
                <span className="text-[10px] font-black text-apple-green uppercase tracking-[0.4em]">EXCELENCIA OPERATIVA</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                Garantía de <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-green to-emerald-600">excelencia</span>
              </h2>

              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                En <strong>BRALOA E.I.R.L.</strong> asumimos la calidad no como una meta final, sino como un hábito diario. Brindamos servicios integrales en la ejecución de obras civiles y afines, logrando resultados extraordinarios mediante procesos estandarizados y preparación técnica al más alto nivel.
              </p>

              {/* Technical Indicator Card */}
              <div className="bg-apple-green/5 dark:bg-apple-green/[0.02] rounded-[2rem] border border-apple-green/10 p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-xl bg-apple-green/10 flex items-center justify-center text-apple-green shadow-sm">
                    <Sliders size={18} />
                  </div>
                  <h3 className="text-base font-black text-slate-800 dark:text-slate-200 tracking-tight">Estándar de Calidad</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-apple-green shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Certificación ISO 9001:2015 en Camino</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-apple-green shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">100% de Proyectos Entregados a Tiempo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-apple-green shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Materiales y Herramientas Homologadas</span>
                  </div>
                </div>
              </div>


            </div>

            {/* Right Block: Commitments Detailed Grid */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-8">Nuestras Líneas de Calidad</h3>
              
              <div className="grid grid-cols-1 gap-6">
                {qualityCommitments.map((item, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={item.id}
                    className="flex gap-6 p-6 rounded-[2rem] bg-slate-50/50 dark:bg-slate-900/20 border border-slate-150/80 dark:border-white/5 hover:border-apple-green/20 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-all duration-300 group shadow-xs"
                  >
                    <div className="size-11 rounded-xl bg-apple-green/10 flex items-center justify-center text-apple-green shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Award size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-800 dark:text-slate-200 mb-2 tracking-tight group-hover:text-apple-green transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="flex items-center gap-4 w-full content-width my-8">
        <span className="h-px flex-1 bg-slate-200 dark:bg-white/10"></span>
      </div>

      <ContactCTA />
    </motion.div>
  );
};

export default QualityPage;
