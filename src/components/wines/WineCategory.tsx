import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../../types/wine';
import { useTranslation } from 'react-i18next';

interface WineCategoryProps {
  name: string;
  description: string;
  wines: Product[];
}

const WineCategory: React.FC<WineCategoryProps> = ({ name, description, wines }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">{name}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wines.map((wine) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={wine.image}
                  alt={wine.locales[i18n.language].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {wine.locales[i18n.language].name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {wine.locales[i18n.language].description}
                </p>
                {wine.locales[i18n.language].features && (
                  <ul className="space-y-2">
                    {wine.locales[i18n.language].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 text-wine-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 flex justify-between items-center">
                  {wine.formats.length > 0 && (
                    <span className="text-sm text-gray-600">
                      {t('products.availableFormats')}: {wine.formats.length}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WineCategory;
