import { Component, OnInit, Input } from '@angular/core';
import { Expense, ExpenseService } from 'src/app/services/expenses/expense.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { SliderService } from 'src/app/services/slider/slider.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ExpenseBottomSheetComponent } from './expense-bottom-sheet/expense-bottom-sheet.component';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.less']
})
export class ExpenseListComponent implements OnInit {

  constructor(
    public expenseService: ExpenseService,
    public categoryService: CategoryService,
    public sliderService: SliderService,
    private bottomSheet: MatBottomSheet
  ) { }

  @Input() public expenses: Expense[];
  public detailViewShownForIndex: number;

  ngOnInit(): void {
  }

  public toggleDetailView(index: number) {
    if (this.detailViewShownForIndex != null && this.detailViewShownForIndex == index) {
      this.detailViewShownForIndex = null;
    } else {
      this.detailViewShownForIndex = index;
    }
  }

  openBottomSheet(e:MouseEvent, expense: any): void {
    e.stopPropagation();
    this.bottomSheet.open(ExpenseBottomSheetComponent,{data: expense});
  }

}
