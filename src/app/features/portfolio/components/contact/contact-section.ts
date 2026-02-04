import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '@core/portfolio/portfolio-store';
import { LucideAngularModule, Mail, MapPin, Radio, Signal, Wifi } from 'lucide-angular';
import { SectionHeader } from '@shared/ui/section-header/section-header';
import { ContactFormComponent } from './form/contact-form.component';

@Component({
  selector: 'app-contact-section',
  imports: [CommonModule, LucideAngularModule, SectionHeader, ContactFormComponent],
  template: `
    <section
      id="contact"
      class="section-padding bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      <!-- Matrix Background -->
      <div class="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      <div class="layout-container lg:grid lg:grid-cols-2 lg:gap-x-16 items-start">
        <!-- Left Column: Connection Info -->
        <div class="relative pb-12 lg:pb-0">
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg sticky top-24">
            <app-section-header
              subtitle="UPLINK"
              title="INITIATE SEQUENCE"
              description="Open a secure channel for project collaboration. Direct line to engineering leadership."
              alignment="left"
            />

            <!-- Connection Diagnostics -->
            <div
              class="mt-12 p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-sm font-mono text-sm"
            >
              <div
                class="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-2"
              >
                <span class="text-slate-500 uppercase">Connection Status</span>
                <span class="flex items-center gap-2 text-green-500 animate-pulse">
                  <lucide-icon [img]="Wifi" class="w-4 h-4"></lucide-icon>
                  READY
                </span>
              </div>

              <div class="space-y-6">
                <!-- Email Node -->
                <div class="group">
                  <div class="text-xs text-slate-400 uppercase mb-1">Target_Node: Email</div>
                  <a
                    [href]="'mailto:' + store.contactInfo().email"
                    class="flex items-center gap-3 text-secondary dark:text-white hover:text-primary transition-colors p-3 border border-transparent hover:border-primary/30 hover:bg-white dark:hover:bg-slate-800 rounded-sm"
                  >
                    <div
                      class="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-sm"
                    >
                      <lucide-icon [img]="Mail" class="w-4 h-4"></lucide-icon>
                    </div>
                    <span class="text-base font-bold">{{ store.contactInfo().email }}</span>
                  </a>
                </div>

                <!-- Location Node -->
                <div>
                  <div class="text-xs text-slate-400 uppercase mb-1">Geo_Coordinates</div>
                  <div class="flex items-center gap-3 p-3 border border-transparent">
                    <div
                      class="w-8 h-8 flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-500 rounded-sm"
                    >
                      <lucide-icon [img]="MapPin" class="w-4 h-4"></lucide-icon>
                    </div>
                    <span class="text-base text-secondary dark:text-slate-300">{{
                      store.contactInfo().location
                    }}</span>
                  </div>
                </div>

                <!-- Signal Strength Visualization -->
                <div class="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div class="flex justify-between text-xs text-slate-400 mb-2">
                    <span>Signal Strength</span>
                    <span>-42dBm (Excellent)</span>
                  </div>
                  <div class="flex gap-1 h-8 items-end">
                    <div class="flex-1 bg-primary/20 h-[20%]"></div>
                    <div class="flex-1 bg-primary/40 h-[40%]"></div>
                    <div class="flex-1 bg-primary/60 h-[60%]"></div>
                    <div class="flex-1 bg-primary/80 h-[80%]"></div>
                    <div class="flex-1 bg-primary h-[100%] animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Terminal Input Form -->
        <div class="pt-8 lg:pt-0">
          <div class="relative bg-slate-900 text-slate-300 p-1 rounded-lg shadow-2xl">
            <!-- Terminal Bar -->
            <div
              class="flex items-center px-4 py-2 bg-slate-800 rounded-t-lg border-b border-slate-700"
            >
              <div class="flex gap-2 mr-4">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div class="flex-1 text-center font-mono text-xs text-slate-400">
                /bin/contact_form.sh
              </div>
            </div>

            <div class="p-6 md:p-8 bg-slate-950 rounded-b-lg border-x border-b border-slate-800">
              <div class="font-mono text-sm text-slate-500 mb-6">
                <span>Last login: {{ lastLogin }} on ttys001</span><br />
                <span>Type details to initialize packet transmission...</span>
              </div>

              <app-contact-form />
            </div>
          </div>
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
  readonly Radio = Radio;
  readonly Signal = Signal;
  readonly Wifi = Wifi;

  readonly lastLogin = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
}
