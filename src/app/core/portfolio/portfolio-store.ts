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
      name: 'Angular 19+',
      icon: 'angular',
      category: 'Core Stack',
      proficiency: 'Expert',
      years: 6,
    },
    {
      name: 'React 19',
      icon: 'react',
      category: 'Core Stack',
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
      name: 'Product Strategy',
      icon: 'leadership',
      category: 'Founder',
      proficiency: 'Expert',
      years: 3,
    },
    {
      name: 'Growth Engineering',
      icon: 'problem-solving',
      category: 'Founder',
      proficiency: 'Advanced',
      years: 3,
    },
  ]);

  readonly services = signal<Service[]>([
    {
      title: 'Fractional CTO / Tech Lead',
      description:
        'I step in to lead your engineering efforts. From architectural decisions (Nx, Signals) to establishing CI/CD pipelines and code review standards. I bring bank-grade rigor to your chaotic startup environment.',
      icon: 'leadership',
      features: ['Team Leadership', 'Tech Strategy', 'Process Optimization'],
    },
    {
      title: 'Enterprise to SaaS Migration',
      description:
        'Transform heavy legacy systems into high-velocity SaaS products. I specialize in untangling monolithic Angular or React applications and rebuilding them with modern, performant architecture.',
      icon: 'migration',
      features: ['Legacy Modernization', 'Performance Tuning', 'Cloud Native'],
    },
    {
      title: 'Rapid MVP Development',
      description:
        'Zero to One in weeks, not months. Using my proprietary "SaaS Starter" architecture (Angular or React, Tailwind, Firebase), I deliver audit-ready code that scales from day one.',
      icon: 'code',
      features: ['4-Week Launch', 'Scalable Day 1', 'Mobile First'],
    },
    {
      title: 'Performance & Audit',
      description:
        'Your app is slow? I fix it. Deep dive analysis of Core Web Vitals, Change Detection cycles, and bundle size. I typically reduce load times by 40%+. ',
      icon: 'performance',
      metric: { value: '98/100', label: 'Lighthouse Score' },
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
    email: 'kmodelski93@gmail.com',
    location: 'Warsaw, Mazowieckie, Poland',
    availability: 'Available for new projects',
    calendlyUrl: 'https://calendly.com',
  });

  readonly experience = signal<Experience[]>([
    {
      company: 'GFT Technologies (Citi)',
      role: 'Senior Angular Architect',
      period: 'Mar 2025 - Present',
      description:
        'Leading architecture for mission-critical trading platforms. Enforcing 100% test coverage policies while migrating legacy micro-frontends to a coherent Nx monorepo. Balancing enterprise compliance with developer velocity.',
      technologies: ['Angular 19', 'Nx', 'Micro-Frontends', 'Regulatory Compliance'],
    },
    {
      company: 'Silent Eight',
      role: 'Senior Frontend Engineer',
      period: 'Dec 2023 - Feb 2025',
      description:
        'AI Compliance SaaS. Led the frontend modernization initiative (Angular 14 → 19) and introduced "Zoneless" architecture for 50% performance gains. Worked directly with Product Owners to accelerate feature delivery.',
      technologies: ['Angular 19', 'TanStack Query', 'AI Integration', 'SaaS'],
    },
    {
      company: 'BNP Paribas',
      role: 'Software Engineer',
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
