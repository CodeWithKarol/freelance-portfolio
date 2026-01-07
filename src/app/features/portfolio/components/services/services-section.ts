import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [],
  template: `
    <section id="services" class="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            How I Can Help
          </h2>
          <p class="mt-4 max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400">
            Specialized services tailored for scalable, high-performance web applications.
          </p>
        </div>

        <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <!-- Service 1 -->
          <div
            class="relative p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Custom Web Development
            </h3>
            <p class="text-slate-500 dark:text-slate-400">
              Building robust, scalable Single Page Applications (SPAs) using Angular and React.
              Full-cycle development from architecture to deployment.
            </p>
          </div>

          <!-- Service 2 -->
          <div
            class="relative p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Performance Optimization
            </h3>
            <p class="text-slate-500 dark:text-slate-400">
              Audit and optimization of existing applications. improving Core Web Vitals, reducing
              bundle sizes, and solving rendering bottlenecks.
            </p>
          </div>

          <!-- Service 3 -->
          <div
            class="relative p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Code Review & Audit
            </h3>
            <p class="text-slate-500 dark:text-slate-400">
              Comprehensive code quality assessments, identifying technical debt, and establishing
              best practices for your team.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSection {}
