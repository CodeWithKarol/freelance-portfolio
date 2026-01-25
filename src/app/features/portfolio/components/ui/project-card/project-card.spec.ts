import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCardComponent } from './project-card.component';
import { provideRouter } from '@angular/router';
import { CaseStudy } from '../../../../../core/portfolio/portfolio.model';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;

  const mockProject: CaseStudy = {
    id: '1',
    title: 'Test Project',
    tagline: 'Test Tagline',
    heroImage: 'test.jpg',
    challenge: 'Challenge',
    solution: 'Solution',
    technicalApproach: 'Approach',
    results: ['Result'],
    techStack: ['Angular'],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('project', mockProject);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render project title', () => {
    const title = fixture.nativeElement.querySelector('h3');
    expect(title.textContent).toContain('Test Project');
  });

  it('should render project tagline', () => {
    // Based on template reading, usually tagline is somewhere visible
    // If not found, tests will fail and I can adjust. But I assume it's used.
    // Let's check text content of the element generally
    expect(fixture.nativeElement.textContent).toContain('Test Tagline');
  });
});
