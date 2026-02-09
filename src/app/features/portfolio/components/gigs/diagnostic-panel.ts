import { Component, ChangeDetectionStrategy, input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  LucideIconData,
  Zap,
  Shield,
  Cpu,
  Code,
  ChevronDown,
  ChevronUp,
} from 'lucide-angular';
import { Gig } from '@core/portfolio/portfolio.model';
import { Button } from '@shared/ui/button/button';

interface CategoryGroup {
  name: string;
  label: string;
  icon: LucideIconData;
  gigs: Gig[];
}

@Component({
  selector: 'app-diagnostic-panel',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, Button],
  template: `
    <div class="space-y-2">
      @for (category of categories(); track category.name) {
        <div
          class="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-600"
        >
          <!-- Category Header -->
          <button
            type="button"
            (click)="toggleCategory(category.name)"
            [class.bg-slate-50]="isCategoryOpen(category.name)"
            [class.dark:bg-slate-800]="isCategoryOpen(category.name)"
            class="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <div class="flex items-center gap-4 text-left">
              <!-- Icon -->
              <div
                class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-primary flex-shrink-0"
              >
                <lucide-icon [img]="category.icon" class="w-5 h-5" strokeWidth="1.5"></lucide-icon>
              </div>

              <!-- Header Text -->
              <div>
                <h3
                  class="font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wide text-sm"
                >
                  {{ category.label }}
                </h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {{ category.gigs.length }}
                  {{ category.gigs.length === 1 ? 'Service' : 'Services' }}
                </p>
              </div>
            </div>

            <!-- Chevron Icon -->
            <div class="flex-shrink-0 ml-4">
              @if (isCategoryOpen(category.name)) {
                <lucide-icon
                  [img]="ChevronUp"
                  class="w-5 h-5 text-slate-400 transition-transform duration-300"
                ></lucide-icon>
              } @else {
                <lucide-icon
                  [img]="ChevronDown"
                  class="w-5 h-5 text-slate-400 transition-transform duration-300"
                ></lucide-icon>
              }
            </div>
          </button>

          <!-- Category Content (Expandable) -->
          @if (isCategoryOpen(category.name)) {
            <div
              class="border-t border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-800/30 animate-in slide-in-from-top-2 fade-in duration-200"
            >
              <div class="divide-y divide-slate-200 dark:divide-slate-700">
                @for (gig of category.gigs; track gig.title) {
                  <div
                    class="px-6 py-5 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <!-- Gig Row -->
                    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <!-- Gig Info -->
                      <div class="flex-grow min-w-0">
                        <h4
                          class="font-mono font-bold text-slate-900 dark:text-white text-sm mb-1 uppercase tracking-tight"
                        >
                          {{ gig.title }}
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                          {{ gig.description }}
                        </p>

                        <!-- Features (compact list) -->
                        <ul class="flex flex-wrap gap-2 mb-4">
                          @for (feature of gig.features; track feature) {
                            <li
                              class="inline-flex items-center gap-1 px-2 py-1 bg-white dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded text-xs font-mono text-slate-700 dark:text-slate-300"
                            >
                              <span class="text-primary font-bold">•</span>
                              {{ feature }}
                            </li>
                          }
                        </ul>
                      </div>

                      <!-- Price & CTA -->
                      <div class="flex flex-col items-start sm:items-end gap-3 flex-shrink-0">
                        <div class="text-sm font-mono font-bold text-primary whitespace-nowrap">
                          {{ gig.price }}
                        </div>
                        <app-button
                          [href]="gig.ctaUrl"
                          variant="outline"
                          styleClass="text-xs font-mono uppercase tracking-widest border-slate-300 dark:border-slate-600 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 px-4 py-2"
                        >
                          Book
                        </app-button>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiagnosticPanel {
  gigs = input.required<Gig[]>();

  // Track which categories are open
  private openCategories = signal<Set<string>>(new Set());

  // Define category order and icons
  private readonly categoryMap: Record<
    string,
    { label: string; icon: LucideIconData; order: number }
  > = {
    Performance: {
      label: '⚡ Performance Issues',
      icon: Zap,
      order: 1,
    },
    'Code Quality': {
      label: '🛡️ Code Health',
      icon: Shield,
      order: 2,
    },
    Features: {
      label: '💻 New Features',
      icon: Cpu,
      order: 3,
    },
    Audits: {
      label: '📋 Audits & Reviews',
      icon: Code,
      order: 4,
    },
    Modernization: {
      label: '🏗️ Modernization',
      icon: Code,
      order: 5,
    },
    'DX & Ops': {
      label: '⚙️ DX & Ops',
      icon: Code,
      order: 6,
    },
    Testing: {
      label: '🧪 Testing',
      icon: Shield,
      order: 7,
    },
  };

  // Compute grouped categories
  categories = computed<CategoryGroup[]>(() => {
    const grouped = new Map<string, Gig[]>();

    // Group gigs by category
    this.gigs().forEach((gig) => {
      if (!grouped.has(gig.category)) {
        grouped.set(gig.category, []);
      }
      grouped.get(gig.category)!.push(gig);
    });

    // Convert to CategoryGroup array and sort
    return Array.from(grouped.entries())
      .map(([name, gigList]) => {
        const categoryInfo = this.categoryMap[name];
        return {
          name: name as 'Performance' | 'Code Quality' | 'Features' | 'Audits',
          label: categoryInfo?.label || name,
          icon: categoryInfo?.icon || Code,
          gigs: gigList,
        };
      })
      .sort((a, b) => {
        const orderA = this.categoryMap[a.name]?.order ?? 999;
        const orderB = this.categoryMap[b.name]?.order ?? 999;
        return orderA - orderB;
      });
  });

  // Toggle category open/closed state
  toggleCategory(categoryName: string): void {
    const updated = new Set(this.openCategories());
    if (updated.has(categoryName)) {
      updated.delete(categoryName);
    } else {
      updated.add(categoryName);
    }
    this.openCategories.set(updated);
  }

  // Check if category is open
  isCategoryOpen(categoryName: string): boolean {
    return this.openCategories().has(categoryName);
  }

  // Expose icons to template
  Zap = Zap;
  Shield = Shield;
  Cpu = Cpu;
  Code = Code;
  ChevronDown = ChevronDown;
  ChevronUp = ChevronUp;
}
