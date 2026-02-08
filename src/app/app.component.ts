import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarSection } from './shared/layout/navbar/navbar-section';
import { FooterSection } from './shared/layout/footer/footer-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarSection, FooterSection],
  template: `
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <div
      class="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-secondary dark:text-white transition-colors duration-300"
    >
      <app-navbar-section />
      <main id="main-content" class="flex-grow pt-16">
        <router-outlet />
      </main>
      <app-footer-section />
    </div>
  `,
})
export class AppComponent {}
