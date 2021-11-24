import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAnalysisComponent } from './custom-analysis.component';

describe('CustomAnalysisComponent', () => {
  let component: CustomAnalysisComponent;
  let fixture: ComponentFixture<CustomAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
