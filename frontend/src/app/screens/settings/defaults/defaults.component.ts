import { Component, OnInit } from '@angular/core';
import { GroupsService, Group } from 'src/app/services/groups/groups.service';
import { CategoryService, Category } from 'src/app/services/category/category.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { el } from 'date-fns/locale';

@Component({
  selector: 'app-defaults',
  templateUrl: './defaults.component.html',
  styleUrls: ['./defaults.component.less']
})
export class DefaultsComponent implements OnInit {

  constructor(
    private groupsService: GroupsService,
    private categoryService: CategoryService,
  ) { }

  public groupsWithSubgroups$: Observable<Group[]>;
  public categories$: Observable<Category[]>;
  public defaultGroupSelected: number;
  public defaultCategorySelected: number;

  ngOnInit(): void {
    this.groupsWithSubgroups$ = this.groupsService.getGroups().pipe(
      map(groups=> groups.filter(group=> group.active)),
      map(groups=>{
        return groups.reduce((acc,cur)=>{
          acc.push(cur);
          cur.subgroups.forEach(subgroup=>acc.push(subgroup));
          return acc;
        },[] as Group[])
      })
    );
    
    this.categories$ = this.categoryService.getCategoriesNew().pipe(map(categories=> categories.filter(category=> category.id !== 0)));

        //TODO : Dirty workaround 
    setTimeout(() => {
      this.defaultGroupSelected = this.groupsService.defaultGroup;
      this.defaultCategorySelected = this.categoryService.defaultCategory;
    }, 100);
  }

  
  /**
   * call group/category service and update currently selected in subnject and localstorage
   */
  public defaultGroupChanged() {
    this.groupsService.setDefaultGroup(this.defaultGroupSelected);
  }

  /**
   * call group/category service and update currently selected in subnject and localstorage
   */
  public defaultCategoryChanged() {
    this.categoryService.setDefaultCategory(this.defaultCategorySelected);
  }


}
