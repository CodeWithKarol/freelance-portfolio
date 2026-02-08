import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '@core/portfolio/portfolio-store';
import {
  LucideAngularModule,
  Download,
  GitCommit,
  GitBranch,
  GitMerge,
  Terminal,
  CheckCircle2,
  Calendar,
  Building2,
} from 'lucide-angular';
import { SectionHeader } from '@shared/ui/section-header/section-header';
import { Button } from '@shared/ui/button/button';

@Component({
  selector: 'app-experience-section',
  imports: [CommonModule, LucideAngularModule, SectionHeader, Button],
  template: `
    <section
      id="experience"
      class="section-padding bg-slate-100 dark:bg-slate-900 relative overflow-hidden depth-groove"
    >
      <!-- Background Grid -->
      <div class="absolute inset-0 grid-bg opacity-50 pointer-events-none"></div>

      <div class="layout-container relative z-10">
        <!-- Section Header -->
        <div class="mx-auto max-w-2xl text-center mb-16">
          <app-section-header
            subtitle="DEPLOYMENT LOG"
            title="PROFESSIONAL HISTORY"
            description="Chronological record of architectural contributions and system upgrades."
          />
        </div>

        <div class="relative max-w-4xl mx-auto">
          <!-- Main Trunk Line -->
          <div class="absolute left-8 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-800"></div>

          <div class="space-y-12">
            @for (
              job of store.experience();
              track job.company;
              let first = $first;
              let last = $last
            ) {
              <div class="relative pl-24 group">
                <!-- Git Graph Node -->
                <div
                  class="absolute left-[23px] top-6 w-4 h-4 rounded-full border-[3px] z-10 bg-white dark:bg-slate-950 transition-colors duration-300"
                  [class.border-primary]="first"
                  [class.border-slate-400]="!first"
                  [class.dark:border-slate-600]="!first"
                ></div>

                <!-- Connector Branch (Curved) -->
                <div
                  class="absolute left-8 top-8 w-12 h-8 border-b-2 border-l-2 border-slate-300 dark:border-slate-800 rounded-bl-2xl"
                ></div>

                <!-- Content Panel -->
                <div
                  class="relative bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-0 hover:border-primary/50 transition-colors duration-300 group-hover:shadow-lg dark:group-hover:shadow-primary/5"
                >
                  <!-- Header Bar -->
                  <div
                    class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
                  >
                    <div class="flex items-center gap-3">
                      <div
                        class="flex items-center justify-center w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-sm border border-slate-200 dark:border-slate-700"
                      >
                        <lucide-icon [img]="Building2" class="w-5 h-5 text-slate-500"></lucide-icon>
                      </div>
                      <div>
                        <h3
                          class="font-mono font-bold text-base text-slate-900 dark:text-white uppercase tracking-tight"
                        >
                          {{ job.role }}
                        </h3>
                        <div class="text-xs font-mono text-slate-500 flex items-center gap-2">
                          <span class="text-primary">@ {{ job.company }}</span>
                          <span class="w-1 h-1 rounded-full bg-slate-400"></span>
                          <span>{{ job.period }}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Status Badge -->
                    <div
                      class="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800/50 rounded-full border border-slate-200 dark:border-slate-700/50 self-start sm:self-center"
                    >
                      <lucide-icon
                        [img]="CheckCircle2"
                        class="w-3.5 h-3.5 text-green-500"
                      ></lucide-icon>
                      <span
                        class="text-[10px] font-mono uppercase font-bold text-slate-600 dark:text-slate-300"
                      >
                        {{ first ? 'Current_Version' : 'Legacy_Build' }}
                      </span>
                    </div>
                  </div>

                  <!-- Description -->
                  <div class="p-6">
                    <p
                      class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-mono mb-6 border-l-2 border-slate-200 dark:border-slate-800 pl-4"
                    >
                      <span class="text-slate-400 select-none opacity-50 block text-xs mb-1"
                        >// Description</span
                      >
                      {{ job.description }}
                    </p>

                    <!-- Tech Stack (Tags) -->
                    <div class="flex flex-wrap gap-2">
                      @for (tech of job.technologies; track tech) {
                        <span
                          class="inline-flex items-center px-2 py-1 text-[10px] font-mono text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 uppercase tracking-wider"
                        >
                          {{ tech }}
                        </span>
                      }
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>

          <!-- Resume Download (Terminal Style) -->
          <div class="mt-16 pl-24">
            <div
              class="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 rounded-sm"
            >
              <div class="font-mono text-xs text-slate-500 text-center sm:text-left">
                <span class="text-green-500">➜</span> Ready to view full system logs?
              </div>
              <app-button
                href="https://drive.google.com/file/d/1ZAtoLBrbP-suftqfzVAdJD2welSEzoVR/view?usp=sharing"
                variant="outline"
                styleClass="w-full sm:w-auto font-mono text-xs uppercase tracking-wider border-slate-300 dark:border-slate-600 justify-center"
              >
                <lucide-icon [img]="Download" class="h-3.5 w-3.5 mr-2"></lucide-icon>
                EXPORT_RESUME.PDF
              </app-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSection {
  readonly store = inject(PortfolioStore);

  readonly Download = Download;
  readonly GitCommit = GitCommit;
  readonly GitBranch = GitBranch;
  readonly GitMerge = GitMerge;
  readonly Terminal = Terminal;
  readonly CheckCircle2 = CheckCircle2;
  readonly Calendar = Calendar;
  readonly Building2 = Building2;
}
