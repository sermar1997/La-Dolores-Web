import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiSettings } from 'react-icons/fi';
import { CategoryType } from '../types/wine';
import { products } from '../data/wines';

const Products = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [showSettings, setShowSettings] = useState(false);

  // Obtener la categoría de la URL
  const categoryParam = searchParams.get('categoria');
  const selectedCategory = categoryParam as CategoryType | 'all' || 'all';

  // Filtrar productos por categoría
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.categories.includes(selectedCategory as CategoryType));

  // Calcular páginas
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Resetear la página cuando cambia la categoría o el número de items por página
  useEffect(() => {
    setCurrentPage(0);
  }, [selectedCategory, itemsPerPage]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-wine-900 to-wine-800">
      {/* Hero Section */}
      <section className="relative w-full text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6"
          >
            {selectedCategory === 'all' 
              ? t('products.title')
              : t(`products.categories.${selectedCategory.toLowerCase().replace(' ', '')}`)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            {t('products.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Settings Button */}
          <div className="absolute top-0 right-4 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowSettings(!showSettings)}
              className="bg-wine-600 p-2 rounded-full text-white"
            >
              <FiSettings className="w-5 h-5" />
            </motion.button>

            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-wine-800 rounded-md shadow-lg p-4"
                >
                  <label className="text-white text-sm block mb-2">
                    {t('products.settings.itemsPerPage')}
                  </label>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="w-full bg-wine-700 text-white rounded p-1"
                  >
                    <option value={3}>3</option>
                    <option value={6}>6</option>
                    <option value={9}>9</option>
                    <option value={12}>12</option>
                  </select>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <AnimatePresence mode="wait">
              {currentProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => navigate(`/productos/${product.id}`)}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl cursor-pointer"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.locales[i18n.language].name}
                      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-bold mb-2">
                        {product.locales[i18n.language].name}
                      </h3>
                      <p className="text-sm text-gray-200">
                        {product.locales[i18n.language].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevPage}
                className="bg-wine-600 hover:bg-wine-700 text-white p-3 rounded-full"
              >
                <FiChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentPage === index ? 'bg-wine-500' : 'bg-wine-700'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextPage}
                className="bg-wine-600 hover:bg-wine-700 text-white p-3 rounded-full"
              >
                <FiChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
