import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public defaultCategory: string;
  constructor() { 
    this.defaultCategory = localStorage.getItem("defaultCategory") || "food"
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


}
