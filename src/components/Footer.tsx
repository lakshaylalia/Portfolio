import { Github, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/lakshaylalia', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lakshay-lalia/', label: 'LinkedIn' },
    { icon: Globe, href: 'https://codolio.com/profile/Phoenix_13', label: 'Codolio' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-[var(--border)]">
      {/* Gradient top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left — Brand */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-sm font-semibold text-content-primary tracking-tight">
              Lakshay<span className="gradient-text">.</span>
            </span>
            <span className="hidden sm:block w-px h-4 bg-[var(--border)]" />
            <span className="text-xs text-content-muted">
              © {currentYear} Lakshay Lalia. All rights reserved.
            </span>
          </div>

          {/* Center — Nav */}
          <nav className="flex flex-wrap justify-center gap-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-xs text-content-muted hover:text-content-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Right — Social */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-content-muted hover:text-content-primary transition-all duration-300 hover:bg-[var(--bg-card)]"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom credit */}
        <div className="mt-6 pt-4 border-t border-[var(--border)] text-center">
          <p className="text-[11px] text-content-muted">
            Designed & built by Lakshay Lalia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;