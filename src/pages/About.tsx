import React, { useEffect, useRef } from 'react';
import { Heart, Target, Users, Award, Globe, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
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

  const coreValues = [
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We understand the unique challenges of our clients and communities, designing solutions with genuine care and understanding.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, delivering quality solutions that exceed expectations.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Every project we undertake is measured by its potential to create positive change in communities and lives.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of partnership, working closely with our clients to achieve shared goals and mutual success.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creativity and cutting-edge technology to solve complex problems with elegant, effective solutions.'
    },
    {
      icon: Target,
      title: 'Purpose',
      description: 'We are driven by a clear mission to make technology accessible and beneficial for all, especially the underserved.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-red-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="gradient-text">Euranix</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Euranix Technologies Private Limited builds cutting-edge software solutions 
              for any domain, empowering businesses and communities through innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 flame-glow">
                <Target className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                To democratize access to technology and create innovative software solutions 
                that empower businesses across all domains, enabling growth, efficiency, 
                and digital transformation through cutting-edge technology.
              </p>
            </div>
            <div className="fade-in">
              <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 flame-glow">
                <Lightbulb className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                To become the leading technology partner for organizations worldwide, 
                creating sustainable impact through innovative solutions that bridge 
                the gap between complex business challenges and elegant technological solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Founded with a passion for technology and innovation
              </p>
            </div>
            
            <div className="card-hover bg-white dark:bg-gray-900 p-8 md:p-12 rounded-2xl shadow-lg fade-in phoenix-flame">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Euranix was born from a simple yet powerful belief: that technology 
                  should be a catalyst for positive change. With over 10 years of combined experience 
                  in software development, our team has witnessed the transformative power of 
                  well-designed technology solutions.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  We recognized that while businesses across various domains wanted to leverage 
                  technology for growth and efficiency, they often lacked access to tailored 
                  solutions that truly understood their unique challenges. This gap became our 
                  opportunity to make a meaningful difference.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Today, we're proud to serve as a catalyst for digital transformation, providing 
                  not just software solutions, but partnerships that drive real business value. 
                  Our work extends beyond code – we're building bridges to opportunity, one 
                  innovation at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do at Euranix Technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="card-hover bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center fade-in phoenix-flame border border-gray-100 dark:border-gray-800">
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 flame-glow">
                  <value.icon className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Experience & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our team brings together diverse expertise in technology, business, 
              and innovation to drive meaningful change.
            </p>
          </div>
          
          <div className="card-hover bg-white dark:bg-gray-900 p-8 md:p-12 rounded-2xl shadow-lg max-w-4xl mx-auto text-center fade-in phoenix-flame">
            <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 flame-glow">
              <Users className="h-10 w-10 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              10+ Years of Combined Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Our founding team consists of experienced technologists who have worked 
              across industries including finance, healthcare, education, and enterprise 
              software development. With a combined experience of over 10 years in 
              software development and project management, we bring both technical 
              expertise and deep understanding of diverse business domains.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;