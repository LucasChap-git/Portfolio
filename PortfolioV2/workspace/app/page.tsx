'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, Download, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@/components/Section';
import { GlowBadge } from '@/components/GlowBadge';
import { ProjectCard } from '@/components/ProjectCard';
import { SkillCard } from '@/components/SkillCard';
import { PassionCard } from '@/components/PassionCard';
import { skills, type SkillCategory } from './data/skills';
import { projects } from '@/app/data/projects';
import { passions } from '@/app/data/passions';

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  const profileBaseRotationDeg = -90;
  const cvPath = '/CV-CHAPON_Lucas.pdf';
  const profileImageRef = useRef<HTMLImageElement | null>(null);
  const profileAnimationRef = useRef<Animation | null>(null);
  const resetSpinTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const decayFrameRef = useRef<number | null>(null);
  const profileSpinRateRef = useRef(1);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [activeSkillCategory, setActiveSkillCategory] = useState<SkillCategory | 'all'>('all');

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = contactForm.subject.trim() || `Message portfolio - ${contactForm.name.trim() || 'Visiteur'}`;
    const body = [
      `Nom: ${contactForm.name}`,
      `Email: ${contactForm.email}`,
      '',
      'Message:',
      contactForm.message,
    ].join('\n');

    window.location.href = `mailto:lucaschapon06@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const featuredProjects = projects.filter((p) => p.featured);
  const skillsByCategory = {
    frontend: skills.filter((s) => s.category === 'frontend'),
    backend: skills.filter((s) => s.category === 'backend'),
    devops: skills.filter((s) => s.category === 'devops'),
    other: skills.filter((s) => s.category === 'other'),
  };
  const filteredSkills = activeSkillCategory === 'all'
    ? skills
    : skills.filter((skill) => skill.category === activeSkillCategory);

  const skillFilters: Array<{
    key: SkillCategory | 'all';
    label: string;
    count: number;
    activeClass: string;
    idleClass: string;
  }> = [
    {
      key: 'all',
      label: 'Toutes',
      count: skills.length,
      activeClass: 'border-cyan-500/60 bg-cyan-500/15 text-cyan-200',
      idleClass: 'border-slate-600/70 bg-slate-800/40 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-200',
    },
    {
      key: 'frontend',
      label: 'Web',
      count: skillsByCategory.frontend.length,
      activeClass: 'border-blue-500/60 bg-blue-500/15 text-blue-200',
      idleClass: 'border-blue-500/30 bg-blue-500/5 text-blue-300 hover:border-blue-400/60 hover:text-blue-200',
    },
    {
      key: 'backend',
      label: 'Logiciel & Data',
      count: skillsByCategory.backend.length,
      activeClass: 'border-purple-500/60 bg-purple-500/15 text-purple-200',
      idleClass: 'border-purple-500/30 bg-purple-500/5 text-purple-300 hover:border-purple-400/60 hover:text-purple-200',
    },
    {
      key: 'devops',
      label: 'Jeu & 3D',
      count: skillsByCategory.devops.length,
      activeClass: 'border-amber-500/60 bg-amber-500/15 text-amber-200',
      idleClass: 'border-amber-500/30 bg-amber-500/5 text-amber-300 hover:border-amber-400/60 hover:text-amber-200',
    },
    {
      key: 'other',
      label: 'Durable',
      count: skillsByCategory.other.length,
      activeClass: 'border-emerald-500/60 bg-emerald-500/15 text-emerald-200',
      idleClass: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-300 hover:border-emerald-400/60 hover:text-emerald-200',
    },
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  useEffect(() => {
    const profileImage = profileImageRef.current;
    if (!profileImage) {
      return;
    }

    const animation = profileImage.animate(
      [
        { transform: `rotate(${profileBaseRotationDeg}deg)` },
        { transform: `rotate(${profileBaseRotationDeg + 360}deg)` },
      ],
      {
        duration: 8000,
        iterations: Infinity,
        easing: 'linear',
      }
    );

    profileAnimationRef.current = animation;

    return () => {
      if (resetSpinTimeoutRef.current) {
        clearTimeout(resetSpinTimeoutRef.current);
        resetSpinTimeoutRef.current = null;
      }
      if (decayFrameRef.current) {
        cancelAnimationFrame(decayFrameRef.current);
        decayFrameRef.current = null;
      }
      animation.cancel();
      profileAnimationRef.current = null;
    };
  }, []);

  const startSpinDeceleration = () => {
    if (!profileAnimationRef.current) {
      return;
    }

    if (decayFrameRef.current) {
      cancelAnimationFrame(decayFrameRef.current);
      decayFrameRef.current = null;
    }

    const startRate = profileSpinRateRef.current;
    const targetRate = 1;
    const durationMs = 1200;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextRate = startRate + (targetRate - startRate) * easedProgress;

      profileSpinRateRef.current = nextRate;
      if (profileAnimationRef.current) {
        profileAnimationRef.current.playbackRate = nextRate;
      }

      if (progress < 1) {
        decayFrameRef.current = requestAnimationFrame(step);
      } else {
        profileSpinRateRef.current = 1;
        if (profileAnimationRef.current) {
          profileAnimationRef.current.playbackRate = 1;
        }
        decayFrameRef.current = null;
      }
    };

    decayFrameRef.current = requestAnimationFrame(step);
  };

  const handleProfileImageClick = () => {
    if (decayFrameRef.current) {
      cancelAnimationFrame(decayFrameRef.current);
      decayFrameRef.current = null;
    }

    const nextRate = Math.min(40, profileSpinRateRef.current * 1.35);
    profileSpinRateRef.current = nextRate;

    if (profileAnimationRef.current) {
      profileAnimationRef.current.playbackRate = nextRate;
    }

    if (resetSpinTimeoutRef.current) {
      clearTimeout(resetSpinTimeoutRef.current);
    }

    resetSpinTimeoutRef.current = setTimeout(() => {
      startSpinDeceleration();
      resetSpinTimeoutRef.current = null;
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      {/* Hero Section */}
      <Section id="home" className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-38 h-38 mx-auto rounded-full border-2 border-cyan-400 flex items-center justify-center bg-slate-900/50 backdrop-blur-md">
              <img
                ref={profileImageRef}
                src="/image/Photo_profil.webp"
                alt="CHAPON Lucas"
                width={136}
                height={136}
                className="w-34 h-34 rounded-full object-cover"
                onClick={handleProfileImageClick}
                title="Clique pour accélérer"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                style={{ cursor: 'pointer', transform: `rotate(${profileBaseRotationDeg}deg)` }}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={fadeInVariants.initial}
            animate={fadeInVariants.animate}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold mb-6 text-white whitespace-nowrap"
          >
            Développeur <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Informatique</span>
          </motion.h1>

          <motion.p
            initial={fadeInVariants.initial}
            animate={fadeInVariants.animate}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Développeur informatique passionné & Étudiant en Informatique
          </motion.p>


          <motion.div
            initial={fadeInVariants.initial}
            animate={fadeInVariants.animate}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-blue-700 text-white rounded font-semibold hover:bg-blue-600 transition-colors"
            >
              Voir mes projets <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-slate-600 text-slate-300 rounded hover:border-slate-500 hover:text-white transition-colors"
            >
              Me contacter
            </motion.a>
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-slate-900/30 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={fadeInVariants.initial}
            whileInView={fadeInVariants.animate}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            À propos de moi
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative w-58 h-58 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full blur-2xl opacity-30 animate-pulse" />
                <div className="relative w-full h-full rounded-full border-4 border-blue-700 flex items-center justify-center bg-slate-900 shadow-lg shadow-blue-700/30">
                  <Image
                    src="/image/Photo_profil.webp"
                    alt="Illustration"
                    width={216}
                    height={216}
                    sizes="216px"
                    className="w-54 h-54 rounded-full object-cover -rotate-90"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Passion pour la réalisation de projets</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Je suis un étudiant en informatique de <strong>2ème année</strong> passioné par la création de projets. J'aime travailler en équipe, car le contact humain est essentiel à mon sens, tout cela lié à ma passion pour l'informatique que j'ai développé à travers ma passion pour les jeux vidéo, qui m'a naturellement conduit dans le milieu de l'informatique.
              </p>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Mon objectif est de réaliser et proposer des solutions qui allient esthétique, optimisation et respect de l'environnement. J'aime participer à des projets pluridisciplinaires, et je donne mon maximum pour proposer le meilleur rendu possible.
              </p>
              <motion.div
                initial={containerVariants.initial}
                whileInView={containerVariants.animate}
                viewport={{ once: true }}
                className="flex gap-4 flex-wrap mt-6"
              >
                <motion.a
                  href="https://github.com/LucasChap-git"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 border border-slate-600 text-slate-300 rounded hover:border-slate-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Github size={18} /> GitHub
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/lucas-chapon1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 border border-slate-600 text-slate-300 rounded hover:border-blue-600 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin size={18} /> LinkedIn
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Passions Section */}
      <Section id="passions">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={fadeInVariants.initial}
            whileInView={fadeInVariants.animate}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4 text-center"
          >
            Mes Passions
          </motion.h2>

          <motion.p
            initial={fadeInVariants.initial}
            whileInView={fadeInVariants.animate}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 mb-12 text-center max-w-2xl mx-auto"
          >
            Découvrez mes passions en dehors de l'informatique pour en savoir plus sur moi !
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {passions.map((passion, index) => (
              <PassionCard
                key={passion.id}
                id={passion.id}
                title={passion.title}
                description={passion.description}
                icon={passion.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-slate-900/25 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={fadeInVariants.initial}
            whileInView={fadeInVariants.animate}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4 text-center"
          >
            Mes Compétences
          </motion.h2>

          <motion.p
            initial={fadeInVariants.initial}
            whileInView={fadeInVariants.animate}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-300 mb-8 text-center max-w-3xl mx-auto"
          >
            Étudiant en BUT Informatique 2e année, je construis un profil polyvalent entre web, logiciel, jeu vidéo et approche durable.
          </motion.p>

          <motion.div
            initial={containerVariants.initial}
            whileInView={containerVariants.animate}
            viewport={{ once: true }}
            className="mb-10 flex flex-wrap items-center justify-center gap-3"
          >
            {skillFilters.map((filter) => {
              const isActive = activeSkillCategory === filter.key;

              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveSkillCategory(filter.key)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                    isActive ? filter.activeClass : filter.idleClass
                  }`}
                >
                  {filter.label}: {filter.count}
                </button>
              );
            })}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={skill.id}
                id={skill.id}
                name={skill.name}
                description={skill.description}
                technologies={skill.technologies}
                category={skill.category}
                index={index}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-slate-900/30 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={fadeInVariants.initial}
            whileInView={fadeInVariants.animate}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Mes Projets Phares
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={fadeInVariants.initial}
            whileInView={fadeInVariants.animate}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/projects"
              prefetch={false}
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 text-slate-300 rounded hover:border-slate-500 hover:text-white transition-colors"
            >
              Voir tous les projets <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Contact / Links / CV Section */}
      <Section id="contact">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={fadeInVariants.initial}
            whileInView={fadeInVariants.animate}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4 text-center"
          >
            Plus sur moi
          </motion.h2>

          <motion.p
            initial={fadeInVariants.initial}
            whileInView={fadeInVariants.animate}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 mb-8 text-center"
          >
            Liens et documents pour me connaître rapidement.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Links column */}
            <motion.div
              initial={fadeInVariants.initial}
              whileInView={fadeInVariants.animate}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="h-full p-4 bg-slate-900 border border-slate-700 rounded flex flex-col">
                <h4 className="text-sm text-slate-300 mb-2">Liens pratiques</h4>
                <p className="text-sm text-slate-400 mb-4">Retrouvez mes canaux de contact rapidement.</p>

                <div className="flex flex-col gap-4">
                  <a href="mailto:lucaschapon06@gmail.com" className="flex items-center gap-3 px-4 py-3 bg-slate-900 border border-slate-700 rounded hover:bg-slate-800 transition-colors">
                    <Mail size={18} /> <span className="text-slate-200">lucaschapon06@gmail.com</span>
                  </a>

                  <a href="https://github.com/LucasChap-git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-slate-900 border border-slate-700 rounded hover:border-blue-600 transition-colors">
                    <Github size={18} /> <span className="text-slate-200">GitHub</span>
                  </a>

                  <a href="https://www.artstation.com/lucas_chapon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-slate-900 border border-slate-700 rounded hover:border-purple-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-200"><path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6z"/></svg>
                    <span className="text-slate-200">ArtStation</span>
                  </a>

                  <a href="https://www.linkedin.com/in/lucas-chapon1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-slate-900 border border-slate-700 rounded hover:border-blue-600 transition-colors">
                    <Linkedin size={18} /> <span className="text-slate-200">LinkedIn</span>
                  </a>
                </div>

                <div className="mt-auto pt-6">
                  <h4 className="text-sm text-slate-300 mb-2">M&apos;envoyer un message</h4>
                  <p className="text-sm text-slate-400 mb-4">Ce formulaire ouvre directement votre messagerie avec le message prérempli.</p>

                  <form onSubmit={handleContactSubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      value={contactForm.name}
                      onChange={(event) => setContactForm((prev) => ({ ...prev, name: event.target.value }))}
                      className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-600"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Votre email"
                      value={contactForm.email}
                      onChange={(event) => setContactForm((prev) => ({ ...prev, email: event.target.value }))}
                      className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-600"
                    />
                    <input
                      type="text"
                      placeholder="Sujet"
                      value={contactForm.subject}
                      onChange={(event) => setContactForm((prev) => ({ ...prev, subject: event.target.value }))}
                      className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-600"
                    />
                    <textarea
                      required
                      placeholder="Votre message"
                      value={contactForm.message}
                      onChange={(event) => setContactForm((prev) => ({ ...prev, message: event.target.value }))}
                      rows={5}
                      className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-blue-600"
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                      Envoyer le message
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* CV column */}
            <motion.div
              initial={fadeInVariants.initial}
              whileInView={fadeInVariants.animate}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="h-full p-4 bg-slate-900 border border-slate-700 rounded">
                <h4 className="text-sm text-slate-300 mb-2">Curriculum Vitae</h4>
                <p className="text-sm text-slate-400 mb-4">Aperçu direct du CV et téléchargement en un clic.</p>

                <div className="rounded border border-slate-700 overflow-hidden mb-4 bg-slate-950/50">
                  <iframe
                    src={cvPath}
                    title="CV Lucas Chapon"
                    className="w-full h-[520px]"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={cvPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    <FileText size={16} /> Voir le CV
                  </a>
                  <a
                    href={cvPath}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 border border-slate-600 text-slate-200 rounded bg-slate-800 hover:bg-slate-700 transition-colors"
                  >
                    <Download size={16} /> Télécharger
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}
