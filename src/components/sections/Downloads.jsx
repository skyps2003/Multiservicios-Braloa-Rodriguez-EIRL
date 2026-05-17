import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ShieldCheck, ClipboardCheck } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

const downloads = [
  {
    title: "Brochure Corporativo 2026",
    desc: "Información detallada de servicios y portafolio.",
    icon: FileText,
    file: siteContent.contact.brochureUrl
  },
  {
    title: "Política SGSST",
    desc: "Seguridad y Salud en el Trabajo.",
    icon: ShieldCheck,
    file: siteContent.contact.brochureUrl
  },
  {
    title: "Política de Calidad",
    desc: "Compromiso con la excelencia operativa.",
    icon: ClipboardCheck,
    file: siteContent.contact.brochureUrl
  }
];

const Downloads = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Centro de Documentación</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Descargue nuestra documentación oficial para conocer más sobre nuestros procesos y compromisos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {downloads.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-apple-green transition-all group text-center"
            >
              <div className="size-20 rounded-[2rem] bg-apple-green/10 flex items-center justify-center text-apple-green mb-8 mx-auto group-hover:scale-110 transition-transform">
                <item.icon size={36} />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">{item.desc}</p>
              <a
                href={item.file}
                download
                className="inline-flex w-full py-4 bg-slate-900 dark:bg-slate-800 text-white font-bold rounded-2xl items-center justify-center gap-3 hover:bg-apple-green transition-colors"
              >
                <Download size={20} />
                Descargar
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downloads;
