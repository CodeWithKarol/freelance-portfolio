import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Menu, X, ArrowUpRight } from 'lucide-angular';
import { BrandLogo } from '@shared/ui/brand-logo/brand-logo';
import { Button } from '@shared/ui/button/button';

@Component({
  selector: 'app-navbar-section',
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule, BrandLogo, Button],
  template: `
    <header class="fixed inset-x-0 top-0 z-50">
      <!-- Terminal-style Top Bar -->
      <div
        class="absolute inset-0 bg-white/90 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800 backdrop-blur-md transition-all duration-300"
        [class.shadow-lg]="isScrolled()"
      ></div>

      <!-- Tech Border Line (Animated) -->
      <div
        class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent w-0 transition-all duration-700"
        [style.width]="'100%'"
      ></div>

      <nav
        class="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8 font-mono"
        aria-label="Global"
      >
        <!-- Logo Area with Status Indicator -->
        <div class="flex lg:flex-1 items-center gap-4">
          <app-brand-logo (scrollToTop)="isMenuOpen.set(false)" />

          <!-- System Status Badge (Desktop Only) -->
          <div
            class="hidden lg:flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm mr-8"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span class="text-[10px] uppercase text-slate-500 tracking-wider">Sys.Online</span>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex xl:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center p-2.5 text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
            (click)="toggleMenu()"
            [attr.aria-expanded]="isMenuOpen()"
            aria-controls="mobile-menu"
          >
            <span class="sr-only">Open main menu</span>
            <span class="font-mono text-xs mr-2 uppercase tracking-widest">{{
              isMenuOpen() ? '[CLOSE]' : '[MENU]'
            }}</span>
            @if (!isMenuOpen()) {
              <lucide-icon [img]="Menu" class="h-5 w-5"></lucide-icon>
            } @else {
              <lucide-icon [img]="X" class="h-5 w-5"></lucide-icon>
            }
          </button>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden xl:flex xl:gap-x-1">
          <ul class="flex items-center gap-x-1 list-none m-0 p-0">
            @for (item of navItems; track item.id) {
              <li>
                <a
                  [routerLink]="['/']"
                  [fragment]="item.id"
                  routerLinkActive="text-primary bg-primary/5 border-primary/20"
                  [routerLinkActiveOptions]="{
                    fragment: 'exact',
                    paths: 'exact',
                    queryParams: 'ignored',
                    matrixParams: 'ignored',
                  }"
                  class="relative px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-200 text-slate-500 dark:text-slate-400 block group"
                >
                  <span
                    class="opacity-0 group-hover:opacity-100 absolute left-1 top-1/2 -translate-y-1/2 text-primary transition-opacity"
                    >></span
                  >
                  <span
                    class="group-hover:translate-x-2 transition-transform duration-200 inline-block"
                    >{{ item.label }}</span
                  >
                </a>
              </li>
            }
          </ul>
        </div>

        <!-- Desktop Actions -->
        <div class="hidden xl:flex xl:flex-1 xl:justify-end xl:items-center gap-4">
          <!-- Theme Toggle (Terminal Switch Style) -->
          <button
            (click)="toggleTheme()"
            class="group flex items-center gap-2 px-3 py-1.5 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-primary/50 transition-colors"
            aria-label="Toggle theme"
          >
            <span
              class="text-[10px] uppercase text-slate-500 group-hover:text-primary transition-colors"
              >Theme:</span
            >
            <div class="relative w-8 h-4 bg-slate-200 dark:bg-slate-800 rounded-sm p-0.5">
              <div
                class="absolute top-0.5 left-0.5 w-3 h-3 bg-white dark:bg-primary shadow-sm transition-transform duration-300"
                [class.translate-x-4]="isDark()"
              ></div>
            </div>
          </button>

          <app-button
            variant="primary"
            size="sm"
            [route]="['/']"
            fragment="contact"
            styleClass="hidden sm:inline-flex gap-2 rounded-none font-mono uppercase tracking-wide text-xs h-9"
          >
            <span>Execute_Project</span>
            <lucide-icon [img]="ArrowUpRight" class="h-3 w-3"></lucide-icon>
          </app-button>
        </div>
      </nav>

      <!-- Mobile Menu Overlay -->
      <div
        id="mobile-menu"
        class="xl:hidden"
        [class.pointer-events-none]="!isMenuOpen()"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <!-- Backdrop -->
        <div
          class="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300"
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
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-950 px-6 py-6 sm:max-w-sm border-l border-slate-200 dark:border-slate-800 transition-transform duration-300 ease-out"
          [class.translate-x-0]="isMenuOpen()"
          [class.translate-x-full]="!isMenuOpen()"
        >
          <div
            class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-6 mb-6"
          >
            <div class="font-mono text-sm font-bold uppercase text-slate-900 dark:text-white">
              <span class="text-primary">></span> Navigation_Module
            </div>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-slate-700 dark:text-slate-400 hover:text-primary transition-colors"
              (click)="toggleMenu()"
            >
              <span class="sr-only">Close menu</span>
              <lucide-icon [img]="X" class="h-6 w-6"></lucide-icon>
            </button>
          </div>

          <div class="mt-2 flow-root">
            <div class="-my-6 divide-y divide-slate-100 dark:divide-slate-800">
              <ul class="space-y-2 py-6 list-none p-0 font-mono">
                @for (item of navItems; track item.id) {
                  <li>
                    <a
                      [routerLink]="['/']"
                      [fragment]="item.id"
                      (click)="toggleMenu()"
                      class="group flex items-center gap-3 rounded-none px-3 py-3 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 border-l-2 border-transparent hover:border-primary transition-all"
                    >
                      <span class="text-slate-300 group-hover:text-primary transition-colors"
                        >#</span
                      >
                      {{ item.label }}
                    </a>
                  </li>
                }
              </ul>
              <div class="py-6 space-y-4">
                <!-- Mobile Theme Switcher -->
                <button
                  (click)="toggleTheme()"
                  class="flex w-full items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group"
                >
                  <span
                    class="font-mono text-xs uppercase font-bold text-slate-900 dark:text-slate-200 group-hover:text-primary transition-colors"
                  >
                    Visual_Mode: {{ isDark() ? 'DARK' : 'LIGHT' }}
                  </span>
                  <div class="relative w-10 h-5 bg-slate-200 dark:bg-slate-800 rounded-sm p-0.5">
                    <div
                      class="absolute top-0.5 left-0.5 w-4 h-4 bg-white dark:bg-primary shadow-sm transition-transform duration-300"
                      [class.translate-x-5]="isDark()"
                    ></div>
                  </div>
                </button>

                <app-button
                  variant="primary"
                  [route]="['/']"
                  fragment="contact"
                  (click)="toggleMenu()"
                  styleClass="flex w-full justify-center rounded-none font-mono uppercase tracking-wide"
                >
                  Execute_Project
                </app-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  host: {
    '(window:scroll)': 'onScroll()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarSection {
  readonly Menu = Menu;
  readonly X = X;
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
    { id: 'faq', label: 'FAQ' },
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
