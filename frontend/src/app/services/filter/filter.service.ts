import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { addMonths, subMonths } from 'date-fns';

export interface MonthYear{
  /**
   * 1 being january
   */
  month: string;
  year: string;
}

export interface ExpenseFilter{
  group?: string;
  date?: MonthYear;
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public filterShown$: BehaviorSubject<boolean>;
  public filterState$: BehaviorSubject<ExpenseFilter>;
  public monthSwitched$:BehaviorSubject<MonthYear>


  private defaultFilter: ExpenseFilter= {
    group: "general", 
    date: {
      month: this.getCurrentMonthFilter().substring(5),
      year:this.getCurrentMonthFilter().substring(0,4)
    }
  }

  constructor() {
    this.filterShown$= new BehaviorSubject(false);
    let initialFilter: ExpenseFilter = JSON.parse(localStorage.getItem("filter")) || this.defaultFilter;
    this.filterState$= new BehaviorSubject(initialFilter);
    this.monthSwitched$=  new BehaviorSubject(null);
   }

  setFilter(newFilter: Partial<ExpenseFilter>){
    this.filterState$.next(newFilter);
    // debugger;
    this.monthSwitched$.next(null);
    localStorage.setItem("filter", JSON.stringify(newFilter))
  }

  getFilter():BehaviorSubject<ExpenseFilter>{
    return this.filterState$;
  }

  show(){
    this.filterShown$.next(true);
  }

  hide(){
    this.filterShown$.next(false);
  }

  
  /**
   * Either increments or decrements the month shown
   * @param method Either "increment" or "decrement"
   */
  public switchMonth(method: string){
    if(this.filterState$.value.date){
      let current: MonthYear = this.monthSwitched$.value || this.filterState$.value.date;

      let incrementedDate: Date;
      if(method === "increment"){
        incrementedDate = addMonths(new Date(`${current.year}-${current.month}`),1);
      }else{
        incrementedDate = subMonths(new Date(`${current.year}-${current.month}`),1);
      }

      let incremented = {month: this.parseMonth(incrementedDate.getMonth()+1), year: incrementedDate.getFullYear().toString()};
      this.monthSwitched$.next(incremented)
    }
  }


  public getCurrentMonthFilter():string{
    return '' + new Date().getFullYear() + '-' +  this.parseMonth(new Date().getMonth()+1)
  }

  public parseMonth(month: number): string{
    if(month>9){
      return month.toString();
    }else{
      return `0${month}`;
    }
  }

}
