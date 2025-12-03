export interface Project {
  title: string;
  tags: string[];
  description: string;
  codeLink?: string;
  viewLink?: string;
}

export interface SkillCard {
  title: string;
  items: string[];
}

export interface StudyItem {
  category: string;
  topics: string[];
}