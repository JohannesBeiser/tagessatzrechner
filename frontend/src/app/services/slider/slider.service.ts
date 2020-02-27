import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Expense } from '../expenses/expense.service';


@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private active$: BehaviorSubject<string>;
  public activeComponent: string;
  public currentExpenseForEdit: Expense;

  constructor() {
    this.active$= new BehaviorSubject<string>(null)
   }

  public getActiveComponent():string{
     return this.activeComponent;
  }

  public getActiveComponentAsync():Observable<string>{
    return this.active$.asObservable();
  }

  public show(component: string, expense?: Expense):void{
    this.activeComponent= component;
    if(expense){
      this.currentExpenseForEdit = expense;
    }
    this.active$.next(component);
  }

  public hide():void{
    if(this.currentExpenseForEdit){
      this.currentExpenseForEdit = null;
    }
    this.activeComponent=null;
    this.active$.next(null);
  }
}
