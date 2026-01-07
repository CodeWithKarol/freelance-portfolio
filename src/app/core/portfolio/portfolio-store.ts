import { Injectable, signal } from '@angular/core';
import { Skill, CaseStudy, Testimonial, BlogPost } from './portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioStore {
  readonly skills = signal<Skill[]>([
    {
      name: 'Angular 17+',
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
    { name: 'RxJS / NgRx', icon: 'rxjs', category: 'State', proficiency: 'Expert', years: 6 },
    {
      name: 'Angular Signals',
      icon: 'signals',
      category: 'State',
      proficiency: 'Expert',
      years: 1,
    },
    { name: 'React', icon: 'react', category: 'Frameworks', proficiency: 'Advanced', years: 4 },
    { name: 'Next.js', icon: 'nextjs', category: 'Frameworks', proficiency: 'Advanced', years: 3 },
    {
      name: 'Node.js / NestJS',
      icon: 'nodejs',
      category: 'Backend',
      proficiency: 'Advanced',
      years: 4,
    },
    {
      name: 'Tailwind CSS',
      icon: 'tailwind',
      category: 'Styling',
      proficiency: 'Expert',
      years: 4,
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
}
