import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, Observable, BehaviorSubject } from 'rxjs';
import { IndexedDBConnectionService } from '../indexed-dbconnection.service';
import { groups } from './Groups';
import { ExpenseService } from '../expenses/expense.service';

export interface GroupItem{
  key: number;
  groupName: string;
}

export interface GroupTotal extends GroupItem {
  amount: number;
  firstExpenseDate?: string;
  lastExpenseDate?: string;
  deleted?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private db: any;
  private groups$: BehaviorSubject<GroupItem[]>;
  private connection$: ReplaySubject<boolean>;
  public defaultGroup: string;

  constructor(
    private indexedDBService: IndexedDBConnectionService
  ) {
    this.connection$ = new ReplaySubject(1);
    this.createGroupDatabase();
    this.groups$ = new BehaviorSubject<GroupItem[]>([]);
    this.defaultGroup = localStorage.getItem("defaultGroup") || "General"
  }

  public addGroup(group: string) {
    let tx = this.db.transaction(['groups'], 'readwrite');
    let store = tx.objectStore('groups');
    store.add({groupName: group});
    tx.oncomplete = () => {
      this.refreshGroups();
    }
    tx.onerror = (event) => {
      alert('error storing expense ' + event.target.errorCode);
    }
  };

  public getGroups(): Observable<GroupItem[]> {
    this.connection$.subscribe(()=>this.refreshGroups());
    return this.groups$.asObservable();
  }

  // optimized for overlays which don't own a route to not request double amount
  public getGroupsWithoutUpdate(){
    return this.groups$.asObservable();
  }

  clearData(){
    let transaction = this.db.transaction("groups", "readwrite");
    let objectStore = transaction.objectStore("groups");
    objectStore.clear();
  }


  public deleteGroup(key: number, groupName: string) {
    let transaction = this.db.transaction("groups", "readwrite");
    let objectStore = transaction.objectStore("groups");
    let req = objectStore.delete(key);
    req.onsuccess = () => {
      this.refreshGroups();
    }
    if(this.defaultGroup == groupName){
      this.setDefaultGroup("General");
    }
  }


  public setDefaultGroup(group:string){
    localStorage.setItem("defaultGroup", group)
    this.defaultGroup= group;
  }

  /**
   * Makes the Observable emit all of the new values from the DB
   */
  private refreshGroups() {
    let transaction = this.db.transaction(["groups"]);
    let object_store = transaction.objectStore("groups");
    let request = object_store.openCursor();
    let result: GroupItem[] = []

    request.onsuccess = (event) => {
      let cursor = event.target.result;
      if (cursor) {
        let key = cursor.primaryKey;
        let value = cursor.value;
        result.push({ ...{ key }, ...value })
        cursor.continue();
      }
      else {
        this.groups$.next(result)
      }
    };
  }

  private createGroupDatabase() {
    let dbReq = this.indexedDBService.getConnection();

    dbReq.onupgradeneeded = (event) => {
      let db = (event.target as any).result;
      this.indexedDBService.upgradeDatabase(db);
    }

    dbReq.onsuccess = (event) => {
      this.db = (event.target as any).result;
      this.connection$.next(true);
    }

    dbReq.onerror = function (event) {
      alert('error opening database ' + (event.target as any).errorCode);
    }
  }

  public seedGroups(){
    for (const group of groups) {
      this.addGroup(group);
    }
  }

}
