import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private active$: BehaviorSubject<string>;
  public activeComponent: string;

  constructor() {
    this.active$= new BehaviorSubject<string>(null)
   }

  public getActiveComponent():string{
     return this.activeComponent;
  }

  public getActiveComponentAsync():Observable<string>{
    return this.active$.asObservable();
 }

  public show(component: string):void{
    this.activeComponent= component;
    this.active$.next(component);
  }

  public hide():void{
    this.activeComponent=null;
    this.active$.next(null);
  }
}
