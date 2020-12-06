import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SttRecorderComponent } from './stt-recorder.component';

describe('SttRecorderComponent', () => {
  let component: SttRecorderComponent;
  let fixture: ComponentFixture<SttRecorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SttRecorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SttRecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
