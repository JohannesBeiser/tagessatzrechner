import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeAnalysisComponent } from './all-time-analysis.component';

describe('AllTimeAnalysisComponent', () => {
  let component: AllTimeAnalysisComponent;
  let fixture: ComponentFixture<AllTimeAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTimeAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTimeAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
