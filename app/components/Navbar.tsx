"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, Mail, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home className="w-4 h-4" /> },
    { name: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
    { name: 'Skills', href: '#skills', icon: <Code className="w-4 h-4" /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-900/95 backdrop-blur-xl shadow-lg shadow-purple-500/5 '
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Link
                href="/"
                className="text-xl md:text-3xl font-bold text-white"
              >
                Portfolio
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ y: -2 }}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === link.href.substring(1)
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-white cursor-pointer'
                  }`}
                >
                  {link.name}
                  
                  {/* Active indicator */}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-purple-500/10 rounded-lg border border-purple-500/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
                    whileHover={{
                      background: "linear-gradient(to right, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1))"
                    }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Right Side - CTA & Theme Toggle */}
            <div className="hidden md:flex items-center gap-4">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 text-gray-400 hover:text-purple-400 transition-colors rounded-lg hover:bg-gray-800/50"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-2.5 cursor-pointer border-1 text-white text-sm font-semibold rounded-full overflow-hidden group hover:bg-purple-600 hover:border-none "
              >
                <span className="relative z-10">Hire Me</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-gray-900/98 backdrop-blur-xl border-l border-gray-800/50 shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
                  <span className="text-xl text-white font-stretch-extra-condensed">
                    Menu
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex-1 px-6 py-8">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.button
                        key={link.name}
                        onClick={() => scrollToSection(link.href)}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                          activeSection === link.href.substring(1)
                            ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 border border-purple-500/30'
                            : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                        }`}
                      >
                        <span className={activeSection === link.href.substring(1) ? 'text-purple-400' : 'text-gray-500'}>
                          {link.icon}
                        </span>
                        <span className="font-medium">{link.name}</span>
                        
                        {activeSection === link.href.substring(1) && (
                          <motion.div
                            layoutId="mobileActive"
                            className="ml-auto w-2 h-2 bg-purple-400 rounded-full"
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <motion.button
                    onClick={() => scrollToSection('#contact')}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-8 px-6 py-2 text-white font-semibold rounded-xl shadow-lg cursor-pointer"
                  >
                    Hire Me
                  </motion.button>

                  {/* Theme Toggle Mobile */}
                  <motion.button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-4 flex items-center justify-center gap-3 px-6 py-2 bg-gray-800/50 text-gray-300 rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                  </motion.button>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-gray-800/50">
                  <p className="text-sm text-gray-500 text-center">
                    © 2025 Esha. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}