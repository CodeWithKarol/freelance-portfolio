import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterSection } from './footer-section';
import { PortfolioStore } from '../../../core/portfolio/portfolio-store';
import { signal } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('FooterSection', () => {
  let component: FooterSection;
  let fixture: ComponentFixture<FooterSection>;
  let mockStore: Pick<PortfolioStore, 'socialLinks' | 'footerColumns' | 'contactInfo'>;

  beforeEach(async () => {
    mockStore = {
      socialLinks: signal([]),
      footerColumns: signal([
        { title: 'Col1', links: [{ label: 'Link1', href: '#' }] },
        { title: 'Col2', links: [] },
        { title: 'Col3', links: [] },
        { title: 'Col4', links: [] },
      ]),
      contactInfo: signal({
        email: 'test@example.com',
        location: 'Test Location',
        availability: 'Available',
        calendlyUrl: '#',
      }),
    };

    await TestBed.configureTestingModule({
      imports: [FooterSection],
      providers: [provideRouter([]), { provide: PortfolioStore, useValue: mockStore }],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render system status', () => {
    expect(fixture.nativeElement.textContent).toContain('SYSTEM_ONLINE');
  });
});
