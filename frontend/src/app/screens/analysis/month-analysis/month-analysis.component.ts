import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Category, CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-month-analysis',
  templateUrl: './month-analysis.component.html',
  styleUrls: ['./month-analysis.component.less']
})
export class MonthAnalysisComponent implements OnInit {

  categorySelected: number = 0;
  public categories$: Observable<Category[]>;
  monthSelection: string;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.monthSelection = `${new Date().getFullYear()}-${new Date().getMonth()+1}`

    this.categories$ = this.categoryService.getCategoriesNew().pipe(
      filter(categories => categories.length > 0),
      map(categories => categories.filter(category => category.name !== 'unassigned'))
    );
  }

  categoryChanged(){

  }

  monthChanged(){
    let dateSelected = new Date(this.monthSelection)
    
  }

  

}
