import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-tech-stack-section',
  standalone: true,
  template: `
    <section
      id="stack"
      class="py-16 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          class="text-center text-sm font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wide mb-8"
        >
          Powering scalable applications with
        </p>
        <div
          class="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 md:opacity-60 hover:opacity-100 transition-all duration-500"
        >
          <!-- Quick reference icons (Simulated text/placeholder for SVG logos) -->
          @for (tech of techStack(); track tech.name) {
          <div class="flex flex-col items-center group cursor-help relative">
            <div
              class="h-12 w-12 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors"
            >
              <span class="font-bold text-slate-700 dark:text-slate-200">{{
                tech.name.substring(0, 2)
              }}</span>
            </div>
            <span
              class="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {{ tech.name }}
            </span>

            <!-- Hover detail -->
            <div
              class="absolute bottom-16 bg-slate-800 text-white text-xs p-2 rounded w-32 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-lg"
            >
              {{ tech.years }}+ years expr. <br />
              {{ tech.proficiency }}
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechStackSection {
  private portfolioStore = inject(PortfolioStore);
  // Filtering for top stack for the logo cloud
  techStack = this.portfolioStore.skills;
}
