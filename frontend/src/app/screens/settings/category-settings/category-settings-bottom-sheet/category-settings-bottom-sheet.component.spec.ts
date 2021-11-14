import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySettingsBottomSheetComponent } from './category-settings-bottom-sheet.component';

describe('CategorySettingsBottomSheetComponent', () => {
  let component: CategorySettingsBottomSheetComponent;
  let fixture: ComponentFixture<CategorySettingsBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySettingsBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySettingsBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
