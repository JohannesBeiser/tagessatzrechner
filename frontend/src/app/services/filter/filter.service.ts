import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { addMonths, subMonths } from 'date-fns';
import { Expense } from '../expenses/expense.service';

export interface MonthYear {
  /**
   * 1 being january
   */
  month: string;
  year: string;
}

export interface ExpenseFilter {
  groups?: string[];
  date?: MonthYear;
  last30Active?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public filterShown$: BehaviorSubject<boolean>;
  public filterState$: BehaviorSubject<ExpenseFilter>;
  public monthSwitched$: BehaviorSubject<MonthYear>
  public sortMethod$: BehaviorSubject<string>


  private defaultFilter: ExpenseFilter = {
    date: {
      month: this.getCurrentMonthFilter().substring(5),
      year: this.getCurrentMonthFilter().substring(0, 4)
    }
  }

  constructor() {
    this.filterShown$ = new BehaviorSubject(false);

    let initialFilter: ExpenseFilter = JSON.parse(localStorage.getItem("filter")) || this.defaultFilter;
    this.filterState$ = new BehaviorSubject(initialFilter);
    this.monthSwitched$ = new BehaviorSubject(null);
    this.sortMethod$ = new BehaviorSubject(localStorage.getItem("sortMethod")|| "date")
  }

  setFilter(newFilter: Partial<ExpenseFilter>) {
    this.filterState$.next(newFilter);
    this.monthSwitched$.next(null);
    localStorage.setItem("filter", JSON.stringify(newFilter))
  }

  setSortMethod(method: string) {
    localStorage.setItem("sortMethod", method);
    this.sortMethod$.next(method);
  }

  getFilter(): BehaviorSubject<ExpenseFilter> {
    return this.filterState$;
  }

  show() {
    this.filterShown$.next(true);
  }

  hide() {
    this.filterShown$.next(false);
  }


  /**
   * Either increments or decrements the month shown
   * @param method Either "increment" or "decrement"
   */
  public switchMonth(method: string) {
    if (this.filterState$.value.date) {
      let current: MonthYear = this.monthSwitched$.value || this.filterState$.value.date;

      let incrementedDate: Date;
      if (method === "increment") {
        incrementedDate = addMonths(new Date(`${current.year}-${current.month}`), 1);
      } else {
        incrementedDate = subMonths(new Date(`${current.year}-${current.month}`), 1);
      }

      let incremented = { month: this.parseMonth(incrementedDate.getMonth() + 1), year: incrementedDate.getFullYear().toString() };
      this.monthSwitched$.next(incremented)
    }
  }


  /**
   * comparator function to sort by date descending (latest first)
   */
  public dateSorter= (a: Expense, b: Expense)=> {
    return this.createComparatorNumber(b.date) - this.createComparatorNumber(a.date);
  }

  public amountSorter = (a: Expense, b: Expense)=>{
    return b.amount-a.amount;
  }


   /**
   * Transforms "2020-02-15" to 20200215, for quick sorting after date
   */
  private createComparatorNumber(date: string) {
    return parseInt(date.split('-').join(''))
  }

  public getCurrentMonthFilter(): string {
    return '' + new Date().getFullYear() + '-' + this.parseMonth(new Date().getMonth() + 1)
  }

  public parseMonth(month: number): string {
    if (month > 9) {
      return month.toString();
    } else {
      return `0${month}`;
    }
  }
}
