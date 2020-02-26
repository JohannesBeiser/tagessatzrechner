import { Component, OnInit } from '@angular/core';
import { ExpenseService, Expense } from 'src/app/services/expenses/expense.service';
import { Observable, combineLatest, Subject, BehaviorSubject } from 'rxjs';
import { FilterService, ExpenseFilter, MonthYear } from 'src/app/services/filter/filter.service';
import { DatePipe } from '@angular/common';
import { addMonths, subMonths } from "date-fns";
import { CategoryService } from 'src/app/services/category/category.service';

interface CategoryTotal{
  category: string;
  amount: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(
    public expenseService: ExpenseService,
    public filterService: FilterService,
    private datePipe: DatePipe,
    public categoryService: CategoryService
  ) { }

  private expenses$: Observable<Expense[]>;
  public currentFilter$: BehaviorSubject<ExpenseFilter>;
  public monthSwitched$: BehaviorSubject<MonthYear>;

  public expenses: Expense[];
  public totalAmount: number = 0;
  public totalCategories: CategoryTotal[];
  public filterTitles: { date: string; group: string } = null;
  public detailViewShownForIndex: number;

  ngOnInit(): void {
    this.expenses$ = this.expenseService.getExpenses();
    this.currentFilter$ = this.filterService.getFilter();
    this.monthSwitched$ = this.filterService.monthSwitched$;

    combineLatest(this.currentFilter$, this.monthSwitched$).subscribe(([filter, monthSwitch]) => {
      let tempString = {
        date: "All time",
        group: null
      }
      if (monthSwitch) {
        tempString.date = this.datePipe.transform(`${monthSwitch.year}-${monthSwitch.month}-01`, 'MMM y');
      } else {
        if (filter.date) {
          tempString.date = this.datePipe.transform(`${filter.date.year}-${filter.date.month}-01`, 'MMM y');
        }
      }

      if (filter.group) {
        tempString.group = `${filter.group}`;
      }

      this.filterTitles = tempString;
    })

    combineLatest(this.currentFilter$, this.expenses$, this.monthSwitched$).subscribe(([filter, expenses, monthSwitch]) => {
      let filtered= expenses.filter((expense) => {
        return this.matchesFilter(expense, filter, monthSwitch)
      })
      
      this.expenses= filtered.sort((a, b) => {
        return this.createComparatorNumber(b.date) - this.createComparatorNumber(a.date);
      });

      this.totalAmount = filtered.reduce((acc, cur) => {
        return acc + cur.amount
      }, 0);


      let temp = filtered.reduce((acc, cur) => {
        acc[cur.category] += cur.amount;
        return acc;
      },{
        food: 0,
        accommodation: 0,
        transport: 0,
        multimedia: 0,
        general: 0
      });
      this.totalCategories = this.objectToArray(temp).filter((item)=>{
        return item.amount >0;
      });
    })
  }

  private objectToArray(obj: any): CategoryTotal[]{
    return Object.keys(obj).map(key=> {
      return {category: key, amount: obj[key] }
    });
  }

  public deleteExpense(e: MouseEvent, key: number) {
    e.stopPropagation();
    if (confirm("Do you really want to delete this expense?")) {
      this.expenseService.deleteExpense(key);
    }
    this.detailViewShownForIndex = null;
  }

  public toggleDetailView(index: number) {
    if (this.detailViewShownForIndex != null && this.detailViewShownForIndex == index) {
      this.detailViewShownForIndex = null;
    } else {
      this.detailViewShownForIndex = index;
    }
  }

  /**
   * Transforms "2020-02-15" to 20200215, for quick sorting after date
   */
  private createComparatorNumber(date: string) {
    return parseInt(date.split('-').join(''))
  }

  private matchesFilter(expense: Expense, filter: ExpenseFilter, monthSwitch: MonthYear): boolean {
    let matches = true;
    let expenseYear = expense.date.substring(0, 4);
    let expenseMonth = expense.date.substring(5, 7);

    if (monthSwitch) {
      matches = expenseYear == monthSwitch.year && expenseMonth == monthSwitch.month;
    } else {
      if (filter.date) {
        matches = expenseYear == filter.date.year && expenseMonth == filter.date.month;
        // debugger;
      }
    }

    if (matches && filter.group) {
      matches = expense.group == filter.group;
    }

    return matches
  }



}
