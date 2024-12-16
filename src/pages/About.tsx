import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-wine-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative py-16 bg-wine-900 text-white"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-xl md:text-2xl">{t('about.subtitle')}</p>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12">
        {/* Historia Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-wine-900 mb-6">{t('about.history.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700 mb-4">{t('about.history.content')}</p>
            </div>
            <div className="relative h-64 md:h-auto">
              <img
                src="https://placehold.co/600x400/wine/white"
                alt="Historia"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.section>

        {/* Valores Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-wine-900 mb-6">{t('about.values.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['tradition', 'quality', 'innovation'].map((value) => (
              <div key={value} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-wine-900 mb-3">
                  {t(`about.values.${value}.title`)}
                </h3>
                <p className="text-gray-700">{t(`about.values.${value}.description`)}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Proceso Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-wine-900 mb-6">{t('about.process.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-64 md:h-auto">
              <img
                src="https://placehold.co/600x400/wine/white"
                alt="Proceso"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-4">{t('about.process.content')}</p>
            </div>
          </div>
        </motion.section>

        {/* Equipo Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-wine-900 mb-6">{t('about.team.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={`https://placehold.co/128x128/wine/white`}
                    alt={t(`about.team.member${member}.name`)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-wine-900 mb-2">
                  {t(`about.team.member${member}.name`)}
                </h3>
                <p className="text-gray-600 mb-2">{t(`about.team.member${member}.position`)}</p>
                <p className="text-gray-700">{t(`about.team.member${member}.description`)}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
