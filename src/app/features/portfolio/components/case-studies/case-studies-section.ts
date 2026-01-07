import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-case-studies-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="cases" class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            class="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase"
          >
            Portfolio
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Selected Work
          </p>
        </div>

        <div class="space-y-16">
          @for (case of cases(); track case.id; let i = $index) {
          <div
            class="flex flex-col lg:flex-row gap-12 items-center"
            [class.lg:flex-row-reverse]="i % 2 !== 0"
          >
            <!-- Visual Content -->
            <div class="w-full lg:w-1/2 relative group">
              <div
                class="relative rounded-lg shadow-2xl overflow-hidden aspect-video bg-gray-200 dark:bg-gray-800"
              >
                <!-- <img [ngSrc]="case.heroImage" fill class="object-cover transition-transform duration-500 group-hover:scale-105" alt="{{ case.title }}"> -->
                <div class="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span>{{ case.title }} Screenshot</span>
                </div>

                <!-- Overlay -->
                <div
                  class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
                >
                  @if (case.demoUrl) {
                  <a
                    [href]="case.demoUrl"
                    target="_blank"
                    class="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors"
                  >
                    View Live
                  </a>
                  } @if (case.repoUrl) {
                  <a
                    [href]="case.repoUrl"
                    target="_blank"
                    class="px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-full font-medium transition-colors"
                  >
                    Code Repo
                  </a>
                  }
                </div>
              </div>
            </div>

            <!-- Text Content -->
            <div class="w-full lg:w-1/2">
              <span class="text-indigo-600 dark:text-indigo-400 font-bold tracking-wider text-sm">{{
                case.tagline
              }}</span>
              <h3 class="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white">
                {{ case.title }}
              </h3>

              <div class="mt-6 space-y-6">
                <div>
                  <h4 class="font-bold text-gray-900 dark:text-white">The Challenge</h4>
                  <p class="mt-2 text-gray-600 dark:text-gray-300">{{ case.challenge }}</p>
                </div>

                <div>
                  <h4 class="font-bold text-gray-900 dark:text-white">The Solution</h4>
                  <p class="mt-2 text-gray-600 dark:text-gray-300">{{ case.solution }}</p>
                </div>

                <div class="border-l-4 border-indigo-600 pl-4 py-1 bg-gray-50 dark:bg-gray-800/50">
                  <h4 class="font-bold text-gray-900 dark:text-white text-sm">Key Results</h4>
                  <ul class="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
                    @for (result of case.results; track result) {
                    <li>{{ result }}</li>
                    }
                  </ul>
                </div>

                <div class="flex flex-wrap gap-2 mt-6">
                  @for (tech of case.techStack; track tech) {
                  <span
                    class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {{ tech }}
                  </span>
                  }
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudiesSection {
  private portfolioStore = inject(PortfolioStore);
  cases = this.portfolioStore.caseStudies;
}
