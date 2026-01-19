import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, finalize, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import {
  LucideAngularModule,
  Mail,
  MapPin,
  ChevronDown,
  Loader2,
  CheckCircle,
} from 'lucide-angular';
import { SectionHeaderComponent } from '../../../../shared/ui/section-header/section-header.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule, SectionHeaderComponent],
  template: `
    <section id="contact" class="isolate relative bg-white dark:bg-slate-950 sm:pt-16 lg:pt-0">
      <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <!-- Left Column: Info & Context -->
        <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-0 lg:py-48">
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <!-- Branding/Decorative Background for Mobile/Tablet context (optional) or just white space -->
            <div
              class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-slate-100 ring-1 ring-slate-900/10 lg:w-1/2 dark:bg-slate-900 dark:ring-white/10"
            >
              <svg
                class="absolute inset-0 h-full w-full stroke-slate-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-slate-800"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="hex-pattern"
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
                <rect width="100%" height="100%" stroke-width="0" fill="url(#hex-pattern)" />
              </svg>
              <!-- Decorative Image Blur -->
              <div
                class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-primary-400 to-indigo-600 opacity-20"
                  style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                ></div>
              </div>
            </div>

            <app-section-header
              preTitle="Get in Touch"
              title="Start a Project"
              description="If you're dealing with a slow, hard-to-change frontend (or planning a new SaaS build), I can help you ship with confidence. Share your goals and constraints—I'll review your inquiry and if it's a good fit, I'll send you a link to book a discovery call."
              alignment="left"
            />

            <dl class="mt-10 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-400">
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
          </div>
        </div>

        <!-- Right Column: Form -->
        <form
          [formGroup]="contactForm"
          (ngSubmit)="onSubmit()"
          class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            @if (isSuccess()) {
              <div
                class="rounded-xl bg-emerald-50 dark:bg-emerald-900/20 p-6 border border-emerald-100 dark:border-emerald-800 animate-in fade-in slide-in-from-bottom-2 text-center"
                role="status"
                aria-live="polite"
              >
                <div
                  class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900 mb-4"
                >
                  <lucide-icon
                    [img]="CheckCircle"
                    class="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                  ></lucide-icon>
                </div>
                <h3 class="text-lg font-semibold text-emerald-900 dark:text-emerald-100 mb-2">
                  Inquiry received!
                </h3>
                <p class="text-sm text-emerald-700 dark:text-emerald-300 leading-relaxed">
                  I'll review your details to ensure I can help. If it's a match, look out for an
                  email with a booking link within 24 hours.
                </p>
              </div>
            } @else {
              <div class="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                <!-- Name -->
                <div class="sm:col-span-2">
                  <label
                    for="name"
                    class="block text-sm font-semibold leading-6 text-slate-900 dark:text-white"
                    >Name</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="text"
                      [formControlName]="'name'"
                      id="name"
                      autocomplete="name"
                      [attr.aria-invalid]="
                        contactForm.get('name')?.touched && contactForm.get('name')?.invalid
                          ? 'true'
                          : null
                      "
                      [attr.aria-describedby]="
                        contactForm.get('name')?.touched && contactForm.get('name')?.invalid
                          ? 'name-error'
                          : null
                      "
                      [class.ring-red-500]="
                        contactForm.get('name')?.touched && contactForm.get('name')?.invalid
                      "
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white dark:focus:ring-primary-500 transition-shadow"
                    />
                    @if (contactForm.get('name')?.touched && contactForm.get('name')?.invalid) {
                      <p id="name-error" class="mt-1 text-xs text-red-500" role="alert">
                        Name is required.
                      </p>
                    }
                  </div>
                </div>

                <!-- Email -->
                <div class="sm:col-span-2">
                  <label
                    for="email"
                    class="block text-sm font-semibold leading-6 text-slate-900 dark:text-white"
                    >Email</label
                  >
                  <div class="mt-2.5">
                    <input
                      type="email"
                      [formControlName]="'email'"
                      id="email"
                      autocomplete="email"
                      [attr.aria-invalid]="
                        contactForm.get('email')?.touched && contactForm.get('email')?.invalid
                          ? 'true'
                          : null
                      "
                      [attr.aria-describedby]="
                        contactForm.get('email')?.touched && contactForm.get('email')?.invalid
                          ? 'email-error'
                          : null
                      "
                      [class.ring-red-500]="
                        contactForm.get('email')?.touched && contactForm.get('email')?.invalid
                      "
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white dark:focus:ring-primary-500 transition-shadow"
                    />
                    @if (contactForm.get('email')?.touched && contactForm.get('email')?.invalid) {
                      <p id="email-error" class="mt-1 text-xs text-red-500" role="alert">
                        Valid email is required.
                      </p>
                    }
                  </div>
                </div>

                <!-- Project Type -->
                <div class="sm:col-span-2">
                  <label
                    for="project-type"
                    class="block text-sm font-semibold leading-6 text-slate-900 dark:text-white"
                    >Project Type</label
                  >
                  <div class="relative mt-2.5">
                    <select
                      [formControlName]="'projectType'"
                      id="project-type"
                      class="appearance-none block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white dark:focus:ring-primary-500 [&_option]:text-slate-900"
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
                      <lucide-icon [img]="ChevronDown" class="h-4 w-4 text-slate-400"></lucide-icon>
                    </div>
                  </div>
                </div>

                <!-- Budget -->
                <div class="sm:col-span-2">
                  <label
                    for="budget"
                    class="block text-sm font-semibold leading-6 text-slate-900 dark:text-white"
                    >Estimated Budget (Optional)</label
                  >
                  <div class="relative mt-2.5">
                    <select
                      [formControlName]="'budget'"
                      id="budget"
                      class="appearance-none block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white dark:focus:ring-primary-500 [&_option]:text-slate-900"
                    >
                      <option value="">Select a range</option>
                      <option value="small">&lt; $1k</option>
                      <option value="medium">$1k - $5k</option>
                      <option value="large">$5k - $10k</option>
                      <option value="enterprise">$10k+</option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      <lucide-icon [img]="ChevronDown" class="h-4 w-4 text-slate-400"></lucide-icon>
                    </div>
                  </div>
                </div>

                <!-- Details -->
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block text-sm font-semibold leading-6 text-slate-900 dark:text-white"
                    >Project Details & Goals</label
                  >
                  <div class="mt-2.5">
                    <textarea
                      [formControlName]="'message'"
                      id="message"
                      rows="4"
                      [attr.aria-invalid]="
                        contactForm.get('message')?.touched && contactForm.get('message')?.invalid
                          ? 'true'
                          : null
                      "
                      [attr.aria-describedby]="
                        contactForm.get('message')?.touched && contactForm.get('message')?.invalid
                          ? 'message-error'
                          : null
                      "
                      [class.ring-red-500]="
                        contactForm.get('message')?.touched && contactForm.get('message')?.invalid
                      "
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white dark:focus:ring-primary-500 transition-shadow"
                    ></textarea>
                    @if (
                      contactForm.get('message')?.touched && contactForm.get('message')?.invalid
                    ) {
                      <p id="message-error" class="mt-1 text-xs text-red-500" role="alert">
                        Please provide at least 20 chars about your project goal.
                      </p>
                    }
                  </div>
                </div>
              </div>

              <!-- Submit -->
              <div class="mt-8 flex justify-end">
                <button
                  type="submit"
                  [disabled]="contactForm.invalid || isSubmitting()"
                  class="rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all w-full sm:w-auto min-w-[140px]"
                >
                  @if (isSubmitting()) {
                    <span class="inline-flex items-center">
                      <lucide-icon
                        [img]="Loader2"
                        class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      ></lucide-icon>
                      Sending...
                    </span>
                  } @else {
                    Send Message
                  }
                </button>
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
  private http = inject(HttpClient);

  readonly Mail = Mail;
  readonly MapPin = MapPin;
  readonly ChevronDown = ChevronDown;
  readonly Loader2 = Loader2;
  readonly CheckCircle = CheckCircle;

  isSubmitting = signal(false);
  isSuccess = signal(false);
  contactForm;
  private fb = inject(FormBuilder);

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      projectType: ['enterprise-migration'],
      budget: [''],
      message: ['', [Validators.required, Validators.minLength(20)]],
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
            this.contactForm.reset({ projectType: 'enterprise-migration', budget: '' });

            // Hide success message after 5 seconds
            setTimeout(() => this.isSuccess.set(false), 8000);
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
          }),
        )
        .subscribe();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
