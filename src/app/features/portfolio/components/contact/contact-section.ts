import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, finalize, take } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import {
  LucideAngularModule,
  Mail,
  MapPin,
  ChevronDown,
  Loader2,
  CheckCircle,
} from 'lucide-angular';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  template: `
    <section id="contact" class="relative bg-white dark:bg-slate-950 isolate">
      <div class="relative lg:absolute lg:inset-0 lg:left-1/2">
        <img
          class="h-64 w-full bg-slate-50 object-cover sm:h-80 lg:absolute lg:h-full transition-opacity duration-500 hover:opacity-90"
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Office collaboration meeting"
        />
        <!-- Overlay/Gradient for better text contrast if needed or just mood -->
        <div
          class="absolute inset-0 bg-gradient-to-tr from-primary-600/10 to-primary-400/10 mix-blend-multiply pointer-events-none"
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
                Book a Call
              </p>
              <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                If you're dealing with a slow, hard-to-change frontend (or planning a new SaaS
                build), I can help you ship with confidence. Share your goals and constraints—I'll
                reply with a clear recommendation and next steps.
              </p>

              <!-- Contact Info Details -->
              <dl class="mt-8 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-400">
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Email</span>
                    <lucide-icon [img]="Mail" class="h-7 w-6 text-slate-400"></lucide-icon>
                  </dt>
                  <dd>
                    <a
                      class="hover:text-slate-900 dark:hover:text-white transition-colors break-all"
                      [href]="'mailto:' + store.contactInfo().email"
                    >
                      {{ store.contactInfo().email }}
                    </a>
                  </dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Address</span>
                    <lucide-icon [img]="MapPin" class="h-7 w-6 text-slate-400"></lucide-icon>
                  </dt>
                  <dd>{{ store.contactInfo().location }}</dd>
                </div>
              </dl>

              <div class="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8">
                <h3 class="text-sm font-semibold text-slate-900 dark:text-white">
                  Prefer a quick call?
                </h3>
                <a
                  [href]="store.contactInfo().calendlyUrl"
                  target="_blank"
                  class="mt-2 text-sm font-semibold leading-6 text-primary-600 dark:text-primary-400 hover:text-primary-500 inline-flex items-center gap-1 group"
                >
                  Book a 15-min call
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
                        Legacy Modernization (Upgrade + Clean Architecture)
                      </option>
                      <option value="design-system">Design System / UI Library</option>
                      <option value="saas-development">New SaaS Build</option>
                      <option value="performance">Performance Audit & Optimization</option>
                      <option value="feature-development">Feature Delivery</option>
                      <option value="code-review">Code Review / Mentorship</option>
                      <option value="consulting">Architecture Review & Roadmap</option>
                      <option value="staff-augmentation">Staff Augmentation / Tech Lead</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      <lucide-icon [img]="ChevronDown" class="h-5 w-5 text-slate-400"></lucide-icon>
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
                    <lucide-icon
                      [img]="Loader2"
                      class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    ></lucide-icon>
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
                    <lucide-icon [img]="CheckCircle" class="h-5 w-5 text-emerald-400"></lucide-icon>
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
  private http = inject(HttpClient);

  readonly Mail = Mail;
  readonly MapPin = MapPin;
  readonly ChevronDown = ChevronDown;
  readonly Loader2 = Loader2;
  readonly CheckCircle = CheckCircle;

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

      // Web3Forms Setup
      // 1. Get your Access Key at https://web3forms.com/
      // 2. Replace 'YOUR_ACCESS_KEY_HERE' below
      const payload = {
        ...this.contactForm.value,
        access_key: '7522df11-e5cf-4285-b128-bfdf0fb03e97',
        subject: 'New Portfolio Contact Form Submission',
      };

      const formEndpoint = 'https://api.web3forms.com/submit';

      this.http
        .post(formEndpoint, payload)
        .pipe(
          take(1),
          tap(() => {
            this.isSuccess.set(true);
            this.contactForm.reset({ projectType: 'enterprise-migration' });

            // Hide success message after 5 seconds
            setTimeout(() => this.isSuccess.set(false), 5000);
          }),
          catchError((err) => {
            console.error('Form submission error:', err);

            if (payload.access_key === 'YOUR_ACCESS_KEY_HERE') {
              alert('Please configure your Web3Forms Access Key in contact-section.ts');
            } else {
              alert('There was a problem sending your message. Please try again.');
            }
            return of(null);
          }),
          finalize(() => {
            this.isSubmitting.set(false);
          })
        )
        .subscribe();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
