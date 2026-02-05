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
      class="relative isolate overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 h-screen flex flex-col justify-center"
    >
      <!-- Neural Network Background -->
      <app-network-background
        class="absolute inset-0 z-0 opacity-40 dark:opacity-30"
        color="#3b82f6"
      ></app-network-background>

      <div class="layout-container relative z-10 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Status Line -->
          <div
            class="flex items-center justify-center gap-2 mb-8 font-mono text-xs text-primary dark:text-primary-400 uppercase tracking-widest"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
              ></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Critical Tasks
          </div>

          <!-- Main Heading -->
          <h1 class="heading-1 mb-8 text-5xl lg:text-7xl font-bold tracking-tight">
            <span class="block text-slate-900 dark:text-white mb-2">Need an Angular Expert</span>
            <span class="block text-primary dark:text-primary-500">for a Week?</span>
          </h1>

          <!-- Sub-headline text -->
          <p class="text-body text-xl max-w-2xl mx-auto mb-12 dark:text-slate-400 leading-relaxed">
            I fix
            <strong class="text-slate-900 dark:text-white"
              >performance and architecture bottlenecks</strong
            >. No long-term contracts, just immediate impact. Currently building
            <a
              href="https://scale-sail.io"
              target="_blank"
              class="text-primary hover:text-primary-600 underline decoration-primary/30 underline-offset-4 transition-colors"
              >Scale Sail Agency</a
            >
            for enterprise scale.
          </p>

          <!-- Tech Stack Data Grid (Horizontal) -->
          <div
            class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto mb-12 font-mono text-xs text-left"
          >
            <div
              class="p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-sm hover:border-primary/50 transition-colors"
            >
              <span class="block text-slate-400 mb-1">DIAGNOSTICS</span>
              <span class="font-bold text-slate-900 dark:text-white">PERFORMANCE / WEB VITALS</span>
            </div>
            <div
              class="p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-sm hover:border-primary/50 transition-colors"
            >
              <span class="block text-slate-400 mb-1">QUALITY GATES</span>
              <span class="font-bold text-slate-900 dark:text-white">STRICT TYPES / TESTING</span>
            </div>
            <div
              class="p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-sm hover:border-primary/50 transition-colors"
            >
              <span class="block text-slate-400 mb-1">STANDARDS</span>
              <span class="font-bold text-slate-900 dark:text-white">WCAG 2.1 AA / A11Y</span>
            </div>
            <div
              class="p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-sm hover:border-primary/50 transition-colors"
            >
              <span class="block text-slate-400 mb-1">MODERNIZATION</span>
              <span class="font-bold text-slate-900 dark:text-white">LEGACY TO SIGNALS</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center justify-center gap-6">
            <app-button
              [route]="['/']"
              fragment="contact"
              variant="primary"
              size="lg"
              styleClass="rounded-none font-mono uppercase tracking-wide px-8 h-14 text-sm"
            >
              Start an Engagement
            </app-button>

            <a
              href="https://scale-sail.io"
              target="_blank"
              class="inline-flex h-14 items-center justify-center px-8 rounded-none border border-slate-300 dark:border-slate-700 bg-white/10 backdrop-blur-sm text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-mono uppercase tracking-wide text-sm font-medium"
            >
              Visit Agency Site
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
