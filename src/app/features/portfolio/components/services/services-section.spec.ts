import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesSection } from './services-section';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { signal } from '@angular/core';

describe('ServicesSection', () => {
  let component: ServicesSection;
  let fixture: ComponentFixture<ServicesSection>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockStore: any;

  beforeEach(async () => {
    mockStore = { services: signal([]) };
    await TestBed.configureTestingModule({
      imports: [ServicesSection],
      providers: [{ provide: PortfolioStore, useValue: mockStore }],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
