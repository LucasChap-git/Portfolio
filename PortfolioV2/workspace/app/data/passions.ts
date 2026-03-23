export interface Passion {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const passions: Passion[] = [
  {
    id: 'web-development',
    title: 'Tennis',
    description: 'Joueur régulier depuis plus de 10 ans, ce sport fait partie intégrante de ma vie et m\'a apporté beaucoup en tant que personne. Mes joueurs préférés sont Novak Djokovic et Dominic Thiem, un bon compromis entre stratégie et puissance.',
    icon: '/image/passions/tennis.avif',
  },
  {
    id: 'design-ux',
    title: 'Golf',
    description: 'Golfeur du dimanche, j\'apprécie passer mes étés sur les greens, un bon mélange entre nature et sport de précision. Mes plus grandes inspirations dans ce sport sont Rory McIlroy et Tiger Woods.',
    icon: '/image/passions/golf.webp',
  },
  {
    id: 'problem-solving',
    title: 'Padel',
    description: 'Joueur occasionnel, je trouve qu\'il n\'y a rien de mieux que de se défouler sur un terrain de padel entre amis. Cela dit faites attention si vous jouez avec moi, je n\'hésite pas à envoyer des bûches !',
    icon: '/image/passions/padel.webp',
  },
  {
    id: 'learning',
    title: 'Basketball',
    description: 'Depuis plus d\'1 an, je me suis passioné pour le basketball. Je n\'ai pas la chance d\'en pratiquer, mais je suis en permanence la NBA, plus particulièrement les Timberwolves et les Hornets. Mes joueurs préférés sont Anthony Edwards et LaMelo Ball.',
    icon: '/image/passions/basket.webp',
  },
  {
    id: 'collaboration',
    title: 'Formule 1',
    description: 'Je suis un grand fan de Formule 1 depuis 2010. Chaque année, je suis avec passion les courses et le championnat. Mon pilote préféré est Sebastian Vettel, que j\'ai soutenu depuis mes débuts en F1 jusqu\'à sa retraite en 2022. Actuellement, je suis un grand fan de Max Verstappen, que je trouve très impressionnant à suivre.',
    icon: '/image/passions/formule1.avif',
  },
  {
    id: 'innovation',
    title: 'MMA',
    description: 'J\' ai récemment développé une passion pour le MMA. J\'apprécie suivre les combats et surtout l\'ascension de nos combattants français, comme Benoît Saint-Denis ou encore Ciryl Gane.',
    icon: '/image/passions/mma.webp',
  },
];
