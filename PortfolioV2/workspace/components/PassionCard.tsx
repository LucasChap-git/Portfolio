'use client';

import { motion } from 'framer-motion';

interface PassionCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function PassionCard({ title, description, icon, index }: PassionCardProps) {
  const isImageIcon = /^(\/|https?:\/\/).+\.(png|jpe?g|webp|svg|gif|avif)$/i.test(icon);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="group relative h-full"
    >
      <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900 p-6 h-full hover:border-slate-600 transition-colors duration-300">
        {/* Icon */}
        <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
          {isImageIcon ? (
            <div className="w-16 h-16 rounded-full border-2 border-cyan-400 flex items-center justify-center bg-slate-900/50 backdrop-blur-md shadow-[0_0_24px_rgba(34,211,238,0.16)]">
              <img
                src={icon}
                alt={title}
                className="w-14 h-14 rounded-full object-cover"
                loading="lazy"
              />
            </div>
          ) : (
            <span className="text-4xl">{icon}</span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed">
          {description}
        </p>

        {/* Accent line on hover */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 origin-left"
        />
      </div>
    </motion.div>
  );
}
