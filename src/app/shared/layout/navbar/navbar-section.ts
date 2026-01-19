import { Component, ChangeDetectionStrategy, signal, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-angular';

@Component({
  selector: 'app-navbar-section',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule],
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

      <nav
        class="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Global"
      >
        <!-- Logo Area -->
        <div class="flex lg:flex-1">
          <a
            [routerLink]="['/']"
            fragment="about"
            (click)="isMenuOpen.set(false)"
            class="-m-1.5 p-1.5 flex items-center gap-3 cursor-pointer group"
          >
            <span class="sr-only">Karol Modelski</span>
            <div
              class="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-slate-100 dark:ring-slate-800 group-hover:ring-indigo-500 transition-all duration-300"
            >
              <img
                src="images/karol-modelski.webp"
                width="36"
                height="36"
                alt=""
                class="h-full w-full object-cover"
              />
            </div>
            <div class="hidden sm:flex flex-col">
              <span
                class="text-sm font-bold text-slate-900 dark:text-white leading-none mb-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
              >
                Karol Modelski
              </span>
              <span
                class="text-[10px] font-medium text-slate-500 uppercase tracking-wider leading-none"
              >
                Senior Frontend Developer
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
              <lucide-icon [img]="Menu" class="h-6 w-6"></lucide-icon>
            } @else {
              <lucide-icon [img]="X" class="h-6 w-6"></lucide-icon>
            }
          </button>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden lg:flex lg:gap-x-2">
          <ul class="flex gap-x-2 list-none m-0 p-0">
            @for (item of navItems; track item.id) {
              <li>
                <a
                  [routerLink]="['/']"
                  [fragment]="item.id"
                  routerLinkActive="text-indigo-600 dark:text-indigo-400 bg-slate-100 dark:bg-slate-800"
                  [routerLinkActiveOptions]="{
                    fragment: 'exact',
                    paths: 'exact',
                    queryParams: 'ignored',
                    matrixParams: 'ignored',
                  }"
                  class="px-3 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors duration-200 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white block"
                >
                  {{ item.label }}
                </a>
              </li>
            }
            <li>
              <a
                [routerLink]="'/work'"
                [routerLinkActive]="
                  'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-300'
                "
                class="px-3 py-2 text-sm font-medium rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors duration-200 block"
              >
                Work
              </a>
            </li>
            <li>
              <a
                [routerLink]="'/blog'"
                [routerLinkActive]="
                  'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-300'
                "
                class="px-3 py-2 text-sm font-medium rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors duration-200 block"
              >
                Blog
              </a>
            </li>
          </ul>
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
            <lucide-icon
              [img]="Sun"
              class="h-5 w-5 transition-transform duration-500 rotate-90 dark:rotate-0 hidden dark:block"
            ></lucide-icon>
            <!-- Moon icon (shows in light mode) -->
            <lucide-icon
              [img]="Moon"
              class="h-5 w-5 transition-transform duration-500 rotate-0 dark:-rotate-90 dark:hidden block"
            ></lucide-icon>
          </button>
          <a
            [routerLink]="['/']"
            fragment="contact"
            class="hidden sm:inline-flex items-center justify-center gap-2 h-9 rounded-full bg-slate-900 dark:bg-white/10 dark:hover:bg-white/20 px-4 text-sm font-semibold text-white transition-all hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 cursor-pointer"
          >
            <span>Book a Call</span>
            <lucide-icon [img]="ArrowUpRight" class="h-3.5 w-3.5 text-slate-300"></lucide-icon>
          </a>
        </div>
      </nav>

      <!-- Mobile Menu Overlay -->
      <div
        class="lg:hidden"
        [class.pointer-events-none]="!isMenuOpen()"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <!-- Backdrop -->
        <div
          class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
          [class.opacity-100]="isMenuOpen()"
          [class.opacity-0]="!isMenuOpen()"
          (click)="toggleMenu()"
          (keydown)="toggleMenu()"
          tabindex="0"
          role="button"
          aria-label="Close menu"
        ></div>

        <!-- Panel -->
        <div
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10 transition-transform duration-300 ease-in-out"
          [class.translate-x-0]="isMenuOpen()"
          [class.translate-x-full]="!isMenuOpen()"
        >
          <div class="flex items-center justify-between">
            <a
              [routerLink]="['/']"
              fragment="about"
              (click)="toggleMenu()"
              class="-m-1.5 p-1.5 flex items-center gap-2 cursor-pointer"
            >
              <img
                src="images/karol-modelski.webp"
                width="32"
                height="32"
                alt=""
                class="rounded-full ring-1 ring-slate-200 dark:ring-slate-800"
              />
              <span class="text-sm font-bold text-slate-900 dark:text-white">Karol Modelski</span>
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              (click)="toggleMenu()"
            >
              <span class="sr-only">Close menu</span>
              <lucide-icon [img]="X" class="h-6 w-6"></lucide-icon>
            </button>
          </div>

          <div class="mt-8 flow-root">
            <div class="-my-6 divide-y divide-slate-100 dark:divide-slate-800">
              <ul class="space-y-1 py-6 list-none p-0">
                @for (item of navItems; track item.id) {
                  <li>
                    <a
                      [routerLink]="['/']"
                      [fragment]="item.id"
                      (click)="toggleMenu()"
                      class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                    >
                      {{ item.label }}
                    </a>
                  </li>
                }
                <li>
                  <a
                    [routerLink]="'/work'"
                    (click)="toggleMenu()"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    [routerLink]="'/blog'"
                    (click)="toggleMenu()"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <div class="py-6">
                <div
                  class="flex items-center justify-between mb-6 p-3 rounded-lg bg-slate-50 dark:bg-slate-900"
                >
                  <span class="text-sm font-medium text-slate-900 dark:text-slate-200"
                    >Dark Appearance</span
                  >
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
                  [routerLink]="['/']"
                  fragment="contact"
                  (click)="toggleMenu()"
                  class="-mx-3 block rounded-xl px-3 py-3 text-center text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-colors cursor-pointer"
                >
                  Book a Call
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
  readonly Menu = Menu;
  readonly X = X;
  readonly Sun = Sun;
  readonly Moon = Moon;
  readonly ArrowUpRight = ArrowUpRight;

  isDark = signal(false);
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  private router = inject(Router);

  navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  constructor() {
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
