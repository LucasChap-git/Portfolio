'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/LucasChap-git',
    color: 'hover:text-slate-300',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/lucas-chapon1/',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:lucaschapon06@gmail.com',
    color: 'hover:text-slate-300',
  },
];

const footerNavLinks = [
  { label: 'Accueil', href: '/#home' },
  { label: 'À propos', href: '/#about' },
  { label: 'Compétences', href: '/#skills' },
  { label: 'Projets', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800 bg-slate-950/85 backdrop-blur-md py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Portfolio</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Une sélection de projets concrets, du jeu vidéo à l'application web, pensés pour allier technique et expérience utilisateur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2">
              {footerNavLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Réseaux</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-slate-500 transition-colors ${social.color}`}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-slate-600 text-sm">
              © 2026 Lucas Chapon.
            </p>
            <p className="text-slate-600 text-sm">
              Construit avec Next.js et Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
