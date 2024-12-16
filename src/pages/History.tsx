import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const History: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full bg-wine-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6"
          >
            {t('history.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            {t('history.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } gap-8`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={`/history-${index}.jpg`}
                    alt={t(`history.timeline.${index}.title`)}
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">
                    {t(`history.timeline.${index}.title`)}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {t(`history.timeline.${index}.description`)}
                  </p>
                  <div className="text-wine-600 font-semibold">
                    {t(`history.timeline.${index}.date`)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-wine-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-playfair font-bold mb-6"
          >
            {t('history.legacy.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            {t('history.legacy.description')}
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default History;
