import { Project, SkillCard, StudyItem } from './types';

// HERO
export const HERO_TITLE = "Thiago Pereira";
export const HERO_SUBTITLE = "Systems Analysis and Development Student focused on Front-end, Mobile, and Cloud (AWS).";
export const HERO_DESCRIPTION = "I develop web and mobile interfaces while deepening my studies in React, Flutter, and Cloud Computing | AWS re/Start AI + No Code at Escola da Nuvem. I bring a background in International Relations and experience with people, customer service, and technology.";
export const HERO_CHIPS = [
  "ADS Student",
  "Front-end & Mobile",
  "Cloud Computing Program | AWS",
  "International Relations"
];

// SKILLS
export const SKILLS_TITLE = "Stack & Hard Skills";
export const SKILLS_SUBTITLE = "One foot in Front-end, another in Mobile, and an eye on the Cloud.";
export const SKILLS_DATA: SkillCard[] = [
  {
    title: "Front-end",
    items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3"]
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart", "API Consumption", "Firebase", "Animations"]
  },
  {
    title: "Cloud (AWS)",
    items: ["Cloud Computing Fundamentals", "Essential AWS Services", "Linux & Scripts", "Intro to Programming & Python", "AI and AWS Services"]
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Flutter SDK", "Dart SDK"]
  }
];

// PROJECTS (Inferred from screenshots)
export const PROJECTS_DATA: Project[] = [
  {
    title: "Virtual Piano",
    tags: ["Front-end", "JS Events", "Audio"],
    description: "Piano simulator for keyboard/mouse event training, browser audio manipulation, and simple usability.",
    codeLink: "https://github.com/thiago-pereira79/js-music-keyboard-virtual",
    viewLink: "https://thiago-pereira79.github.io/js-music-keyboard-virtual/"
  },
  {
    title: "Pokédex",
    tags: ["Front-end", "API", "DOM"],
    description: "PokéAPI consumption for listing Pokémon, dynamic DOM manipulation, and responsive layout.",
    codeLink: "https://github.com/thiago-pereira79/js-developer-pokedex",
    viewLink: "https://thiago-pereira79.github.io/js-developer-pokedex/"
  },
  {
    title: "Memory Game",
    tags: ["Logic", "CSS Animations", "Arrays"],
    description: "Classic game focused on programming logic, state array manipulation, and CSS for card flipping.",
    codeLink: "https://github.com/thiago-pereira79/jogo-da-memoria",
    viewLink: "https://thiago-pereira79.github.io/jogo-da-memoria/"
  }
];

// STUDY
export const STUDY_DATA: StudyItem[] = [
  {
    category: "Front-end",
    topics: [
      "React",
      "JavaScript Best Practices",
      "Componentization and project organization"
    ]
  },
  {
    category: "Mobile",
    topics: [
      "Flutter & Dart",
      "Navigation, state, APIs, and widgets",
      "Future publication of simple apps"
    ]
  },
  {
    category: "Cloud (AWS)",
    topics: [
      "Cloud computing fundamentals",
      "Global infrastructure and main AWS services",
      "Essential AWS services",
      "Networking, Linux, automation",
      "Automation, governance, Linux, and scripts",
      "First steps with AI on AWS (Bedrock, Textract, Comprehend, etc.)"
    ]
  }
];

// Note: The screenshot had "Cloud (AWS)" with items that differ slightly from the updated text in instructions.
// I will use the INSTRUCTIONS text for the content.
export const STUDY_DATA_UPDATED: StudyItem[] = [
    {
      category: "Front-end",
      topics: [
        "React",
        "JavaScript Best Practices",
        "Componentization and project organization"
      ]
    },
    {
      category: "Mobile",
      topics: [
        "Flutter & Dart",
        "Navigation, state, APIs, and widgets",
        "Future publication of simple apps"
      ]
    },
    {
      category: "Cloud (AWS)",
      topics: [
        "Cloud computing fundamentals",
        "Global infrastructure and main AWS services",
        "Automation, governance, Linux, and scripts",
        "AWS AI Tools and Services (Bedrock, Textract, Comprehend, Polly, Lex)"
      ]
    }
  ];

// ABOUT
export const ABOUT_PARAGRAPHS = [
  "I am Thiago Pereira, a Systems Analysis and Development student focused on Front-end, Mobile, and Cloud computing.",
  "I started my academic journey in International Relations, which gave me a broad view of the world, communication, and context. Over time, I realized I wanted to be closer to building digital solutions, and that's when I dove into technology.",
  "Today I study ADS, participate in the Cloud Computing program | AWS re/Start AI + No Code at Escola da Nuvem, and build practical projects to train logic, interfaces, and integrations. I like learning by doing: experimenting, making mistakes, adjusting, and sharing what I'm developing.",
  "When I'm not coding, I'm probably digging into a new course, organizing project ideas, or exchanging experiences with others who are also transitioning to the tech field."
];

export const SOCIAL_LINKS = [
  { name: "E-mail", url: "mailto:t.firmiano.79@gmail.com", icon: "mail" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/thiago-pereira79/", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/thiago-pereira79", icon: "github" },
  { name: "WhatsApp", url: "https://wa.me/5516997839791", icon: "message-circle" }
];