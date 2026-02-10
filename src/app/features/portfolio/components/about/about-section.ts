import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import {
  LucideAngularModule,
  ArrowRight,
  Terminal,
  Cpu,
  Globe,
  CheckCircle2,
  Zap,
  Download,
} from 'lucide-angular';
import { Button } from '@shared/ui/button/button';
import { NetworkBackgroundComponent } from '@shared/ui/network-background/network-background.component';

@Component({
  selector: 'app-about-section',
  imports: [CommonModule, LucideAngularModule, Button, NetworkBackgroundComponent],
  template: `
    <section
      id="about"
      class="relative isolate overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 min-h-screen flex flex-col justify-center depth-groove"
    >
      <!-- Neural Network Background -->
      <app-network-background
        class="absolute inset-0 z-0 opacity-25 dark:opacity-20"
        color="#3b82f6"
      ></app-network-background>

      <div class="layout-container relative z-10 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Status Line -->
          <div
            class="flex items-center justify-center gap-2 mb-8 mt-16 sm:mt-0 font-mono text-xs text-primary dark:text-primary-400 uppercase tracking-widest"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
              ></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Status: Operating on Legacy Code
          </div>

          <!-- Main Heading -->
          <h1 class="heading-1 mb-8 text-5xl lg:text-7xl font-bold tracking-tight">
            <span class="block text-slate-900 dark:text-white mb-2">I fix the Angular apps</span>
            <span class="block text-primary dark:text-primary-500">that generalists break.</span>
          </h1>

          <!-- Sub-headline text -->
          <p
            class="text-slate-600 text-xl max-w-2xl mx-auto mb-12 dark:text-slate-300 leading-relaxed"
          >
            Stop burning cash on slow features. Get
            <strong class="text-slate-900 dark:text-white">Fixed-Price Micro-Engagements</strong>
            from a senior specialist—Audits, Refactors, and Features delivered without the hourly
            overhead.
          </p>

          <!-- Tech Stack Data Grid (Horizontal) -->
          <div
            class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto mb-12 font-mono text-xs text-left"
          >
            <div
              class="p-4 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-sm hover:border-primary/50 transition-colors"
            >
              <span class="block text-slate-500 dark:text-slate-400 mb-1">AUDITS</span>
              <span class="font-bold text-slate-900 dark:text-white">CODE & PERFORMANCE</span>
            </div>
            <div
              class="p-4 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-sm hover:border-primary/50 transition-colors"
            >
              <span class="block text-slate-500 dark:text-slate-400 mb-1">ARCHITECTURE</span>
              <span class="font-bold text-slate-900 dark:text-white">PREDICTABLE STATE</span>
            </div>
            <div
              class="p-4 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-sm hover:border-primary/50 transition-colors"
            >
              <span class="block text-slate-500 dark:text-slate-400 mb-1">INTEGRATION</span>
              <span class="font-bold text-slate-900 dark:text-white">ZERO RUNTIME ERRORS</span>
            </div>
            <div
              class="p-4 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-sm hover:border-primary/50 transition-colors"
            >
              <span class="block text-slate-500 dark:text-slate-400 mb-1">MODERNIZATION</span>
              <span class="font-bold text-slate-900 dark:text-white">SIGNALS & ZONELESS</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <app-button
              [route]="['/']"
              fragment="gigs"
              variant="primary"
              size="lg"
              styleClass="w-full sm:w-auto rounded-none font-mono uppercase tracking-wide px-8 h-14 text-sm"
            >
              View Micro-Engagements
            </app-button>

            <a
              href="#process"
              class="inline-flex w-full sm:w-auto h-14 items-center justify-center px-8 rounded-none border border-slate-300 dark:border-slate-700 bg-white/10 backdrop-blur-sm text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-mono uppercase tracking-wide text-sm font-medium"
            >
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  readonly ArrowRight = ArrowRight;
  readonly Terminal = Terminal;
  readonly Cpu = Cpu;
  readonly Globe = Globe;
  readonly CheckCircle2 = CheckCircle2;
  readonly Zap = Zap;
  readonly Download = Download;

  private scroller = inject(ViewportScroller);

  scrollTo(id: string) {
    this.scroller.scrollToAnchor(id);
  }
}
