
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  technologies?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  className,
  technologies 
}) => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={cn(
        "bg-richblack-light border border-gray-800 rounded-lg p-6 hover:border-gold/30 transition-all duration-300",
        className
      )}
    >
      <div className="text-gold mb-4 w-12 h-12 flex items-center justify-center bg-gold/10 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
      
      {technologies && technologies.length > 0 && (
        <div className="mt-4">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center text-sm text-gold hover:text-gold-light transition-colors"
          >
            <span>{t('technologies')}</span>
            {expanded ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
          </button>
          
          {expanded && (
            <div className="mt-3 pt-3 border-t border-gray-800">
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs bg-richblack-dark text-gray-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
