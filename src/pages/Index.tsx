import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import { Database, Cpu, BarChart, Zap } from 'lucide-react';

const Index: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: 'Big Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics solutions.',
      icon: <Database size={24} />
    },
    {
      title: 'Machine Learning',
      description: 'Implement intelligent algorithms that learn and evolve with your business needs.',
      icon: <Cpu size={24} />
    },
    {
      title: 'AI Solutions',
      description: 'Leverage the power of artificial intelligence to solve complex business challenges.',
      icon: <BarChart size={24} />
    },
    {
      title: 'Intelligent Automation',
      description: 'Streamline processes and increase efficiency with smart automation tools.',
      icon: <Zap size={24} />
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Helmet>
        <title>Famous Satellite - Advanced Technology Solutions</title>
        <meta name="description" content="Famous Satellite - Specialized in Big Data, Machine Learning, AI and Intelligent Automation" />
      </Helmet>

      <Hero />

      {/* About Section */}
      <section className="section-padding bg-richblack-light">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gold-gradient">{t('aboutTitle')}</span>
            </h2>
            <p className="text-gray-300">
              {t('aboutDescription')}
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/about" className="btn-secondary">
              {t('learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-richblack">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="gold-gradient">{t('solutionsTitle')}</span>
            </h2>
            <p className="text-gray-300">
              {t('solutionsDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link to="/solutions" className="btn-primary">
              {t('learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-gold/5 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to transform your business?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today and discover how our technological solutions can help you achieve your goals.
            </p>
            <Link to="/contact" className="btn-primary">
              {t('contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;