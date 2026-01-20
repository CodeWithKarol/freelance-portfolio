import { TestBed } from '@angular/core/testing';
import { PortfolioStore } from './portfolio-store';

describe('PortfolioStore', () => {
  let store: PortfolioStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    store = TestBed.inject(PortfolioStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  it('should have skills signal populated', () => {
    const skills = store.skills();
    expect(skills.length).toBeGreaterThan(0);
    expect(skills[0].name).toContain('Angular');
  });

  it('should have services signal populated', () => {
    const services = store.services();
    expect(services.length).toBeGreaterThan(0);
    expect(services[0].title).toBeDefined();
  });

  it('should have case studies signal populated', () => {
    const cases = store.caseStudies();
    expect(cases.length).toBeGreaterThan(0);
    expect(cases[0].title).toBeDefined();
  });

  it('should have testimonials signal populated', () => {
    const testimonials = store.testimonials();
    expect(testimonials.length).toBeGreaterThan(0);
  });
});
