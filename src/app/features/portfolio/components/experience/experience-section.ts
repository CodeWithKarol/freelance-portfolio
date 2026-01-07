import { Component, ChangeDetectionStrategy } from '@angular/core';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [],
  template: `
    <section id="experience" class="py-24 sm:py-32 bg-white dark:bg-slate-950">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Experience
          </h2>
          <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
            My professional journey supercharging development teams.
          </p>
        </div>

        <div class="mx-auto max-w-3xl">
          <nav aria-label="Progress">
            <ol role="list" class="overflow-visible">
              @for (job of jobs; track job.company; let first = $first; let last = $last) {
              <li class="relative pb-16">
                <!-- Vertical Line Logic: Connects dots continuously -->
                @if (!last) {
                <!-- Line going down -->
                <div
                  class="absolute left-6 -ml-px w-0.5 bg-slate-200 dark:bg-slate-800 bottom-0"
                  [class.top-6]="first"
                  [class.top-0]="!first"
                  aria-hidden="true"
                ></div>
                } @if (last && !first) {
                <!-- Final line segment from top to dot -->
                <div
                  class="absolute left-6 top-0 -ml-px h-6 w-0.5 bg-slate-200 dark:bg-slate-800"
                  aria-hidden="true"
                ></div>
                }

                <div class="relative flex items-start group">
                  <!-- Marker -->
                  <div
                    class="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 z-10 group-hover:ring-blue-500 transition-colors duration-300"
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
                    class="ml-6 flex-auto rounded-xl p-6 ring-1 ring-slate-200 dark:ring-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 hover:shadow-md transition-all duration-300"
                  >
                    <div
                      class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-x-4 mb-2"
                    >
                      <h3 class="text-lg font-bold text-slate-900 dark:text-white">
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

                    <p class="text-base leading-7 text-slate-600 dark:text-slate-300 mb-6">
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
  jobs: ExperienceItem[] = [
    {
      company: 'GFT Technologies',
      role: 'Senior Angular Developer',
      period: 'Mar 2025 - Present',
      description:
        'Architecting scalable, high-performance web applications for Citibank. Championed reactive brokerage app development, supercharged productivity with Nx monorepo, and led technical hiring.',
      technologies: ['Angular', 'RxJS', 'NgRx', 'Nx', 'React Native', 'TypeScript'],
    },
    {
      company: 'Silent Eight',
      role: 'Javascript Developer',
      period: 'Dec 2023 - Feb 2025',
      description:
        'Developed AI-driven compliance platform (IRIS). Modernized Angular 14 to 19 and transformed legacy React code to modern hooks-based architecture with TanStack Query.',
      technologies: ['Angular 19', 'React', 'TanStack Query', 'NgRx', 'RxJS', 'Tailwind'],
    },
    {
      company: 'BNP Paribas Bank Polska',
      role: 'Software Developer',
      period: 'Nov 2021 - Nov 2023',
      description:
        'Contributed to GOonline banking platform. Migrated AngularJS to Angular 15, implemented modular NgRx store, and managed Nx monorepo structure.',
      technologies: ['Angular 15', 'AngularJS', 'Nx', 'NgRx', 'RxJS', 'SASS'],
    },
    {
      company: 'Amway',
      role: 'Javascript Developer',
      period: 'Apr 2019 - Oct 2021',
      description:
        'Enhanced Back Office Support System (BOSS) for business owners. Created dynamic UI components and optimized performance with RxJS.',
      technologies: ['Angular', 'RxJS', 'TypeScript', 'SASS', 'Jasmine'],
    },
  ];
}
