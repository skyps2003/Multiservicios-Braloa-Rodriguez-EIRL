import React from 'react';
import { siteContent } from '../../data/siteContent';
import { Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={isDark ? "/Logo/Oscuro.png" : "/Logo/Claro.png"} 
                alt="Logo Braloa" 
                className="h-16 w-auto object-contain"
              />
              <img 
                src={isDark ? "/Letras/oscuro.png" : "/Letras/claro.png"} 
                alt="Braloa Rodriguez" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-6">
              {siteContent.company.slogan}
            </p>
            <div className="flex gap-4">
              <a 
                href={siteContent.contact.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="fb-premium-button group"
              >
                <span />
                <span />
                <span />
                <span />
                <Facebook size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 dark:text-white">Enlaces</h4>
            <ul className="space-y-4">
              {siteContent.navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-600 dark:text-slate-400 hover:text-apple-green transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 dark:text-white">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                <MapPin className="text-apple-green shrink-0" size={20} />
                <span>{siteContent.contact.address}</span>
              </li>
              {siteContent.contact.phones.map(phone => (
                <li key={phone} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 group">
                  <Phone className="text-apple-green shrink-0 group-hover:scale-110 transition-transform" size={20} />
                  <a href={`tel:+51${phone}`} className="hover:text-apple-green transition-colors">{phone}</a>
                </li>
              ))}
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400 group">
                <Mail className="text-apple-green shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <a href={`mailto:${siteContent.contact.email}`} className="hover:text-apple-green transition-colors">{siteContent.contact.email}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {siteContent.company.fullName}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
