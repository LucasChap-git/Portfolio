'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/app/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative h-full"
    >
      <Link href={`/projects/${project.id}`}>
        <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900 p-6 h-full hover:border-slate-600 transition-colors duration-300">
          {/* Content */}
          <div className="relative z-10">
            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Footer with Links */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-700">
              <span className="text-xs text-slate-500">View Project</span>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.preventDefault()}
                    whileHover={{ scale: 1.2 }}
                    className="text-slate-500 hover:text-blue-400 transition-colors"
                  >
                    <Github size={16} />
                  </motion.a>
                )}
                {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.preventDefault()}
                    whileHover={{ scale: 1.2 }}
                    className="text-slate-500 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
