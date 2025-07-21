import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { servicesData, ServiceCategory } from '../data/servicesData';

const Services: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
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

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const toggleService = (serviceId: string) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId);
    } else {
      newExpanded.add(serviceId);
    }
    setExpandedServices(newExpanded);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-red-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Comprehensive technology solutions designed to empower businesses 
              and drive digital transformation across all domains.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {servicesData.map((category, categoryIndex) => (
              <div key={category.id} className="fade-in">
                <div className="card-hover bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden phoenix-flame">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full p-8 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{category.icon}</div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {category.title}
                          </h2>
                          <p className="text-gray-600 dark:text-gray-300">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {expandedCategories.has(category.id) ? (
                          <ChevronUp className="h-6 w-6 text-red-600 dark:text-red-400" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-red-600 dark:text-red-400" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Category Content */}
                  <div className={`service-expand ${expandedCategories.has(category.id) ? 'expanded' : ''}`}>
                    <div className="px-8 pb-8 space-y-6">
                      {category.services.map((service, serviceIndex) => (
                        <div key={service.id} className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden">
                          <button
                            onClick={() => toggleService(service.id)}
                            className="w-full p-6 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="text-2xl">{service.icon}</div>
                                <div>
                                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                                    {service.title}
                                  </h3>
                                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                              <div className="flex-shrink-0">
                                {expandedServices.has(service.id) ? (
                                  <ChevronUp className="h-5 w-5 text-red-600 dark:text-red-400" />
                                ) : (
                                  <ChevronDown className="h-5 w-5 text-red-600 dark:text-red-400" />
                                )}
                              </div>
                            </div>
                          </button>

                          {/* Service Items */}
                          <div className={`service-expand ${expandedServices.has(service.id) ? 'expanded' : ''}`}>
                            <div className="px-6 pb-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {service.items.map((item, itemIndex) => (
                                  <div key={itemIndex} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-red-600 dark:bg-red-400 rounded-full flex-shrink-0"></div>
                                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business 
              with innovative technology solutions.
            </p>
            <a
              href="/contact"
              className="btn-primary text-white font-semibold py-4 px-8 rounded-full inline-flex items-center justify-center group"
            >
              Contact Us Today
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform rotate-[-90deg]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;