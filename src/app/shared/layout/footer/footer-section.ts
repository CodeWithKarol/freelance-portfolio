import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '@core/portfolio/portfolio-store';
import { BrandLogo } from '@shared/ui/brand-logo/brand-logo';
import {
  LucideAngularModule,
  Github,
  Linkedin,
  Globe,
  Terminal,
  Cpu,
  Power,
  GitBranch,
  ExternalLink,
} from 'lucide-angular';

@Component({
  selector: 'app-footer-section',
  imports: [CommonModule, LucideAngularModule, BrandLogo],
  template: `
    <footer class="relative bg-slate-950 pt-16 pb-8 overflow-hidden z-10 border-t border-slate-800">
      <!-- Tech Grid Background -->
      <div
        class="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent,black)]"
      ></div>

      <!-- Top Border Decoration -->
      <div class="absolute top-0 inset-x-0 h-px bg-slate-800"></div>
      <div
        class="absolute top-0 left-1/4 w-px h-8 bg-slate-800 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      ></div>
      <div
        class="absolute top-0 right-1/4 w-px h-8 bg-slate-800 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      ></div>

      <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div class="xl:grid xl:grid-cols-4 xl:gap-8 mb-16">
          <!-- Identity Column -->
          <div class="xl:col-span-1 space-y-6">
            <app-brand-logo />
            <div class="font-mono text-xs text-slate-500 leading-relaxed max-w-xs">
              <span class="text-primary block mb-2">> SYSTEM_IDENTITY_LOG</span>
              Specialized in high-performance frontend architecture and legacy modernization.
              Operational since 2016.
            </div>

            <!-- Connection Status -->
            <div class="flex items-center gap-2 text-xs font-mono">
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                ></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="text-emerald-500">SYSTEM_ONLINE</span>
            </div>
          </div>

          <!-- Navigation / Modules -->
          <div class="mt-12 xl:mt-0 xl:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <!-- Site Map -->
            <div>
              <h3
                class="flex items-center gap-2 text-sm font-bold text-slate-200 uppercase tracking-widest font-mono mb-6"
              >
                <lucide-icon [img]="Terminal" class="w-4 h-4 text-primary"></lucide-icon>
                Directories
              </h3>
              <ul class="space-y-3 font-mono text-xs">
                @for (link of store.footerColumns()[0].links; track link.label) {
                  <li>
                    <a
                      [href]="link.href"
                      class="text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span class="opacity-0 group-hover:opacity-100 transition-opacity">></span>
                      <span class="group-hover:translate-x-1 transition-transform"
                        >./{{ link.label | lowercase }}</span
                      >
                    </a>
                  </li>
                }
              </ul>
            </div>

            <!-- Social Protocols -->
            <div>
              <h3
                class="flex items-center gap-2 text-sm font-bold text-slate-200 uppercase tracking-widest font-mono mb-6"
              >
                <lucide-icon [img]="GitBranch" class="w-4 h-4 text-primary"></lucide-icon>
                Ext_Protocols
              </h3>
              <ul class="space-y-3 font-mono text-xs">
                @for (social of store.socialLinks(); track social.platform) {
                  <li>
                    <a
                      [href]="social.url"
                      target="_blank"
                      class="text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <lucide-icon
                        [img]="ExternalLink"
                        class="w-3 h-3 opacity-50 group-hover:text-primary"
                      ></lucide-icon>
                      <span class="group-hover:translate-x-1 transition-transform">{{
                        social.platform
                      }}</span>
                    </a>
                  </li>
                }
              </ul>
            </div>

            <!-- Tech Specs -->
            <div>
              <h3
                class="flex items-center gap-2 text-sm font-bold text-slate-200 uppercase tracking-widest font-mono mb-6"
              >
                <lucide-icon [img]="Cpu" class="w-4 h-4 text-primary"></lucide-icon>
                Sys_Specs
              </h3>
              <ul class="space-y-3 font-mono text-xs text-slate-500">
                <li class="flex justify-between border-b border-slate-800 pb-2">
                  <span>Framework</span>
                  <span class="text-slate-300">Angular v21</span>
                </li>
                <li class="flex justify-between border-b border-slate-800 pb-2">
                  <span>State</span>
                  <span class="text-slate-300">Signals</span>
                </li>
                <li class="flex justify-between border-b border-slate-800 pb-2">
                  <span>Rendering</span>
                  <span class="text-slate-300">SSR / SSG</span>
                </li>
                <li class="flex justify-between pt-1">
                  <span>Version</span>
                  <span class="text-primary">v4.2.0-rc1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- System Footer -->
        <div
          class="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs"
        >
          <div class="text-slate-600">
            <span>root@portfolio:~$</span>
            <span class="text-slate-400 ml-2"
              >&copy; {{ currentYear }} Karol Modelski. All processes terminated.</span
            >
          </div>

          <div class="flex items-center gap-4 text-slate-600">
            <span class="flex items-center gap-1.5">
              <lucide-icon [img]="Power" class="w-3 h-3"></lucide-icon>
              <span>NO_cookies_tracked</span>
            </span>
            <span class="text-slate-800">|</span>
            <span>Latency: <span class="text-emerald-500">12ms</span></span>
          </div>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterSection {
  readonly store = inject(PortfolioStore);
  readonly currentYear = new Date().getFullYear();

  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Globe = Globe;
  readonly Terminal = Terminal;
  readonly Cpu = Cpu;
  readonly Power = Power;
  readonly GitBranch = GitBranch;
  readonly ExternalLink = ExternalLink;
}
