import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [],
  template: `
    <section id="about" class="relative pt-32 pb-24 lg:pt-40 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <h1
            class="text-4xl tracking-tight font-bold text-slate-900 dark:text-white sm:text-5xl md:text-6xl"
          >
            <span class="block">Senior Angular Developer</span>
            <span class="block text-slate-500 dark:text-slate-400 mt-3 font-normal"
              >Frontend Architect & MVP Builder</span
            >
          </h1>
          <p class="mt-6 max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400">
            Experienced in designing and delivering scalable, high-performance web applications with
            expertise in Angular, RxJS, and NgRx. Proven track record in enterprise Angular
            migrations, React legacy modernization, and building cross-platform mobile solutions
            with React Native.
          </p>

          <div class="mt-10 flex justify-center gap-4">
            <a
              href="#contact"
              class="px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              Hire Me
            </a>
            <a
              href="#cases"
              class="px-8 py-3 border border-slate-200 dark:border-slate-800 text-base font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>

        <div class="mt-24">
          <div
            class="relative rounded-2xl overflow-hidden shadow-sm bg-white dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div
                class="relative h-64 md:h-96 w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800"
              >
                <!-- Placeholder for profile image -->
                <div
                  class="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600"
                >
                  <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
              </div>

              <div>
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
                <p class="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  I am a Senior Frontend Developer with 6+ years of experience, specializing in
                  architecting large-scale Angular applications and leading complex enterprise
                  migrations. My focus is on turning tough technical challenges into blazing-fast,
                  maintainable web experiences.
                </p>
                <p class="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  I master the modern Angular ecosystem—including NgRx, RxJS, Signals, and zoneless
                  change detection—while also bringing robust experience in React and React Native
                  development. Beyond code, I am a passionate tech entrepreneur and content creator
                  (Medium/Dev.to), helping developers master modern web standards.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center text-slate-600 dark:text-slate-400">
                    <svg
                      class="h-5 w-5 text-blue-600 dark:text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Enterprise App Modernization & Micro Frontends
                  </li>
                  <li class="flex items-center text-slate-600 dark:text-slate-400">
                    <svg
                      class="h-5 w-5 text-blue-600 dark:text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Founder of ScaleSail.io (SaaS Templates)
                  </li>
                  <li class="flex items-center text-slate-600 dark:text-slate-400">
                    <svg
                      class="h-5 w-5 text-blue-600 dark:text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Technical Writing (3.5M+ Readers)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {}
