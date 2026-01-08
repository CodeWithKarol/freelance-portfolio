import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-4 sm:p-6 lg:px-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a
            (click)="scrollTo('hero')"
            class="-m-1.5 p-1.5 flex items-center gap-3 cursor-pointer group"
          >
            <span class="sr-only">Karol Modelski</span>
            <div
              class="h-9 w-9 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-lg shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-200"
            >
              KM
            </div>
            <span
              class="text-slate-900 dark:text-white font-bold tracking-tight text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
            >
              Karol Modelski
            </span>
          </a>
        </div>

        <div class="flex lg:hidden">
          <button
            (click)="toggleMenu()"
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 dark:text-slate-200"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div class="hidden lg:flex lg:gap-x-8">
          @for (item of navItems; track item.id) {
          <a
            (click)="scrollTo(item.id)"
            class="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors duration-200"
          >
            {{ item.label }}
          </a>
          }
        </div>

        <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4 items-center">
          <!-- Theme Toggle -->
          <button
            (click)="toggleTheme()"
            class="rounded-full p-2.5 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-label="Toggle theme"
          >
            @if (isDark()) {
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            } @else {
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            }
          </button>

          <!-- CTA -->
          <a
            (click)="scrollTo('contact')"
            class="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
          >
            Hire Me <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <!-- Mobile menu, show/hide based on menu state. -->
      @if (isMenuOpen()) {
      <div class="lg:hidden" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div
          class="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm dark:bg-slate-900/40"
          (click)="toggleMenu()"
        ></div>

        <div
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10 dark:sm:ring-white/10 animate-in slide-in-from-right duration-300"
        >
          <div class="flex items-center justify-between">
            <a
              (click)="scrollTo('hero'); toggleMenu()"
              class="-m-1.5 p-1.5 flex items-center gap-2"
            >
              <span class="sr-only">Karol Modelski</span>
              <div
                class="h-8 w-8 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold"
              >
                KM
              </div>
              <span class="font-bold text-slate-900 dark:text-white">Karol Modelski</span>
            </a>
            <button
              (click)="toggleMenu()"
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-slate-700 dark:text-slate-400"
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-slate-500/10 dark:divide-slate-500/20">
              <div class="space-y-2 py-6">
                @for (item of navItems; track item.id) {
                <a
                  (click)="scrollTo(item.id); toggleMenu()"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {{ item.label }}
                </a>
                }
              </div>
              <div class="py-6 flex flex-col gap-4">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-semibold text-slate-900 dark:text-white"
                    >Switch Theme</span
                  >
                  <button
                    (click)="toggleTheme()"
                    class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 bg-slate-200 dark:bg-slate-700"
                  >
                    <span class="sr-only">Use setting</span>
                    <span
                      [class.translate-x-5]="isDark()"
                      [class.translate-x-0]="!isDark()"
                      class="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                    >
                      <span
                        [class.opacity-0]="isDark()"
                        [class.opacity-100]="!isDark()"
                        class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-200 ease-in-out"
                        aria-hidden="true"
                      >
                        <svg
                          class="h-3 w-3 text-slate-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </span>
                      <span
                        [class.opacity-100]="isDark()"
                        [class.opacity-0]="!isDark()"
                        class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-200 ease-in-out"
                        aria-hidden="true"
                      >
                        <svg
                          class="h-3 w-3 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        </svg>
                      </span>
                    </span>
                  </button>
                </div>

                <a
                  (click)="scrollTo('contact'); toggleMenu()"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-blue-600 hover:bg-blue-500 text-center shadow-md"
                >
                  Hire Me Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </header>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarSection {
  isDark = signal(false);
  isMenuOpen = signal(false);

  navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Expertise' },
    { id: 'cases', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  constructor(private scroller: ViewportScroller) {
    // Check system preference provided we are in browser
    if (typeof window !== 'undefined') {
      this.isDark.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
      this.updateTheme();
    }
  }

  toggleTheme() {
    this.isDark.update((d) => !d);
    this.updateTheme();
  }

  toggleMenu() {
    this.isMenuOpen.update((o) => !o);
  }

  scrollTo(anchor: string) {
    this.scroller.scrollToAnchor(anchor);
  }

  private updateTheme() {
    if (typeof document !== 'undefined') {
      if (this.isDark()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
}
