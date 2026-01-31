import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, finalize, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { PortfolioStore } from '@core/portfolio/portfolio-store';
import { LucideAngularModule, ChevronDown, Loader2, CheckCircle } from 'lucide-angular';
import { Button } from '@shared/ui/button/button';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule, Button],
  template: `
    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
      @if (isSuccess()) {
        <div
          class="rounded-xl bg-success/10 p-6 border border-success/20 animate-in fade-in slide-in-from-bottom-2 text-center"
          role="status"
          aria-live="polite"
        >
          <div
            class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success/20 mb-4"
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
            I'll review your details to ensure I can help. If it's a match, look out for an email
            with a booking link within 24 hours.
          </p>
        </div>
      } @else {
        <div class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          <!-- Name -->
          <div class="sm:col-span-2">
            <label
              for="name"
              class="block text-sm font-semibold leading-6 text-secondary dark:text-white"
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
                [class.ring-danger]="
                  contactForm.get('name')?.touched && contactForm.get('name')?.invalid
                "
                class="block w-full rounded-md border-0 px-3.5 py-2 text-secondary shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white dark:focus:ring-primary transition-all"
              />
              @if (contactForm.get('name')?.touched && contactForm.get('name')?.invalid) {
                <p class="mt-1 text-xs text-danger" role="alert">Name is required.</p>
              }
            </div>
          </div>

          <!-- Email -->
          <div class="sm:col-span-2">
            <label
              for="email"
              class="block text-sm font-semibold leading-6 text-secondary dark:text-white"
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
                [class.ring-danger]="
                  contactForm.get('email')?.touched && contactForm.get('email')?.invalid
                "
                class="block w-full rounded-md border-0 px-3.5 py-2 text-secondary shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white dark:focus:ring-primary transition-all"
              />
              @if (contactForm.get('email')?.touched && contactForm.get('email')?.invalid) {
                <p class="mt-1 text-xs text-danger" role="alert">Valid email is required.</p>
              }
            </div>
          </div>

          <!-- Project Type -->
          <div class="sm:col-span-2">
            <label
              for="project-type"
              class="block text-sm font-semibold leading-6 text-secondary dark:text-white"
              >Project Type</label
            >
            <div class="relative mt-2.5">
              <select
                [formControlName]="'projectType'"
                id="project-type"
                class="appearance-none block w-full rounded-md border-0 px-3.5 py-2 text-secondary shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white dark:focus:ring-primary [&_option]:text-secondary"
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
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <lucide-icon [img]="ChevronDown" class="h-4 w-4 text-slate-400"></lucide-icon>
              </div>
            </div>
          </div>

          <!-- Budget -->
          <div class="sm:col-span-2">
            <label
              for="budget"
              class="block text-sm font-semibold leading-6 text-secondary dark:text-white"
              >Estimated Budget (Optional)</label
            >
            <div class="relative mt-2.5">
              <select
                [formControlName]="'budget'"
                id="budget"
                class="appearance-none block w-full rounded-md border-0 px-3.5 py-2 text-secondary shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white dark:focus:ring-primary [&_option]:text-secondary"
              >
                <option value="">Select a range</option>
                <option value="small">&lt; $1k</option>
                <option value="medium">$1k - $5k</option>
                <option value="large">$5k - $10k</option>
                <option value="enterprise">$10k+</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <lucide-icon [img]="ChevronDown" class="h-4 w-4 text-slate-400"></lucide-icon>
              </div>
            </div>
          </div>

          <!-- Details -->
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block text-sm font-semibold leading-6 text-secondary dark:text-white"
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
                [class.ring-danger]="
                  contactForm.get('message')?.touched && contactForm.get('message')?.invalid
                "
                class="block w-full rounded-md border-0 px-3.5 py-2 text-secondary shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-white/5 dark:ring-white/10 dark:text-white dark:focus:ring-primary transition-all"
              ></textarea>
              @if (contactForm.get('message')?.touched && contactForm.get('message')?.invalid) {
                <p class="mt-1 text-xs text-danger" role="alert">
                  Please provide at least 20 chars about your project goal.
                </p>
              }
            </div>
          </div>
        </div>

        <!-- Submit -->
        <div class="mt-8 flex flex-col items-center sm:items-end gap-3">
          <app-button
            type="submit"
            [disabled]="contactForm.invalid || isSubmitting()"
            styleClass="w-full sm:w-auto min-w-[140px]"
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
          </app-button>

          <a
            [href]="store.contactInfo().calendlyUrl"
            target="_blank"
            class="text-xs text-secondary/60 dark:text-slate-400 hover:text-primary dark:hover:text-primary-400 transition-colors"
          >
            Short on time? View my Calendar →
          </a>
        </div>
      }
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  readonly store = inject(PortfolioStore);
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);

  readonly ChevronDown = ChevronDown;
  readonly Loader2 = Loader2;
  readonly CheckCircle = CheckCircle;

  isSubmitting = signal(false);
  isSuccess = signal(false);
  contactForm;

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
            setTimeout(() => this.isSuccess.set(false), 8000);
          }),
          catchError((err) => {
            console.error('Form submission error:', err);
            alert('There was a problem sending your message. Please try again.');
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
