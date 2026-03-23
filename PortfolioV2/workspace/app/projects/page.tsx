'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/app/data/projects';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/#projects"
              prefetch={false}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft size={20} /> Retour
            </Link>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Tous mes Projets
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Découvrez l'ensemble de mes réalisations et explorations technologiques.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
