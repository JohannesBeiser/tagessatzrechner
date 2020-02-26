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
    food: "rgb(110, 150, 72)",
    accommodation: "rgb(84, 94, 117)",
    transport: "rgb(192, 87, 70)",
    multimedia: "rgb(189, 155, 117)",
    general: "rgb(82, 82, 82)",
  }

}
