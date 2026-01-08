import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-tech-stack-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-white dark:bg-slate-950">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
          <h2 class="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500">
            Technologies
          </h2>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl"
          >
            Tech Stack
          </p>
          <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Powering next-generation applications with best-in-class technologies
          </p>
        </div>
        <div
          class="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          @for (tech of techStack(); track tech.name) {
          <div
            class="group relative flex items-center justify-center gap-3 p-6 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-800"
          >
            <!-- Initials/Icon Placeholder -->
            <div
              [class]="
                'h-10 w-10 flex items-center justify-center rounded-lg font-bold text-lg select-none transition-colors ' +
                getTechColor(tech.name)
              "
            >
              {{ tech.name.substring(0, 1) }}
            </div>

            <div class="flex flex-col">
              <span
                class="font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
              >
                {{ tech.name.split('/')[0].trim() }}
              </span>
              <span class="text-xs text-slate-500 dark:text-slate-400">
                {{ tech.category }}
              </span>
            </div>
          </div>
          }
        </div>

        <div class="mt-16 flex justify-center">
          <p
            class="relative rounded-full bg-slate-50 dark:bg-slate-900 px-4 py-1.5 text-sm leading-6 text-slate-600 dark:text-slate-400 ring-1 ring-inset ring-slate-900/5 dark:ring-white/10 text-center"
          >
            <span class="hidden md:inline">Constantly expanding my toolkit.</span>
            <a
              href="https://github.com"
              target="_blank"
              class="font-semibold text-blue-600 dark:text-blue-500 hover:underline ml-1"
            >
              Check out my GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechStackSection {
  private portfolioStore = inject(PortfolioStore);

  techStack = computed(() =>
    this.portfolioStore.skills().filter((s) => s.category !== 'Soft Skills')
  );

  getTechColor(name: string): string {
    const n = name.toLowerCase();
    if (n.includes('angular'))
      return 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400';
    if (n.includes('react'))
      return 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400';
    if (n.includes('type'))
      return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
    if (n.includes('node'))
      return 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400';
    if (n.includes('tailwind'))
      return 'bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400';
    if (n.includes('rxjs'))
      return 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400';
    return 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300';
  }
}
