import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaWineGlassAlt, FaUserFriends, FaClock, FaEuroSign } from 'react-icons/fa';

interface TastingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  groupSize: string;
  type: string;
  comments: string;
}

const Tastings: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<TastingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    groupSize: '',
    type: 'premium',
    comments: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    try {
      // Aquí iría la lógica para enviar los datos del formulario a tu backend
      console.log('Form data:', formData);
      setSubmitStatus('success');
      // Resetear el formulario después de un envío exitoso
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        groupSize: '',
        type: 'premium',
        comments: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const tastingTypes = ['premium', 'vermouth', 'wine'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-wine-900 to-wine-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-playfair font-bold mb-4"
          >
            {t('tastings.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-wine-100 max-w-3xl mx-auto"
          >
            {t('tastings.description')}
          </motion.p>
        </div>

        {/* Tasting Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tastingTypes.map((type, index) => (
            <motion.div
              key={type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <FaWineGlassAlt className="text-2xl text-wine-300 mr-2" />
                <h3 className="text-xl font-semibold">
                  {t(`tastings.types.${type}.name`)}
                </h3>
              </div>
              <p className="text-wine-100 mb-4">
                {t(`tastings.types.${type}.description`)}
              </p>
              <div className="space-y-2 text-wine-300">
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  {t(`tastings.types.${type}.duration`)}
                </div>
                <div className="flex items-center">
                  <FaEuroSign className="mr-2" />
                  {t(`tastings.types.${type}.price`)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">{t('tastings.schedule.title')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('tastings.schedule.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-wine-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('tastings.schedule.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-wine-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('tastings.schedule.phone')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-wine-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('tastings.schedule.groupSize')}
                  </label>
                  <input
                    type="number"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleInputChange}
                    min="1"
                    max="20"
                    required
                    className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-wine-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('tastings.schedule.date')}
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-wine-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('tastings.schedule.time')}
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-wine-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('tastings.schedule.type')}
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-wine-300"
                >
                  {tastingTypes.map(type => (
                    <option key={type} value={type}>
                      {t(`tastings.types.${type}.name`)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('tastings.schedule.comments')}
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-wine-300"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-600/20 text-green-200 px-4 py-2 rounded-lg">
                  {t('tastings.schedule.success')}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-600/20 text-red-200 px-4 py-2 rounded-lg">
                  {t('tastings.schedule.error')}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-wine-600 hover:bg-wine-700 transition-colors rounded-lg px-6 py-3 font-semibold"
              >
                {t('tastings.schedule.submit')}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tastings;
