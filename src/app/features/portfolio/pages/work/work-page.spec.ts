import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkPage } from './work-page';
import { provideRouter } from '@angular/router';

describe('WorkPage', () => {
  let component: WorkPage;
  let fixture: ComponentFixture<WorkPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
