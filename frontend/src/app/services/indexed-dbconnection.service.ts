import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBConnectionService {

  constructor() { }

  upgradeDatabase(db: any){
    const stores = db.objectStoreNames;

    if (!stores.contains("expenses")) {
      db.createObjectStore('expenses', { autoIncrement: true });
      console.log("Added IndexedDB store 'expenses'")
    }

    if (!stores.contains("groups")) {
      db.createObjectStore('groups', { autoIncrement: true });
      console.log("Added IndexedDB store 'groups'")
    }
  }

  /**
   * DB Versions:
   * 1: expense
   * 2: expense, groups
   */
  getConnection(): IDBOpenDBRequest{
    return indexedDB.open('ExpenseManagerDB', 2);
  }
}
