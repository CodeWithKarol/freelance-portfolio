import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsSection } from './skills-section';
import { PortfolioStore } from '../../../../core/portfolio/portfolio-store';
import { signal } from '@angular/core';

describe('SkillsSection', () => {
  let component: SkillsSection;
  let fixture: ComponentFixture<SkillsSection>;
  let mockStore: Pick<PortfolioStore, 'skills'>;

  beforeEach(async () => {
    mockStore = {
      skills: signal([]),
    };

    await TestBed.configureTestingModule({
      imports: [SkillsSection],
      providers: [{ provide: PortfolioStore, useValue: mockStore }],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
