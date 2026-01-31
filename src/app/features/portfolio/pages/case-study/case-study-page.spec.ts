import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseStudyPage } from './case-study-page';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { provideRouter } from '@angular/router';
import { signal } from '@angular/core';

describe('CaseStudyPage', () => {
  let component: CaseStudyPage;
  let fixture: ComponentFixture<CaseStudyPage>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockPortfolioStore: any;

  const mockCaseStudies = [
    {
      id: 'test-study',
      title: 'Test Study',
      tagline: 'A test case study',
      heroImage: '/test.jpg',
      challenge: 'Test challenge',
      solution: 'Test solution',
      techStack: ['Angular'],
      results: ['Result 1'],
      repoUrl: 'http://repo',
      demoUrl: 'http://demo',
    },
  ];

  beforeEach(async () => {
    mockPortfolioStore = {
      caseStudies: signal(mockCaseStudies),
    };

    await TestBed.configureTestingModule({
      imports: [CaseStudyPage],
      providers: [provideRouter([]), { provide: PortfolioStore, useValue: mockPortfolioStore }],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseStudyPage);
    component = fixture.componentInstance;

    // Set required input
    fixture.componentRef.setInput('slug', 'test-study');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find the correct case study based on slug', () => {
    expect(component.caseStudy()).toEqual(mockCaseStudies[0]);
  });
});
