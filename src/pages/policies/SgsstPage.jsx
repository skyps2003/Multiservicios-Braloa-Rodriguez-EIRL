import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../../components/common/PageHeader';
import { ShieldCheck, HardHat, AlertTriangle, Users2, CheckCircle2, ChevronRight } from 'lucide-react';
import ContactCTA from '../../components/ui/ContactCTA';
import { Link } from 'react-router-dom';

const SgsstPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sgsstCommitments = [
    {
      id: 1,
      title: "Prevención Activa de Riesgos",
      desc: "Minimizamos y controlamos los riesgos laborales en origen a través del monitoreo continuo de actividades y la mejora constante de los procesos de nuestro SGSST."
    },
    {
      id: 2,
      title: "Cumplimiento Legal y Normativo",
      desc: "Alineación absoluta con la Ley N° 29783 (Ley de Seguridad y Salud en el Trabajo) de Perú, reglamentos sectoriales aplicables y compromisos contractuales."
    },
    {
      id: 3,
      title: "Cultura Preventiva Integral",
      desc: "Desarrollo de planes continuos de capacitación, adiestramiento y sensibilización para fomentar el autocuidado y la responsabilidad mutua en campo."
    },
    {
      id: 4,
      title: "Investigación y Participación Activa",
      desc: "Promoción de canales abiertos para que colaboradores, comités y contratistas participen activamente reportando condiciones inseguras, investigando incidentes y proponiendo mejoras."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-700 relative overflow-hidden"
    >
      {/* Background Soft Orbs */}
      <div className="absolute top-[30%] left-[-10%] w-[40rem] h-[40rem] bg-red-500/[0.02] dark:bg-red-500/[0.005] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40rem] h-[40rem] bg-orange-500/[0.02] dark:bg-orange-500/[0.005] rounded-full blur-[160px] pointer-events-none" />

      <PageHeader 
        title="Seguridad y Salud (SGSST)"
        description="Garantizamos un entorno laboral 100% seguro, previniendo incidentes y promoviendo la salud ocupacional como valor no negociable."
        className="pt-20 pb-16 md:pt-32 md:pb-28"
      />

      <section className="py-16 md:py-24 bg-white dark:bg-slate-950 relative z-10">
        <div className="content-width">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Block: Declaración de Compromiso */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-red-500"></span>
                <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em]">POLÍTICA DE PREVENCIÓN</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                La vida y salud <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">son prioridad</span>
              </h2>

              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">
                En <strong>BRALOA E.I.R.L.</strong> nos comprometemos a proteger la vida, salud y bienestar de nuestros colaboradores, contratistas y visitantes mediante un entorno laboral seguro. Asumimos el autocuidado y la mejora continua del <strong>Sistema de Gestión de Seguridad y Salud en el Trabajo (SGSST)</strong> como pilares del éxito operativo.
              </p>

              {/* Technical Indicator Card */}
              <div className="bg-red-500/5 dark:bg-red-500/[0.02] rounded-[2rem] border border-red-500/10 p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shadow-sm">
                    <HardHat size={18} />
                  </div>
                  <h3 className="text-base font-black text-slate-800 dark:text-slate-200 tracking-tight">Estándar SSOMA</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-red-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Cero Accidentes Incapacitantes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-red-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Monitoreo Médico Ocupacional Continuo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-red-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">EPP Certificado de Última Generación</span>
                  </div>
                </div>
              </div>


            </div>

            {/* Right Block: Commitments Detailed Grid */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-8">Nuestros Compromisos</h3>
              
              <div className="grid grid-cols-1 gap-6">
                {sgsstCommitments.map((item, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={item.id}
                    className="flex gap-6 p-6 rounded-[2rem] bg-slate-50/50 dark:bg-slate-900/20 border border-slate-150/80 dark:border-white/5 hover:border-red-500/20 hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-all duration-300 group shadow-xs"
                  >
                    <div className="size-11 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-800 dark:text-slate-200 mb-2 tracking-tight group-hover:text-red-500 transition-colors">
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

export default SgsstPage;
