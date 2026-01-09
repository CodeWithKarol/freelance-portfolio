import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer
      class="relative bg-slate-50 dark:bg-slate-950 pt-16 pb-8 overflow-hidden z-10"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" class="sr-only">Footer</h2>

      <!-- Subtle Grid Background (Consistency with About Section) -->
      <div
        class="absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black)]"
      ></div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8 mb-16">
          <!-- Brand Column -->
          <div class="space-y-8">
            <div class="flex items-center gap-2">
              <!-- Abstract Logo Placeholder using Tailwind shapes -->
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 shadow-lg shadow-primary-600/20"
              >
                <span class="text-white font-bold text-xl">K</span>
              </div>
              <span class="text-2xl font-bold text-slate-900 dark:text-white tracking-tight"
                >Karol Modelski</span
              >
            </div>
            <p class="text-sm leading-6 text-slate-600 dark:text-slate-400 max-w-xs">
              Senior Angular Architect & SaaS Founder. Building high-performance, audit-ready web
              applications for enterprise and startups.
            </p>
            <div class="flex space-x-6">
              @for (social of store.socialLinks(); track social.platform) {
              <a
                [href]="social.url"
                target="_blank"
                class="text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <span class="sr-only">{{ social.platform }}</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <!-- Icon Logic -->
                  @if (social.icon === 'github') {
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                  } @else if (social.icon === 'linkedin') {
                  <path
                    fill-rule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clip-rule="evenodd"
                  />
                  } @else {
                  <!-- Website/Gumroad -->
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                    clip-rule="evenodd"
                  />
                  }
                </svg>
              </a>
              }
            </div>
          </div>

          <!-- Column Links -->
          <div
            class="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 xl:grid-cols-4"
          >
            <div>
              <h3 class="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                {{ store.footerColumns()[0].title }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                @for (link of store.footerColumns()[0].links; track link.label) {
                <li>
                  <a
                    [href]="link.href"
                    class="text-sm leading-6 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {{ link.label }}
                  </a>
                </li>
                }
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                {{ store.footerColumns()[1].title }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                @for (link of store.footerColumns()[1].links; track link.label) {
                <li>
                  <a
                    [href]="link.href"
                    class="text-sm leading-6 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {{ link.label }}
                  </a>
                </li>
                }
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                {{ store.footerColumns()[2].title }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                @for (link of store.footerColumns()[2].links; track link.label) {
                <li>
                  <a
                    [href]="link.href"
                    class="text-sm leading-6 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {{ link.label }}
                  </a>
                </li>
                }
              </ul>
            </div>
            <!-- Contact / CTA Column -->
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                Contact
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li
                  class="flex items-start gap-2 text-sm leading-6 text-slate-600 dark:text-slate-400"
                >
                  <svg
                    class="h-6 w-5 flex-none text-primary-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {{ store.contactInfo().email }}
                </li>
                <li
                  class="flex items-start gap-2 text-sm leading-6 text-slate-600 dark:text-slate-400"
                >
                  <span
                    class="inline-flex items-center rounded-full bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400 ring-1 ring-inset ring-emerald-600/20"
                  >
                    {{ store.contactInfo().availability }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div
          class="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p class="text-xs leading-5 text-slate-500 dark:text-slate-400">
            &copy; {{ currentYear }} Karol Modelski. All rights reserved.
          </p>
          <div class="flex items-center gap-4">
            <span class="text-xs text-slate-400"
              >Built with Angular 19 & Zoneless Architecture</span
            >
          </div>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterSection {
  store = inject(PortfolioStore);
  currentYear = new Date().getFullYear();
}
