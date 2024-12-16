import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://placehold.co/1920x1080/8B0000/FFFFFF/png?text=La+Dolores+Hero")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full w-full flex items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-4 sm:mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
            {t('home.hero.subtitle')}
          </p>
          <Link to="/productos">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine-600 hover:bg-wine-700 text-white px-8 py-3 rounded-full transition-colors"
            >
              {t('home.hero.cta')}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
