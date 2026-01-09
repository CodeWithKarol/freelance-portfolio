import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [],
  template: `
    <section id="services" class="py-24 sm:py-32 bg-slate-50 dark:bg-slate-950">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500">
            What I Deliver
          </h2>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl"
          >
            Bank-Grade Quality at Startup Speed
          </p>
          <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            I don't just write code—I engineer solutions. Whether you need to rescue a legacy system
            or launch a scalable specialized SaaS, I deliver production-ready architecture from day
            one.
          </p>
        </div>

        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl
            class="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          >
            @for (service of store.services(); track service.title) {
            <div
              class="flex flex-col h-full bg-white dark:bg-slate-900 rounded-3xl p-8 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <dt
                class="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900 dark:text-slate-100"
              >
                <div class="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                  @if (service.icon === 'leadership') {
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                  } @else if (service.icon === 'code') {
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>
                  } @else if (service.icon === 'performance') {
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                  } @else if (service.icon === 'migration') {
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                  } @else if (service.icon === 'architecture') {
                  <svg
                    class="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                    />
                  </svg>
                  }
                </div>
                {{ service.title }}
              </dt>
              <dd
                class="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-300"
              >
                <p class="flex-auto">{{ service.description }}</p>
                @if (service.metric) {
                <p class="mt-6">
                  <span
                    class="text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400"
                    >{{ service.metric.value }}</span
                  >
                  <span class="text-sm text-slate-500 dark:text-slate-300 ml-2">{{
                    service.metric.label
                  }}</span>
                </p>
                } @if (service.features) {
                <ul class="mt-6 gap-2 flex flex-wrap">
                  @for (feature of service.features; track feature) {
                  <li
                    class="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10"
                  >
                    {{ feature }}
                  </li>
                  }
                </ul>
                }
              </dd>
            </div>
            }
          </dl>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSection {
  readonly store = inject(PortfolioStore);
}
