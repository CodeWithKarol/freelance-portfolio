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

  it('should have projects signal populated', () => {
    const projects = store.projects();
    expect(projects.length).toBeGreaterThan(0);
    expect(projects[0].title).toBeDefined();
  });

  it('should have gigs signal populated', () => {
    const gigs = store.gigs();
    expect(gigs.length).toBeGreaterThan(0);
    expect(gigs[0].title).toBeDefined();
  });

  it('should have process signal populated', () => {
    const process = store.process();
    expect(process.length).toBeGreaterThan(0);
    expect(process[0].title).toBeDefined();
  });

  it('should have testimonials signal populated', () => {
    const testimonials = store.testimonials();
    expect(testimonials.length).toBeGreaterThan(0);
  });
});
