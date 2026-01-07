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
    { name: 'React', icon: 'react', category: 'Frameworks', proficiency: 'Expert', years: 4 },
    { name: 'Next.js', icon: 'nextjs', category: 'Frameworks', proficiency: 'Expert', years: 3 },
    { name: 'RxJS', icon: 'rxjs', category: 'State & Rx', proficiency: 'Expert', years: 6 },
    { name: 'NgRx', icon: 'ngrx', category: 'State & Rx', proficiency: 'Expert', years: 5 },
    { name: 'Signals', icon: 'signals', category: 'State & Rx', proficiency: 'Expert', years: 1 },
    {
      name: 'Tailwind CSS',
      icon: 'tailwind',
      category: 'Styling',
      proficiency: 'Advanced',
      years: 3,
    },
    { name: 'TypeScript', icon: 'typescript', category: 'Tools', proficiency: 'Expert', years: 6 },
  ]);

  readonly caseStudies = signal<CaseStudy[]>([
    {
      id: '1',
      title: 'AdminPanel Pro',
      tagline: 'Role-based admin for internal tools',
      heroImage: 'assets/images/admin-panel.png',
      challenge: 'Needed scalable dashboard with auth and real-time filters.',
      solution: 'Used signals for zoneless perf gains, strict typing, and standalone components.',
      results: ['95 Lighthouse score', '2s load time', 'Mobile-first responsive'],
      techStack: ['Angular', 'NgRx', 'Tailwind'],
      demoUrl: 'https://vercel.com',
      repoUrl: 'https://github.com',
    },
    {
      id: '2',
      title: 'E-Commerce Starter',
      tagline: 'High-performance storefront',
      heroImage: 'assets/images/ecommerce.png',
      challenge: 'SEO and initial load performance were critical.',
      solution: 'Implemented Angular SSR/Prerendering and image optimization.',
      results: ['Core Web Vitals passed', '50% faster TTI'],
      techStack: ['Angular', 'SSR', 'Node.js'],
      demoUrl: 'https://vercel.com',
      repoUrl: 'https://github.com',
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
