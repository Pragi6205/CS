import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, CloudLightning } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onContactClick: () => void;
  onProjectBuilderClick: () => void;
}

export default function Navbar({ onContactClick, onProjectBuilderClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Interactive Builder', href: '#builder' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Compare', href: '#growth' },
    { name: 'Calculator', href: '#roi' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.header
        id="navbar"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 px-4 md:px-8' 
            : 'py-6 px-4 md:px-8'
        }`}
      >
        <div className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'glass-panel-dark bg-zinc-950/70 shadow-lg shadow-black/[0.2] px-6 py-3' 
            : 'bg-transparent px-4 py-2'
        } flex items-center justify-between`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Logo size={32} />
            <span className="font-display font-bold text-xl tracking-tight text-white">
              ClouQ<span className="text-[#16A34A]">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-xs font-semibold text-zinc-400 hover:text-white px-4 py-2 rounded-full transition-colors relative group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#16A34A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </nav>

          {/* Call to Action */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              id="nav-builder-btn"
              onClick={onProjectBuilderClick}
              className="text-xs font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              Build Product
            </button>
            <button
              id="nav-consult-btn"
              onClick={onContactClick}
              className="px-5 py-2.5 bg-[#16A34A] text-white rounded-full text-xs font-bold hover:bg-[#15803D] transition-colors cursor-pointer flex items-center gap-1"
            >
              Start a Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-zinc-900 transition-colors text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[76px] z-40 p-4 lg:hidden"
          >
            <div className="glass-panel-dark bg-zinc-950/95 rounded-3xl p-6 shadow-2xl border border-zinc-800/50 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-display text-lg font-medium text-zinc-300 hover:text-[#16A34A] transition-colors py-2 border-b border-zinc-900"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <div className="flex flex-col gap-3 pt-2">
                <button
                  id="mobile-nav-builder"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onProjectBuilderClick();
                  }}
                  className="w-full text-center py-3 rounded-full border border-zinc-800 font-medium text-zinc-300 hover:bg-zinc-900 transition-colors"
                >
                  Interactive Builder
                </button>
                <button
                  id="mobile-nav-contact"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full text-center py-3 bg-[#16A34A] text-white rounded-full font-semibold hover:bg-[#15803D] transition-colors flex items-center justify-center gap-1 shadow-lg shadow-black/10"
                >
                  Start Project
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
