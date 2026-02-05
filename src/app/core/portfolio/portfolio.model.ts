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
    | 'Soft Skills'
    | 'Core Stack'
    | 'Architecture'
    | 'Founder';
  proficiency: 'Expert' | 'Advanced' | 'Intermediate';
  years: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: 'code' | 'performance' | 'migration' | 'architecture' | 'leadership' | 'feature';
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

export interface Project {
  title: string;
  description: string;
  tags: string[];
  thumbnailUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Gig {
  title: string;
  description: string;
  price: string;
  features: string[];
  ctaUrl: string;
  icon: 'code' | 'performance' | 'component' | 'consulting';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
