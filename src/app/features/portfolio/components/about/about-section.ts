import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="relative isolate overflow-hidden bg-white dark:bg-slate-950">
      <svg
        class="absolute inset-0 -z-10 h-full w-full stroke-slate-200 dark:stroke-slate-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-9781-4f66-8381-37d53061646d"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#0787a7c5-9781-4f66-8381-37d53061646d)"
        />
      </svg>

      <div
        class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 xl:flex xl:items-center lg:px-8 lg:py-40"
      >
        <div
          class="mx-auto max-w-2xl xl:mx-0 xl:max-w-xl xl:flex-shrink-0 text-center xl:text-left"
        >
          <div class="mt-24 sm:mt-32 xl:mt-0">
            <div class="inline-flex space-x-6">
              <span
                class="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10 dark:text-blue-400 dark:ring-blue-400/20"
                >Available for projects</span
              >
            </div>
          </div>
          <h1
            class="mt-10 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl md:text-6xl"
          >
            Senior Angular Developer & Frontend Architect
          </h1>
          <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Turning Ideas Into Scalable Angular Magic. I help enterprise teams build scalable,
            high-performance web applications. Specializing in
            <span class="text-blue-600 dark:text-blue-400 font-semibold">Angular</span> migrations,
            Nx Monorepos, and complex state management.
          </p>
          <div class="mt-10 flex items-center justify-center xl:justify-start gap-x-6">
            <a
              (click)="scrollTo('contact')"
              class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer transition-colors"
            >
              Hire Me
            </a>
            <a
              (click)="scrollTo('cases')"
              class="text-sm font-semibold leading-6 text-slate-900 dark:text-white cursor-pointer group"
            >
              View Work
              <span
                aria-hidden="true"
                class="inline-block transition-transform group-hover:translate-x-1"
                >→</span
              >
            </a>
          </div>

          <div
            class="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-center xl:justify-start gap-8 sm:gap-12"
          >
            <div class="flex flex-col">
              <dd
                class="text-2xl font-bold leading-9 tracking-tight text-slate-900 dark:text-white"
              >
                6+
              </dd>
              <dt class="text-sm leading-7 text-slate-600 dark:text-slate-300">Years Exp</dt>
            </div>
            <div class="flex flex-col">
              <dd
                class="text-2xl font-bold leading-9 tracking-tight text-slate-900 dark:text-white"
              >
                20+
              </dd>
              <dt class="text-sm leading-7 text-slate-600 dark:text-slate-300">Projects</dt>
            </div>
            <div class="flex flex-col">
              <dd
                class="text-2xl font-bold leading-9 tracking-tight text-slate-900 dark:text-white"
              >
                3.5M+
              </dd>
              <dt class="text-sm leading-7 text-slate-600 dark:text-slate-300">Readers Inspired</dt>
            </div>
          </div>
        </div>

        <div
          class="mx-auto mt-16 flex max-w-2xl sm:mt-24 justify-center xl:ml-10 xl:mt-0 xl:mr-0 xl:max-w-none xl:flex-none xl:ml-32"
        >
          <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div
              class="-m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 dark:bg-white/5 dark:ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4"
            >
              <!-- Code Browser Mockup -->
              <div
                class="rounded-lg shadow-2xl bg-slate-900 ring-1 ring-white/10 w-full max-w-[90vw] sm:max-w-[34rem] md:max-w-[40rem] overflow-hidden"
              >
                <div
                  class="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-white/5"
                >
                  <div class="flex gap-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div class="ml-4 text-xs font-mono text-slate-400 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                    src/app/core/architecture.ts
                  </div>
                </div>
                <div
                  class="p-6 font-mono text-xs sm:text-sm text-blue-300 leading-relaxed overflow-x-auto"
                >
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">1</span
                    ><span class="text-purple-400">import</span>&nbsp;{{ '{' }}&nbsp;<span
                      class="text-yellow-300"
                      >Injectable</span
                    >,&nbsp;<span class="text-yellow-300">signal</span>&nbsp;{{ '}' }}&nbsp;<span
                      class="text-purple-400"
                      >from</span
                    >&nbsp;<span class="text-green-400">'@angular/core'</span>;
                  </div>
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">2</span>
                  </div>
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">3</span
                    ><span class="text-purple-400">@Injectable</span>({{ '{' }}
                  </div>
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">4</span>
                    &nbsp;&nbsp;<span class="text-blue-300">providedIn:</span>&nbsp;<span
                      class="text-green-400"
                      >'root'</span
                    >
                  </div>
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">5</span>{{ '}' }})
                  </div>
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">6</span
                    ><span class="text-purple-400">export&nbsp;class</span>&nbsp;<span
                      class="text-yellow-300"
                      >EnterpriseArchitecture</span
                    >&nbsp;{{ '{' }}
                  </div>
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">7</span>
                    &nbsp;&nbsp;<span class="text-slate-400"
                      >//&nbsp;Reactive&nbsp;State&nbsp;Management</span
                    >
                  </div>
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">8</span>
                    &nbsp;&nbsp;<span class="text-purple-400">readonly</span>&nbsp;<span
                      class="text-blue-300"
                      >state</span
                    >&nbsp;=&nbsp;<span class="text-yellow-300">signal</span>&lt;<span
                      class="text-yellow-300"
                      >AppState</span
                    >&gt;({{ '{' }}
                  </div>
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">9</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-300">performance:</span
                    >&nbsp;<span class="text-green-400">'optimized'</span>,
                  </div>
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">10</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-300">architecture:</span
                    >&nbsp;<span class="text-green-400">'scalable'</span>,
                  </div>
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">11</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-300">techDebt:</span>&nbsp;<span
                      class="text-purple-400"
                      >null</span
                    >
                  </div>
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">12</span>
                    &nbsp;&nbsp;{{ '}' }});
                  </div>
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">13</span>
                  </div>
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">14</span>
                    &nbsp;&nbsp;<span class="text-purple-400">constructor</span>()&nbsp;{{ '{' }}
                  </div>
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">15</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-300">this</span>.<span
                      class="text-yellow-300"
                      >shipHighQualityCode</span
                    >();
                  </div>
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">16</span
                    >&nbsp;&nbsp;{{ '}' }}
                  </div>
                  <div class="flex">
                    <span class="text-slate-500 w-8 text-right mr-4 select-none">17</span>{{ '}' }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  private scroller = inject(ViewportScroller);

  scrollTo(anchor: string) {
    this.scroller.scrollToAnchor(anchor);
  }
}
