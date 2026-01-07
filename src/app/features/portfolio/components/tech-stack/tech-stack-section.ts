import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-tech-stack-section',
  standalone: true,
  template: `
    <section
      id="stack"
      class="py-16 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          class="text-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wide mb-8"
        >
          Powering scalable applications with
        </p>
        <div
          class="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <!-- Quick reference icons (Simulated text/placeholder for SVG logos) -->
          @for (tech of techStack(); track tech.name) {
          <div class="flex flex-col items-center group cursor-help relative">
            <div
              class="h-12 w-12 flex items-center justify-center bg-white dark:bg-gray-700 rounded-lg shadow-sm group-hover:shadow-md transition-all"
            >
              <span class="font-bold text-gray-700 dark:text-gray-200">{{
                tech.name.substring(0, 2)
              }}</span>
            </div>
            <span
              class="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {{ tech.name }}
            </span>

            <!-- Hover detail -->
            <div
              class="absolute bottom-16 bg-gray-900 text-white text-xs p-2 rounded w-32 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"
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
