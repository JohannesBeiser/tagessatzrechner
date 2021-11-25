import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RationBarComponent } from './ration-bar.component';

describe('RationBarComponent', () => {
  let component: RationBarComponent;
  let fixture: ComponentFixture<RationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
