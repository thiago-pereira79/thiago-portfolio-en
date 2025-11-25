import { Project, SkillCategory, StudyTopic, Language } from './types';

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const HERO_CHIPS = [
  'Systems Analysis Student',
  'Front-end & Mobile',
  'Cloud Computing Program | AWS',
  'International Relations',
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Front-end',
    skills: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
    colorClass: 'bg-cream-50 border border-cream-200 text-brown-800',
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'Flutter' },
      { name: 'Kotlin' },
      { name: 'Jetpack Compose' },
      { name: 'Android Studio' },
    ],
    colorClass: 'bg-cream-200 border border-taupe/30 text-brown-800',
  },
  {
    title: 'Cloud & Tools',
    skills: [
      { name: 'AWS (In Training)' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
    ],
    colorClass: 'bg-taupe/20 border border-taupe/30 text-brown-800',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Virtual Piano',
    tags: ['Front-end', 'JS Events', 'Audio'],
    description: 'Piano simulator for keyboard/mouse event training, browser audio manipulation, and simple usability.',
    demoLink: 'https://thiago-pereira79.github.io/js-music-keyboard-virtual/',
    repoLink: 'https://github.com/thiago-pereira79/js-music-keyboard-virtual',
  },
  {
    title: 'Pokédex',
    tags: ['Front-end', 'API', 'DOM'],
    description: 'PokéAPI consumption for Pokémon listing, dynamic DOM manipulation, and responsive layout.',
    demoLink: 'https://thiago-pereira79.github.io/js-developer-pokedex/',
    repoLink: 'https://github.com/thiago-pereira79/js-developer-pokedex',
  },
  {
    title: 'Memory Game',
    tags: ['Logic', 'CSS Animations', 'Arrays'],
    description: 'Classic game focused on programming logic, state array manipulation, and CSS for card flipping.',
    demoLink: 'https://thiago-pereira79.github.io/jogo-da-memoria/',
    repoLink: 'https://github.com/thiago-pereira79/jogo-da-memoria',
  },
];

export const STUDY_TOPICS: StudyTopic[] = [
  {
    category: 'Front-end',
    items: ['React', 'JavaScript Best Practices', 'Componentization and project organization'],
  },
  {
    category: 'Mobile',
    items: ['Flutter & Dart', 'Kotlin and Jetpack Compose', 'Future publication of simple apps'],
  },
  {
    category: 'Cloud (AWS)',
    items: ['Cloud computing fundamentals', 'Essential AWS Services', 'Networks, Linux, automation'],
  },
];

export const LANGUAGES: Language[] = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'In Progress' },
  { name: 'Spanish', level: 'In Progress' },
];

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/thiago-pereira79',
  github: 'https://github.com/thiago-pereira79',
  email: 'mailto:t.firmiano.79@gmail.com',
  whatsapp: 'https://wa.me/5516997839791',
};