import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { IndexedDBConnectionService } from '../indexed-dbconnection.service';
import { expenses } from "./Expenses";
import { GroupsService } from '../groups/groups.service';
import { groups } from '../groups/Groups';
import { isEqual, addMonths, differenceInMonths, getMonth } from 'date-fns';
import { take } from 'rxjs/operators';

export interface Expense {
  name: string;
  amount: number;
  category: string;
  group: string;
  date: string;
  description?: string;
  recurring?: boolean;
  lastUpdate?: string;
  key?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private db: any;
  private expenses$: Subject<Expense[]>;
  private recurringExpenses$: Subject<Expense[]>;
  private connection$: ReplaySubject<boolean>;
  public expenseDeletedNotifier: Subject<void>;

  constructor(
    private indexedDBService: IndexedDBConnectionService,
  ) {
    this.connection$ = new ReplaySubject(1);
    this.createExpenseDatabase();
    this.expenses$ = new Subject<Expense[]>();
    this.recurringExpenses$ = new Subject<Expense[]>();
    this.expenseDeletedNotifier = new Subject();
    this.checkRecurringExpenses();
  }


  getFormatDate(date: Date): string{
    return `${date.getFullYear()}-${this.getPrettyMonth(date.getMonth()+1)}-01`
  }

  getPrettyMonth(number:number ): string{
    if(number<10){
      return 0 + number.toString();
    }else{
      return number.toString();
    }
  }

  checkRecurringExpenses(){
    this.getExpenses("recurringExpenses").pipe(take(1)).subscribe(expenses=>{
      expenses.forEach(expense=>{
        if((!expense.lastUpdate || addMonths(new Date(expense.lastUpdate),1) < new Date()) && new Date()> new Date(expense.date)){
          // update needed for this expense
          let key= expense.key;
          delete expense.lastUpdate;
          delete expense.key;
          this.addExpense({...expense, ...{date:this.getFormatDate(new Date(new Date().getFullYear(), new Date().getMonth()))}}, "expenses");
          this.updateExpense(key, {...expense, ...{lastUpdate: this.getFormatDate(new Date())}}, "recurringExpenses")
        }
      });
    });
  }

  /**
   * 
   * @param expense 
   * @param type either 'expenses' or 'recurringExpenses'
   */
  public addExpense(expense: Expense, type: string) {
    let tx = this.db.transaction([type], 'readwrite');
    let store = tx.objectStore(type);
    store.add(expense);
    tx.oncomplete = () => {
      if(type=="recurringExpenses"){
        this.addInitialRecurrentEntries(expense)
        this.refreshExpenses(type);
      }else{
        this.refreshExpenses(type);
      }
    }
    tx.onerror = (event) => {
      alert('error storing expense ' + event.target.errorCode);
    }
  };

  addInitialRecurrentEntries(expense: Expense){
    let currentMonthDate = new Date( new Date().getFullYear(), new Date().getMonth());
    let counter=0;
    // becomes -1 once iterading date after expense date
    while(differenceInMonths(currentMonthDate, addMonths(new Date(expense.date), counter))>=0){
      let pastRecurrentExpense = {...expense, ...{date: this.getFormatDate(addMonths(new Date(expense.date), counter))}}
      delete pastRecurrentExpense.lastUpdate;
      this.addExpense(pastRecurrentExpense, "expenses")
      counter++;
    }
  }


  public getExpenses(type:string): Observable<Expense[]> {
    this.connection$.subscribe(()=>this.refreshExpenses(type));
    if(type=="expenses"){
      return this.expenses$.asObservable();
    }else{
      return this.recurringExpenses$.asObservable();
    }
  }

  public updateExpense(key: number, value: Expense, type: string) {
    let transaction = this.db.transaction(type, "readwrite");
    let objectStore = transaction.objectStore(type);
    let req = objectStore.put(value, key);
    req.onsuccess = () => {
      this.refreshExpenses(type);
    }
  }

  public deleteExpense(key: number, type:string) {
    let transaction = this.db.transaction(type, "readwrite");
    let objectStore = transaction.objectStore(type);
    let req = objectStore.delete(key);
    this.expenseDeletedNotifier.next();
    req.onsuccess = () => {
      this.refreshExpenses(type);
    }
  }

  /**
   * Makes the Observable emit all of the new values from the DB
   */
  private refreshExpenses(type: string) {
    let transaction = this.db.transaction([type]);
    let object_store = transaction.objectStore(type);
    let request = object_store.openCursor();
    let result: Expense[] = []

    request.onsuccess = (event) => {
      let cursor = event.target.result;
      if (cursor) {
        let key = cursor.primaryKey;
        let value = cursor.value;
        result.push({ ...{ key }, ...value })
        cursor.continue();
      }
      else {
        if(type=="expenses"){
          this.expenses$.next(result);
        }else{
          this.recurringExpenses$.next(result);
        }
      }
    };
  }

  private createExpenseDatabase() {
    let dbReq = this.indexedDBService.getConnection()

    dbReq.onupgradeneeded = (event) => {
      let db = (event.target as any).result;
      this.indexedDBService.upgradeDatabase(db);
      //For dev purposes only
      // setTimeout(() => {
      //   this.seedExpenses();   
      //   for (const group of groups) {
      //     this.addGroup(group);
      //   }
      // }, 1000);
    }

    dbReq.onsuccess = (event) => {
      this.db = (event.target as any).result;
      this.connection$.next(true);
    }

    dbReq.onerror = function (event) {
      alert('error opening database ' + (event.target as any).errorCode);
    }
  }

  public addGroup(group: string) {
    let tx = this.db.transaction(['groups'], 'readwrite');
    let store = tx.objectStore('groups');
    store.add({groupName: group});
  };

  private seedExpenses(){
    for (const expense of expenses) {
      this.addExpense(expense, "expenses");
    }
  }
}
