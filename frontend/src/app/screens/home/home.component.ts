import { Component, OnInit } from '@angular/core';
import { ExpenseService, Expense } from 'src/app/services/expenses/expense.service';
import { Observable, combineLatest } from 'rxjs';
import { FilterService, ExpenseFilter } from 'src/app/services/filter/filter.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(
    public expenseService: ExpenseService,
    public filterService: FilterService
  ) { }

  private expenses$: Observable<Expense[]>;
  public currentFilter$: Observable<ExpenseFilter>;
  public expenses: Expense[];

  ngOnInit(): void {
    this.expenses$ = this.expenseService.getExpenses();
    this.currentFilter$ = this.filterService.getFilter();

    combineLatest(this.currentFilter$, this.expenses$).subscribe(([filter, expenses]) => {
      debugger;
      this.expenses = expenses.filter((expense) => {
        return this.matchesFilter(expense, filter)
      });
      // debugger;
    })
  }

  private matchesFilter(expense: Expense, filter: ExpenseFilter): boolean {
    let matches = true;
    let expenseYear = expense.date.substring(0, 4);
    let expenseMonth = expense.date.substring(5, 7);

    if (filter.date) {
      matches = expenseYear == filter.date.year && expenseMonth == filter.date.month;
    }

    if(matches && filter.group){
      matches = expense.group == filter.group;
    }

    return matches
  }



}
