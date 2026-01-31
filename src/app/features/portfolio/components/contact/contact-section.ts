import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { LucideAngularModule, Mail, MapPin } from 'lucide-angular';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';
import { Card } from '../../../../shared/ui/card/card';
import { ContactFormComponent } from './form/contact-form.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, SectionHeader, Card, ContactFormComponent],
  template: `
    <section
      id="contact"
      class="section-padding bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      <div class="layout-container lg:grid lg:grid-cols-2 lg:gap-x-16">
        <!-- Left Column: Info & Context -->
        <div class="relative pb-20 pt-10 sm:pt-16 lg:static lg:py-16">
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <!-- Background Decoration (Simplified) -->
            <div
              class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden opacity-30 dark:opacity-10 pointer-events-none"
            >
              <svg
                class="absolute inset-0 h-full w-full stroke-slate-200 dark:stroke-slate-800"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="hex-pattern"
                    width="200"
                    height="200"
                    x="100%"
                    y="-1"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#hex-pattern)" />
              </svg>
            </div>

            <app-section-header
              subtitle="Get in Touch"
              title="Start a Project"
              description="If you're dealing with a slow, hard-to-change frontend (or planning a new SaaS build), I can help you ship with confidence. Share your goals and constraints—I'll review your inquiry and if it's a good fit, I'll send you a link to book a discovery call."
              alignment="left"
            />

            <dl class="mt-10 space-y-6 text-body">
              <div class="flex gap-x-4 items-center">
                <dt class="flex-none">
                  <span class="sr-only">Email</span>
                  <div
                    class="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary"
                  >
                    <lucide-icon [img]="Mail" class="h-5 w-5"></lucide-icon>
                  </div>
                </dt>
                <dd>
                  <a
                    class="font-semibold text-secondary dark:text-white hover:text-primary dark:hover:text-primary-400 transition-colors break-all"
                    [href]="'mailto:' + store.contactInfo().email"
                  >
                    {{ store.contactInfo().email }}
                  </a>
                </dd>
              </div>
              <div class="flex gap-x-4 items-center">
                <dt class="flex-none">
                  <span class="sr-only">Address</span>
                  <div
                    class="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary"
                  >
                    <lucide-icon [img]="MapPin" class="h-5 w-5"></lucide-icon>
                  </div>
                </dt>
                <dd class="text-secondary dark:text-slate-300">
                  {{ store.contactInfo().location }}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <!-- Right Column: Form -->
        <div class="pb-24 pt-10 sm:pb-32 lg:py-16">
          <app-card
            variant="default"
            class="block p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
          >
            <app-contact-form />
          </app-card>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  readonly store = inject(PortfolioStore);
  readonly Mail = Mail;
  readonly MapPin = MapPin;
}
