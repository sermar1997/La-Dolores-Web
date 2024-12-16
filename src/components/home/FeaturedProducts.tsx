import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const FeaturedProducts: React.FC = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 'vermut-rojo',
      name: 'Vermut Rojo',
      image: 'https://placehold.co/400x600/8B0000/FFFFFF/png?text=Vermut+Rojo',
      description: t('products.vermutRojo.shortDescription')
    },
    {
      id: 'vermut-blanco',
      name: 'Vermut Blanco',
      image: 'https://placehold.co/400x600/FFFFFF/8B0000/png?text=Vermut+Blanco',
      description: t('products.vermutBlanco.shortDescription')
    },
    {
      id: 'vino-tinto',
      name: 'Vino Tinto',
      image: 'https://placehold.co/400x600/8B0000/FFFFFF/png?text=Vino+Tinto',
      description: t('products.vinoTinto.shortDescription')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold mb-4 text-wine-900">
            {t('home.featuredProducts.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('home.featuredProducts.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-w-2 aspect-h-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold mb-2 text-wine-900">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <Link to={`/producto/${product.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-wine-600 hover:bg-wine-700 text-white px-6 py-3 rounded-full transition-colors"
                  >
                    {t('common.learnMore')}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
