import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send, MessageCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import Toast from '../ui/Toast';

gsap.registerPlugin(ScrollTrigger);

interface ToastState {
  type: 'success' | 'error' | 'warning';
  message: string;
  isVisible: boolean;
}

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>({
    type: 'success',
    message: '',
    isVisible: false
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-card',
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.form-element',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.social-link',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.social-section',
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const showToast = (type: 'success' | 'error' | 'warning', message: string) => {
    setToast({
      type,
      message,
      isVisible: true
    });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      showToast('error', 'Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      showToast('error', 'Please enter your email address');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      showToast('error', 'Please enter a valid email address');
      return false;
    }
    if (!formData.subject.trim()) {
      showToast('error', 'Please enter a subject');
      return false;
    }
    if (!formData.message.trim()) {
      showToast('error', 'Please enter your message');
      return false;
    }
    if (formData.message.length < 10) {
      showToast('error', 'Message should be at least 10 characters long');
      return false;
    }
    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateKey = import.meta.env.VITE_TEMPLATE_KEY;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceId || !templateKey || !publicKey) {
      showToast('error', 'Email service is not configured. Please contact the administrator.');
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    console.log(templateParams);

    setIsSubmitting(true);

    try {
      const response = await emailjs.send(serviceId, templateKey, templateParams, { publicKey });
      
      if (response.status === 200) {
        showToast('success', 'Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        gsap.fromTo(formRef.current,
          { scale: 1 },
          { 
            scale: 1.02, 
            duration: 0.2, 
            yoyo: true, 
            repeat: 1,
            ease: 'power2.inOut'
          }
        );
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      let errorMessage = 'Failed to send message. Please try again later.';
      
      if (error instanceof Error) {
        if (error.message.includes('network')) {
          errorMessage = 'Network error. Please check your connection and try again.';
        } else if (error.message.includes('rate limit')) {
          errorMessage = 'Too many requests. Please wait a moment and try again.';
        }
      }
      
      showToast('error', errorMessage);
      
  
      gsap.fromTo(formRef.current,
        { x: 0 },
        { 
          x: -10, 
          duration: 0.1, 
          yoyo: true, 
          repeat: 5,
          ease: 'power2.inOut'
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'lakshaylalia@gmail.com',
      link: 'mailto:lakshaylalia@gmail.com',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 78761 40826',
      link: 'tel:+917876140826',
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kangra, Himachal Pradesh',
      link: '#',
      color: 'orange'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/lakshaylalia',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lakshay-lalia/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Globe,
      name: 'Codolio',
      url: 'https://codolio.com/profile/Phoenix_13',
      color: 'from-purple-600 to-purple-700'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
      orange: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <>
      <Toast
        type={toast.type}
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      
      <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects,
              or just having a chat about technology and development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className='px-4'>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello,
                  I'd love to hear from you. Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="contact-card group flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600"
                    >
                      <div className={`w-12 h-12 rounded-lg ${getColorClasses(info.color)} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {info.title}
                        </div>
                        <div className="text-gray-600 dark:text-slate-400">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="social-section">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex dark:space-x-4 justify-evenly items-center lg:justify-start lg:space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`social-link group p-3 bg-gradient-to-r ${social.color} text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}
                        aria-label={social.name}
                      >
                        <Icon className="w-6 h-6 group-hover:animate-pulse" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Send Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-element">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="form-element">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-element">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-element">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello! (minimum 10 characters)"
                  />
                  <div className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                    {formData.message.length}/10 characters minimum
                  </div>
                </div>

                <div className="form-element">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="contact-card bg-gray-200 text-black dark:bg-gradient-to-r dark:from-blue-600 dark:to-orange-500 dark:text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Ready to work together?
              </h3>
              <p className="text-gray-900 dark:text-blue-100 mb-6 max-w-2xl mx-auto">
                I'm currently open to new opportunities and exciting projects.
                Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:lakshay.lalia@nith.ac.in"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white dark:bg-white dark:text-blue-600 font-semibold rounded-lg hover:bg-blue-500 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
                <a
                  href="/Lakshay.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 border-2 text-white bg-gray-800 dark:border-white dark:text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-200"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;