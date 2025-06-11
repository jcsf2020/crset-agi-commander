
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import TeamMember from '../components/TeamMember';
import { Helmet } from 'react-helmet';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  const teamMembers = [
    {
      position: t('ceoPosition'),
      skills: ['Big Data', 'Data Analytics', 'Machine Learning', 'IA Generativa', 'Cloud Computing', 'Automação Inteligente'],
      certifications: ['IBM', 'Agile', 'Tokio School']
    },
    {
      position: t('ctoPosition'),
      skills: ['Gestão Técnica', 'Projetos Digitais', 'PHP', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Zend Framework', 'jQuery', 'Prototype', 'Metodologias Ágeis'],
      certifications: ['Scrum', 'Kanban', 'Lean', 'Sonar', 'Jenkins', 'Tokio School']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>CR_SET Solutions - Sobre Nós | Especialistas em Data Science, Inteligência Artificial, Big Data</title>
        <meta name="description" content="Conheça a CR_SET Solutions - especialistas em Data Science, Inteligência Artificial, Big Data, Cloud, Automação e Consultoria Digital." />
        <meta name="keywords" content="Data Science, Inteligência Artificial, Big Data, Cloud, Automação, Consultoria Digital, CR_SET Solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-richblack-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              <span className="gold-gradient">{t('aboutTitle')}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              {t('aboutDescription')}
            </p>
            <p className="text-md text-gray-400">
              A CR_SET Solutions é especialista em Data Science, Inteligência Artificial, Cloud Computing, DevOps e NLP, com foco em soluções tecnológicas avançadas desde 2016.
            </p>
          </div>
        </div>
      </section>
      
      {/* Technical Capabilities Summary */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gold-gradient">Capacidades Técnicas</span>
          </h2>
          
          <div className="max-w-4xl mx-auto bg-richblack-light rounded-lg p-8">
            <p className="text-gray-300 mb-6">
              Unimos tecnologia, estratégia e inovação para criar soluções digitais de topo, com experiência comprovada em projetos nacionais e internacionais. Foco em automação, eficiência e resultados mensuráveis.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gold">Data Science & Big Data</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>IBM Data Science Professional Certificate: Python, SQL, análise estatística, visualização e machine learning</li>
                  <li>IBM Data Analyst Professional Certificate: Excel, Python, SQL e ferramentas de visualização</li>
                  <li>Big Data Foundations (IBM): Conceitos de Big Data, Hadoop e Spark</li>
                  <li>Data Science Foundations (IBM): Fundamentos de ciência de dados e visualização</li>
                  <li>Tokio School: Data Science & Big Data</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gold">Inteligência Artificial & Machine Learning</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>IBM AI Engineering Professional Certificate: ML, deep learning, NLP com TensorFlow e PyTorch</li>
                  <li>Deep Learning Essentials (IBM): Redes neurais e fundamentos de deep learning</li>
                  <li>Machine Learning with Python (IBM): Algoritmos de ML com Python</li>
                  <li>AI Foundations for Everyone (IBM): Conceitos e aplicações de IA</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gold">Cloud Computing & DevOps</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>IBM Cloud Essentials: Fundamentos de cloud e serviços IBM</li>
                  <li>IBM Cloud Core: Kubernetes, containers e serviços essenciais IBM Cloud</li>
                  <li>Docker Essentials: Introdução ao Docker e containers para devs</li>
                  <li>Introduction to Containers, Kubernetes, and OpenShift</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gold">Processamento de Linguagem Natural (NLP)</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>NLP with Classification and Vector Spaces (DeepLearning.AI): Classificação de texto e vetores</li>
                  <li>NLP with Probabilistic Models (DeepLearning.AI): Modelos probabilísticos para NLP</li>
                </ul>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-3 text-gold">Outras Certificações Relevantes</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Agile Explorer (IBM): Princípios e práticas ágeis</li>
                  <li>Data Visualization with Python (IBM): Visualizações interativas com Python</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-richblack-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="gold-gradient">{t('ourTeam')}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                position={member.position}
                skills={member.skills}
                certifications={member.certifications}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="gold-gradient">Nossos Valores</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-richblack-light rounded-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gold/10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Inovação</h3>
              <p className="text-gray-400">
                Constantemente expandimos os limites do possível com a tecnologia.
              </p>
            </div>
            
            <div className="bg-richblack-light rounded-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gold/10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Confiança & Segurança</h3>
              <p className="text-gray-400">
                Priorizamos a segurança e confidencialidade dos dados dos nossos clientes acima de tudo.
              </p>
            </div>
            
            <div className="bg-richblack-light rounded-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gold/10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.479m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Parceria com Clientes</h3>
              <p className="text-gray-400">
                Trabalhamos de perto com os nossos clientes para entender suas necessidades e entregar soluções personalizadas.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company History */}
      <section className="py-20 bg-richblack-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="gold-gradient">Nossa Jornada</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gold/30"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-richblack font-bold">2016</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Fundação</h3>
                  <p className="text-gray-400">
                    A CR_SET Solutions foi fundada com a visão de transformar a forma como as empresas alavancam a tecnologia.
                  </p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-richblack font-bold">2018</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Expansão</h3>
                  <p className="text-gray-400">
                    Expandimos nossa oferta de serviços para incluir análise avançada de dados e soluções de machine learning.
                  </p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-richblack font-bold">2020</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Parcerias Estratégicas</h3>
                  <p className="text-gray-400">
                    Formamos parcerias-chave para aprimorar nossas capacidades de IA e automação.
                  </p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-richblack font-bold">2022</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Projetos Internacionais</h3>
                  <p className="text-gray-400">
                    Começamos a trabalhar com clientes internacionais, expandindo nosso alcance além de Portugal.
                  </p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-richblack font-bold">2025</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Hoje</h3>
                  <p className="text-gray-400">
                    Continuamos a inovar e fornecer soluções tecnológicas de ponta para nossa base crescente de clientes.
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

export default About;
