'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowBadgeProps {
  children: ReactNode;
  category?: 'frontend' | 'backend' | 'devops' | 'other';
  className?: string;
}

const categoryColors = {
  frontend: 'border-blue-700 bg-blue-950/40 text-blue-300',
  backend: 'border-purple-700 bg-purple-950/40 text-purple-300',
  devops: 'border-emerald-700 bg-emerald-950/40 text-emerald-300',
  other: 'border-amber-700 bg-amber-950/40 text-amber-300',
};

export function GlowBadge({
  children,
  category = 'frontend',
  className = '',
}: GlowBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-3 py-1.5 rounded border transition-colors ${categoryColors[category]} ${className}`}
    >
      <div className="relative flex items-center justify-center text-sm font-medium">
        {children}
      </div>
    </motion.div>
  );
}
