import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactSection } from './contact-section';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { signal } from '@angular/core';

describe('ContactSection', () => {
  let component: ContactSection;
  let fixture: ComponentFixture<ContactSection>;
  let mockStore: Pick<PortfolioStore, 'contactInfo' | 'socialLinks'>;

  beforeEach(async () => {
    mockStore = {
      contactInfo: signal({
        email: 'test@example.com',
        location: 'Test Location',
        availability: 'Available',
        calendlyUrl: '#',
      }),
      socialLinks: signal([]),
    };

    await TestBed.configureTestingModule({
      imports: [ContactSection],
      providers: [{ provide: PortfolioStore, useValue: mockStore }],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render contact info', () => {
    expect(fixture.nativeElement.textContent).toContain('test@example.com');
  });
});
