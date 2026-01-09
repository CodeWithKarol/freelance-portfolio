import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="relative bg-white dark:bg-slate-950 isolate">
      <div class="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          class="h-64 w-full bg-slate-50 object-cover sm:h-80 lg:absolute lg:h-full transition-opacity duration-500 hover:opacity-90"
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Office collaboration meeting"
        />
        <!-- Overlay/Gradient for better text contrast if needed or just mood -->
        <div
          class="absolute inset-0 bg-gradient-to-tr from-primary-600/10 to-primary-400/10 mix-blend-multiply"
        ></div>
      </div>

      <div
        class="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32"
      >
        <div class="px-6 lg:px-8">
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <!-- Header Section -->
            <div class="mb-10">
              <h2
                class="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400 mb-2"
              >
                Get in Touch
              </h2>
              <p
                class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
              >
                Let's work together
              </p>
              <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Ready to transform your technical vision into reality? Whether it's an enterprise
                Angular migration or a new SaaS product, let's discuss how we can achieve your
                goals.
              </p>

              <!-- Contact Info Details -->
              <dl class="mt-8 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-400">
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Email</span>
                    <svg
                      class="h-7 w-6 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
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
                      class="hover:text-slate-900 dark:hover:text-white transition-colors"
                      [href]="'mailto:' + store.contactInfo().email"
                    >
                      {{ store.contactInfo().email }}
                    </a>
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

              <div class="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8">
                <h3 class="text-sm font-semibold text-slate-900 dark:text-white">Prefer a call?</h3>
                <a
                  [href]="store.contactInfo().calendlyUrl"
                  target="_blank"
                  class="mt-2 text-sm font-semibold leading-6 text-primary-600 dark:text-primary-400 hover:text-primary-500 inline-flex items-center gap-1 group"
                >
                  Book a free 15-min consultation
                  <span aria-hidden="true" class="group-hover:translate-x-1 transition-transform"
                    >→</span
                  >
                </a>
              </div>
            </div>

            <!-- Form -->
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="mt-8 space-y-6">
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <!-- Name Field -->
                <div class="sm:col-span-2">
                  <label
                    for="name"
                    class="block text-sm font-semibold leading-6 text-slate-900 dark:text-white"
                    >Name</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="text"
                      formControlName="name"
                      id="name"
                      autocomplete="name"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white dark:focus:ring-primary-500"
                    />
                    @if (contactForm.get('name')?.touched && contactForm.get('name')?.invalid) {
                    <p class="mt-1 text-sm text-red-600">Name is required.</p>
                    }
                  </div>
                </div>

                <!-- Email Field -->
                <div class="sm:col-span-2">
                  <label
                    for="email"
                    class="block text-sm font-semibold leading-6 text-slate-900 dark:text-white"
                    >Email</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="email"
                      formControlName="email"
                      id="email"
                      autocomplete="email"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white dark:focus:ring-primary-500"
                    />
                    @if (contactForm.get('email')?.touched && contactForm.get('email')?.invalid) {
                    <p class="mt-1 text-sm text-red-600">Valid email is required.</p>
                    }
                  </div>
                </div>

                <!-- Project Type Field -->
                <div class="sm:col-span-2">
                  <label
                    for="project-type"
                    class="block text-sm font-semibold leading-6 text-slate-900 dark:text-white"
                    >Project Type</label
                  >
                  <div class="relative mt-2.5">
                    <select
                      formControlName="projectType"
                      id="project-type"
                      class="appearance-none block w-full rounded-md border-0 px-3.5 py-2 pr-10 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white dark:focus:ring-primary-500 [&_option]:text-slate-900"
                    >
                      <option value="enterprise-migration">
                        Enterprise Migration (Legacy to Clean Arch)
                      </option>
                      <option value="design-system">Custom Design System / UI Library</option>
                      <option value="saas-development">SaaS Product Development</option>
                      <option value="performance">Performance Audit & Optimization</option>
                      <option value="feature-development">Feature / Component Development</option>
                      <option value="code-review">Code Review & Mentorship</option>
                      <option value="consulting">Architecture Consulting</option>
                      <option value="staff-augmentation">Staff Augmentation / Team Lead</option>
                      <option value="other">Other Inquiry</option>
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

                <!-- Message Field -->
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block text-sm font-semibold leading-6 text-slate-900 dark:text-white"
                    >Message</label
                  >
                  <div class="mt-2.5">
                    <textarea
                      formControlName="message"
                      id="message"
                      rows="4"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white dark:focus:ring-primary-500"
                    ></textarea>
                    @if (contactForm.get('message')?.touched && contactForm.get('message')?.invalid)
                    {
                    <p class="mt-1 text-sm text-red-600">Message is required (min 10 chars).</p>
                    }
                  </div>
                </div>
              </div>

              <!-- Submit Button & Success Message -->
              <div class="mt-8">
                <button
                  type="submit"
                  [disabled]="contactForm.invalid || isSubmitting()"
                  class="block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  @if (isSubmitting()) {
                  <span class="inline-flex items-center">
                    <svg
                      class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                  } @else { Send Message }
                </button>
              </div>

              @if (isSuccess()) {
              <div
                class="rounded-md bg-emerald-50 dark:bg-emerald-900/30 p-4 border border-emerald-200 dark:border-emerald-800 animate-in fade-in slide-in-from-bottom-2"
              >
                <div class="flex">
                  <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-emerald-800 dark:text-emerald-200">
                      Message sent successfully! I'll be in touch soon.
                    </p>
                  </div>
                </div>
              </div>
              }
            </form>
          </div>
        </div>
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
      projectType: ['enterprise-migration'],
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
        this.contactForm.reset({ projectType: 'enterprise-migration' });

        // Hide success message after 5 seconds
        setTimeout(() => this.isSuccess.set(false), 5000);
      }, 1500);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
