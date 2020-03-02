import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringExpenseBottomSheetComponent } from './recurring-expense-bottom-sheet.component';

describe('ExpenseBottomSheetComponent', () => {
  let component: RecurringExpenseBottomSheetComponent;
  let fixture: ComponentFixture<RecurringExpenseBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurringExpenseBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringExpenseBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
