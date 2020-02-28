import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SliderService } from 'src/app/services/slider/slider.service';
import { ExpenseService } from 'src/app/services/expenses/expense.service';

@Component({
  selector: 'app-expense-bottom-sheet',
  templateUrl: './expense-bottom-sheet.component.html',
  styleUrls: ['./expense-bottom-sheet.component.less']
})
export class ExpenseBottomSheetComponent implements OnInit {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public expense: any,
    public sliderService: SliderService,
    public expenseService: ExpenseService,
    private bottomSheetRef: MatBottomSheetRef<ExpenseBottomSheetComponent>
    ) { }

  ngOnInit(): void {
    this.bottomSheetRef.backdropClick().subscribe(()=>{
      document.body.style.backgroundColor="#76757b";
    });
  }

  public deleteExpense(e: MouseEvent, key: number) {
    e.stopPropagation();
    if (confirm("Do you really want to delete this expense?")) {
      this.expenseService.deleteExpense(key);
      this.bottomSheetRef.dismiss();
    }
    // this.detailViewShownForIndex = null;
  }

  editExpense(e: MouseEvent){
    this.sliderService.show('add', this.expense)
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  close(event: MouseEvent): void {
    document.body.style.backgroundColor="#76757b";
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
