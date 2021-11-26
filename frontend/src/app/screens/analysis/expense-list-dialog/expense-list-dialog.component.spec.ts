import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseListDialogComponent } from './expense-list-dialog.component';

describe('ExpenseListDialogComponent', () => {
  let component: ExpenseListDialogComponent;
  let fixture: ComponentFixture<ExpenseListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
