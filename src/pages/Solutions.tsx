
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from '../components/ServiceCard';
import { Database, Cpu, BarChart, Zap, Globe, Code, Terminal, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Solutions: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const solutions = [
    {
      title: t('bigDataAnalyticsTitle'),
      description: t('bigDataAnalyticsDesc'),
      icon: <Database size={24} />,
      technologies: ['Hadoop', 'Spark', 'Python', 'R', 'Tableau'],
      category: 'analytics'
    },
    {
      title: t('machineLearningTitle'),
      description: t('machineLearningDesc'),
      icon: <Cpu size={24} />,
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'AWS SageMaker'],
      category: 'ai'
    },
    {
      title: t('aiSolutionsTitle'),
      description: t('aiSolutionsDesc'),
      icon: <BarChart size={24} />,
      technologies: ['OpenAI', 'NLP', 'Computer Vision', 'Deep Learning'],
      category: 'ai'
    },
    {
      title: t('intelligentAutomationTitle'),
      description: t('intelligentAutomationDesc'),
      icon: <Zap size={24} />,
      technologies: ['RPA', 'Process Mining', 'Manus.im', 'Automation Anywhere'],
      category: 'automation'
    },
    {
      title: t('webDevelopmentTitle'),
      description: t('webDevelopmentDesc'),
      icon: <Globe size={24} />,
      technologies: ['PHP', 'Zend', 'jQuery', 'React', 'Angular'],
      category: 'development'
    },
    {
      title: t('databaseManagementTitle'),
      description: t('databaseManagementDesc'),
      icon: <Code size={24} />,
      technologies: ['SQL', 'Snowflake', 'MongoDB', 'PostgreSQL', 'Oracle'],
      category: 'database'
    },
    {
      title: t('cloudSolutionsTitle'),
      description: t('cloudSolutionsDesc'),
      icon: <Terminal size={24} />,
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker'],
      category: 'cloud'
    },
    {
      title: t('cybersecurityTitle'),
      description: t('cybersecurityDesc'),
      icon: <Shield size={24} />,
      technologies: ['Penetration Testing', 'Security Audits', 'Encryption', 'Compliance'],
      category: 'security'
    }
  ];
  
  const filteredSolutions = activeFilter === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category === activeFilter);

  const filterCategories = [
    { id: 'all', label: t('allSolutions') },
    { id: 'analytics', label: t('dataAnalytics') },
    { id: 'ai', label: t('aiAndML') },
    { id: 'automation', label: t('automation') },
    { id: 'development', label: t('development') },
    { id: 'database', label: t('database') },
    { id: 'cloud', label: t('cloud') },
    { id: 'security', label: t('security') }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-richblack-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              <span className="gold-gradient">{t('solutionsTitle')}</span>
            </h1>
            <p className="text-xl text-gray-300">
              {t('solutionsDescription')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-8 bg-richblack-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === category.id
                    ? 'bg-gold text-richblack font-medium'
                    : 'bg-richblack-light text-gray-300 hover:bg-gold/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredSolutions.map((solution, index) => (
              <motion.div key={index} variants={item} className="flex">
                <ServiceCard
                  title={solution.title}
                  description={solution.description}
                  icon={solution.icon}
                  technologies={solution.technologies}
                  className="flex-1 h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-richblack-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="gold-gradient">{t('ourApproach')}</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gold/30"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-richblack font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('discoveryAnalysis')}</h3>
                  <p className="text-gray-400">
                    {t('discoveryAnalysisDesc')}
                  </p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-richblack font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('strategySolutionDesign')}</h3>
                  <p className="text-gray-400">
                    {t('strategySolutionDesignDesc')}
                  </p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-richblack font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('developmentImplementation')}</h3>
                  <p className="text-gray-400">
                    {t('developmentImplementationDesc')}
                  </p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-richblack font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('testingQA')}</h3>
                  <p className="text-gray-400">
                    {t('testingQADesc')}
                  </p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-richblack font-bold">5</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('deploymentTraining')}</h3>
                  <p className="text-gray-400">
                    {t('deploymentTrainingDesc')}
                  </p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-richblack font-bold">6</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('ongoingSupportOptimization')}</h3>
                  <p className="text-gray-400">
                    {t('ongoingSupportOptimizationDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
