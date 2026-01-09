import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [],
  template: `
    <section id="services" class="py-24 sm:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
          <h2 class="text-base font-semibold leading-7 text-primary-600 dark:text-primary-500">
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

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          @for (service of store.services().slice(0, 3); track service.title) {
          <div
            class="relative group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-slate-200 dark:ring-slate-800 flex flex-col"
          >
            <!-- Image Header -->
            <div class="h-48 overflow-hidden relative">
              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80"
              ></div>
              <img
                [src]="getServiceImage(service.icon)"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt=""
              />
              <div class="absolute bottom-4 left-4 z-20">
                <div
                  class="inline-flex items-center justify-center p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white"
                >
                  <!-- Icon rendering based on service.icon -->
                  @if (service.icon === 'migration') {
                  <svg
                    class="h-6 w-6"
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
                  } @else if (service.icon === 'code') {
                  <svg
                    class="h-6 w-6"
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
                    class="h-6 w-6"
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
                  }
                </div>
              </div>
            </div>

            <div class="p-6 flex flex-col flex-1">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {{ service.title }}
              </h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1">
                {{ service.description }}
              </p>

              @if (service.metric) {
              <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <p class="flex items-baseline gap-2">
                  <span class="text-2xl font-bold text-primary-600 dark:text-primary-400">{{
                    service.metric.value
                  }}</span>
                  <span class="text-xs font-medium text-slate-500 uppercase tracking-wider">{{
                    service.metric.label
                  }}</span>
                </p>
              </div>
              } @if (service.features) {
              <div class="mt-4 flex flex-wrap gap-2">
                @for (feature of service.features.slice(0, 3); track feature) {
                <span
                  class="inline-flex items-center rounded-md bg-primary-50 dark:bg-primary-900/20 px-2 py-1 text-xs font-medium text-primary-700 dark:text-primary-300 ring-1 ring-inset ring-primary-700/10 dark:ring-primary-500/30"
                >
                  {{ feature }}
                </span>
                }
              </div>
              }
            </div>
          </div>
          }
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          @for (service of store.services().slice(3); track service.title) {
          <div
            class="relative group flex flex-col md:flex-row bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-slate-200 dark:ring-slate-800"
          >
            <!-- Side Image -->
            <div class="md:w-2/5 relative h-48 md:h-auto overflow-hidden">
              <div
                class="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10"
              ></div>
              <img
                [src]="getServiceImage(service.icon)"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt=""
              />
            </div>

            <div class="p-6 md:w-3/5 flex flex-col justify-center">
              <div class="flex items-center gap-3 mb-3">
                <div
                  class="p-1.5 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                >
                  @if (service.icon === 'architecture') {
                  <svg
                    class="h-5 w-5"
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
                  } @else if (service.icon === 'leadership') {
                  <svg
                    class="h-5 w-5"
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
                  }
                </div>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                  {{ service.title }}
                </h3>
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {{ service.description }}
              </p>

              @if (service.features) {
              <div class="flex flex-wrap gap-2 mt-auto">
                @for (feature of service.features; track feature) {
                <span
                  class="inline-flex items-center rounded-md bg-white dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-inset ring-slate-200 dark:ring-slate-700 hover:ring-primary-500 hover:text-primary-600 dark:hover:ring-primary-500 dark:hover:text-primary-400 transition-colors cursor-default"
                >
                  {{ feature }}
                </span>
                }
              </div>
              }
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSection {
  readonly store = inject(PortfolioStore);

  getServiceImage(icon: string): string {
    const images: Record<string, string> = {
      migration:
        'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800', // Code screen
      code: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', // Analytics/Dashboard
      performance:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', // Charts
      architecture:
        'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800', // Blueprint/Draft
      leadership:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800', // Team
    };
    return (
      images[icon] ||
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
    );
  }
}
