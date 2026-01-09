import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="about"
      class="relative isolate overflow-hidden bg-white dark:bg-slate-950 pt-16 pb-20 lg:pt-32 lg:pb-40"
    >
      <!-- Decorative background effects -->
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#93c5fd] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
        >
          <!-- Text Content -->
          <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <div class="flex items-center gap-x-4 mb-8">
              <div
                class="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10 dark:text-blue-400 dark:ring-blue-400/20"
              >
                Accepting New Clients
              </div>
            </div>

            <h1
              class="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:col-span-2 xl:col-auto"
            >
              Senior Angular Architect &
              <span class="text-blue-600 dark:text-blue-400">SaaS Founder</span>
            </h1>

            <div class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              <p>
                Delivering bank-grade, audit-ready applications with startup velocity. I combine the
                architectural rigor of Citibank & BNP Paribas with the product mindset of a SaaS
                founder to help you ship secure, scalable software fast.
              </p>
            </div>

            <div class="mt-10 flex items-center gap-x-6">
              <a
                (click)="scrollTo('contact')"
                class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer transition-all hover:scale-105 active:scale-95"
              >
                Start Your Project
              </a>
              <a
                (click)="scrollTo('cases')"
                class="group text-sm font-semibold leading-6 text-slate-900 dark:text-white cursor-pointer flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                View Work
                <span aria-hidden="true" class="group-hover:translate-x-1 transition-transform"
                  >→</span
                >
              </a>
            </div>

            <!-- Stats -->
            <div
              class="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8 flex gap-8 sm:gap-12"
            >
              <div class="flex flex-col gap-y-1">
                <dd class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">6+</dd>
                <dt
                  class="text-xs sm:text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400"
                >
                  Years Exp
                </dt>
              </div>
              <div class="flex flex-col gap-y-1">
                <dd class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  10+
                </dd>
                <dt
                  class="text-xs sm:text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400"
                >
                  Projects
                </dt>
              </div>
              <div class="flex flex-col gap-y-1">
                <dd class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  100+
                </dd>
                <dt
                  class="text-xs sm:text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400"
                >
                  Days Saved via Automation
                </dt>
              </div>
            </div>
          </div>

          <!-- Image -->
          <div
            class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 relative"
          >
            <div
              class="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] opacity-20 blur-lg -z-10 dark:opacity-30"
            ></div>
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2669&auto=format&fit=crop"
              alt="Professional workflow"
              class="aspect-[6/5] w-full rounded-2xl object-cover shadow-2xl bg-slate-50 dark:bg-slate-800 ring-1 ring-slate-900/10 dark:ring-white/10"
            />
          </div>
        </div>
      </div>

      <!-- Bottom decorative gradient -->
      <div
        class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-slate-950 sm:h-32"
        aria-hidden="true"
      ></div>
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
