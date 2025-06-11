
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('pt')}
        className={`${language === 'pt' ? 'text-gold' : 'text-gray-400'} p-1 text-sm`}
      >
        PT
      </Button>
      <span className="text-gray-500">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={`${language === 'en' ? 'text-gold' : 'text-gray-400'} p-1 text-sm`}
      >
        EN
      </Button>
      <span className="text-gray-500">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('fr')}
        className={`${language === 'fr' ? 'text-gold' : 'text-gray-400'} p-1 text-sm`}
      >
        FR
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
