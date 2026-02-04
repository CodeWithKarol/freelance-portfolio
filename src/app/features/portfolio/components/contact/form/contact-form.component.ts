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
    <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="font-mono">
      @if (isSuccess()) {
        <div
          class="bg-green-500/10 border border-green-500/30 p-6 rounded-sm animate-in fade-in slide-in-from-bottom-2"
          role="status"
          aria-live="polite"
        >
          <div class="flex items-start gap-4">
            <div class="text-green-500 mt-1">
              <lucide-icon [img]="CheckCircle" class="w-5 h-5"></lucide-icon>
            </div>
            <div>
              <h3 class="text-lg font-bold text-green-400 mb-2 uppercase">
                Transmission Successful
              </h3>
              <p class="text-sm text-green-300 leading-relaxed">
                [200 OK] Packet received. Acknowledgment sequence initiated.<br />
                Expect callback signal within 24h.
              </p>
            </div>
          </div>
        </div>
      } @else {
        <div class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          <!-- Name -->
          <div class="sm:col-span-2">
            <label for="name" class="block text-xs uppercase text-slate-500 mb-2 tracking-widest"
              >> User_ID / Name</label
            >
            <div class="relative">
              <span class="absolute left-3 top-2.5 text-slate-500">$</span>
              <input
                type="text"
                [formControlName]="'name'"
                id="name"
                autocomplete="name"
                placeholder="Enter identifier..."
                class="block w-full bg-slate-900 border border-slate-700 text-slate-200 py-2 pl-8 pr-3 placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-sm"
                [class.border-red-500]="
                  contactForm.get('name')?.touched && contactForm.get('name')?.invalid
                "
              />
            </div>
          </div>

          <!-- Email -->
          <div class="sm:col-span-2">
            <label for="email" class="block text-xs uppercase text-slate-500 mb-2 tracking-widest"
              >> Return_Address / Email</label
            >
            <div class="relative">
              <span class="absolute left-3 top-2.5 text-slate-500">@</span>
              <input
                type="email"
                [formControlName]="'email'"
                id="email"
                autocomplete="email"
                placeholder="user@domain.com"
                class="block w-full bg-slate-900 border border-slate-700 text-slate-200 py-2 pl-8 pr-3 placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-sm"
                [class.border-red-500]="
                  contactForm.get('email')?.touched && contactForm.get('email')?.invalid
                "
              />
            </div>
          </div>

          <!-- Project Type -->
          <div class="sm:col-span-2">
            <label
              for="project-type"
              class="block text-xs uppercase text-slate-500 mb-2 tracking-widest"
              >> Operation_Type</label
            >
            <div class="relative">
              <select
                [formControlName]="'projectType'"
                id="project-type"
                class="appearance-none block w-full bg-slate-900 border border-slate-700 text-slate-200 py-2 pl-3 pr-10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-sm cursor-pointer"
              >
                <option value="enterprise-migration">Legacy Modernization</option>
                <option value="design-system">Design System Protocol</option>
                <option value="saas-development">SaaS Architecture Build</option>
                <option value="performance">Performance Diagnostics</option>
                <option value="feature-development">Feature Module Delivery</option>
                <option value="consulting">System Audit / Consulting</option>
                <option value="other">Other Inquiry</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <lucide-icon [img]="ChevronDown" class="h-4 w-4 text-slate-500"></lucide-icon>
              </div>
            </div>
          </div>

          <!-- Budget -->
          <div class="sm:col-span-2">
            <label for="budget" class="block text-xs uppercase text-slate-500 mb-2 tracking-widest"
              >> Resource_Allocation (Optional)</label
            >
            <div class="relative">
              <select
                [formControlName]="'budget'"
                id="budget"
                class="appearance-none block w-full bg-slate-900 border border-slate-700 text-slate-200 py-2 pl-3 pr-10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-sm cursor-pointer"
              >
                <option value="">[Select Range]</option>
                <option value="small">&lt; 1k Units</option>
                <option value="medium">1k - 5k Units</option>
                <option value="large">5k - 10k Units</option>
                <option value="enterprise">10k+ Units</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <lucide-icon [img]="ChevronDown" class="h-4 w-4 text-slate-500"></lucide-icon>
              </div>
            </div>
          </div>

          <!-- Details -->
          <div class="sm:col-span-2">
            <label for="message" class="block text-xs uppercase text-slate-500 mb-2 tracking-widest"
              >> Payload_Data / Details</label
            >
            <textarea
              [formControlName]="'message'"
              id="message"
              rows="5"
              placeholder="// Enter project parameters, constraints, and objectives..."
              class="block w-full bg-slate-900 border border-slate-700 text-slate-200 py-2 px-3 placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all rounded-sm font-mono"
              [class.border-red-500]="
                contactForm.get('message')?.touched && contactForm.get('message')?.invalid
              "
            ></textarea>
            @if (contactForm.get('message')?.touched && contactForm.get('message')?.invalid) {
              <div class="mt-1 text-xs text-red-500 flex items-center gap-1">
                <span>[ERROR]</span> Payload must exceed 20 characters.
              </div>
            }
          </div>
        </div>

        <!-- Submit -->
        <div class="mt-8 flex flex-col items-center sm:items-end gap-4">
          <app-button
            type="submit"
            [disabled]="contactForm.invalid || isSubmitting()"
            styleClass="w-full sm:w-auto min-w-[200px] rounded-sm font-mono uppercase tracking-widest border-primary/50"
          >
            @if (isSubmitting()) {
              <span class="inline-flex items-center">
                <lucide-icon
                  [img]="Loader2"
                  class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                ></lucide-icon>
                UPLOADING...
              </span>
            } @else {
              EXECUTE_TRANSMISSION
            }
          </app-button>

          <a
            [href]="store.contactInfo().calendlyUrl"
            target="_blank"
            class="text-xs font-mono text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group"
          >
            <span class="group-hover:translate-x-1 transition-transform">>></span>
            <span>Bypass Protocol: Schedule Sync Event</span>
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
