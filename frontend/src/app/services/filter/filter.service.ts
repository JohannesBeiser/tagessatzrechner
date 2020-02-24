import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface MonthYear{
  /**
   * 1 being january
   */
  month: string;
  year: string;
}

export interface ExpenseFilter{
  group: string;
  date: MonthYear;
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public filterShown$: BehaviorSubject<boolean>;
  public filterState$: BehaviorSubject<ExpenseFilter>;

  constructor() {
    this.filterShown$= new BehaviorSubject(false);
    this.filterState$= new BehaviorSubject({
      group: "USA", //TODO: get from localStoreage where all of the defaults are saved
      date: {
        month: "05",
        year: "2020"
      }
    });
   }

  setFilter(newFilter: Partial<ExpenseFilter>){
    let merged = {...this.filterState$.value, ...newFilter};
    this.filterState$.next(merged);
  }

  show(){
    this.filterShown$.next(true);
  }

  hide(){
    this.filterShown$.next(false);
  }
}
