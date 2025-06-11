
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Demo: React.FC = () => {
  const { t } = useLanguage();
  
  const demoItems = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Experience how our AI solutions transform raw data into actionable business insights through intuitive visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      coming: false
    },
    {
      title: 'Intelligent Process Automation',
      description: 'See how our automation solutions eliminate repetitive tasks and streamline workflows across your organization.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      coming: false
    },
    {
      title: 'Machine Learning Predictions',
      description: 'Witness the power of predictive analytics and how it can help forecast trends and make data-driven decisions.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
      coming: true
    },
    {
      title: 'Natural Language Processing',
      description: 'Explore our NLP capabilities that enable machines to understand and respond to human language naturally.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
      coming: true
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Famous Satellite - {t('demoTitle')}</title>
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-richblack-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              <span className="gold-gradient">{t('demoTitle')}</span>
            </h1>
            <p className="text-xl text-gray-300">
              {t('demoDescription')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Demo Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {demoItems.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-richblack-dark via-richblack-dark/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    {item.coming ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gold/30 text-gold">
                        {t('comingSoon')}
                      </span>
                    ) : (
                      <button className="btn-secondary">
                        {t('viewDemo')}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Request Custom Demo */}
      <section className="py-20 bg-richblack-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span className="gold-gradient">{t('customDemoTitle')}</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              {t('customDemoDescription')}
            </p>
            <Link to="/contact" className="btn-primary">
              {t('requestCustomDemo')}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="gold-gradient">{t('keyFeaturesTitle')}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-richblack-light p-6 rounded-lg">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gold/10 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{t('realTimeAnalyticsTitle')}</h3>
              <p className="text-gray-400">
                {t('realTimeAnalyticsDesc')}
              </p>
            </div>
            
            <div className="bg-richblack-light p-6 rounded-lg">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gold/10 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{t('seamlessIntegrationTitle')}</h3>
              <p className="text-gray-400">
                {t('seamlessIntegrationDesc')}
              </p>
            </div>
            
            <div className="bg-richblack-light p-6 rounded-lg">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gold/10 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{t('enhancedSecurityTitle')}</h3>
              <p className="text-gray-400">
                {t('enhancedSecurityDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
