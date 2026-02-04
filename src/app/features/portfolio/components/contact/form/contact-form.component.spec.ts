import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactFormComponent } from './contact-form.component';
import { PortfolioStore } from '@core/portfolio/portfolio-store';
import { signal } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockStore: any;

  beforeEach(async () => {
    mockStore = {
      contactInfo: signal({
        email: 'test@example.com',
        location: 'Test Location',
        availability: 'Available',
        calendlyUrl: '#',
      }),
    };

    await TestBed.configureTestingModule({
      imports: [ContactFormComponent, HttpClientTestingModule],
      providers: [{ provide: PortfolioStore, useValue: mockStore }],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error message when name is touched and invalid', () => {
    const nameControl = component.contactForm.get('name');
    nameControl?.markAsTouched();
    fixture.detectChanges();

    const errorMsgs = fixture.debugElement.queryAll(By.css('.text-red-500'));
    const nameError = errorMsgs.find((el) =>
      el.nativeElement.textContent.includes('User_ID is required'),
    );
    expect(nameError).toBeTruthy();
  });

  it('should show error message when email is touched and invalid', () => {
    const emailControl = component.contactForm.get('email');
    emailControl?.markAsTouched();
    fixture.detectChanges();

    const errorMsgs = fixture.debugElement.queryAll(By.css('.text-red-500'));
    const emailError = errorMsgs.find((el) =>
      el.nativeElement.textContent.includes('Return_Address is required'),
    );
    expect(emailError).toBeTruthy();
  });

  it('should show invalid format error for email', () => {
    const emailControl = component.contactForm.get('email');
    emailControl?.setValue('invalid-email');
    emailControl?.markAsTouched();
    fixture.detectChanges();

    const errorMsgs = fixture.debugElement.queryAll(By.css('.text-red-500'));
    const emailError = errorMsgs.find((el) =>
      el.nativeElement.textContent.includes('Invalid address format'),
    );
    expect(emailError).toBeTruthy();
  });
});
