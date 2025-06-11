
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-richblack-dark pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl text-gold mb-4">Famous Satellite</h3>
            <p className="text-gray-400 mb-4">
              {t('aboutDescription')}
            </p>
          </div>
          <div>
            <h3 className="text-xl text-gold mb-4">{t('solutions')}</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions" className="text-gray-400 hover:text-gold">Big Data</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-gold">Machine Learning</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-gold">AI</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-gold">Automation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-gold mb-4">{t('contact')}</h3>
            <p className="text-gray-400">info@famoussatellite.com</p>
            <p className="text-gray-400">+351 914 423 688</p>
            <p className="text-gray-400 mt-2">Portugal</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Famous Satellite. {t('copyright')}.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-gold text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-gold text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
