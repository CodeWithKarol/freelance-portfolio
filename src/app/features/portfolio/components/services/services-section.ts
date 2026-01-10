import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { LucideAngularModule, ArrowRightLeft, CodeXml, Zap, Landmark, Users } from 'lucide-angular';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [LucideAngularModule],
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
                  <lucide-icon [img]="ArrowRightLeft" class="h-6 w-6"></lucide-icon>
                  } @else if (service.icon === 'code') {
                  <lucide-icon [img]="CodeXml" class="h-6 w-6"></lucide-icon>
                  } @else if (service.icon === 'performance') {
                  <lucide-icon [img]="Zap" class="h-6 w-6"></lucide-icon>
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
                  <lucide-icon [img]="Landmark" class="h-5 w-5"></lucide-icon>
                  } @else if (service.icon === 'leadership') {
                  <lucide-icon [img]="Users" class="h-5 w-5"></lucide-icon>
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

  readonly ArrowRightLeft = ArrowRightLeft;
  readonly CodeXml = CodeXml;
  readonly Zap = Zap;
  readonly Landmark = Landmark;
  readonly Users = Users;

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
