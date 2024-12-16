import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';

const VermutAperol = () => {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  // Asegurarnos de que las features son arrays
  const getFeatures = (path: string): string[] => {
    const features = t(path, { returnObjects: true });
    return Array.isArray(features) ? features : [];
  };

  const vermutFeatures = getFeatures('vermutAperol.vermut.features');
  const aperolFeatures = getFeatures('vermutAperol.aperol.features');

  return (
    <div className="bg-wine-50">
      {/* Hero Section - Más responsive */}
      <section 
        className="relative min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] bg-cover bg-center flex items-center" 
        style={{ backgroundImage: 'url("/vermut-hero.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative w-full flex items-center justify-center text-center text-white px-4 py-12">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 md:mb-6">
              {t('vermutAperol.hero.title')}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl px-4">
              {t('vermutAperol.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vermut Section - Mejorado para móviles */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{t('vermutAperol.vermut.title')}</h2>
              <p className="text-gray-600 mb-6 text-base md:text-lg">{t('vermutAperol.vermut.description')}</p>
              <ul className="space-y-3 md:space-y-4">
                {vermutFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm md:text-base">
                    <svg className="h-5 w-5 md:h-6 md:w-6 text-wine-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <div className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/vermut-detail.jpg"
                  alt={t('vermutAperol.vermut.title')}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Aperol Section - Mejorado para móviles */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{t('vermutAperol.aperol.title')}</h2>
              <p className="text-gray-600 mb-6 text-base md:text-lg">{t('vermutAperol.aperol.description')}</p>
              <ul className="space-y-3 md:space-y-4">
                {aperolFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm md:text-base">
                    <svg className="h-5 w-5 md:h-6 md:w-6 text-wine-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1"
            >
              <div className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/aperol-detail.jpg"
                  alt={t('vermutAperol.aperol.title')}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VermutAperol;
