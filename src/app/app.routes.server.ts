import { RenderMode, ServerRoute } from '@angular/ssr';
import { CASE_STUDIES } from './core/portfolio/portfolio-data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'work/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return CASE_STUDIES.map((c) => ({ slug: c.id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
