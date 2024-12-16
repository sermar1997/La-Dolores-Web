import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-wine-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">La Dolores</h3>
            <p className="text-wine-100">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li>Email: pregunta@bodegasladolores.com</li>
              <li>Tel: +34 609 251 412</li>
              <li>Calatayud, Zaragoza</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.followUs')}</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-wine-300 transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/bodegaladolores/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-wine-300 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-wine-700 text-center">
          <p className="text-wine-300">
            {t('footer.rights', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
