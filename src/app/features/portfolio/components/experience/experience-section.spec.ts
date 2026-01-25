import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceSection } from './experience-section';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { signal } from '@angular/core';

describe('ExperienceSection', () => {
  let component: ExperienceSection;
  let fixture: ComponentFixture<ExperienceSection>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockStore: any;

  beforeEach(async () => {
    mockStore = {
      experience: signal([
        {
          company: 'Test Company',
          role: 'Developer',
          period: '2023',
          description: 'Worked here',
          technologies: ['Tech'],
        },
      ]),
    };

    await TestBed.configureTestingModule({
      imports: [ExperienceSection],
      providers: [{ provide: PortfolioStore, useValue: mockStore }],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render experience items', () => {
    expect(fixture.nativeElement.textContent).toContain('Test Company');
  });
});
