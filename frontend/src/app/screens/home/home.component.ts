import { Component, OnInit } from '@angular/core';
import { ExpenseService, Expense } from 'src/app/services/expenses/expense.service';
import { Observable, combineLatest } from 'rxjs';
import { FilterService, ExpenseFilter } from 'src/app/services/filter/filter.service';
import { filter } from 'rxjs/operators';
import {Pipe} from '@angular/core';

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

  public detailViewShownForIndex: number;

  ngOnInit(): void {
    this.expenses$ = this.expenseService.getExpenses();
    this.currentFilter$ = this.filterService.getFilter();

    combineLatest(this.currentFilter$, this.expenses$).subscribe(([filter, expenses]) => {
      this.expenses = expenses.filter((expense) => {
        return this.matchesFilter(expense, filter)
      }).sort((a,b)=>{
        return this.createComparatorNumber(a.date) - this.createComparatorNumber(b.date)
      });
    })
  }

  public deleteExpense(e:MouseEvent, key: number){
    e.stopPropagation();
    if(confirm("Do you really want to delete this expense?")){
      this.expenseService.deleteExpense(key);
    }
    this.detailViewShownForIndex = null;
  }

  public toggleDetailView(index:number){
    if(this.detailViewShownForIndex != null && this.detailViewShownForIndex == index){
      this.detailViewShownForIndex = null;
    }else{
      this.detailViewShownForIndex = index;
    }
  }


  /**
   * Transforms "2020-02-15" to 20200215, for quick sorting after date
   */
  private createComparatorNumber(date: string){
    return parseInt(date.split('-').join(''))
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
