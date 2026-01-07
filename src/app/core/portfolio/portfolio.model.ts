export interface Skill {
  name: string;
  icon: string; // URL or icon name
  category: 'Frameworks' | 'State & Rx' | 'Styling' | 'Tools' | 'Other';
  proficiency: 'Expert' | 'Advanced' | 'Intermediate';
  years: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  heroImage: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  imageUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
