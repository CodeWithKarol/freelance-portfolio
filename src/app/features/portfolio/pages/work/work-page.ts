import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-work-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div
      class="bg-white dark:bg-slate-950 min-h-screen py-24 sm:py-32 relative isolate overflow-hidden"
    >
      <!-- Background Pattern -->
      <div
        class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      ></div>
      <div
        class="absolute left-0 top-0 -z-10 bg-[radial-gradient(circle_500px_at_0%_200px,theme(colors.indigo.500/0.1),transparent)]"
      ></div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Header -->
        <div class="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <h2 class="text-base font-semibold leading-7 text-primary-600 dark:text-primary-500">
            Portfolio
          </h2>
          <h1
            class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Selected Work
          </h1>
          <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Showcase of technical leadership, architectural decisions, and business outcomes.
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:gap-x-12 gap-y-16 lg:gap-y-20">
          @for (project of store.caseStudies(); track project.id) {
          <div
            class="group relative flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-primary-500/20 dark:hover:border-primary-500/20"
          >
            <!-- Image Container -->
            <div
              class="aspect-[16/9] w-full overflow-hidden bg-slate-200 dark:bg-slate-800 relative"
            >
              <img
                [src]="project.heroImage"
                [alt]="project.title"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <!-- Overlay gradient -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"
              ></div>
            </div>

            <!-- Content -->
            <div class="flex flex-1 flex-col p-8 sm:p-10">
              <div class="flex items-center gap-x-4 text-xs mb-4">
                @for (tech of project.techStack.slice(0, 3); track tech) {
                <span
                  class="relative z-10 rounded-full bg-white dark:bg-slate-800 px-3 py-1.5 font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-900/5 dark:ring-white/10"
                >
                  {{ tech }}
                </span>
                }
              </div>

              <h3
                class="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
              >
                <a [routerLink]="['/work', project.id]">
                  <span class="absolute inset-0"></span>
                  {{ project.title }}
                </a>
              </h3>

              <p class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400 flex-1">
                {{ project.tagline }}
              </p>

              <div
                class="mt-8 flex items-center gap-4 text-sm font-semibold text-primary-600 dark:text-primary-400"
              >
                Read Case Study
                <svg
                  class="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkPage {
  store = inject(PortfolioStore);
}
