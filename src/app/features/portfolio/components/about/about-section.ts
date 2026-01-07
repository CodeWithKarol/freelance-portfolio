import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [],
  template: `
    <section
      id="about"
      class="relative pt-32 pb-20 lg:pt-40 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <h1
            class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
          >
            <span class="block">Senior Angular & React Developer</span>
            <span class="block text-indigo-600 dark:text-indigo-400 mt-2"
              >Building Scalable SPAs</span
            >
          </h1>
          <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            For Enterprise & Startups.
          </p>

          <div class="mt-8 flex justify-center gap-4">
            <a
              href="#contact"
              class="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 shadow-lg"
            >
              Hire Me
            </a>
            <a
              href="#cases"
              class="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 dark:bg-indigo-900 dark:text-indigo-200 dark:hover:bg-indigo-800"
            >
              View Projects
            </a>
          </div>
        </div>

        <div class="mt-20">
          <div
            class="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-50 dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700"
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div
                class="relative h-64 md:h-96 w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700"
              >
                <!-- Placeholder for profile image -->
                <div class="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span class="text-lg">Profile Photo</span>
                </div>
                <!-- <img ngSrc="assets/profile.jpg" fill objectFit="cover" alt="Profile" priority> -->
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  With 6+ years mastering Angular (RxJS, NgRx, signals) and 1 year in React
                  dashboards, I deliver production-ready UIs that scale. Recently freelancing from
                  Poland, helping SaaS founders launch MVPs fast via Vercel/Netlify deploys.
                </p>
                <ul class="space-y-3">
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <svg
                      class="h-5 w-5 text-green-500 mr-2"
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
                    Enterprise Angular apps with architecture leadership.
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <svg
                      class="h-5 w-5 text-green-500 mr-2"
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
                    Modern React + Tailwind UIs for startups.
                  </li>
                  <li class="flex items-center text-gray-600 dark:text-gray-300">
                    <svg
                      class="h-5 w-5 text-green-500 mr-2"
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
                    Performance optimization and TypeScript expertise.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Background Abstract Elements -->
      <div
        class="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none opacity-30"
      >
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        ></div>
        <div
          class="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
        ></div>
        <div
          class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
        ></div>
      </div>
    </section>
  `,
  styles: [
    `
      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }
      .animate-blob {
        animation: blob 7s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {}
