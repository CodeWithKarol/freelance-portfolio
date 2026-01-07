import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-case-studies-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="cases" class="py-20 bg-transparent">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2
            class="text-base text-blue-600 dark:text-blue-500 font-semibold tracking-wide uppercase"
          >
            Portfolio
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Selected Work
          </p>
        </div>

        <div class="space-y-24">
          @for (case of cases(); track case.id; let i = $index) {
          <div
            class="flex flex-col lg:flex-row gap-16 items-center"
            [class.lg:flex-row-reverse]="i % 2 !== 0"
          >
            <!-- Visual Content -->
            <div class="w-full lg:w-1/2 relative group">
              <div
                class="relative rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800"
              >
                <!-- <img [ngSrc]="case.heroImage" fill class="object-cover transition-transform duration-500 group-hover:scale-105" alt="{{ case.title }}"> -->
                <div
                  class="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500"
                >
                  <span>{{ case.title }} Screenshot</span>
                </div>

                <!-- Overlay -->
                <div
                  class="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm"
                >
                  @if (case.demoUrl) {
                  <a
                    [href]="case.demoUrl"
                    target="_blank"
                    class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors border border-transparent"
                  >
                    View Live
                  </a>
                  } @if (case.repoUrl) {
                  <a
                    [href]="case.repoUrl"
                    target="_blank"
                    class="px-6 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-medium transition-colors border border-slate-700"
                  >
                    Code Repo
                  </a>
                  }
                </div>
              </div>
            </div>

            <!-- Text Content -->
            <div class="w-full lg:w-1/2">
              <span class="text-blue-600 dark:text-blue-400 font-bold tracking-wider text-sm">{{
                case.tagline
              }}</span>
              <h3 class="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                {{ case.title }}
              </h3>

              <div class="mt-8 space-y-8">
                <div>
                  <h4 class="font-bold text-slate-900 dark:text-white">The Challenge</h4>
                  <p class="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {{ case.challenge }}
                  </p>
                </div>

                <div>
                  <h4 class="font-bold text-slate-900 dark:text-white">The Solution</h4>
                  <p class="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed">
                    {{ case.solution }}
                  </p>
                </div>

                <div
                  class="border-l-4 border-blue-600 pl-4 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg"
                >
                  <h4 class="font-bold text-slate-900 dark:text-white text-sm">Key Results</h4>
                  <ul class="mt-2 text-slate-600 dark:text-slate-400 text-sm space-y-1">
                    @for (result of case.results; track result) {
                    <li class="flex items-start">
                      <span class="mr-2">•</span>
                      {{ result }}
                    </li>
                    }
                  </ul>
                </div>

                <div class="flex flex-wrap gap-2 mt-8">
                  @for (tech of case.techStack; track tech) {
                  <span
                    class="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-md text-sm font-medium"
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
