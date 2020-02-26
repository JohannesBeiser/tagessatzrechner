import { Injectable } from '@angular/core';

export interface CategoryColor{
  food: string;
  transport: string;
  accommodation: string;
  multimedia: string;
  general: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  public readonly categoryColors: CategoryColor = {
    food: "#545E75",
    accommodation: "#ECBA82",
    transport: "#232020",
    multimedia: "#76B041",
    general: "#C05746",
  }

}
