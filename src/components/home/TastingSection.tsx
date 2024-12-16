import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaWineGlassAlt, FaCalendarAlt } from 'react-icons/fa';

const TastingSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-wine-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-playfair font-bold mb-4"
          >
            {t('tastings.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-wine-100"
          >
            {t('tastings.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-wine-800/50 rounded-xl p-8"
          >
            <FaWineGlassAlt className="text-4xl text-wine-300 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">{t('tastings.types.premium.name')}</h3>
            <p className="text-wine-100 mb-4">{t('tastings.types.premium.description')}</p>
            <div className="text-wine-300">
              <p>{t('tastings.types.premium.duration')}</p>
              <p>{t('tastings.types.premium.price')}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-wine-800/50 rounded-xl p-8"
          >
            <div className="space-y-4">
              <p className="text-lg text-wine-100">{t('tastings.shortDescription')}</p>
              <ul className="space-y-2">
                {Object.keys(t('tastings.features', { returnObjects: true })).map((key) => (
                  <li key={key} className="flex items-center text-wine-300">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t(`tastings.features.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/catas"
            className="inline-flex items-center px-8 py-3 bg-wine-600 rounded-full hover:bg-wine-700 transition-colors text-lg font-semibold"
          >
            <FaCalendarAlt className="mr-2" />
            {t('tastings.schedule.title')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TastingSection;
