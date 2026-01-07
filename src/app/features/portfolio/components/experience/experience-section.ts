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
    <section id="experience" class="py-24 bg-white dark:bg-slate-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Work Experience
          </h2>
          <p class="mt-4 max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400">
            A track record of delivering value for companies ranging from startups to enterprise.
          </p>
        </div>

        <div class="relative max-w-4xl mx-auto">
          <!-- Geometric line -->
          <div
            class="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2"
          ></div>

          <div class="space-y-12">
            @for (job of jobs; track job.company) {
            <div class="relative flex flex-col md:flex-row gap-8 items-start group">
              <!-- Dot -->
              <div
                class="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 bg-indigo-600 -translate-x-1/2 mt-1.5 z-10 shadow-sm"
              ></div>

              <!-- Date (Left for desktop) -->
              <div class="md:w-1/2 md:text-right pl-20 md:pl-0 md:pr-16">
                <span
                  class="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 text-sm font-medium text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-700/10"
                >
                  {{ job.period }}
                </span>
              </div>

              <!-- Content (Right) -->
              <div class="md:w-1/2 pl-20 md:pl-16">
                <h3
                  class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors"
                >
                  {{ job.role }}
                </h3>
                <div class="text-base font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {{ job.company }}
                </div>
                <p class="text-base text-slate-600 dark:text-slate-400 mb-4">
                  {{ job.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  @for (tech of job.technologies; track tech) {
                  <span
                    class="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-400"
                  >
                    {{ tech }}
                  </span>
                  }
                </div>
              </div>
            </div>
            }
          </div>

          <div class="mt-16 text-center">
            <a
              href="cv.pdf"
              download
              class="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-semibold"
            >
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Full Resume
            </a>
          </div>
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
