import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AboutPreview: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-wine-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-playfair font-bold text-wine-900">
              {t('home.about.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('home.about.description')}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-wine-900 mb-2">
                  {t('home.about.tradition.title')}
                </h3>
                <p className="text-gray-600">
                  {t('home.about.tradition.description')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-wine-900 mb-2">
                  {t('home.about.quality.title')}
                </h3>
                <p className="text-gray-600">
                  {t('home.about.quality.description')}
                </p>
              </div>
            </div>
            <Link to="/sobre-nosotros">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-wine-600 hover:bg-wine-700 text-white px-8 py-3 rounded-full transition-colors"
              >
                {t('home.about.cta')}
              </motion.button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img
              src="https://placehold.co/800x600/8B0000/FFFFFF/png?text=Nuestra+Historia"
              alt="La Dolores Historia"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-wine-900 text-white p-8 rounded-lg shadow-xl">
              <p className="text-2xl font-playfair">
                {t('home.about.yearsFounded')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
