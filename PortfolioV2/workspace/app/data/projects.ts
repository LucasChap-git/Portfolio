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
  context?: string;
  team?: Array<{
    name: string;
    role: string;
    position: string;
  }>;
  missions?: string[];
  skillsMobilized?: string[];
  skillsAcquired?: string[];
  ppp?: {
    objective: string;
    technicalSkills: string[];
    humanSkills: string[];
    articulation: string;
  };
  criticalReflection?: {
    difficulties: string[];
    solutions: string[];
    lessons: string[];
  };
  portfolioEvidence?: string[];
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'LIBET - Développement de jeu vidéo sous Unity',
    shortDescription: 'Jeu vidéo 3D narratif, autour de la maladie d\'Alzheimer.',
    description:
      '\nLe personnage que l\'on joue nommé Libet est atteint d\'une maladie qui modifie ses sens, métaphore de la maladie d\'Alzheimer. Cette maladie fait que le personnage, peu à peu, n\'est plus capable de reconnaître son entourage, ses environnements. Progressivement Libet va voir se déformer et se transformer les éléments du jeu, qui vont devenir peu à peu méconnaissables.\n\nCe projet a été réalisé dans le cadre d\'un projet de deuxième année de BUT Inforatique, en collaboration avec une équipe de 5 personnes. Le jeu a été développé en C# sous Unity, avec l\'ntégralité de la modélisation 3D réalisée par nos soins sur Blender. Nous avons utilisé Github pour la gestion de projet et Jra pour le suivi des tâches.\n\nCe projet a pour but d\'être publié sur Steam, et nous sommes actuellement en train de travailler sur la finalisation du projet.\n\nProblématique : Comment représenter de manière sensible et réaliste les effets de la maladie d\'Alzheimer dans un jeu vidéo ?',
    detailImages: [
      '/image/projects/libet/screen_cuisine.webp',
      '/image/projects/libet/capture_ecran.webp',
    ],
    technologies: ['C#', 'Blender', 'Unity', 'Github', 'Jira'],
    featured: true,
    githubUrl: 'https://github.com/loazur/LIBET',
      context: 'Création d\'un jeu vidéo 3D narratif permettant de sensibiliser les joueurs à la maladie d\'Alzheimer à travers une expérience immersive. Le défi principal était de transmettre une compréhension émotionnelle et progressive de la maladie en déformant progressivement la perception du joueur.',
      team: [
        {
          name: 'Clément BOUNAIX',
          role: 'Responsable programmation',
          position: 'Programmeur',
        },
        {
          name: 'Nathanaël MORIT',
          role: 'Responsable modélisation',
          position: 'Modélisateur',
        },
        {
          name: 'Lucas CONTRERAS-HODAPP',
          role: 'Développeur',
          position: 'Programmeur',
        },
        {
          name: 'Lucas CHAPON',
          role: 'Développeur 3D',
          position: 'Modélisateur',
        },
        {
          name: 'Morphée SEVESTRE',
          role: 'Développeuse 3D',
          position: 'Modélisatrice',
        },
      ],
      missions: [
        'Concevoir et développer une mécanique de distorsion progressive pour représenter les symptômes d\'Alzheimer',
        'Créer des environnements 3D cohérents qui se transforment au fil de la progression du joueur',
        'Implémenter un système de narration immersive et émotionnelle',
        'Gérer le projet en équipe multidisciplinaire avec outils collaboratifs',
        'Préparer le jeu pour une publication sur la plateforme Steam',
      ],
      skillsMobilized: [
        'Programmation C# et architecture logicielle',
        'Moteur de jeu Unity (système de build, optimisation)',
        'Modélisation et animation 3D sous Blender',
        'Design de jeu et narratif interactif',
        'Gestion de projet agile avec GitHub et Jira',
        'Optimisation de performances pour consoles et PC',
        'Travail en équipe pluridisciplinaire',
      ],
      skillsAcquired: [
        'Maîtrise avancée du moteur Unity et de C#',
        'Compétences en game design et level design',
        'Expérience avec un workflow 3D complet (modélisation, texturing, animation)',
        'Leadership technique et coordination d\'équipe',
        'Intégration de principes de développement durable dans la conception d\'un jeu vidéo',
        'Prise en compte et gestion des notions d\'inclusivité et d\'accessibilité',
      ],
      ppp: {
        objective:
          'Ce projet correspond à mon projet professionnel: il m\'a permis de me développer dans ce que j\'aime, à savoir la modélisation 3D et la conception de jeux vidéo.',
        technicalSkills: [
          'Conception et implémentation de mécaniques en C# sous Unity',
          'Intégration d\'assets et optimisation d\'une scène 3D sous contraintes de performance',
          'Organisation d\'un workflow de production (GitHub, suivi Jira, répartition des tâches)',
        ],
        humanSkills: [
          'Communication entre profils techniques et artistiques',
          'Prise d\'initiative, entraide et gestion des priorités en équipe',
          'Capacité à argumenter des choix de conception auprès du groupe',
        ],
        articulation:
          'Le projet relie explicitement mon PPP à des preuves concrètes: je mobilise des compétences techniques de dev jeu tout en développant les compétences humaines nécessaires à un rôle de développeur en équipe pluridisciplinaire.',
      },
      criticalReflection: {
        difficulties: [
          'Équilibrer fidélité réaliste de la représentation d\'Alzheimer et jouabilité',
          'Coordonner les itérations entre code gameplay et assets 3D',
          'Maintenir des performances stables malgré la complexité visuelle croissante',
        ],
        solutions: [
          'Prototypage progressif des effets de distorsion avec tests réguliers en équipe',
          'Mise en place d\'un découpage clair des tâches et points de synchronisation hebdomadaires',
          'Optimisation des scènes (LOD, textures, éclairage) et priorisation des éléments critiques',
        ],
        lessons: [
          'Documenter tôt les choix techniques évite les retours en arrière coûteux',
          'La qualité d\'un jeu narratif dépend autant de la collaboration que du code',
          'Mesurer l\'impact utilisateur et l\'accessibilité doit être intégré dès la conception',
        ],
      },
      portfolioEvidence: [
        'Captures d\'écran intégrées dans cette page (scène cuisine et scène de gameplay) pour illustrer le niveau de modélisation et l\'ambiance visuelle.',
        'Liste détaillée des missions, compétences mobilisées et compétences acquises directement reliées aux tâches réellement menées.',
        'Dépôt GitHub du projet LIBET pour attester du travail de développement et du versionnement collaboratif.',
      ],
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
