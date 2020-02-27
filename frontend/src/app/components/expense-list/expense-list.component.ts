import { Component, OnInit, Input } from '@angular/core';
import { Expense, ExpenseService } from 'src/app/services/expenses/expense.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { SliderService } from 'src/app/services/slider/slider.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.less']
})
export class ExpenseListComponent implements OnInit {

  constructor(
    public expenseService: ExpenseService,
    public categoryService: CategoryService,
    public sliderService: SliderService
  ) { }

  @Input() public expenses: Expense[];
  public detailViewShownForIndex: number;

  ngOnInit(): void {
  }

  public deleteExpense(e: MouseEvent, key: number) {
    e.stopPropagation();
    if (confirm("Do you really want to delete this expense?")) {
      this.expenseService.deleteExpense(key);
    }
    this.detailViewShownForIndex = null;
  }

  public editExpense(e: MouseEvent, expense: Expense, key: number){
    e.stopPropagation();
    this.expenseService.updateExpense(key, expense);
    this.detailViewShownForIndex = null;
  }

  public toggleDetailView(index: number) {
    if (this.detailViewShownForIndex != null && this.detailViewShownForIndex == index) {
      this.detailViewShownForIndex = null;
    } else {
      this.detailViewShownForIndex = index;
    }
  }

}
