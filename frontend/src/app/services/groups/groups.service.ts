import { Injectable } from '@angular/core';
import {  ReplaySubject, Observable, BehaviorSubject } from 'rxjs';
import { IndexedDBConnectionService } from '../indexed-dbconnection.service';

export interface Group{
  key?: number;
  name: string;
  id?: number;
  subgroups?: Subgroup[];
  active?: boolean;
}

export interface Subgroup{
  id?: number;
  name: string;
}

export interface GroupTotal extends Group {
  amount: number;
  firstExpenseDate?: string;
  lastExpenseDate?: string;
  deleted?: boolean;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private db: any;
  private groups$: BehaviorSubject<Group[]>;
  private groups: Group[];
  private connection$: ReplaySubject<boolean>;
  public defaultGroup: number; // id of the group

  constructor(
    private indexedDBService: IndexedDBConnectionService
  ) {
    this.connection$ = new ReplaySubject(1);
    this.createGroupDatabase();
    this.groups$ = new BehaviorSubject<Group[]>([]);
    this.groups$.subscribe(groups=>{
      this.groups= groups;
    })
    this.defaultGroup = parseInt(localStorage.getItem("defaultGroup") || "General");
  }

  getGroupById(id: number){
    let match = this.groups.find(el=> el.id == id);
    // If ID doesnt belong to a group --> must belong to subgroup
    if(!match){
      this.groups.forEach(group=>{
        group.subgroups.forEach(subgroup=>{
          if(id == subgroup.id){
            match = subgroup;
          }
        })
      })
    }
    return match;
  }

  public addGroup(group: Group) {
    let tx = this.db.transaction(['groups'], 'readwrite');
    let store = tx.objectStore('groups');
    store.add(group);
    tx.oncomplete = () => {
      this.refreshGroups();
    }
    tx.onerror = (event) => {
      alert('error storing expense ' + event.target.errorCode);
    }
  };

  public updateGroup(key: number, group: Group){
      let transaction = this.db.transaction('groups', "readwrite");
      let objectStore = transaction.objectStore('groups');
      let req = objectStore.put(group, key);
      req.onsuccess = () => {
        this.refreshGroups();
      }
      
  }

  public getGroups(): Observable<Group[]> {
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


  public deleteGroup(key: number, group: Group) {
    let transaction = this.db.transaction("groups", "readwrite");
    let objectStore = transaction.objectStore("groups");
    let req = objectStore.delete(key);
    req.onsuccess = () => {
      this.refreshGroups();
    }
    if(this.defaultGroup == group.id){
      this.setDefaultGroup(0); // 0 being general group
    }
  }


  public setDefaultGroup(id: number){
    localStorage.setItem("defaultGroup", id.toString())
    this.defaultGroup= id;
  }

  /**
   * Makes the Observable emit all of the new values from the DB
   */
  private refreshGroups() {
    let transaction = this.db.transaction(["groups"]);
    let object_store = transaction.objectStore("groups");
    let request = object_store.openCursor();
    let result: Group[] = []

    request.onsuccess = (event) => {
      let cursor = event.target.result;
      if (cursor) {
        let key = cursor.primaryKey;
        let value = cursor.value;
        result.push({ ...{ key }, ...value })
        cursor.continue();
      }
      else {
        result.push({name: "General", id: 0, subgroups: []})
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

  // public seedGroups(){
  //   for (const group of groups) {
  //     this.addGroup(group);
  //   }
  // }

}
