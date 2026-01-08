import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [],
  template: `
    <section id="experience" class="py-24 sm:py-32 bg-white dark:bg-slate-950">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl mb-16 text-center">
          <h2 class="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500">
            Career History
          </h2>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl"
          >
            Experience
          </p>
          <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            My professional journey supercharging development teams.
          </p>
        </div>

        <div class="mx-auto max-w-3xl lg:mx-0 lg:max-w-4xl">
          <nav aria-label="Progress">
            <ol role="list" class="overflow-visible">
              @for (job of store.experience(); track job.company; let first = $first; let last =
              $last) {
              <li class="relative pb-16">
                <!-- Vertical Line Logic: Connects dots continuously -->
                @if (!last) {
                <!-- Line going down -->
                <div
                  class="absolute left-4 sm:left-6 -ml-px w-0.5 bg-slate-200 dark:bg-slate-800 bottom-0"
                  [class.top-4]="first"
                  [class.sm:top-6]="first"
                  [class.top-0]="!first"
                  aria-hidden="true"
                ></div>
                } @if (last && !first) {
                <!-- Final line segment from top to dot -->
                <div
                  class="absolute left-4 sm:left-6 top-0 -ml-px h-4 sm:h-6 w-0.5 bg-slate-200 dark:bg-slate-800"
                  aria-hidden="true"
                ></div>
                }

                <div class="relative flex items-start group">
                  <!-- Marker -->
                  <div
                    class="flex h-8 w-8 sm:h-12 sm:w-12 flex-none items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 z-10 group-hover:ring-blue-500 transition-colors duration-300"
                  >
                    @if (first) {
                    <!-- Current/Active Indicator -->
                    <div
                      class="h-4 w-4 rounded-full bg-blue-600 relative flex items-center justify-center"
                    >
                      <div
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
                      ></div>
                    </div>
                    } @else {
                    <!-- Past Indicator -->
                    <div
                      class="h-3 w-3 rounded-full bg-slate-400 dark:bg-slate-600 group-hover:bg-blue-500 transition-colors"
                    ></div>
                    }
                  </div>

                  <!-- Content Card -->
                  <div
                    class="ml-4 sm:ml-6 flex-auto rounded-xl p-4 sm:p-6 ring-1 ring-slate-200 dark:ring-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 hover:shadow-md transition-all duration-300"
                  >
                    <div
                      class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-x-4 mb-2"
                    >
                      <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">
                        {{ job.role }}
                      </h3>
                      <time
                        class="flex-none py-0.5 text-xs leading-5 text-slate-500 dark:text-slate-400 font-mono bg-white dark:bg-slate-800 px-2 rounded-md border border-slate-200 dark:border-slate-700"
                        >{{ job.period }}</time
                      >
                    </div>

                    <p
                      class="text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400 mb-4"
                    >
                      {{ job.company }}
                    </p>

                    <p class="text-base leading-7 text-slate-600 dark:text-slate-400 mb-6">
                      {{ job.description }}
                    </p>

                    <!-- Tech Stack Pills -->
                    <div class="flex flex-wrap gap-2">
                      @for (tech of job.technologies; track tech) {
                      <span
                        class="inline-flex items-center rounded-md bg-blue-50 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/20"
                      >
                        {{ tech }}
                      </span>
                      }
                    </div>
                  </div>
                </div>
              </li>
              }
            </ol>
          </nav>
        </div>

        <div class="mt-8 text-center">
          <a
            href="cv.pdf"
            download
            class="text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400 hover:text-blue-500"
          >
            Download full resume <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSection {
  readonly store = inject(PortfolioStore);
}
