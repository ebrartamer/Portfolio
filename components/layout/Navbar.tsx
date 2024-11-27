'use client'
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "../ui/ ThemeSwitch"
import { motion } from 'framer-motion';
import Modal from '../home/Modal';
import ContactForm from '../home/Contactform';

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const menuItems = [
    { title: 'Hero', path: 'hero' },
    { title: 'About Me', path: 'about' },
    { title: 'Skills', path: 'skills' },
    { title: 'Projects', path: 'projects' },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 w-full z-50 transition-colors duration-300 font-figtree">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Sol Taraf - Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={80}
                height={80}
                className="dark:invert"
              />
            </Link>
          </div>

          {/* Orta - Desktop Menu */}
          <div className="hidden md:flex items-center justify-center flex-1">
          {menuItems.map((item) => (
              <motion.div
                key={item.title}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.path)}
                  className="font-light text-primary dark:text-gray-300 hover:text-primary/80 dark:hover:text-white transition-colors duration-300 px-4"
                >
                  {item.title}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Sağ Taraf - Butonlar */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Let's Talk Button - Desktop */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-300"
            >
              Let&apos;s Talk
            </button>
            <ThemeSwitch />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-light text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-300"
            >
              Let&apos;s Talk
            </Link>
            <ThemeSwitch />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.path}
                  className="block px-3 py-2 rounded-md text-primary dark:text-gray-300 hover:text-primary/80 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 font-normal"
                  onClick={() => setIsOpen(false)}
                  
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </nav>
  );
};

export default Navbar;