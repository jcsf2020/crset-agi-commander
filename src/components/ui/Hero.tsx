import React from 'react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold text-white mb-4">
        {t('hero.title')}
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        {t('hero.subtitle')}
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded">
          {t('hero.learnMore')}
        </button>
        <button className="bg-transparent border border-purple-400 text-purple-400 px-6 py-2 rounded hover:bg-purple-400 hover:text-black">
          {t('hero.contact')}
        </button>
      </div>
    </section>
  );
};

export default Hero;
