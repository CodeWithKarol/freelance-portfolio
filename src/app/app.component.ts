import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarSection } from './shared/layout/navbar/navbar-section';
import { FooterSection } from './shared/layout/footer/footer-section';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarSection, FooterSection],
  template: `
    <div
      class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <app-navbar-section />
      <main class="flex-grow pt-16">
        <router-outlet />
      </main>
      <app-footer-section />
    </div>
  `,
})
export class AppComponent {}
