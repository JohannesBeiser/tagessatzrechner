import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubgroupDialogComponent } from './edit-subgroup-dialog.component';

describe('EditSubgroupDialogComponent', () => {
  let component: EditSubgroupDialogComponent;
  let fixture: ComponentFixture<EditSubgroupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubgroupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubgroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
