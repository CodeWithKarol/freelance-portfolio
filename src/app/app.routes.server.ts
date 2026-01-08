import { RenderMode, ServerRoute } from '@angular/ssr';
import { CASE_STUDIES, BLOG_POSTS } from './core/portfolio/portfolio-data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'case-studies/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return CASE_STUDIES.map((c) => ({ id: c.id }));
    },
  },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return BLOG_POSTS.map((p) => ({ slug: p.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
