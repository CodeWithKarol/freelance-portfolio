import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="relative isolate bg-white dark:bg-slate-950 py-24 sm:py-32">
      <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg text-center lg:text-left">
            <div
              class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-slate-50 dark:bg-slate-900 ring-1 ring-slate-900/10 lg:w-1/2"
            >
              <svg
                class="absolute inset-0 h-full w-full stroke-slate-200 dark:stroke-slate-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width="200"
                    height="200"
                    x="100%"
                    y="-1"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  stroke-width="0"
                  fill="white"
                  class="dark:fill-slate-900"
                />
                <svg x="100%" y="-1" class="overflow-visible fill-slate-50 dark:fill-slate-800/20">
                  <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  stroke-width="0"
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <h2 class="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500">
              Start Your Project
            </h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl"
            >
              Ready to Scale?
            </p>
            <p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Whether you need to rescue a legacy codebase or launch an MVP in 4 weeks. I bring the
              rigor of big tech to your startup.
            </p>
            <dl
              class="mt-10 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-400 inline-block text-left"
            >
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Email</span>
                  <svg
                    class="h-7 w-6 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </dt>
                <dd>
                  <a
                    class="hover:text-slate-900 dark:hover:text-slate-100"
                    [href]="'mailto:' + store.contactInfo().email"
                    >{{ store.contactInfo().email }}</a
                  >
                </dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Address</span>
                  <svg
                    class="h-7 w-6 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </dt>
                <dd>{{ store.contactInfo().location }}</dd>
              </div>
            </dl>

            <div class="mt-10 pt-10 border-t border-slate-200 dark:border-slate-800">
              <h3 class="text-base font-semibold leading-7 text-slate-900 dark:text-slate-100">
                Schedule a call
              </h3>
              <p class="mt-2 text-base leading-7">
                <a
                  [href]="store.contactInfo().calendlyUrl"
                  target="_blank"
                  class="font-semibold text-blue-600 hover:text-blue-500"
                >
                  Book 15 min consultation <span aria-hidden="true">&rarr;</span>
                </a>
              </p>
            </div>
          </div>
        </div>

        <form
          [formGroup]="contactForm"
          (ngSubmit)="onSubmit()"
          class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100"
                  >Name</label
                >
                <div class="relative mt-2.5">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      class="h-5 w-5 text-slate-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    formControlName="name"
                    id="name"
                    autocomplete="name"
                    class="block w-full rounded-md border-0 py-2 pl-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-slate-900/50 dark:ring-slate-700 dark:text-slate-100"
                    placeholder="John Doe"
                  />
                </div>
                @if (contactForm.get('name')?.touched && contactForm.get('name')?.invalid) {
                <p class="mt-1 text-sm text-red-600">Name is required.</p>
                }
              </div>
              <div class="sm:col-span-2">
                <label
                  for="email"
                  class="block text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100"
                  >Email</label
                >
                <div class="relative mt-2.5">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      class="h-5 w-5 text-slate-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"
                      />
                      <path
                        d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    formControlName="email"
                    id="email"
                    autocomplete="email"
                    class="block w-full rounded-md border-0 py-2 pl-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-slate-900/50 dark:ring-slate-700 dark:text-slate-100"
                    placeholder="john@example.com"
                  />
                </div>
                @if (contactForm.get('email')?.touched && contactForm.get('email')?.invalid) {
                <p class="mt-1 text-sm text-red-600">Valid email is required.</p>
                }
              </div>
              <div class="sm:col-span-2">
                <label
                  for="project-type"
                  class="block text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100"
                  >Project Type</label
                >
                <div class="relative mt-2.5">
                  <select
                    formControlName="projectType"
                    id="project-type"
                    class="appearance-none block w-full rounded-md border-0 px-3.5 py-2 pr-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-slate-900/50 dark:ring-slate-700 dark:text-slate-100"
                  >
                    <option value="angular">Angular Enterprise App</option>
                    <option value="react">React Dashboard</option>
                    <option value="consulting">Consulting / Audit</option>
                    <option value="other">Other</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <svg
                      class="h-5 w-5 text-slate-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100"
                  >Message</label
                >
                <div class="mt-2.5">
                  <textarea
                    formControlName="message"
                    id="message"
                    rows="4"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-slate-900/50 dark:ring-slate-700 dark:text-slate-100"
                  ></textarea>
                  @if (contactForm.get('message')?.touched && contactForm.get('message')?.invalid) {
                  <p class="mt-1 text-sm text-red-600">Message is required.</p>
                  }
                </div>
              </div>
            </div>
            <div class="mt-8 flex justify-end">
              <button
                type="submit"
                [disabled]="contactForm.invalid || isSubmitting()"
                class="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                @if (isSubmitting()) { Sending... } @else { Send Message }
              </button>
            </div>
            @if (isSuccess()) {
            <div
              class="mt-4 p-4 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800"
            >
              Message sent successfully! I'll be in touch soon.
            </div>
            }
          </div>
        </form>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  readonly store = inject(PortfolioStore);
  isSubmitting = signal(false);
  isSuccess = signal(false);
  contactForm;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      projectType: ['angular'],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);

      // Simulate API call
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.isSuccess.set(true);
        this.contactForm.reset({ projectType: 'angular' });

        // Hide success message after 5 seconds
        setTimeout(() => this.isSuccess.set(false), 5000);
      }, 1500);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
