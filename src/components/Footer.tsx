import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CloudLightning, Mail, Phone, MapPin, 
  Github, Twitter, Linkedin, ArrowUp, Send 
} from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState('');
  const [newsSubmitted, setNewsSubmitted] = useState(false);

  const servicesColumn = [
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Website Development', href: '#services' },
    { name: 'Full Stack Development', href: '#services' },
    { name: 'Cloud Solutions', href: '#services' },
    { name: 'GBP Optimization', href: '#services' },
    { name: 'Local SEO', href: '#services' },
  ];

  const advancedColumn = [
    { name: 'E-Commerce Store', href: '#services' },
    { name: 'SaaS Development', href: '#services' },
    { name: 'Website Maintenance', href: '#services' },
    { name: 'Business Branding', href: '#services' },
  ];

  const quickLinksColumn = [
    { name: 'Home Hero', href: '#hero' },
    { name: 'Bento Services', href: '#services' },
    { name: 'Project Builder', href: '#builder' },
    { name: 'Portfolio Showcase', href: '#showcase' },
    { name: 'Compare Status', href: '#growth' },
    { name: 'ROI Calculator', href: '#roi' },
  ];

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setNewsSubmitted(true);
    setNewsEmail('');
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-zinc-400 py-16 md:py-24 border-t border-zinc-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top footer deck: Brand logo + Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-12 mb-12 border-b border-zinc-900 gap-8">
          <div>
            <a href="#" onClick={handleScrollToTop} className="flex items-center gap-2 group mb-3">
              <Logo size={32} />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                ClouQ<span className="text-[#16A34A] font-light">.</span>
              </span>
            </a>
            <p className="font-sans text-xs max-w-xs text-zinc-500 leading-relaxed">
              Design. Engineering. Scaling. We build high-performance, custom digital products for startups and local businesses globally.
            </p>
          </div>

          {/* Newsletter Input Box */}
          <div className="w-full lg:max-w-md">
            <span className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">
              Subscribe to our product newsletter
            </span>
            
            {!newsSubmitted ? (
              <form onSubmit={handleNewsletter} className="flex gap-2 w-full">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] transition-all"
                />
                <button
                  id="newsletter-submit"
                  type="submit"
                  className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-[#16A34A] hover:text-white p-3 rounded-xl transition-all flex items-center justify-center shrink-0"
                  aria-label="Submit email"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="bg-green-500/10 border border-green-500/20 text-[#16A34A] p-3 rounded-xl text-xs font-semibold">
                ✓ Thank you for subscribing to ClouQ Solutions!
              </div>
            )}
          </div>
        </div>

        {/* Mid footer deck: 4 Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          
          {/* Col 1: Services Group A */}
          <div>
            <h4 className="font-display font-bold text-zinc-300 text-xs uppercase tracking-wider mb-4">
              Core Capabilities
            </h4>
            <ul className="flex flex-col gap-2.5">
              {servicesColumn.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="font-sans text-xs hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Services Group B */}
          <div>
            <h4 className="font-display font-bold text-zinc-300 text-xs uppercase tracking-wider mb-4">
              Advanced Builds
            </h4>
            <ul className="flex flex-col gap-2.5">
              {advancedColumn.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="font-sans text-xs hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-zinc-300 text-xs uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinksColumn.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="font-sans text-xs hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacts & Socials */}
          <div>
            <h4 className="font-display font-bold text-zinc-300 text-xs uppercase tracking-wider mb-4">
              Contact Channels
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs mb-6 text-zinc-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-zinc-600 shrink-0" />
                <a href="mailto:clouqsolutions@gmail.com" className="hover:text-white transition-colors truncate">
                  clouqsolutions@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+916369933795" className="hover:text-white transition-colors">
                    +91 63699 33795
                  </a>
                  <a href="tel:+919344193184" className="hover:text-white transition-colors">
                    +91 93441 93184
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-zinc-600 shrink-0" />
                <span>Global Deliveries / India Office</span>
              </li>
            </ul>

            {/* Social handles */}
            <div className="flex gap-2">
              {[
                { name: 'GitHub', icon: <Github className="w-4 h-4" />, href: 'https://github.com' },
                { name: 'Twitter', icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com' },
                { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white border border-zinc-800 transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom footer deck: Copyright + Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-zinc-900 gap-4">
          <p className="font-sans text-[11px] text-zinc-600">
            &copy; {new Date().getFullYear()} ClouQ Solutions. All rights reserved. Hand-coded using React, Tailwind & Framer Motion.
          </p>

          <button
            id="back-to-top-btn"
            onClick={handleScrollToTop}
            className="group flex items-center gap-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs font-semibold px-4 py-2 rounded-full border border-zinc-800 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
