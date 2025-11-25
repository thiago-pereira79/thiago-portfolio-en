export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
  colorClass: string; // Tailwind class for background
}

export interface Project {
  title: string;
  tags: string[];
  description: string;
  demoLink?: string;
  repoLink?: string;
}

export interface StudyTopic {
  category: string;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
}