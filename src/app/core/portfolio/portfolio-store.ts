import { Injectable, signal } from '@angular/core';
import {
  Skill,
  CaseStudy,
  Testimonial,
  BlogPost,
  Service,
  SocialLink,
  FooterColumn,
  ContactInfo,
  Experience,
} from './portfolio.model';
import { CASE_STUDIES, BLOG_POSTS } from './portfolio-data';

@Injectable({
  providedIn: 'root',
})
export class PortfolioStore {
  readonly skills = signal<Skill[]>([
    {
      name: 'Angular',
      icon: 'angular',
      category: 'Core Stack',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'React',
      icon: 'react',
      category: 'Core Stack',
      proficiency: 'Advanced',
      years: 1,
    },
    {
      name: 'TanStack Query',
      icon: 'react',
      category: 'State',
      proficiency: 'Advanced',
      years: 1,
    },
    {
      name: 'Context API',
      icon: 'react',
      category: 'State',
      proficiency: 'Advanced',
      years: 1,
    },
    {
      name: 'React Hook Form',
      icon: 'react',
      category: 'Tools',
      proficiency: 'Advanced',
      years: 1,
    },
    {
      name: 'Styled Components',
      icon: 'react',
      category: 'Styling',
      proficiency: 'Advanced',
      years: 1,
    },
    {
      name: 'Node.js / NestJS',
      icon: 'nodejs',
      category: 'Backend',
      proficiency: 'Intermediate',
      years: 2,
    },
    {
      name: 'TanStack Table',
      icon: 'react',
      category: 'Tools',
      proficiency: 'Advanced',
      years: 1,
    },
    {
      name: 'TypeScript',
      icon: 'typescript',
      category: 'Languages',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'JavaScript',
      icon: 'javascript',
      category: 'Languages',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'RxJS / Signals',
      icon: 'rxjs',
      category: 'State',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'NgRx',
      icon: 'ngrx',
      category: 'State',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'Nx Monorepo',
      icon: 'nx',
      category: 'Architecture',
      proficiency: 'Expert',
      years: 4,
    },
    {
      name: 'Zoneless API',
      icon: 'angular',
      category: 'Architecture',
      proficiency: 'Expert',
      years: 1,
    },
    {
      name: 'Firebase',
      icon: 'nodejs',
      category: 'Backend',
      proficiency: 'Expert',
      years: 3,
    },
    {
      name: 'Tailwind CSS',
      icon: 'tailwind',
      category: 'Styling',
      proficiency: 'Expert',
      years: 4,
    },
    {
      name: 'Angular Material',
      icon: 'angular',
      category: 'Styling',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'ApexCharts',
      icon: 'typescript',
      category: 'Tools',
      proficiency: 'Advanced',
      years: 3,
    },
    {
      name: 'Jasmine / Jest',
      icon: 'testing',
      category: 'Tools',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'Cypress',
      icon: 'testing',
      category: 'Tools',
      proficiency: 'Expert',
      years: 4,
    },
    {
      name: 'Vitest',
      icon: 'testing',
      category: 'Tools',
      proficiency: 'Advanced',
      years: 2,
    },
    {
      name: 'CI/CD Pipelines',
      icon: 'nx',
      category: 'Architecture',
      proficiency: 'Intermediate',
      years: 1,
    },
    {
      name: 'Leadership & Team Mentorship',
      icon: 'leadership',
      category: 'Soft Skills',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'Technical Communication',
      icon: 'problem-solving',
      category: 'Soft Skills',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'Problem Solving',
      icon: 'problem-solving',
      category: 'Soft Skills',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'Agile & Collaborative Mindset',
      icon: 'leadership',
      category: 'Soft Skills',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'Adaptability & Continuous Learning',
      icon: 'problem-solving',
      category: 'Soft Skills',
      proficiency: 'Expert',
      years: 6,
    },
  ]);

