import React, { useState } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { US, ES } from 'country-flag-icons/react/3x2';
import { ALL_CATEGORIES } from '../../types/wine';

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const getCategoryTranslationKey = (category: string) => {
  return category.toLowerCase();
};

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [showCategories, setShowCategories] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-wine-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://placehold.co/40x40/wine/white"
                alt="La Dolores Logo"
                className="h-10 w-10"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex items-center justify-center">
            <div className="hidden sm:flex sm:space-x-8 items-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {t('nav.home')}
              </NavLink>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >
                <NavLink
                  to="/productos"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                    }`
                  }
                >
                  {t('nav.products')}
                </NavLink>

                <AnimatePresence>
                  {showCategories && (
                    <motion.div
                      variants={menuVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute left-0 w-48 mt-2 py-2 bg-wine-800 rounded-md shadow-xl z-50"
                    >
                      <Link
                        to="/productos"
                        className="block px-4 py-2 text-sm hover:bg-wine-700 transition-colors"
                      >
                        {t('products.categories.all')}
                      </Link>
                      {ALL_CATEGORIES.map((category) => {
                        const key = getCategoryTranslationKey(category);
                        return (
                          <Link
                            key={category}
                            to={`/productos?categoria=${encodeURIComponent(category)}`}
                            className="block px-4 py-2 text-sm hover:bg-wine-700 transition-colors"
                          >
                            {t(`products.categories.${key}`)}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/catas"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {t('nav.tastings')}
              </NavLink>

              <NavLink
                to="/sobre-nosotros"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {t('nav.about')}
              </NavLink>

              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {t('nav.contact')}
              </NavLink>
            </div>
          </div>

          {/* Language Selector */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => changeLanguage('es')}
              className={`w-6 h-4 transition-opacity ${i18n.language === 'es' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
              title="Español"
            >
              <ES title="Español" />
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`w-6 h-4 transition-opacity ${i18n.language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
              title="English"
            >
              <US title="English" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
