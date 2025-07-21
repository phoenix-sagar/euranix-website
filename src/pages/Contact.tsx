import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual backend integration)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 flame-glow">
            <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Thank You!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your message has been sent successfully to contact@euranix.com. 
            We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-primary text-white font-semibold py-3 px-6 rounded-full"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-red-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Ready to transform your business with innovative technology solutions? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Let's Start a Conversation
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Whether you're looking to implement custom software solutions, need 
                cybersecurity services, or want to discuss how we can help your organization 
                leverage technology for growth, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full flame-glow">
                    <Mail className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">contact@euranix.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full flame-glow">
                    <Phone className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+91 XXX XXX XXXX</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full flame-glow">
                    <MapPin className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">India</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Serving clients globally</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What to Expect</h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-red-600 dark:text-red-400 mr-2" />
                    Initial consultation within 24 hours
                  </li>
                  <li className="flex items-center">
                    <MessageSquare className="h-4 w-4 text-red-600 dark:text-red-400 mr-2" />
                    Detailed project proposal within 3-5 days
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-red-600 dark:text-red-400 mr-2" />
                    Transparent pricing and timeline
                  </li>
                  <li className="flex items-center">
                    <Users className="h-4 w-4 text-red-600 dark:text-red-400 mr-2" />
                    Ongoing support and communication
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in">
              <div className="card-hover bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg phoenix-flame border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message / Requirements *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-white font-semibold py-4 px-6 rounded-lg inline-flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending to contact@euranix.com...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                  Your message will be sent to contact@euranix.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;