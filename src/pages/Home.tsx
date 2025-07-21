import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Users, Globe, RotateCcw, Headphones, DollarSign, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import DeploymentMap from '../components/DeploymentMap';

const Home: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Typing animation for PRA words
    const typingWords = document.querySelectorAll('.typing-word');
    
    typingWords.forEach((wordElement, index) => {
      const word = wordElement.getAttribute('data-word') || '';
      const remainingLettersSpan = wordElement.querySelector('.remaining-letters');
      const remainingText = word.slice(1); // Remove first letter
      
      setTimeout(() => {
        if (remainingLettersSpan) {
          let currentIndex = 0;
          const typeInterval = setInterval(() => {
            if (currentIndex < remainingText.length) {
              remainingLettersSpan.textContent = remainingText.slice(0, currentIndex + 1);
              currentIndex++;
            } else {
              clearInterval(typeInterval);
            }
          }, 100); // 100ms between each character
        }
      }, 1000 + (index * 1500)); // Stagger each word by 1.5 seconds
    });

    // Intersection observer for fade-in elements
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const whyChooseUsItems = [
    {
      icon: CheckCircle,
      title: 'Proven Expertise',
      description: '10+ years of combined experience in software development across various domains'
    },
    {
      icon: Globe,
      title: 'Social Impact Focus',
      description: 'Every solution is designed with community empowerment and social good in mind'
    },
    {
      icon: RotateCcw,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business and adapt to changing requirements'
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: 'Comprehensive maintenance and support services to ensure optimal performance'
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Fair and transparent pricing with excellent value for your investment'
    },
    {
      icon: Zap,
      title: 'Agile Methodology',
      description: 'Flexible development approach with regular feedback and iterations'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Fire flame dots animation */}
      <div className="flame-dots">
        {Array.from({ length: 40 }, (_, i) => (
          <div
            key={i}
            className="flame-dot"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-white via-gray-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-red-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            {/* PRA Section - Animated */}
            <div className="phoenix-rise mb-16">
              <div className="pra-container">
                <div className="typing-word" data-word="PRECISE">
                  <span className="first-letter">P</span>
                  <span className="remaining-letters"></span>
                </div>
                <div className="typing-word" data-word="RELIABLE">
                  <span className="first-letter">R</span>
                  <span className="remaining-letters"></span>
                </div>
                <div className="typing-word" data-word="AGILE">
                  <span className="first-letter">A</span>
                  <span className="remaining-letters"></span>
                </div>
              </div>
              
              <p className="text-lg text-red-600 dark:text-red-400 text-center max-w-2xl mx-auto mt-8 opacity-0 subtitle-fade font-semibold" style={{ animationDelay: '6s' }}>
                The core values that drive everything we do at Euranix
              </p>
            </div>
            
            {/* Main Content - Static */}
            <div className="static-content">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Empowering <span className="gradient-text">Innovation</span><br />
                <span className="text-gray-900 dark:text-white">Through Technology</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Euranix builds cutting-edge software solutions 
                for any domain with proven expertise and social impact focus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-primary text-white font-semibold py-4 px-8 rounded-full inline-flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="btn-secondary font-semibold py-4 px-8 rounded-full inline-flex items-center justify-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Global Software Deployments
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our software solutions are deployed across multiple countries, 
              empowering businesses and communities worldwide.
            </p>
          </div>

          <div>
            <DeploymentMap />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 static-content">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Euranix?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The advantages of partnering with us for your technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <div key={index} className="card-hover bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg phoenix-flame">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full flame-glow">
                    <item.icon className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 dark:bg-black text-white static-content">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us in our mission to empower businesses and communities through 
              innovative technology solutions.
            </p>
            <Link
              to="/contact"
              className="btn-primary text-white font-semibold py-4 px-8 rounded-full inline-flex items-center justify-center group pulse-red"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;