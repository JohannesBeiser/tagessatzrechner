import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private active$: BehaviorSubject<boolean>;
  constructor() {
    this.active$= new BehaviorSubject<boolean>(false)
   }

  public getIsActive():Observable<boolean>{
    return this.active$.asObservable();
  }

  public activate():void{
    this.active$.next(true);
  }

  public deactivate():void{
    this.active$.next(false);
  }

}
