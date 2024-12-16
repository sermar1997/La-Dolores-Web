import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaAward, FaInfo, FaWineBottle } from 'react-icons/fa';
import { products } from '../data/wines';
import { ProductFormat, Product } from '../types/wine';

const ProductDetails: React.FC = () => {
  const params = useParams();
  const productId = params.productId;
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [selectedFormat, setSelectedFormat] = useState<ProductFormat | null>(null);

  const product = products.find(p => p.id === productId);

  // Seleccionar automáticamente el primer formato disponible
  useEffect(() => {
    if (product && product.formats && product.formats.length > 0) {
      const availableFormat = product.formats.find(f => (f.stock ?? 0) > 0) || product.formats[0];
      setSelectedFormat(availableFormat);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-wine-900 to-wine-800 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{t('products.notFound')}</h1>
          <button
            onClick={() => navigate('/productos')}
            className="inline-flex items-center px-4 py-2 bg-wine-600 rounded-full hover:bg-wine-700 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> {t('products.backToProducts')}
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedFormat) return;
    // Aquí iría la lógica para añadir al carrito
    console.log('Añadiendo al carrito:', {
      productId: product.id,
      formatId: selectedFormat.id,
      price: selectedFormat.price,
      volume: selectedFormat.volume
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-wine-900 to-wine-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/productos')}
          className="inline-flex items-center mb-8 px-4 py-2 bg-wine-600 rounded-full hover:bg-wine-700 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> {t('products.backToProducts')}
        </button>

        {/* Product Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-w-3 aspect-h-2 rounded-xl overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.locales[i18n.language].name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl font-playfair font-bold mb-4">
              {product.locales[i18n.language].name}
            </h1>
            <p className="text-lg text-wine-100 mb-6">
              {product.locales[i18n.language].description}
            </p>

            {/* Features */}
            {product.locales[i18n.language].features && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">{t('products.features')}</h3>
                <ul className="space-y-2">
                  {product.locales[i18n.language].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-wine-100">
                      <svg className="h-5 w-5 text-wine-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Format Selection */}
            {product.formats && product.formats.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">{t('products.formats')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.formats.map((format) => (
                    <button
                      key={format.id}
                      onClick={() => setSelectedFormat(format)}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        selectedFormat?.id === format.id
                          ? 'border-wine-300 bg-wine-700'
                          : 'border-wine-700 hover:border-wine-600'
                      }`}
                    >
                      <div className="font-semibold">{format.size}</div>
                      <div className="text-wine-300">{format.price}€</div>
                      {format.stock !== undefined && format.stock <= 5 && format.stock > 0 && (
                        <div className="text-sm text-wine-300 mt-1">
                          {t('products.lowStock', { count: format.stock })}
                        </div>
                      )}
                      {format.stock === 0 && (
                        <div className="text-sm text-wine-300 mt-1">
                          {t('products.outOfStock')}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            {selectedFormat && (
              <button
                onClick={handleAddToCart}
                disabled={selectedFormat.stock === 0}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  selectedFormat.stock === 0
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-wine-600 hover:bg-wine-700'
                }`}
              >
                {selectedFormat.stock === 0
                  ? t('products.outOfStock')
                  : t('products.addToCart', { price: `${selectedFormat.price}€` })}
              </button>
            )}
          </motion.div>
        </div>

        {/* Detailed Information Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Awards */}
            {product.awards && product.awards.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaAward className="mr-2" /> {t('products.awards')}
                </h3>
                <div className="space-y-4">
                  {product.awards.map((award, index) => (
                    <div key={index} className="border-b border-wine-700 pb-4 last:border-0">
                      <div className="text-wine-300 text-sm">{award.year}</div>
                      <div className="font-semibold">{award.name}</div>
                      <div className="text-wine-100 text-sm">{award.description}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Pairings */}
            {product.locales[i18n.language].pairings && product.locales[i18n.language].pairings!.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4">{t('products.pairings')}</h3>
                <ul className="space-y-2">
                  {product.locales[i18n.language].pairings!.map((pairing, index) => (
                    <li key={index} className="text-wine-100">• {pairing}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Long Description */}
          {product.locales[i18n.language].longDescription && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 bg-white/5 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{t('products.about')}</h3>
              <div className="text-wine-100 prose prose-invert">
                {product.locales[i18n.language].longDescription}
              </div>
            </motion.div>
          )}

          {/* Serving Suggestions */}
          {product.locales[i18n.language].servingSuggestions && product.locales[i18n.language].servingSuggestions!.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-white/5 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{t('products.servingSuggestions')}</h3>
              <ul className="space-y-2">
                {product.locales[i18n.language].servingSuggestions!.map((suggestion, index) => (
                  <li key={index} className="text-wine-100">• {suggestion}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
