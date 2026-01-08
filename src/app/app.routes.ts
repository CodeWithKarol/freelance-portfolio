import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/portfolio/pages/home/home-page').then((m) => m.HomePage),
    title: 'Senior Angular Developer | Freelancer',
    data: {
      description:
        'Senior Angular & React Developer portfolio. Specializing in scalable enterprise applications and rapid startup MVPs.',
    },
  },
  {
    path: 'case-studies/:id',
    loadComponent: () =>
      import('./features/portfolio/pages/case-study/case-study-page').then((m) => m.CaseStudyPage),
    title: 'Case Study | Portfolio',
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
