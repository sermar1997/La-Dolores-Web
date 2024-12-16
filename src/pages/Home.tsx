import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutPreview from '../components/home/AboutPreview';
import TastingSection from '../components/home/TastingSection';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const vermutFeatures = [
    'Elaboración artesanal',
    'Hierbas aromáticas seleccionadas',
    'Sabor tradicional y equilibrado'
  ];
  
  const aperolFeatures = [
    'Receta original italiana',
    'Perfecto para cócteles',
    'Refrescante y versátil'
  ];

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Hero />
      <FeaturedProducts />
      <AboutPreview />
      <TastingSection />
      {/* Spotlight Section - Vermut & Aperol */}
      <section className="py-20 bg-gradient-to-b from-wine-900 to-wine-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold mb-4">{t('home.spotlight.title')}</h2>
            <p className="text-xl text-wine-100">{t('home.spotlight.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vermut Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm h-full"
            >
              <div className="absolute inset-0">
                <img
                  src="https://placehold.co/800x1200/8B0000/FFFFFF/png?text=Vermut+La+Dolores"
                  alt="Vermut La Dolores"
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <div className="relative p-8 h-full flex flex-col justify-between z-10">
                <div>
                  <h3 className="text-3xl font-playfair font-bold mb-4">
                    Vermut La Dolores
                  </h3>
                  <p className="text-lg mb-6">
                    Nuestro vermut artesanal, elaborado siguiendo la receta tradicional 
                    con una cuidadosa selección de hierbas aromáticas y especias.
                  </p>
                  <ul className="space-y-3">
                    {vermutFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="h-5 w-5 text-wine-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/producto/vermut-rojo" className="mt-8 inline-block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-wine-600 hover:bg-wine-700 text-white px-6 py-3 rounded-full transition-colors"
                  >
                    Descubre Nuestro Vermut
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Aperol Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm h-full"
            >
              <div className="absolute inset-0">
                <img
                  src="https://placehold.co/800x1200/FF4500/FFFFFF/png?text=Aperol+Spritz"
                  alt="Aperol Spritz"
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <div className="relative p-8 h-full flex flex-col justify-between z-10">
                <div>
                  <h3 className="text-3xl font-playfair font-bold mb-4">
                    Aperol Spritz
                  </h3>
                  <p className="text-lg mb-6">
                    El auténtico aperitivo italiano, perfecto para momentos de 
                    celebración. Una combinación refrescante que cautiva los sentidos.
                  </p>
                  <ul className="space-y-3">
                    {aperolFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="h-5 w-5 text-wine-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/producto/aperol-spritz" className="mt-8 inline-block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-wine-600 hover:bg-wine-700 text-white px-6 py-3 rounded-full transition-colors"
                  >
                    Descubre Nuestro Aperol
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              {t('home.features.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.features.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="text-wine-600 mb-4">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(`home.features.feature${index}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`home.features.feature${index}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-wine-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('home.cta.description')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-wine-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('home.cta.button')}
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Home;
