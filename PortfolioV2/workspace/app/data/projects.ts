export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  detailImages?: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'LIBET - Développement de jeu vidéo sous Unity',
    shortDescription: 'Jeu vidéo 3D narratif, autour de la maladie d\'Alzheimer.',
    description:
      '\nLe personnage que l\'on joue nommé Libet est atteint d\'une maladie qui modifie ses sens, métaphore de la maladie d\'Alzheimer. Cette maladie fait que le personnage, peu à peu, n\'est plus capable de reconnaître son entourage, ses environnements. Progressivement Libet va voir se déformer et se transformer les éléments du jeu, qui vont devenir peu à peu méconnaissables.\n\nCe projet a été réalisé dans le cadre d\'un projet de deuxième année de BUT Inforatique, en collaboration avec une équipe de 5 personnes. Le jeu a été développé en C# sous Unity, avec l\'ntégralité de la modélisation 3D réalisée par nos soins sur Blender. Nous avons utilisé Github pour la gestion de projet et Jra pour le suivi des tâches.\n\nCe projet a pour but d\'être publié sur Steam, et nous sommes actuellement en train de travailler sur la finalisation du projet.',
    detailImages: [
      '',
      '',
    ],
    technologies: ['C#', 'Modélisation 3D', 'Blender', 'Unity', 'Github', 'Jira'],
    featured: true,
    githubUrl: 'https://github.com/loazur/LIBET',
  },
  {
    id: 'task-management',
    title: 'Application de gestion de soutenance',
    shortDescription: 'Outil de gestion pour les enseigants du département informatique du Puy-en-Velay.',
    description:
      '\nProjet d\'application web permettant de gérer les soutenances d\'étudiants des 2ème et 3ème année du BUT Informatique de l\'IUT du Puy. Cette application permet aux enseignants de créer des soutenances, d\'y ajouter des étudiants, de gérer les salles et les horaires, et de suivre l\'avancement des soutenances.\n\nL\'application a été développée en PHP avec une base de données SQL, et utilise HTML et CSS pour le front-end. Le projet a été réalisé dans le cadre d\'un projet de deuxième année de BUT Informatique, en collaboration avec une équipe d\'une dizaine d\'étudiants.\n\nNotre solution a été retenue par le département informatique du Puy-en-Velay, et est actuellement utilisée pour la gestion des soutenances des étudiants.',
    technologies: ['PHP', 'SQL', 'HTML', 'CSS', 'Github'],
    featured: true,
    githubUrl: 'https://github.com/Corentino74/projet_sql',
  },
  {
    id: 'portfolio-site',
    title: 'VAPEUR - Développement d\'un site web inspiré de Steam',
    shortDescription: 'Application web dynamique inspirée de la plateforme de jeu vidéo Steam.',
    description:
      '\nVapeur est une application web dynamique permettant de gérer une collection de jeux vidéo, avec des pages dédiées aux jeux, aux genres et aux éditeurs. L\'objectif était de reproduire une logique de catalogue inspirée de Steam, où chaque élément est cliquable pour accéder à ses détails et à ses relations.\n\nLe projet a été développé avec Express.js, SQLite, Handlebars (hbs) et Prisma. Il respecte les contraintes de livraison demandées : versionning GitHub, migrations Prisma, initialisation automatique des genres au démarrage si besoin, et exécution simple via `npm install`, `npx prisma migrate deploy` puis `npm run start`.\n\nL\'application couvre les fonctionnalités principales du cahier des charges : mise en avant des jeux sur l\'accueil, CRUD complet des jeux et des éditeurs, listes triées alphabétiquement, et navigation entre les entités (jeu, genre, éditeur).',
    technologies: ['Express.js', 'HTML', 'CSS', 'SQLite', 'Handlebars', 'Github'],
    featured: true,
    githubUrl: 'https://github.com/Por-Tra/Projet-Vapeur',
  },
  {
    id: 'weather-app',
    title: 'MyCoria - Développement de jeu vidéo sous Unreal Engine 5',
    shortDescription: 'Jeu vidéo narratif 3D, autour d\'une enquête de détective dans un univers steampunk.',
    description:
      '\nDans MyCoria, le joueur incarne un détective de la DGSI chargé d\'enquêter sur une mystérieuse entreprise pharmaceutique implantée dans le Livradois-Forez. L\'histoire suit une progression narrative centrée sur l\'investigation, la découverte d\'indices et l\'exploration d\'un territoire inspiré du réel.\n\nLe projet avait pour objectif de mettre en valeur la région en intégrant des lieux, villages et villes du Livradois, avec des références locales pour que les habitants puissent reconnaître leur environnement dans le jeu. Le développement a été réalisé sous Unreal Engine 5 avec C++, Blueprints et Blender, en collaboration au sein d\'une équipe étudiante.\n\nLe jeu a été présenté dans une association du Livradois ainsi qu\'à des collégiens, afin de partager notre travail et de recueillir des retours autour de l\'expérience proposée. Ce projet nous a permis de combiner narration, valorisation territoriale et production technique d\'un jeu 3D.',
    technologies: ['Unreal Engine 5', 'C++', 'Blueprints', 'Github', 'Blender'],
    featured: false,
    githubUrl: 'https://github.com',
  },
];
