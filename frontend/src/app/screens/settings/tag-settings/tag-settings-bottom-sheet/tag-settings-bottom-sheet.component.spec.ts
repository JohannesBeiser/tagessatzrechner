import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSettingsBottomSheetComponent } from './tag-settings-bottom-sheet.component';

describe('TagSettingsBottomSheetComponent', () => {
  let component: TagSettingsBottomSheetComponent;
  let fixture: ComponentFixture<TagSettingsBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagSettingsBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSettingsBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
