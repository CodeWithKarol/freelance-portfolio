import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-case-studies-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="cases" class="py-24 sm:py-32 bg-white dark:bg-slate-950 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Section Header -->
        <div class="mx-auto max-w-2xl text-center mb-20 sm:mb-28">
          <h2 class="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500">
            Selected Work
          </h2>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl"
          >
            Engineering Business Growth
          </p>
          <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            I don't just write code; I architect solutions that drive measurable business outcomes.
            Here are a few diverse examples of my work.
          </p>
        </div>

        <div class="space-y-32">
          @for (case of cases(); track case.id; let i = $index) {
          <div class="group relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <!-- Content Side -->
            <div
              [class.lg:order-2]="i % 2 === 0"
              [class.lg:order-1]="i % 2 !== 0"
              class="flex flex-col"
            >
              <!-- Header Tags -->
              <div class="flex items-center gap-3 mb-6">
                <!-- Tech Stack Pills (First 2 only for brevity) -->
                @for (tech of case.techStack.slice(0, 2); track tech) {
                <span
                  class="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10"
                >
                  {{ tech }}
                </span>
                }
              </div>

              <h3
                class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4"
              >
                {{ case.title }}
              </h3>

              <p class="text-lg font-medium text-slate-900 dark:text-slate-200 mb-6">
                {{ case.tagline }}
              </p>

              <div
                class="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 mb-8"
              >
                <p class="line-clamp-3">
                  <strong class="text-slate-900 dark:text-white">Challenge:</strong>
                  {{ case.challenge }}
                </p>
                <p class="line-clamp-3">
                  <strong class="text-slate-900 dark:text-white">Solution:</strong>
                  {{ case.solution }}
                </p>
              </div>

              <!-- Key Results Grid -->
              <div
                class="grid grid-cols-2 gap-6 border-t border-slate-200 dark:border-slate-800 pt-8 mt-auto"
              >
                @for (result of case.results.slice(0, 2); track result) {
                <div>
                  <!-- Parse result string to try to separate number and text if possible, simpler for now just display -->
                  <!-- Assuming result strings like "40% Perf Boost" -->
                  <div class="flex items-center gap-2">
                    <svg
                      class="w-5 h-5 text-green-500 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{
                      result
                    }}</span>
                  </div>
                </div>
                }
              </div>

              <!-- CTA -->
              <div class="mt-8 flex items-center gap-6">
                <a
                  [routerLink]="['/case-studies', case.id]"
                  class="text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center gap-1 group/link"
                >
                  Read full case study
                  <span
                    aria-hidden="true"
                    class="transition-transform group-hover/link:translate-x-1"
                    >→</span
                  >
                </a>
              </div>
            </div>

            <!-- Image/Visual Side -->
            <div [class.lg:order-1]="i % 2 === 0" [class.lg:order-2]="i % 2 !== 0" class="relative">
              <!-- Background Shape -->
              <div
                class="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-100 dark:from-slate-800 dark:to-slate-900 rounded-3xl -rotate-3 scale-[0.95] transform transition-transform duration-500 group-hover:rotate-0 group-hover:scale-100"
                [class.from-amber-100]="i % 3 === 1"
                [class.to-orange-100]="i % 3 === 1"
                [class.from-emerald-100]="i % 3 === 2"
                [class.to-teal-100]="i % 3 === 2"
              ></div>

              <!-- Mock Browser -->
              <div
                class="relative rounded-xl bg-slate-900 shadow-2xl ring-1 ring-slate-900/10 overflow-hidden transform transition-transform duration-500 hover:-translate-y-2"
              >
                <!-- Browser Chrome -->
                <div
                  class="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-white/5"
                >
                  <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div class="ml-4 flex-1">
                    <div
                      class="h-5 w-2/3 bg-slate-700/50 rounded-md text-[10px] text-slate-400 flex items-center px-2 font-mono"
                    >
                      {{ parseUrl(case.demoUrl) }}
                    </div>
                  </div>
                </div>

                <!-- Viewport Content -->
                <div class="aspect-[16/10] bg-slate-800 relative group/image overflow-hidden">
                  <!-- Placeholder Text (Ideally would be an <img>) -->
                  <div
                    class="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <span
                      class="text-4xl sm:text-5xl font-black text-slate-700 dark:text-slate-600 tracking-tighter opacity-70 select-none"
                    >
                      {{ case.title }}
                    </span>
                    <span
                      class="mt-4 text-sm font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded"
                    >
                      {{ case.heroImage }}
                    </span>
                  </div>

                  <!-- Overlay on Hover -->
                  <div
                    class="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <a
                      [routerLink]="['/case-studies', case.id]"
                      class="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          }
        </div>

        <!-- Bottom Link -->
        <div class="mt-20 text-center">
          <a
            routerLink="/case-studies"
            class="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            See all projects <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudiesSection {
  private portfolioStore = inject(PortfolioStore);
  cases = this.portfolioStore.caseStudies;

  parseUrl(url?: string): string {
    if (!url) return 'localhost:4200';
    try {
      const { hostname } = new URL(url);
      return hostname;
    } catch {
      return url;
    }
  }
}
