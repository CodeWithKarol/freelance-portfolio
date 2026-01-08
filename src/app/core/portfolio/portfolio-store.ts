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

@Injectable({
  providedIn: 'root',
})
export class PortfolioStore {
  readonly skills = signal<Skill[]>([
    {
      name: 'Angular 19+',
      icon: 'angular',
      category: 'Frameworks',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'TypeScript',
      icon: 'typescript',
      category: 'Languages',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'RxJS / NgRx',
      icon: 'rxjs',
      category: 'State & Rx',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'Nx Monorepo',
      icon: 'nx',
      category: 'Tools',
      proficiency: 'Expert',
      years: 4,
    },
    {
      name: 'React / Native',
      icon: 'react',
      category: 'Frameworks',
      proficiency: 'Advanced',
      years: 3,
    },
    {
      name: 'Node.js / NestJS',
      icon: 'nodejs',
      category: 'Backend',
      proficiency: 'Advanced',
      years: 4,
    },
    {
      name: 'Tailwind / Styled',
      icon: 'tailwind',
      category: 'Styling',
      proficiency: 'Expert',
      years: 4,
    },
    {
      name: 'Jest / Cypress',
      icon: 'testing',
      category: 'Tools',
      proficiency: 'Expert',
      years: 5,
    },
    {
      name: 'Technical Leadership',
      icon: 'leadership',
      category: 'Soft Skills',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'Cross-functional Collaboration',
      icon: 'collaboration',
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
      name: 'Agile & Scrum',
      icon: 'agile',
      category: 'Soft Skills',
      proficiency: 'Expert',
      years: 6,
    },
  ]);

  readonly services = signal<Service[]>([
    {
      title: 'Web Application Development',
      description:
        'I build robust, scalable Single Page Applications (SPAs) from scratch. Specializing in complex enterprise dashboards, real-time data visualization, and high-performance customer-facing portals.',
      icon: 'code',
      features: ['Angular 18+', 'React Integration', 'Enterprise Dashboards'],
    },
    {
      title: 'Performance Optimization',
      description:
        'Boost Core Web Vitals, reduce bundle size, and optimize rendering. I turn slow apps into instant experiences.',
      icon: 'performance',
      metric: { value: '98/100', label: 'Performance Score' },
    },
    {
      title: 'Migration & Upgrade',
      description:
        'Securely migrate from AngularJS to Angular 18+, or modernize legacy React class components to hooks. Zero downtime, incremental strategies.',
      icon: 'migration',
      features: ['AngularJS to Angular', 'Class to Functional', 'Incremental Migration'],
    },
    {
      title: 'Architecture & Audit',
      description:
        'Comprehensive code audits to identify technical debt and security risks. I help teams establish best practices, monorepo structures (Nx), and CI/CD pipelines.',
      icon: 'architecture',
      features: ['Code Review', 'Nx Monorepo', 'CI/CD Setup'],
    },
  ]);

  readonly caseStudies = signal<CaseStudy[]>([
    {
      id: '1',
      title: 'ScaleSail.io',
      tagline: 'High-Performance SaaS Templates',
      heroImage: 'assets/images/scalesail.png',
      challenge:
        'Founders need high-converting, SEO-optimized landing pages without technical debt.',
      solution:
        'Built a suite of premium Angular 18+ templates with perfect Lighthouse scores and zero-config deployment.',
      results: ['100/100 Lighthouse', 'Zero CLS', 'Mobile-First Design'],
      techStack: ['Angular 18', 'Tailwind', 'Signals'],
      demoUrl: 'https://scale-sail.io',
      repoUrl: 'https://github.com',
    },
    {
      id: '2',
      title: 'Enterprise Migration',
      tagline: 'Legacy to Modern Angular',
      heroImage: 'assets/images/enterprise.png',
      challenge: 'Migrating a massive monolithic AngularJS/Angular 5 app to modern standards.',
      solution:
        'Implemented incremental migration strategies, NX monorepo, and Zoneless architecture.',
      results: ['Reduced build time by 60%', 'Improved runtime perf by 40%'],
      techStack: ['Angular', 'Nx', 'Micro Frontends'],
    },
  ]);

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

  readonly blogPosts = signal<BlogPost[]>([
    {
      id: '1',
      title: 'Mastering Angular Signals',
      excerpt: 'A deep dive into the new reactivity primitive in Angular.',
      date: '2025-10-15',
      url: 'https://medium.com',
      imageUrl: 'assets/images/blog1.jpg',
    },
    {
      id: '2',
      title: 'React vs Angular in 2026',
      excerpt: 'Comparing the giants for enterprise development.',
      date: '2025-11-20',
      url: 'https://dev.to',
      imageUrl: 'assets/images/blog2.jpg',
    },
  ]);

  readonly socialLinks = signal<SocialLink[]>([
    {
      platform: 'GitHub',
      url: 'https://github.com',
      icon: 'github',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'linkedin',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com',
      icon: 'twitter',
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
        { label: 'Case Studies', href: '#cases' },
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
    email: 'hello@scale-sail.io',
    location: 'Ząbki, Poland (Remote)',
    availability: 'Available for new projects',
    calendlyUrl: 'https://calendly.com',
  });

  readonly experience = signal<Experience[]>([
    {
      company: 'GFT Technologies',
      role: 'Senior Angular Developer',
      period: 'Mar 2025 - Present',
      description:
        'Architecting scalable, high-performance web applications for Citibank. Championed reactive brokerage app development, supercharged productivity with Nx monorepo, and led technical hiring.',
      technologies: ['Angular', 'RxJS', 'NgRx', 'Nx', 'React Native', 'TypeScript'],
    },
    {
      company: 'Silent Eight',
      role: 'Javascript Developer',
      period: 'Dec 2023 - Feb 2025',
      description:
        'Developed AI-driven compliance platform (IRIS). Modernized Angular 14 to 19 and transformed legacy React code to modern hooks-based architecture with TanStack Query.',
      technologies: ['Angular 19', 'React', 'TanStack Query', 'NgRx', 'RxJS', 'Tailwind'],
    },
    {
      company: 'BNP Paribas Bank Polska',
      role: 'Software Developer',
      period: 'Nov 2021 - Nov 2023',
      description:
        'Contributed to GOonline banking platform. Migrated AngularJS to Angular 15, implemented modular NgRx store, and managed Nx monorepo structure.',
      technologies: ['Angular 15', 'AngularJS', 'Nx', 'NgRx', 'RxJS', 'SASS'],
    },
    {
      company: 'Amway',
      role: 'Javascript Developer',
      period: 'Apr 2019 - Oct 2021',
      description:
        'Enhanced Back Office Support System (BOSS) for business owners. Created dynamic UI components and optimized performance with RxJS.',
      technologies: ['Angular', 'RxJS', 'TypeScript', 'SASS', 'Jasmine'],
    },
  ]);
}
