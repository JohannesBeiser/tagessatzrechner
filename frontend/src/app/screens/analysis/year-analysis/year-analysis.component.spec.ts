import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearAnalysisComponent } from './year-analysis.component';

describe('YearAnalysisComponent', () => {
  let component: YearAnalysisComponent;
  let fixture: ComponentFixture<YearAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
