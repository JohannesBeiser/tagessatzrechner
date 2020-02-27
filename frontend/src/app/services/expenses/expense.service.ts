import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { IndexedDBConnectionService } from '../indexed-dbconnection.service';
import { expenses } from "./Expenses";
import { GroupsService } from '../groups/groups.service';
import { groups } from '../groups/Groups';

export interface Expense {
  name: string;
  amount: number;
  category: string;
  group: string;
  date: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private db: any;
  private expenses$: Subject<Expense[]>;
  private connection$: ReplaySubject<boolean>;

  constructor(
    private indexedDBService: IndexedDBConnectionService,
  ) {
    this.connection$ = new ReplaySubject(1);
    this.createExpenseDatabase();
    this.expenses$ = new Subject<Expense[]>();
  }

  public addExpense(expense: Expense) {
    let tx = this.db.transaction(['expenses'], 'readwrite');
    let store = tx.objectStore('expenses');
    store.add(expense);
    tx.oncomplete = () => {
      this.refreshExpenses();
    }
    tx.onerror = (event) => {
      alert('error storing expense ' + event.target.errorCode);
    }
  };

  public getExpenses(): Observable<Expense[]> {
    this.connection$.subscribe(()=>this.refreshExpenses());
    return this.expenses$.asObservable();
  }

  public updateExpense(key: number, value: Expense) {
    let transaction = this.db.transaction("expenses", "readwrite");
    let objectStore = transaction.objectStore("expenses");
    let req = objectStore.put(value, key);
    req.onsuccess = () => {
      this.refreshExpenses();
    }
  }

  public deleteExpense(key: number) {
    let transaction = this.db.transaction("expenses", "readwrite");
    let objectStore = transaction.objectStore("expenses");
    let req = objectStore.delete(key);
    req.onsuccess = () => {
      this.refreshExpenses();
    }
  }

  /**
   * Makes the Observable emit all of the new values from the DB
   */
  private refreshExpenses() {
    let transaction = this.db.transaction(["expenses"]);
    let object_store = transaction.objectStore("expenses");
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
        this.expenses$.next(result)
      }
    };
  }

  private createExpenseDatabase() {
    let dbReq = this.indexedDBService.getConnection()

    dbReq.onupgradeneeded = (event) => {
      let db = (event.target as any).result;
      this.indexedDBService.upgradeDatabase(db);
      setTimeout(() => {
        this.seedExpenses();   
        for (const group of groups) {
          this.addGroup(group);
        }
        // this.groupsService.seedGroups();   
      }, 1000);
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
      this.addExpense(expense);
    }
  }
}
