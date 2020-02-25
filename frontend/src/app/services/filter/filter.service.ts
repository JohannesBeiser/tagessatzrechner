import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
   }

  setFilter(newFilter: Partial<ExpenseFilter>){
    this.filterState$.next(newFilter);
    localStorage.setItem("filter", JSON.stringify(newFilter))
  }

  getFilter():Observable<ExpenseFilter>{
    return this.filterState$.asObservable();
  }

  show(){
    this.filterShown$.next(true);
  }

  hide(){
    this.filterShown$.next(false);
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