  readonly services = signal<Service[]>([
    {
      title: 'Enterprise Migration & Modernization',
      description:
        'Transform legacy monoliths into high-velocity modern applications. I specialize in complex Angular migrations, implementing "Zoneless" architecture, and Micro-Frontends (Nx). I also undertake React modernization initiatives.',
      icon: 'migration',
      features: ['Angular Migration Expert', 'React Modernization', 'Nx Monorepo'],
    },
    {
      title: 'SaaS Product Engineering',
      description:
        'End-to-end development for scalable SaaS products. While my primary expertise is Angular, I effectively ship production-grade React applications. I focus on maintainable, cost-effective architectures tailored to your stack preference.',
      icon: 'code',
      features: ['Full-Cycle Dev', 'Scalable Architecture', 'Angular or React'],
    },
    {
      title: 'Performance Audit & Optimization',
      description:
        'Deep-dive technical audits to identify bottlenecks. I optimize Core Web Vitals, reduce bundle sizes, and fix reactivity issues in Angular apps. For React, I focus on render optimization and hook best practices.',
      icon: 'performance',
      metric: { value: '40%+', label: 'Faster load times' },
    },
    {
      title: 'Custom Design Systems',
      description:
        'Bridge the gap between design and engineering. I build accessible, themeable, and versioned UI component libraries (Tailwind, CDK) that accelerate team velocity and ensure brand consistency across frameworks.',
      icon: 'architecture',
      features: ['Component Library', 'Accessibility (a11y)', 'Storybook'],
    },
    {
      title: 'Fractional Tech Lead / Mentorship',
      description:
        "Elevate your team's capabilities. I provide code reviews, set up best practices (CI/CD, Testing), and mentor developers on advanced architectural patterns like Signals and RxJS.",
      icon: 'leadership',
      features: ['Code Reviews', 'Team Upskilling', 'Process Setup'],
    },
  ]);

  readonly caseStudies = signal<CaseStudy[]>(CASE_STUDIES);

  readonly testimonials = signal<Testimonial[]>([
    {
      id: '1',
      name: 'Jane Doe',
      role: 'CTO',
      company: 'TechStart',
      quote: 'Karol delivered enterprise Angular with zero bugs. Highly recommended.',
      avatarUrl: 'assets/images/jane.jpg',
    },
    {
      id: '2',
      name: 'John Smith',
      role: 'Product Owner',
      company: 'EnterpriseCorp',
      quote: 'Exceptional architectural skills and performance optimization.',
      avatarUrl: 'assets/images/john.jpg',
    },
  ]);

  readonly blogPosts = signal<BlogPost[]>(BLOG_POSTS);

  readonly socialLinks = signal<SocialLink[]>([
    {
      platform: 'GitHub',
      url: 'https://github.com',
      icon: 'github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/karolmodelski',
      icon: 'linkedin',
    },
    {
      platform: 'Gumroad',
      url: 'https://karolmodelski.gumroad.com',
      icon: 'website',
    },
  ]);

  readonly footerColumns = signal<FooterColumn[]>([
    {
      title: 'Services',
      links: [
        { label: 'Web Development', href: '#services' },
        { label: 'Performance Audit', href: '#services' },
        { label: 'Angular Migration', href: '#services' },
        { label: 'Consulting', href: '#services' },
      ],
    },
    {
      title: 'Portfolio',
      links: [
        { label: 'Selected Work', href: '/work' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Open Source', href: 'https://github.com' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#blog' },
        { label: 'Tech Stack', href: '#skills' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ]);

  readonly contactInfo = signal<ContactInfo>({
    email: 'kmodelski93@gmail.com',
    location: 'Warsaw, Mazowieckie, Poland',
    availability: 'Available for new projects',
    calendlyUrl: 'https://calendly.com',
  });

  readonly experience = signal<Experience[]>([
    {
      company: 'GFT Technologies (Citi)',
      role: 'Senior Frontend Developer',
      period: 'Mar 2025 - Present',
      description:
        'Leading architecture for mission-critical trading platforms. Enforcing 100% test coverage policies while migrating legacy micro-frontends to a coherent Nx monorepo. Balancing enterprise compliance with developer velocity.',
      technologies: ['Angular 19', 'Nx', 'Micro-Frontends', 'Regulatory Compliance'],
    },
    {
      company: 'Silent Eight',
      role: 'Frontend Developer',
      period: 'Dec 2023 - Feb 2025',
      description:
        'AI Compliance SaaS. Led the frontend modernization initiative (Angular 14 → 19) and introduced "Zoneless" architecture for 50% performance gains. Worked directly with Product Owners to accelerate feature delivery.',
      technologies: ['Angular 19', 'TanStack Query', 'AI Integration', 'SaaS'],
    },
    {
      company: 'BNP Paribas',
      role: 'Software Developer',
      period: 'Nov 2021 - Nov 2023',
      description:
        'GOonline Platform. Delivered features for 1M+ active users. Managed the complex migration of core banking modules from AngularJS, ensuring zero downtime during high-traffic windows.',
      technologies: ['Angular', 'Enterprise Scale', 'Migration Strategies', 'Fintech'],
    },
    {
      company: 'Amway',
      role: 'Javascript Developer',
      period: 'Apr 2019 - Oct 2021',
      description:
        'Global E-commerce. Built high-traffic dashboards for business owners. Optimized data visualization components handling millions of records.',
      technologies: ['Angular', 'Data Viz', 'E-commerce'],
    },
  ]);
}
