import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/portfolio/pages/home/home-page').then((m) => m.HomePage),
    title: 'Angular Architect & SaaS Founder | Karol Modelski',
    data: {
      description:
        'Senior Angular Architect & Micro-SaaS Founder. I combine enterprise architecture experience with a product-first mindset to build high-performance web applications.',
    },
  },
  {
    path: 'work/:id',
    loadComponent: () =>
      import('./features/portfolio/pages/case-study/case-study-page').then((m) => m.CaseStudyPage),
    title: 'Work | Portfolio',
  },
  {
    path: 'work',
    loadComponent: () =>
      import('./features/portfolio/pages/work/work-page').then((m) => m.WorkPage),
    title: 'Work | Portfolio',
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./features/blog/pages/blog-list/blog-list-page').then((m) => m.BlogListPage),
    title: 'Blog | Angular Insights',
  },
  {
    path: 'blog/:slug',
    loadComponent: () =>
      import('./features/blog/pages/blog-post/blog-post-page').then((m) => m.BlogPostPage),
    title: 'Post | Angular Insights',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
