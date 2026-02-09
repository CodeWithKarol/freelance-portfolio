import { Component, inject, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '@core/portfolio/portfolio-store';
import { Skill } from '@core/portfolio/portfolio.model';
import {
  LucideAngularModule,
  LucideIconData,
  Terminal,
  CodeXml,
  Zap,
  Box,
  Database,
  Palette,
  Wrench,
  Check,
  Smartphone,
  Users,
} from 'lucide-angular';
import { SectionHeader } from '@shared/ui/section-header/section-header';
import { AccordionItem } from '@shared/ui/accordion/accordion-item';

@Component({
  selector: 'app-skills-section',
  imports: [CommonModule, LucideAngularModule, SectionHeader, AccordionItem],
  template: `
    <section
      id="skills"
      class="section-padding bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      <!-- Scanline Overlay -->
      <div
        class="absolute inset-0 pointer-events-none opacity-[0.03]"
        style="background: repeating-linear-gradient(to bottom, transparent, transparent 2px, #000 3px);"
      ></div>

      <div class="layout-container relative z-10">
        <!-- Section Header -->
        <div class="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <app-section-header
            subtitle="TECH STACK"
            title="SYSTEM CAPABILITIES"
            description="Operational diagnostic of current technical proficiency and toolchain readiness."
          />
        </div>

        <!-- Main Dashboard Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Primary Stack (Left Col, 2/3 width on large) -->
          <div class="lg:col-span-2 space-y-8">
            <div
              class="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-1"
            >
              <div
                class="bg-white dark:bg-slate-950 p-6 border border-slate-200 dark:border-slate-800 h-full"
              >
                <div
                  class="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-4"
                >
                  <h3 class="font-mono font-bold text-lg uppercase flex items-center gap-2">
                    <lucide-icon [img]="Terminal" class="w-5 h-5 text-primary"></lucide-icon>
                    Core Runtime
                  </h3>
                  <span class="text-xs font-mono text-green-500 animate-pulse">● ONLINE</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  @for (tech of coreStack(); track tech.name) {
                    <div class="group">
                      <div class="flex justify-between items-end mb-2">
                        <span class="font-mono font-bold text-slate-700 dark:text-slate-200">{{
                          tech.name
                        }}</span>
                        <span class="text-xs font-mono text-slate-400">{{ tech.years }}+ YRS</span>
                      </div>
                      <!-- Progress Bar -->
                      <div
                        class="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-none overflow-hidden relative"
                      >
                        <div
                          class="absolute inset-0 bg-slate-200 dark:bg-slate-800 w-full"
                          style="background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px);"
                        ></div>
                        <div
                          class="h-full bg-primary transition-all duration-1000 ease-out group-hover:bg-primary-400"
                          [style.width]="tech.proficiency === 'Expert' ? '95%' : '75%'"
                        ></div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>

            <!-- Secondary Modules -->
            <div
              class="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6"
            >
              <h3 class="font-mono font-bold text-sm uppercase text-slate-500 mb-4">
                Auxiliary Modules
              </h3>
              <div class="flex flex-wrap gap-2">
                @for (tech of secondaryStack(); track tech.name) {
                  <span
                    class="px-3 py-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs hover:border-primary/50 cursor-crosshair transition-colors"
                  >
                    {{ tech.name }}
                  </span>
                }
              </div>
            </div>
          </div>

          <!-- Right Column: Stats & Soft Skills -->
          <div class="lg:col-span-1 space-y-8">
            <!-- Soft Skills / Protocols -->
            <div
              class="bg-slate-900 text-white p-6 border border-slate-800 tech-border relative overflow-hidden"
            >
              <h3
                class="font-mono font-bold text-lg uppercase mb-6 flex items-center gap-2 text-white"
              >
                <lucide-icon [img]="UsersIcon" class="w-5 h-5 text-accent"></lucide-icon>
                Leadership Protocols
              </h3>

              <ul class="space-y-4 font-mono text-sm">
                @for (skill of softSkills(); track skill.name) {
                  <li class="flex items-start gap-3">
                    <span class="text-accent mt-1">>></span>
                    <span class="text-slate-300">{{ skill.name }}</span>
                  </li>
                }
              </ul>
            </div>

            <!-- Detailed Categories Accordion (Styled as technical specs) -->
            <div class="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
              @for (group of groupedTechnicalSkills(); track group.category) {
                <app-accordion-item
                  [isOpen]="isCategoryOpen(group.category)"
                  (toggled)="toggleCategory(group.category)"
                  class="border-b border-slate-200 dark:border-slate-800 last:border-0 block"
                >
                  <div
                    header
                    class="flex items-center gap-3 w-full py-4 px-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                  >
                    <lucide-icon
                      [img]="getCategoryIcon(group.category)"
                      class="h-4 w-4 text-slate-400"
                    ></lucide-icon>
                    <span class="font-mono text-sm font-bold uppercase">{{ group.category }}</span>
                  </div>

                  <div
                    class="p-4 pt-0 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/50"
                  >
                    <div class="flex flex-wrap gap-2 pt-4">
                      @for (skill of group.skills; track skill.name) {
                        <span
                          class="text-xs font-mono text-slate-600 dark:text-slate-400 px-2 py-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
                        >
                          {{ skill.name }}
                        </span>
                      }
                    </div>
                  </div>
                </app-accordion-item>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSection {
  private portfolioStore = inject(PortfolioStore);
  skills = this.portfolioStore.skills;

  // core stack defined as specific high-impact items
  coreStack = computed(() =>
    this.skills()
      .filter(
        (s) => (s.proficiency === 'Expert' || s.name === 'React') && s.category !== 'Soft Skills',
      )
      .sort((a, b) => {
        // Force Angular then React to appear, generally sort by years/proficiency
        if (a.name === 'Angular') return -1;
        if (b.name === 'Angular') return 1;
        if (a.name === 'React') return -1;
        if (b.name === 'React') return 1;
        return b.years - a.years;
      })
      .slice(0, 8),
  );

  secondaryStack = computed(() =>
    this.skills()
      .filter(
        (s) =>
          s.proficiency !== 'Expert' &&
          (s.icon === 'react' ||
            s.name.includes('React') ||
            s.name.includes('TanStack') ||
            ['Redux', 'Zustand'].includes(s.name)) &&
          !s.name.includes('Native'),
      )
      .sort((a, b) => b.years - a.years)
      .slice(0, 10),
  );

  technicalSkills = computed(() =>
    this.skills().filter((skill) => !['Soft Skills', 'Core Stack'].includes(skill.category)),
  );

  softSkills = computed(() => this.skills().filter((skill) => skill.category === 'Soft Skills'));

  groupedTechnicalSkills = computed(() => {
    const skills = this.technicalSkills();
    const groups: Record<string, Skill[]> = {};

    skills.forEach((skill) => {
      const cat = skill.category;
      if (!groups[cat]) {
        groups[cat] = [];
      }
      groups[cat].push(skill);
    });

    return Object.entries(groups).map(([category, skills]) => ({ category, skills }));
  });

  // Accordion State
  openCategories = signal<Set<string>>(new Set([]));

  toggleCategory(category: string) {
    const current = new Set(this.openCategories());
    if (current.has(category)) {
      current.delete(category);
    } else {
      current.add(category);
    }
    this.openCategories.set(current);
  }

  isCategoryOpen(category: string) {
    return this.openCategories().has(category);
  }

  readonly Check = Check;
  readonly Terminal = Terminal;
  readonly UsersIcon = Users;

  private categoryIcons: Record<string, LucideIconData> = {
    'Core Stack': Terminal,
    Frameworks: Smartphone,
    Languages: CodeXml,
    State: Zap,
    Architecture: Box,
    Backend: Database,
    Styling: Palette,
    Tools: Wrench,
  };

  getCategoryIcon(category: string) {
    return this.categoryIcons[category] || Zap;
  }
}
