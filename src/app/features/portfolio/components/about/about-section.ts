import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [],
  template: `
    <section id="about" class="relative isolate overflow-hidden bg-white dark:bg-slate-950 pt-14">
      <div
        class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white dark:bg-slate-950 shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 dark:ring-blue-900/10 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      ></div>

      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div
          class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
        >
          <h1
            class="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:col-span-2 xl:col-auto"
          >
            Senior Angular Developer & Frontend Architect
          </h1>
          <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p class="text-lg leading-8 text-slate-600 dark:text-slate-300">
              I help companies build scalable, high-performance web applications. Specializing in
              <span class="font-semibold text-blue-600 dark:text-blue-400">Angular</span>,
              <span class="font-semibold text-blue-600 dark:text-blue-400">RxJS</span>, and legacy
              migrations.
            </p>
            <div class="mt-10 flex items-center gap-x-6">
              <a
                href="#contact"
                class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Hire Me
              </a>
              <a
                href="#cases"
                class="text-sm font-semibold leading-6 text-slate-900 dark:text-white"
              >
                View Projects <span aria-hidden="true">→</span>
              </a>
            </div>

            <div class="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 flex gap-8">
              <div>
                <div class="text-2xl font-bold text-slate-900 dark:text-white">6+</div>
                <div class="text-sm text-slate-500 dark:text-slate-400">Years Experience</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-slate-900 dark:text-white">20+</div>
                <div class="text-sm text-slate-500 dark:text-slate-400">Projects Delivered</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-slate-900 dark:text-white">100%</div>
                <div class="text-sm text-slate-500 dark:text-slate-400">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div
            class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          >
            <div
              class="relative w-full h-full bg-slate-100 dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800"
            >
              <!-- Abstract Code Visual -->
              <div class="absolute inset-0 p-8 opacity-90">
                <div class="space-y-4">
                  <div class="h-4 w-1/3 bg-slate-300 dark:bg-slate-700 rounded animate-pulse"></div>
                  <div
                    class="h-4 w-2/3 bg-slate-300 dark:bg-slate-700 rounded animate-pulse delay-75"
                  ></div>
                  <div
                    class="h-4 w-1/2 bg-slate-300 dark:bg-slate-700 rounded animate-pulse delay-150"
                  ></div>
                  <div
                    class="h-4 w-3/4 bg-slate-300 dark:bg-slate-700 rounded animate-pulse delay-200"
                  ></div>
                  <div
                    class="h-4 w-2/3 bg-slate-300 dark:bg-slate-700 rounded animate-pulse delay-300"
                  ></div>
                </div>
                <div class="mt-8 space-y-4">
                  <div
                    class="h-4 w-1/4 bg-blue-300 dark:bg-blue-900/50 rounded animate-pulse"
                  ></div>
                  <div
                    class="h-4 w-3/4 bg-slate-300 dark:bg-slate-700 rounded animate-pulse delay-100"
                  ></div>
                  <div
                    class="h-4 w-1/2 bg-slate-300 dark:bg-slate-700 rounded animate-pulse delay-200"
                  ></div>
                </div>
              </div>

              <!-- Floating Card -->
              <div
                class="absolute bottom-8 right-8 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 max-w-[200px]"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400"
                  >
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <div class="text-sm font-bold text-slate-900 dark:text-white">System Audit</div>
                    <div class="text-xs text-slate-500 dark:text-slate-400">Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-slate-950 sm:h-32"
      ></div>
    </section>
  `,
  styles: [],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {}
