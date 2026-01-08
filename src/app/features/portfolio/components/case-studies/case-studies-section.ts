import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-case-studies-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="cases" class="py-24 sm:py-32 bg-white dark:bg-slate-950 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16 sm:mb-24">
          <h2 class="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500">
            Portfolio
          </h2>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Selected Case Studies
          </p>
          <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Deep dives into complex challenges solved with modern architecture and engineering best
            practices.
          </p>
        </div>

        <div class="space-y-24 sm:space-y-32">
          @for (case of cases(); track case.id; let i = $index) {
          <div class="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <!-- Image / Visual Side -->
            <div
              class="lg:col-span-7 relative"
              [class.lg:order-last]="i % 2 === 0"
              [class.lg:order-first]="i % 2 !== 0"
            >
              <!-- Decorative Blob -->
              <div
                class="absolute -top-12 -bottom-12 left-0 right-0 z-0 bg-blue-50 dark:bg-slate-900 rounded-[3rem] -rotate-2 scale-y-110 opacity-50 dark:opacity-30"
                [class.-left-12]="i % 2 === 0"
                [class.-right-12]="i % 2 !== 0"
              ></div>

              <!-- Browser window mock -->
              <div
                class="relative z-10 rounded-xl bg-slate-900 shadow-2xl overflow-hidden ring-1 ring-white/10 group"
              >
                <!-- Browser Bar -->
                <div
                  class="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-white/5"
                >
                  <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div
                    class="mx-auto text-xs font-mono text-slate-400 px-3 py-0.5 rounded-full bg-black/20"
                  >
                    {{ parseUrl(case.demoUrl) }}
                  </div>
                </div>

                <!-- Content Area (Image Placeholder) -->
                <div
                  class="aspect-[16/10] bg-slate-800 relative group-hover:opacity-90 transition-opacity"
                >
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center p-8">
                      <span
                        class="block text-4xl font-black text-slate-700 dark:text-slate-600 tracking-tighter opacity-50"
                        >{{ case.title }}</span
                      >
                    </div>
                  </div>

                  <!-- Hover Actions -->
                  <div
                    class="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4"
                  >
                    @if (case.demoUrl) {
                    <a
                      [href]="case.demoUrl"
                      target="_blank"
                      class="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-slate-100 transition-colors shadow-lg"
                    >
                      <svg
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                      Live Demo
                    </a>
                    } @if (case.repoUrl) {
                    <a
                      [href]="case.repoUrl"
                      target="_blank"
                      class="inline-flex items-center gap-2 rounded-full bg-slate-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-slate-600 transition-colors shadow-lg border border-slate-600"
                    >
                      <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      View Code
                    </a>
                    }
                  </div>
                </div>
              </div>
            </div>

            <!-- Content Side -->
            <div
              class="lg:col-span-5 mt-10 lg:mt-0"
              [class.lg:order-first]="i % 2 === 0"
              [class.lg:order-last]="i % 2 !== 0"
            >
              <div class="flex items-center gap-2 mb-4">
                <span
                  class="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10"
                  >Case Study</span
                >
                <span class="text-sm text-slate-500 dark:text-slate-300 font-mono">{{
                  i + 1 | number : '2.0'
                }}</span>
              </div>

              <h3
                class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
              >
                {{ case.title }}
              </h3>
              <p class="mt-2 text-lg font-semibold text-blue-600 dark:text-blue-400">
                {{ case.tagline }}
              </p>

              <dl class="mt-8 space-y-8 text-base leading-7 text-slate-600 dark:text-slate-300">
                <div class="relative pl-9">
                  <dt class="inline font-semibold text-slate-900 dark:text-white">
                    <svg
                      class="absolute left-1 top-1 h-5 w-5 text-indigo-600 dark:text-indigo-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM2.75 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 012.75 10zM15 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0115 10zM5.3 5.3a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L5.3 6.36a.75.75 0 010-1.06zM12.62 12.62a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM5.3 14.7a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0zM12.62 7.38a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0z"
                      />
                    </svg>
                    The Challenge.
                  </dt>
                  <dd class="inline pl-2">{{ case.challenge }}</dd>
                </div>
                <div class="relative pl-9">
                  <dt class="inline font-semibold text-slate-900 dark:text-white">
                    <svg
                      class="absolute left-1 top-1 h-5 w-5 text-emerald-600 dark:text-emerald-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    The Solution.
                  </dt>
                  <dd class="inline pl-2">{{ case.solution }}</dd>
                </div>
              </dl>

              <div class="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                <h4 class="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                  Impact & Results
                </h4>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  @for (result of case.results; track result) {
                  <li class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <div class="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                    {{ result }}
                  </li>
                  }
                </ul>
              </div>

              <div class="mt-8 flex flex-wrap gap-2">
                @for (tech of case.techStack; track tech) {
                <span
                  class="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10"
                >
                  {{ tech }}
                </span>
                }
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

  parseUrl(url: string | undefined): string {
    if (!url) return '';
    try {
      const hostname = new URL(url).hostname;
      return hostname.replace('www.', '');
    } catch {
      return url;
    }
  }
}
