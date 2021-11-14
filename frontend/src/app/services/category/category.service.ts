import { Injectable } from '@angular/core';
import { IndexedDBConnectionService } from '../indexed-dbconnection.service';
import { ReplaySubject, BehaviorSubject, Observable } from 'rxjs';
import { GroupItem } from '../groups/groups.service';

export interface CategoryColor{
  food: string;
  transport: string;
  accommodation: string;
  multimedia: string;
  leisure: string;
  gear: string;
  health_insurance: string;
  general: string;
}

export interface Category{
  name: string;
  color: string;
}


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public defaultCategory: string;
  private db: any;
  private connection$: ReplaySubject<boolean>;
  private categories$: BehaviorSubject<Category[]>;

  constructor( private indexedDBService: IndexedDBConnectionService) { 
    this.connection$ = new ReplaySubject(1);
    this.createCategoryDatabase();
    this.categories$ = new BehaviorSubject<Category[]>([]);
    this.defaultCategory = localStorage.getItem("defaultCategory") || "food";
  }

  public readonly categoryColors: CategoryColor = {
    food: "#749056",//"rgb(110, 150, 72)",
    accommodation: "#5979a9",//"rgb(84, 94, 117)",
    transport: "rgb(192, 87, 70)",
    multimedia: "rgb(150, 123, 92)",//"rgb(189, 155, 117)",
    leisure: "rgb(202, 179, 99)",
    gear: "rgb(65, 97, 68)",
    health_insurance: "#afafaf",
    general: "rgb(82, 82, 82)",
  }

  public setDefaultCategory(category:string){
    localStorage.setItem("defaultCategory", category)
    this.defaultCategory = category;
  }


  public getCategories(): string[]{
    return [
      "food",
      "transport",
      "accommodation",
      "multimedia",
      "leisure",
      "gear",
      "health_insurance",
      "general"
    ]
  }



  public addCategory(category: Category){
    //alter color to make it HEX
    category.color = '#' + category.color;
    let tx = this.db.transaction(['categories'], 'readwrite');
    let store = tx.objectStore('categories');
    store.add(category);
    tx.oncomplete = () => {
      this.refreshCategories();
    }
    tx.onerror = (event) => {
      alert('error storing expense ' + event.target.errorCode);
    }
  };

  public getCategoriesNew(): Observable<Category[]> {
    this.connection$.subscribe(()=>this.refreshCategories());
    return this.categories$.asObservable();
  }

  // optimized for overlays which don't own a route to not request double amount
  public getGroupsWithoutUpdate(){
    return this.categories$.asObservable();
  }

  clearData(){
    let transaction = this.db.transaction("categories", "readwrite");
    let objectStore = transaction.objectStore("categories");
    objectStore.clear();
  }


  public deleteCategory(key: number) {
    let transaction = this.db.transaction("categories", "readwrite");
    let objectStore = transaction.objectStore("categories");
    let req = objectStore.delete(key);
    req.onsuccess = () => {
      this.refreshCategories();
    }
    //TODO: default ablegen per key nicht name und dann hier nach key anfrage
    // if(this.defaultCategory == categoryName){
    //   this.setDefaultCategory("General");
    // }
  }


  /**
   * Makes the Observable emit all of the new values from the DB
   */
  private refreshCategories() {
    let transaction = this.db.transaction(["categories"]);
    let object_store = transaction.objectStore("categories");
    let request = object_store.openCursor();
    let result: Category[] = []

    request.onsuccess = (event) => {
      let cursor = event.target.result;
      if (cursor) {
        let key = cursor.primaryKey;
        let value = cursor.value;
        result.push({ ...{ key }, ...value })
        cursor.continue();
      }
      else {
        this.categories$.next(result)
      }
    };
  }

  private createCategoryDatabase() {
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
