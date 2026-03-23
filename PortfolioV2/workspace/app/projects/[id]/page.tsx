'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { projects } from '@/app/data/projects';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ProjectPage() {
  const params = useParams();
  const projectId = decodeURIComponent(params.id as string);
  const project = projects.find((p) => p.id === projectId);
  const projectImages = [project?.detailImages?.[0], project?.detailImages?.[1]];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Projet non trouvé</h1>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
          >
            <ArrowLeft size={20} /> Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <div className="relative z-10 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft size={20} /> Tous les projets
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300">{project.shortDescription}</p>
          </motion.div>

          {/* Project Image Placeholder */}
          {project.imageUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12 rounded-xl overflow-hidden border border-purple-500/20 bg-slate-900/50"
            >
              <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center">
                <p className="text-gray-400">Image du projet</p>
              </div>
            </motion.div>
          )}

          {/* Description */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Images du projet</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {projectImages.map((image, index) => (
                <div
                  key={`project-image-${index}`}
                  className="rounded-xl overflow-hidden border border-purple-500/20 bg-slate-900/50"
                >
                  {image ? (
                    <img
                      src={image}
                      alt={`${project.title} - image ${index + 1}`}
                      className="w-full h-72 object-cover"
                    />
                  ) : (
                    <div className="w-full h-72 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center px-6">
                      <p className="text-gray-400 text-center">
                        Ajoute l&apos;image {index + 1} dans `detailImages` de ce projet.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Description */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">À propos du projet</h2>
            <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
              {project.description}
            </p>
          </motion.section>

          {/* Technologies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Technologies utilisées</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-300 font-semibold"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Links */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Accès au projet</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  <ExternalLink size={20} /> Voir la démo
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 border border-gray-500 text-gray-300 rounded-lg font-semibold hover:border-gray-400 hover:text-gray-200 transition-colors"
                >
                  <Github size={20} /> Code sur GitHub
                </motion.a>
              )}
            </div>
          </motion.section>

          {/* Related Projects */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Autres projets</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 2)
                .map((relatedProject) => (
                  <motion.div
                    key={relatedProject.id}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-lg border border-purple-500/20 bg-slate-900/50 hover:border-purple-500/50 transition-colors cursor-pointer"
                  >
                    <Link href={`/projects/${relatedProject.id}`}>
                      <h3 className="text-lg font-bold text-white hover:text-cyan-400 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-2">
                        {relatedProject.shortDescription}
                      </p>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
