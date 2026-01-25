import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseStudiesSection } from './case-studies-section';
import { provideRouter } from '@angular/router';

describe('CaseStudiesSection', () => {
  let component: CaseStudiesSection;
  let fixture: ComponentFixture<CaseStudiesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudiesSection],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseStudiesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
