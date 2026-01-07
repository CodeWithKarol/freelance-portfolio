import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav
      class="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex-shrink-0 cursor-pointer" (click)="scrollTo('hero')">
            <span
              class="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              DevPortfolio
            </span>
          </div>

          <div class="hidden md:flex space-x-8">
            @for (item of navItems; track item.id) {
            <a
              (click)="scrollTo(item.id)"
              class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors px-3 py-2 text-sm font-medium"
            >
              {{ item.label }}
            </a>
            }
          </div>

          <div class="flex items-center space-x-4">
            <button
              (click)="toggleTheme()"
              class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

            <!-- Mobile menu button -->
            <div class="md:hidden">
              <button (click)="toggleMenu()" class="text-gray-700 dark:text-gray-300 p-2">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (isMenuOpen()) {
      <div
        class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          @for (item of navItems; track item.id) {
          <a
            (click)="scrollTo(item.id); toggleMenu()"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
          >
            {{ item.label }}
          </a>
          }
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
    { id: 'skills', label: 'Skills' },
    { id: 'cases', label: 'Case Studies' },
    { id: 'stack', label: 'Tech Stack' },
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
