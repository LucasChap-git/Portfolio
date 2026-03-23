export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'other';
  icon?: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  proficiencyLevel?: number;
  description?: string;
  technologies: string[];
}

export type SkillCategory = Skill['category'];

export const skills: Skill[] = [
  {
    id: 'web-dev',
    name: 'Développement Web',
    category: 'frontend',
    icon: '🌐',
    proficiency: 'advanced',
    proficiencyLevel: 84,
    description: 'Création d\'applications web et de sites dynamiques, du frontend au backend.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Symfony', 'React'],
  },
  {
    id: 'cpp-dev',
    name: 'Développement C++',
    category: 'backend',
    icon: '💻',
    proficiency: 'advanced',
    proficiencyLevel: 80,
    description: 'Programmation orientée objet et algorithmique sur des projets académiques.',
    technologies: ['C++', 'STL'],
  },
  {
    id: 'sql-dev',
    name: 'Développement SQL',
    category: 'backend',
    icon: '🗄️',
    proficiency: 'advanced',
    proficiencyLevel: 78,
    description: 'Conception de schémas relationnels et écriture de requêtes pour l\'analyse de données.',
    technologies: ['SQL', 'MySQL', 'PostgreSQL'],
  },
  {
    id: 'android-kotlin',
    name: 'Développement Kotlin (Android Studio)',
    category: 'backend',
    icon: '📱',
    proficiency: 'advanced',
    proficiencyLevel: 76,
    description: 'Développement d\'applications mobiles Android et implémentation d\'interfaces natives.',
    technologies: ['Kotlin', 'Android Studio', 'XML'],
  },
  {
    id: 'unity-csharp',
    name: 'Développement C# sous Unity',
    category: 'devops',
    icon: '🎮',
    proficiency: 'advanced',
    proficiencyLevel: 82,
    description: 'Création de mécaniques de jeu, scripts gameplay et intégration de scènes interactives.',
    technologies: ['C#', 'Unity'],
  },
  {
    id: 'level-design',
    name: 'Level Design (Unity & Unreal Engine)',
    category: 'devops',
    icon: '🧩',
    proficiency: 'advanced',
    proficiencyLevel: 74,
    description: 'Conception de niveaux jouables avec attention au rythme, à la lisibilité et à l\'expérience joueur.',
    technologies: ['Unity', 'Unreal Engine'],
  },
  {
    id: 'blender-modeling',
    name: 'Modélisation, UV Editing & Texturing',
    category: 'devops',
    icon: '🧱',
    proficiency: 'advanced',
    proficiencyLevel: 72,
    description: 'Pipeline 3D de la modélisation au texturing pour produire des assets optimisés.',
    technologies: ['Blender', 'UV Editing', 'Texturing'],
  },
  {
    id: 'animation-3d',
    name: 'Animation 3D',
    category: 'devops',
    icon: '🎞️',
    proficiency: 'intermediate',
    proficiencyLevel: 68,
    description: 'Animation d\'objets et de personnages pour scènes et séquences temps réel.',
    technologies: ['3ds Max', 'Blender'],
  },
  {
    id: 'sustainable-dev',
    name: 'Développement durable',
    category: 'other',
    icon: '🌱',
    proficiency: 'intermediate',
    proficiencyLevel: 73,
    description: 'Prise en compte de l\'impact environnemental dans les choix techniques et de conception.',
    technologies: ['Éco-conception', 'Optimisation', 'Sobriété numérique'],
  },
];
