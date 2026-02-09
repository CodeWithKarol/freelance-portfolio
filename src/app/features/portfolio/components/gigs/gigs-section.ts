import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';
import { DiagnosticPanel } from './diagnostic-panel';

@Component({
  selector: 'app-gigs-section',
  standalone: true,
  imports: [CommonModule, SectionHeader, DiagnosticPanel],
  template: `
    <section
      id="gigs"
      class="section-padding bg-white dark:bg-slate-950 relative overflow-hidden border-b border-slate-200 dark:border-slate-800"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

      <div class="layout-container relative z-10">
        <app-section-header
          title="The Micro-Engagement Menu"
          subtitle="Surgical interventions for your most critical issues. Don't hire a full-time employee for a one-time problem."
          alignment="center"
          class="mb-16 block"
        />

        <div class="max-w-4xl mx-auto">
          <app-diagnostic-panel [gigs]="store.gigs()" />
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GigsSection {
  readonly store = inject(PortfolioStore);
}
