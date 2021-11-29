import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { IndexedDBConnectionService } from '../indexed-dbconnection.service';


export interface Tag {
  name: string,
  id: number,
  key?: number,
}

@Injectable({
  providedIn: 'root'
})
export class TagService {

    
  private db: any;
  private tags$: BehaviorSubject<Tag[]>;
  private tags: Tag[];
  private connection$: ReplaySubject<boolean>;

  constructor(
    private indexedDBService: IndexedDBConnectionService
  ) {
    this.connection$ = new ReplaySubject(1);
    this.createTagDatabase();
    this.tags$ = new BehaviorSubject<Tag[]>([]);
    this.tags$.subscribe(tags=>{
      this.tags= tags;
    })
  }

  getTagById(id: number): Tag{
    return this.tags.find(el=> el.id == id);
  }

  convertIdsToTags(ids: number[]): Tag[]{
    let result =  ids.map(id=>this.getTagById(id))
    return result;
  }

  public addTag(tag: Tag) {
    let tx = this.db.transaction(['tags'], 'readwrite');
    let store = tx.objectStore('tags');
    tag.id = Date.now();
    store.add(tag);
    tx.oncomplete = () => {
      this.refreshTags();
    }
    tx.onerror = (event) => {
      alert('error storing tag ' + event.target.errorCode);
    }
  };

  public addTagFromBackup(tag: Tag){
    let tx = this.db.transaction(['tags'], 'readwrite');
    let store = tx.objectStore('tags');
    store.add(tag);
    tx.oncomplete = () => {
      this.refreshTags();
    }
    tx.onerror = (event) => {
      alert('error storing tag ' + event.target.errorCode);
    }
  }

  public updateTag(key: number, tag: Tag){
      let transaction = this.db.transaction('tags', "readwrite");
      let objectStore = transaction.objectStore('tags');
      let req = objectStore.put(tag, key);
      req.onsuccess = () => {
        this.refreshTags();
      }
      
  }

  public getTags(): Observable<Tag[]> {
    this.connection$.subscribe(()=>this.refreshTags());
    return this.tags$.asObservable();
  }

  // optimized for overlays which don't own a route to not request double amount
  public getTagsWithoutUpdate(){
    return this.tags$.asObservable();
  }

  clearData(){
    let transaction = this.db.transaction("tags", "readwrite");
    let objectStore = transaction.objectStore("tags");
    objectStore.clear();
  }


  public deleteTag(key: number, tag: Tag) {
    let transaction = this.db.transaction("tags", "readwrite");
    let objectStore = transaction.objectStore("tags");
    let req = objectStore.delete(key);
    req.onsuccess = () => {
      this.refreshTags();
    }
  }




  /**
   * Makes the Observable emit all of the new values from the DB
   */
  private refreshTags() {
    let transaction = this.db.transaction(["tags"]);
    let object_store = transaction.objectStore("tags");
    let request = object_store.openCursor();
    let result: Tag[] = []

    request.onsuccess = (event) => {
      let cursor = event.target.result;
      if (cursor) {
        let key = cursor.primaryKey;
        let value = cursor.value;
        result.push({ ...{ key }, ...value })
        cursor.continue();
      }
      else {
        this.tags$.next(result)
      }
    };
  }

  private createTagDatabase() {
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

}
