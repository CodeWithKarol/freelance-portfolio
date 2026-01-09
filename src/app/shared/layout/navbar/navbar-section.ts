import { Component, ChangeDetectionStrategy, signal, inject, HostListener } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-section',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <!-- Background & Blur Layer -->
      <div 
        class="absolute inset-0 border-b border-transparent transition-all duration-300"
        [class.bg-white/80]="isScrolled()"
        [class.dark:bg-slate-950/80]="isScrolled()"
        [class.backdrop-blur-xl]="isScrolled()"
        [class.border-slate-200]="isScrolled()"
        [class.dark:border-slate-800]="isScrolled()"
        [class.shadow-sm]="isScrolled()"
      ></div>

      <nav class="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        
        <!-- Logo Area -->
        <div class="flex lg:flex-1">
          <a (click)="scrollTo('about')" class="-m-1.5 p-1.5 flex items-center gap-3 cursor-pointer group">
            <span class="sr-only">Karol Modelski</span>
            <div class="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-slate-100 dark:ring-slate-800 group-hover:ring-indigo-500 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="" 
                class="h-full w-full object-cover"
              />
            </div>
            <div class="hidden sm:flex flex-col">
              <span class="text-sm font-bold text-slate-900 dark:text-white leading-none mb-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Karol Modelski
              </span>
              <span class="text-[10px] font-medium text-slate-500 uppercase tracking-wider leading-none">
                Senior Architect
              </span>
            </div>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            (click)="toggleMenu()"
          >
            <span class="sr-only">Open main menu</span>
            @if (!isMenuOpen()) {
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            } @else {
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            }
          </button>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden lg:flex lg:gap-x-2">
          @for (item of navItems; track item.id) {
            <a
              (click)="scrollTo(item.id)"
              class="px-3 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors duration-200 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            >
              {{ item.label }}
            </a>
          }
          <a
            routerLink="/work"
            routerLinkActive="bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-300"
            class="px-3 py-2 text-sm font-medium rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors duration-200"
          >
            Work
          </a>
          <a
            routerLink="/blog"
            routerLinkActive="bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-300"
            class="px-3 py-2 text-sm font-medium rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors duration-200"
          >
            Blog
          </a>
        </div>

        <!-- Desktop Actions -->
        <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-3">
          <!-- Theme Toggle -->
          <button
            (click)="toggleTheme()"
            class="group inline-flex items-center justify-center h-9 w-9 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            aria-label="Toggle theme"
          >
            <!-- Sun icon (shows in dark mode) -->
            <svg 
              class="h-5 w-5 transition-transform duration-500 rotate-90 dark:rotate-0 hidden dark:block" 
              fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <!-- Moon icon (shows in light mode) -->
            <svg 
              class="h-5 w-5 transition-transform duration-500 rotate-0 dark:-rotate-90 dark:hidden block" 
              fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </button>

          <a
            (click)="scrollTo('contact')"
            class="hidden sm:inline-flex items-center justify-center gap-2 h-9 rounded-full bg-slate-900 dark:bg-white/10 dark:hover:bg-white/20 px-4 text-sm font-semibold text-white transition-all hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 cursor-pointer"
          >
            <span>Let's Talk</span>
            <svg class="h-3.5 w-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </nav>

      <!-- Mobile Menu Overlay -->
      <div 
        class="lg:hidden" 
        [class.pointer-events-none]="!isMenuOpen()"
        role="dialog" 
        aria-modal="true"
      >
        <!-- Backdrop -->
        <div 
          class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
          [class.opacity-100]="isMenuOpen()"
          [class.opacity-0]="!isMenuOpen()"
          (click)="toggleMenu()"
        ></div>

        <!-- Panel -->
        <div 
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10 transition-transform duration-300 ease-in-out"
          [class.translate-x-0]="isMenuOpen()"
          [class.translate-x-full]="!isMenuOpen()"
        >
          <div class="flex items-center justify-between">
            <a (click)="scrollTo('about')" class="-m-1.5 p-1.5 flex items-center gap-2 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="" 
                class="h-8 w-8 rounded-full ring-1 ring-slate-200 dark:ring-slate-800"
              />
              <span class="text-sm font-bold text-slate-900 dark:text-white">Karol Modelski</span>
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              (click)="toggleMenu()"
            >
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="mt-8 flow-root">
            <div class="-my-6 divide-y divide-slate-100 dark:divide-slate-800">
              <div class="space-y-1 py-6">
                @for (item of navItems; track item.id) {
                  <a
                    (click)="scrollTo(item.id)"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                  >
                    {{ item.label }}
                  </a>
                }
                <a
                  routerLink="/work"
                  (click)="toggleMenu()"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                >
                  Work
                </a>
                <a
                  routerLink="/blog"
                  (click)="toggleMenu()"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                >
                  Blog
                </a>
              </div>
              <div class="py-6">
                 <div class="flex items-center justify-between mb-6 p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
                    <span class="text-sm font-medium text-slate-900 dark:text-slate-200">Dark Appearance</span>
                    <button 
                      (click)="toggleTheme()"
                      class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                      [class.bg-indigo-600]="isDark()"
                      [class.bg-slate-200]="!isDark()"
                    >
                      <span class="sr-only">Toggle theme</span>
                      <span
                        class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        [class.translate-x-5]="isDark()"
                        [class.translate-x-0]="!isDark()"
                      ></span>
                    </button>
                  </div>
                <a
                  (click)="scrollTo('contact')"
                  class="-mx-3 block rounded-xl px-3 py-3 text-center text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-colors cursor-pointer"
                >
                   Start a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarSection {
  isDark = signal(false);
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  private router = inject(Router);

  navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
  ];

  constructor(private scroller: ViewportScroller) {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        this.isDark.set(storedTheme === 'dark');
      } else {
        this.isDark.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
      this.updateTheme();
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 10);
  }

  toggleTheme() {
    this.isDark.update((d) => !d);
    localStorage.setItem('theme', this.isDark() ? 'dark' : 'light');
    this.updateTheme();
  }

  toggleMenu() {
    const nextState = !this.isMenuOpen();
    this.isMenuOpen.set(nextState);
    if (typeof document !== 'undefined') {
      if (nextState) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  scrollTo(anchor: string) {
    this.isMenuOpen.set(false);
    if (typeof document !== 'undefined') document.body.style.overflow = '';

    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scroller.scrollToAnchor(anchor), 100);
      });
    } else {
      this.scroller.scrollToAnchor(anchor);
    }
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
