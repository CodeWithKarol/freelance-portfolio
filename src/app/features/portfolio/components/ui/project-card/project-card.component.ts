import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';
import { CaseStudy } from '@core/portfolio/portfolio.model';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule, RouterLink, LucideAngularModule],
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
    `,
  ],
  template: `
    <article class="relative isolate flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-24">
      <!-- Image Section -->
      <div class="w-full lg:w-1/2 lg:shrink-0" [class.lg:order-last]="reverseLayout()">
        <div
          class="group relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 sm:aspect-[16/10] lg:aspect-[16/10] shadow-2xl ring-1 ring-slate-900/10 dark:ring-white/10 dark:bg-slate-900"
        >
          <img
            [src]="
              project().heroImage ||
              'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80'
            "
            alt=""
            class="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
          <!-- Subtle overlay for better text contrast if needed, mostly for cleanup -->
          <div
            class="absolute inset-0 ring-1 ring-inset ring-slate-900/10 dark:ring-white/10 rounded-2xl"
          ></div>

          <a
            [routerLink]="['/work', project().id]"
            class="absolute inset-0 focus:outline-none"
            tabindex="-1"
          >
            <span class="sr-only">View Case Study</span>
          </a>
        </div>
      </div>

      <!-- Content Section -->
      <div class="w-full lg:w-1/2 flex flex-col justify-center">
        <div class="flex items-center gap-x-4">
          <div
            class="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/30"
          >
            Case Study
          </div>
          @if (project().techStack.length > 0) {
            <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
              {{ project().techStack[0] }}
            </span>
          }
        </div>

        <div class="group relative max-w-xl">
          <h3
            class="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            <a [routerLink]="['/work', project().id]">
              <span class="absolute inset-0"></span>
              {{ project().title }}
            </a>
          </h3>
          <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {{ project().tagline }}
          </p>
        </div>

        <!-- Tech Stack Tags -->
        <ul
          class="mt-10 flex flex-wrap gap-2 pt-8 border-t border-slate-200 dark:border-slate-800 list-none p-0"
        >
          @for (tech of project().techStack.slice(0, 4); track tech) {
            <li>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-slate-50 text-slate-700 ring-1 ring-inset ring-slate-200/50 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700"
              >
                {{ tech }}
              </span>
            </li>
          }
          @if (project().techStack.length > 4) {
            <li>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium text-slate-500 dark:text-slate-400"
              >
                +{{ project().techStack.length - 4 }} more
              </span>
            </li>
          }
        </ul>

        <!-- Call to Action -->
        <div class="mt-8 flex items-center gap-x-6">
          <a
            [routerLink]="['/work', project().id]"
            class="group/link flex items-center gap-2 text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
          >
            Read case study
            <lucide-icon
              [img]="ArrowRight"
              class="h-4 w-4 transition-transform group-hover/link:translate-x-1"
            />
          </a>
        </div>
      </div>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  project = input.required<CaseStudy>();
  reverseLayout = input<boolean>(false);
  readonly ArrowRight = ArrowRight;
}
