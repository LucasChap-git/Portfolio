'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '/#home' },
    { name: 'À propos', href: '/#about' },
    { name: 'Compétences', href: '/#skills' },
    { name: 'Projets', href: '/projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo: profile image + name */}
        <Link href="/" className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src="/image/Photo_profil.webp"
              alt="CHAPON Lucas"
              width={40}
              height={40}
              sizes="40px"
              className="w-10 h-10 rounded-full object-cover border-2 border-slate-700"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-sm font-semibold text-white tracking-tight"
          >
            CHAPON Lucas
          </motion.div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ color: '#60a5fa' }}
              className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="/#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 rounded bg-blue-700 text-white font-semibold text-sm hover:bg-blue-600 transition-colors"
        >
          Contactez-moi
        </motion.a>
      </div>
    </motion.header>
  );
}
