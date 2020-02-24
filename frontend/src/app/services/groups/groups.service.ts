import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, Observable, BehaviorSubject } from 'rxjs';
import { IndexedDBConnectionService } from '../indexed-dbconnection.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private db: any;
  private groups$: BehaviorSubject<string[]>;
  private connection$: ReplaySubject<boolean>;

  constructor(
    private indexedDBService: IndexedDBConnectionService
  ) {
    this.connection$ = new ReplaySubject(1);
    this.createGroupDatabase();
    this.groups$ = new BehaviorSubject<string[]>([]);
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

  public getGroups(): Observable<string[]> {
    this.connection$.subscribe(()=>this.refreshGroups());
    return this.groups$.asObservable();
  }


  public deleteGroup(key: number) {
    let transaction = this.db.transaction("groups", "readwrite");
    let objectStore = transaction.objectStore("groups");
    let req = objectStore.delete(key);
    req.onsuccess = () => {
      this.refreshGroups();
    }
  }

  /**
   * Makes the Observable emit all of the new values from the DB
   */
  private refreshGroups() {
    let transaction = this.db.transaction(["groups"]);
    let object_store = transaction.objectStore("groups");
    let request = object_store.openCursor();
    let result: string[] = []

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
  }}
