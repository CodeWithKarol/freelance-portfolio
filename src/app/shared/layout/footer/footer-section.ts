import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../core/portfolio/portfolio-store';
import { LucideAngularModule, Github, Linkedin, Globe, AtSign } from 'lucide-angular';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
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
                <!-- Icon Logic -->
                @if (social.icon === 'github') {
                <lucide-icon [img]="Github" class="h-6 w-6"></lucide-icon>
                } @else if (social.icon === 'linkedin') {
                <lucide-icon [img]="Linkedin" class="h-6 w-6"></lucide-icon>
                } @else {
                <lucide-icon [img]="Globe" class="h-6 w-6"></lucide-icon>
                }
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
                  <lucide-icon
                    [img]="AtSign"
                    class="h-6 w-5 flex-none text-primary-500"
                  ></lucide-icon>
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

  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Globe = Globe;
  readonly AtSign = AtSign;
}
