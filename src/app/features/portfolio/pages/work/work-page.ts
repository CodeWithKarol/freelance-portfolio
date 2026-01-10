import { Component, ChangeDetectionStrategy, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-work-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-white dark:bg-slate-950 min-h-screen relative isolate overflow-hidden font-sans">
      <!-- Sophisticated Background -->
      <div class="absolute inset-0 -z-10 bg-slate-50 dark:bg-slate-950/50 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      <div class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div class="absolute left-0 top-0 -z-10 bg-[radial-gradient(circle_500px_at_0%_200px,theme(colors.indigo.500/0.1),transparent)]"></div>
      
      <!-- Hero Section -->
      <div class="relative px-6 pt-24 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-xs font-semibold tracking-widest uppercase text-primary-600 dark:text-primary-400">Portfolio</h2>
          <h1 class="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Selected Work
          </h1>
          <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Showcase of technical leadership, architectural decisions, and business outcomes.
          </p>
        </div>
      </div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8 pb-32">
        @if (hasProjects()) {
          <!-- Featured Project (First Item) -->
          @if (featuredProject(); as featured) {
            <article class="relative isolate overflow-hidden rounded-3xl bg-slate-900 px-8 py-24 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24 mb-24 transition-all hover:shadow-indigo-500/20 group">
              <img [src]="featured.heroImage || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80'" 
                   [alt]="featured.title" 
                   class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50 lg:brightness-[0.4] transition-transform duration-700 group-hover:scale-105">
              
              <div class="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:text-left relative z-10">
                <div class="flex items-center justify-center lg:justify-start gap-x-4 text-xs font-semibold leading-5 mb-4">
                  <span class="text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full backdrop-blur-sm border border-indigo-500/20">Featured Case Study</span>
                  <!-- Tech stack pill for featured -->
                  @if (featured.techStack.length > 0) {
                     <span class="text-slate-300 border border-slate-700 px-2 py-0.5 rounded-full">{{ featured.techStack[0] }}</span>
                  }
                </div>
                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl text-pretty">
                  <a [routerLink]="['/work', featured.id]" class="focus:outline-none">
                    <span class="absolute inset-0"></span>
                    {{ featured.title }}
                  </a>
                </h2>
                <p class="mt-6 text-lg leading-8 text-slate-300 line-clamp-2 md:line-clamp-3">
                  {{ featured.tagline }}
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <span class="text-sm font-semibold leading-6 text-white group-hover:text-indigo-300 flex items-center gap-2 transition-colors">
                    View Case Study <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </article>
          }

          <!-- Grid for remaining projects -->
          <div class="grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2">
            @for (project of visibleProjects(); track project.id) {
              <article class="relative flex flex-col items-start justify-between group h-full">
                <!-- Image Wrapper -->
                <div class="relative w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 aspect-[16/9] shadow-sm">
                  <img [src]="project.heroImage || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80'" 
                       [alt]="project.title"
                       class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 dark:ring-white/10"></div>
                  
                  <!-- Overlay gradient on hover -->
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div class="max-w-xl w-full flex flex-col flex-grow pt-6">
                  <!-- Tech Stack Tags -->
                  <div class="flex flex-wrap items-center gap-2 text-xs mb-3">
                    @for (tech of project.techStack.slice(0, 3); track tech) {
                      <span class="relative z-10 rounded-full bg-slate-50 dark:bg-slate-800/50 px-2.5 py-1 font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {{ tech }}
                      </span>
                    }
                    @if (project.techStack.length > 3) {
                      <span class="text-slate-500 text-[10px]">+{{ project.techStack.length - 3 }}</span>
                    }
                  </div>

                  <div class="group flex-grow">
                    <h3 class="mt-2 text-xl font-bold leading-6 text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      <a [routerLink]="['/work', project.id]">
                        <span class="absolute inset-0"></span>
                        {{ project.title }}
                      </a>
                    </h3>
                    <p class="mt-3 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {{ project.tagline }}
                    </p>
                  </div>
                 
                  <!-- Footer of Card -->
                  <div class="mt-6 flex items-center gap-x-3 border-t border-slate-100 dark:border-slate-800 pt-4 w-full">
                     <span class="text-sm font-semibold text-primary-600 dark:text-primary-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read Case Study 
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                     </span>
                  </div>
                </div>
              </article>
            }
          </div>

          <!-- Load More / Pagination -->
          @if (hasMoreProjects()) {
            <div class="mt-20 flex justify-center">
              <button 
                (click)="loadMore()"
                class="rounded-full bg-white dark:bg-slate-900 px-8 py-3.5 text-sm font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                Load more projects
              </button>
            </div>
          }
        } @else {
           <div class="flex flex-col items-center justify-center py-20 text-center">
            <p class="text-slate-500 dark:text-slate-400 mb-4">No projects found.</p>
          </div>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkPage {
  store = inject(PortfolioStore);
  
  // State for pagination/visibility
  private readonly displayBatchSize = 4; // Showing 4 items + featured is good for a grid of 2
  protected visibleCount = signal(this.displayBatchSize);

  // Derived state
  hasProjects = computed(() => this.store.caseStudies().length > 0);

  featuredProject = computed(() => this.store.caseStudies()[0] || null);
  
  // Projects to show in grid (excluding featured)
  visibleProjects = computed(() => {
    const all = this.store.caseStudies();
    if (all.length <= 1) return []; // Only featured or empty
    
    // Skip the first one as it is featured
    return all.slice(1, this.visibleCount() + 1);
  });

  hasMoreProjects = computed(() => {
    // Total available excluding featured
    const totalRemaining = Math.max(0, this.store.caseStudies().length - 1);
    return this.visibleProjects().length < totalRemaining;
  });

  loadMore() {
    this.visibleCount.update(c => c + this.displayBatchSize);
  }
}
