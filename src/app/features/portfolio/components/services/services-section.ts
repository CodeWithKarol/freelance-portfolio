import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [],
  template: `
    <section id="services" class="py-24 sm:py-32 bg-slate-50 dark:bg-slate-950">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500">
            Services
          </h2>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Everything you need to build world-class apps
          </p>
          <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            From greenfield development to complex legacy migrations, I bring specialist Angular
            expertise to your engineering team.
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-6 md:gap-8 lg:gap-12">
          <!-- Key Service: Custom Dev (Takes up 4/6 columns on medium+) -->
          <div
            class="relative flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 md:col-span-4 h-full"
          >
            <div class="p-8 sm:p-12 pb-0 sm:pb-0 flex-1">
              <div class="flex items-center gap-x-3">
                <div class="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center">
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                  Web Application Development
                </h3>
              </div>
              <p class="mt-6 text-base leading-7 text-slate-600 dark:text-slate-400 max-w-xl">
                I build robust, scalable Single Page Applications (SPAs) from scratch. Specializing
                in complex enterprise dashboards, real-time data visualization, and high-performance
                customer-facing portals.
              </p>
            </div>
            <!-- Decorative Visual -->
            <div
              class="relative mt-8 h-48 sm:mt-12 w-full bg-slate-100 dark:bg-slate-800 rounded-t-2xl ml-8 sm:ml-12 border-t border-l border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg"
            >
              <div
                class="absolute inset-x-0 top-0 h-8 bg-slate-200 dark:bg-slate-700 flex items-center px-4 gap-2"
              >
                <div class="w-2 h-2 rounded-full bg-red-400"></div>
                <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div class="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <div class="p-6 grid grid-cols-3 gap-4">
                <div class="h-20 bg-white dark:bg-slate-900 rounded-lg shadow-sm"></div>
                <div class="h-20 bg-white dark:bg-slate-900 rounded-lg shadow-sm col-span-2"></div>
                <div class="h-20 bg-white dark:bg-slate-900 rounded-lg shadow-sm col-span-3"></div>
              </div>
            </div>
          </div>

          <!-- Performance (Takes up 2/6 columns) -->
          <div
            class="relative flex flex-col overflow-hidden rounded-3xl bg-slate-900 dark:bg-slate-800 shadow-sm md:col-span-2 h-full text-white"
          >
            <div class="p-8 sm:p-10 flex flex-col h-full relative z-10">
              <div
                class="h-10 w-10 rounded-lg bg-emerald-500/20 ring-1 ring-inset ring-emerald-500/50 flex items-center justify-center mb-6"
              >
                <svg
                  class="h-6 w-6 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold">Performance</h3>
              <p class="mt-4 text-sm leading-6 text-slate-300">
                Boost Core Web Vitals, reduce bundle size, and optimize rendering. I turn slow apps
                into instant experiences.
              </p>
              <div class="mt-auto pt-6 flex items-baseline gap-2">
                <span class="text-4xl font-bold text-emerald-400">98</span>
                <span class="text-sm text-slate-400">/ 100 Performance</span>
              </div>
            </div>
            <!-- Grid Pattern -->
            <svg
              class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                  width="200"
                  height="200"
                  x="50%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="-1" class="overflow-visible fill-slate-800/20">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  stroke-width="0"
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
              />
            </svg>
          </div>

          <!-- Migration (3/6 cols) -->
          <div
            class="relative flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 md:col-span-3 h-full"
          >
            <div class="p-8 sm:p-10">
              <div class="flex items-center gap-x-3 mb-6">
                <div
                  class="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400"
                >
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                  Migration & Upgrade
                </h3>
              </div>
              <p class="text-base leading-7 text-slate-600 dark:text-slate-400">
                Securely migrate from AngularJS to Angular 18+, or modernize legacy React class
                components to hooks. Zero downtime, incremental strategies.
              </p>
              <div
                class="mt-6 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg text-xs font-mono text-slate-500 dark:text-slate-400"
              >
                <div class="flex gap-2 mb-2">
                  <span class="text-red-500">-</span>
                  <span class="line-through opacity-50">ComponentFactoryResolver</span>
                </div>
                <div class="flex gap-2">
                  <span class="text-green-500">+</span>
                  <span class="text-slate-900 dark:text-slate-200"
                    >ViewContainerRef.createComponent</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Strategic Consulting (3/6 cols) -->
          <div
            class="relative flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 md:col-span-3 h-full"
          >
            <div class="p-8 sm:p-10">
              <div class="flex items-center gap-x-3 mb-6">
                <div
                  class="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400"
                >
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                  Architecture & Audit
                </h3>
              </div>
              <p class="text-base leading-7 text-slate-600 dark:text-slate-400">
                Comprehensive code audits to identify technical debt and security risks. I help
                teams establish best practices, monorepo structures (Nx), and CI/CD pipelines.
              </p>
              <div class="mt-6 flex gap-2">
                <span
                  class="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10"
                  >Code Review</span
                >
                <span
                  class="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10"
                  >Architecture</span
                >
                <span
                  class="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-500/10"
                  >Mentorship</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSection {}
