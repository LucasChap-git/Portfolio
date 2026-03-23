'use client';

import { motion } from 'framer-motion';

interface SkillCardProps {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  technologies: string[];
  category?: 'frontend' | 'backend' | 'devops' | 'other';
  index: number;
}

const categoryStyles: Record<string, { border: string; bg: string; glow: string; chip: string; label: string }> = {
  frontend: {
    border: 'border-blue-600/70',
    bg: 'bg-gradient-to-br from-blue-950/70 via-slate-900 to-slate-900',
    glow: 'group-hover:shadow-lg group-hover:shadow-blue-500/25',
    chip: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
    label: 'Web',
  },
  backend: {
    border: 'border-purple-600/70',
    bg: 'bg-gradient-to-br from-purple-950/70 via-slate-900 to-slate-900',
    glow: 'group-hover:shadow-lg group-hover:shadow-purple-500/25',
    chip: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
    label: 'Logiciel & Data',
  },
  devops: {
    border: 'border-amber-600/70',
    bg: 'bg-gradient-to-br from-amber-950/65 via-slate-900 to-slate-900',
    glow: 'group-hover:shadow-lg group-hover:shadow-amber-500/25',
    chip: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
    label: 'Jeu & 3D',
  },
  other: {
    border: 'border-emerald-600/70',
    bg: 'bg-gradient-to-br from-emerald-950/70 via-slate-900 to-slate-900',
    glow: 'group-hover:shadow-lg group-hover:shadow-emerald-500/25',
    chip: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
    label: 'Durable',
  },
};

export function SkillCard({ name, description, icon, technologies, category = 'other', index }: SkillCardProps) {
  const styles = categoryStyles[category] || categoryStyles.other;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`group relative h-full ${styles.glow} transition-all duration-300`}
    >
      <div className={`relative h-full overflow-hidden rounded-xl border ${styles.border} ${styles.bg} p-6 backdrop-blur-sm transition-all duration-300`}>
        {/* Gradient background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-4 flex items-center justify-between gap-2">
            <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide ${styles.chip}`}>
              {styles.label}
            </span>
          </div>

          <div className="mb-3 flex items-center gap-3">
            {icon ? (
              <span className="text-3xl transition-transform duration-300 group-hover:scale-110">{icon}</span>
            ) : (
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-bold text-slate-200">
                {name.slice(0, 2).toUpperCase()}
              </span>
            )}
            <h3 className="text-lg font-bold text-white transition-colors group-hover:text-blue-300">
              {name}
            </h3>
          </div>

          {description && (
            <p className="text-sm leading-relaxed text-slate-300 transition-colors group-hover:text-slate-200">
              {description}
            </p>
          )}

          <div className="mt-4 border-t border-white/10 pt-4">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Langages / Outils
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
