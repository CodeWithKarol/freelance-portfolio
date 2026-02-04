import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/portfolio/pages/home/home-page').then((m) => m.HomePage),
    title: 'Senior Frontend Developer & SaaS Founder | Karol Modelski',
    data: {
      description:
        'Senior Frontend Developer & Micro-SaaS Founder. I combine enterprise architecture experience with a product-first mindset to build high-performance web applications.',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
