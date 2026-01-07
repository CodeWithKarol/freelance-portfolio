import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Let's Build Something Amazing
          </h2>
          <p class="mt-4 text-xl text-gray-500 dark:text-gray-300">
            Ready to scale your Angular/React project?
          </p>
        </div>

        <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <!-- Contact Info -->
            <div class="p-10 bg-indigo-600 text-white">
              <h3 class="text-2xl font-bold mb-6">Contact Information</h3>
              <p class="mb-8 text-indigo-100">
                I'm currently available for freelance projects and consulting. Schedule a call or
                create a request.
              </p>

              <div class="space-y-6">
                <div class="flex items-center">
                  <svg
                    class="h-6 w-6 mr-4 text-indigo-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>hello&#64;scale-sail.io</span>
                </div>
                <div class="flex items-center">
                  <svg
                    class="h-6 w-6 mr-4 text-indigo-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Ząbki, Poland (Remote)</span>
                </div>
              </div>

              <div class="mt-12">
                <h4 class="font-bold mb-4">Connect Schedule</h4>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  class="inline-block px-6 py-3 border border-white rounded-md text-white hover:bg-white hover:text-indigo-600 transition-colors font-medium"
                >
                  Book 15 min Call
                </a>
              </div>
            </div>

            <!-- Form -->
            <div class="p-10">
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
                <div class="space-y-6">
                  <div>
                    <label
                      for="name"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >Name</label
                    >
                    <input
                      type="text"
                      formControlName="name"
                      id="name"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white sm:text-sm p-3 border"
                    />
                    @if (contactForm.get('name')?.touched && contactForm.get('name')?.invalid) {
                    <p class="mt-1 text-sm text-red-600">Name is required.</p>
                    }
                  </div>

                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >Email</label
                    >
                    <input
                      type="email"
                      formControlName="email"
                      id="email"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white sm:text-sm p-3 border"
                    />
                    @if (contactForm.get('email')?.touched && contactForm.get('email')?.invalid) {
                    <p class="mt-1 text-sm text-red-600">Valid email is required.</p>
                    }
                  </div>

                  <div>
                    <label
                      for="type"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >Project Type</label
                    >
                    <select
                      formControlName="projectType"
                      id="type"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white sm:text-sm p-3 border"
                    >
                      <option value="angular">Angular Enterprise App</option>
                      <option value="react">React Dashboard</option>
                      <option value="consulting">Consulting / Audit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      for="message"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >Message</label
                    >
                    <textarea
                      formControlName="message"
                      id="message"
                      rows="4"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white sm:text-sm p-3 border"
                    ></textarea>
                    @if (contactForm.get('message')?.touched && contactForm.get('message')?.invalid)
                    {
                    <p class="mt-1 text-sm text-red-600">Message is required.</p>
                    }
                  </div>

                  <button
                    type="submit"
                    [disabled]="contactForm.invalid || isSubmitting()"
                    class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    @if (isSubmitting()) {
                    <span>Sending...</span>
                    } @else {
                    <span>Send Message</span>
                    }
                  </button>

                  @if (isSuccess()) {
                  <div class="p-4 bg-green-50 text-green-700 rounded-md">
                    Message sent successfully! I'll be in touch soon.
                  </div>
                  }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
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
