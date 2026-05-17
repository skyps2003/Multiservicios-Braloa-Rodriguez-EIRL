import React from 'react';
import { siteContent } from '../../data/siteContent';
import { Facebook, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-white/5 pt-24 pb-12 overflow-hidden relative transition-colors duration-500">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-apple-green/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-apple-green/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="content-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24">
          
          {/* Brand Section: Humanized & Formal */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-4 mb-10 group">
              <img 
                src={isDark ? "/Logo/Oscuro.png" : "/Logo/Claro.png"} 
                alt="Logo Braloa" 
                className="h-16 md:h-20 w-auto group-hover:scale-110 transition-transform"
              />
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-10 font-medium">
              Elevando los estándares de la ingeniería en Marcona con un compromiso inquebrantable hacia la calidad y la seguridad.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={siteContent.contact.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-digital bg-[#1877F2] text-white py-3.5 px-6 gap-3 text-[10px] tracking-widest uppercase font-black"
              >
                Facebook
                <Facebook size={16} className="transition-transform duration-300" />
              </a>
              <a 
                href={`mailto:${siteContent.contact.email}`}
                className="btn-digital bg-apple-green text-white py-3.5 px-6 gap-3 text-[10px] tracking-widest uppercase font-black"
              >
                Escríbenos
                <Mail size={16} className="transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Clean Navigation Links */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10">Explorar</h4>
            <ul className="space-y-5">
              {siteContent.navigation.map(item => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-slate-600 dark:text-slate-400 text-sm font-bold hover:text-apple-green transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10">Especialidades</h4>
            <ul className="space-y-5">
              {siteContent.services.slice(0, 4).map(service => (
                <li key={service.id}>
                  <Link 
                    to="/servicios" 
                    className="text-slate-600 dark:text-slate-400 text-sm font-bold hover:text-apple-green transition-colors flex items-center gap-2 group"
                  >
                    <div className="size-1.5 rounded-full bg-slate-200 dark:bg-slate-800 group-hover:bg-apple-green transition-all" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Contact Info */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10">Atención</h4>
            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="size-10 shrink-0 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-center text-apple-green border border-slate-100 dark:border-white/5">
                  <MapPin size={18} />
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                  {siteContent.contact.address}
                </p>
              </div>
              
              <div className="flex gap-4 group">
                <div className="size-10 shrink-0 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-center text-apple-green border border-slate-100 dark:border-white/5">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col gap-1">
                  {siteContent.contact.phones.map(p => (
                    <a key={p} href={`tel:${p}`} className="text-slate-600 dark:text-slate-400 text-sm font-bold hover:text-apple-green transition-colors">{p}</a>
                  ))}
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-white/5">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">RUC Certificado</p>
                <p className="text-sm font-black text-slate-900 dark:text-white">{siteContent.contact.ruc}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Clean & Minimal */}
        <div className="pt-12 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} {siteContent.company.fullName}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link to="/politica-sgsst" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-apple-green transition-colors">Seguridad</Link>
            <Link to="/politica-calidad" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-apple-green transition-colors">Calidad</Link>
            <Link to="/politica-medio-ambiente" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-apple-green transition-colors">Ambiente</Link>
            <Link to="/responsabilidad-social" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-apple-green transition-colors">Responsabilidad Social</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
