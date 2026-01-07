import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav
      class="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm transition-all duration-300 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <!-- Brand / Logo -->
          <div
            class="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
            (click)="scrollTo('hero')"
          >
            <div
              class="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
            >
              KM
            </div>
            <span
              class="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              Karol Modelski
            </span>
          </div>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center space-x-1">
            @for (item of navItems; track item.id) {
            <a
              (click)="scrollTo(item.id)"
              class="relative px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer group"
            >
              {{ item.label }}
            </a>
            }
          </div>

          <!-- Right Actions -->
          <div class="flex items-center gap-4">
            <!-- Theme Toggle -->
            <button
              (click)="toggleTheme()"
              class="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              aria-label="Toggle Dark Mode"
            >
              @if (isDark()) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              } @else {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              }
            </button>

            <button
              class="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white transition-all bg-blue-600 border border-transparent rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-sm shadow-blue-600/20"
              (click)="scrollTo('contact')"
            >
              Hire Me
            </button>

            <!-- Mobile menu button -->
            <div class="md:hidden">
              <button
                (click)="toggleMenu()"
                class="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                [attr.aria-expanded]="isMenuOpen()"
              >
                <span class="sr-only">Open main menu</span>
                @if (!isMenuOpen()) {
                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                } @else {
                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                }
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (isMenuOpen()) {
      <div
        class="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 animate-in slide-in-from-top-2 duration-200"
        id="mobile-menu"
      >
        <div class="space-y-1 px-2 pb-3 pt-2">
          @for (item of navItems; track item.id) {
          <a
            (click)="scrollTo(item.id); toggleMenu()"
            class="block rounded-md px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors"
          >
            {{ item.label }}
          </a>
          }
          <button
            class="mt-4 w-full flex items-center justify-center px-4 py-2 text-base font-semibold text-white transition-all bg-blue-600 border border-transparent rounded-lg hover:bg-blue-500 shadow-sm"
            (click)="scrollTo('contact'); toggleMenu()"
          >
            Hire Me
          </button>
        </div>
      </div>
      }
    </nav>
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
