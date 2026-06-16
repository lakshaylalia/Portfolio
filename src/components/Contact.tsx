import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Toast from '../ui/Toast';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';

interface ToastState {
  type: 'success' | 'error' | 'warning';
  message: string;
  isVisible: boolean;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>({
    type: 'success',
    message: '',
    isVisible: false,
  });

  const showToast = (type: 'success' | 'error' | 'warning', message: string) => {
    setToast({ type, message, isVisible: true });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

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

    setIsSubmitting(true);

    try {
      const response = await emailjs.send(serviceId, templateKey, templateParams, { publicKey });

      if (response.status === 200) {
        showToast('success', "Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
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
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 78761 40826',
      link: 'tel:+917876140826',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kangra, Himachal Pradesh',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: 'https://github.com/lakshaylalia' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/lakshay-lalia/' },
    { icon: Globe, name: 'Codolio', url: 'https://codolio.com/profile/Phoenix_13' },
  ];

  const inputClasses =
    'w-full px-4 py-3 rounded-xl bg-transparent border border-[var(--border)] text-content-primary placeholder:text-content-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-300 text-sm';
  const labelClasses = 'block text-xs font-medium text-content-secondary mb-2 uppercase tracking-wider';

  return (
    <>
      <Toast
        type={toast.type}
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

      <section id="contact" className="section-padding relative">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Contact"
            title="Get In Touch"
            subtitle="I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left column — Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-content-primary mb-3">
                  Let's Connect
                </h3>
                <p className="text-sm text-content-secondary leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want
                  to say hello — I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-3">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="group flex items-center gap-3 p-3 rounded-xl border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-card)] transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg bg-accent-muted flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <div className="text-xs text-content-muted">{info.title}</div>
                        <div className="text-sm text-content-primary font-medium">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div>
                <h4 className="text-xs font-semibold text-content-secondary uppercase tracking-wider mb-3">
                  Follow Me
                </h4>
                <div className="flex gap-2">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-xl border border-[var(--border)] hover:border-accent/30 text-content-secondary hover:text-accent hover:bg-accent-muted transition-all duration-300"
                        aria-label={social.name}
                      >
                        <Icon className="w-[18px] h-[18px]" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right column — Form */}
            <GlassCard hover={false} delay={0.2} className="lg:col-span-3">
              <h3 className="text-lg font-bold text-content-primary mb-6 flex items-center gap-2">
                <Send className="w-4 h-4 text-accent" />
                Send Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className={labelClasses}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelClasses}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={inputClasses}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className={labelClasses}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={inputClasses}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClasses}>
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell me about your project or just say hello..."
                  />
                  <div className="text-[11px] text-content-muted mt-1.5">
                    {formData.message.length}/10 characters minimum
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-semibold rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;