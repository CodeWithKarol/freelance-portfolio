export interface Skill {
  name: string;
  icon: string; // URL or icon name
  category:
    | 'Frameworks'
    | 'State & Rx'
    | 'Styling'
    | 'Tools'
    | 'Other'
    | 'Languages'
    | 'Backend'
    | 'State'
    | 'Soft Skills';
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

export interface Service {
  title: string;
  description: string;
  icon: 'code' | 'performance' | 'migration' | 'architecture';
  features?: string[];
  metric?: {
    value: string;
    label: string;
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // SVG path or icon name
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface ContactInfo {
  email: string;
  location: string;
  availability: string;
  calendlyUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}
