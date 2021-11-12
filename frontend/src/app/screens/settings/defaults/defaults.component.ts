import { Component, OnInit } from '@angular/core';
import { GroupsService, GroupItem } from 'src/app/services/groups/groups.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Observable } from 'rxjs';

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

  public groups$: Observable<GroupItem[]>;
  public defaultGroupSelected: string;
  public defaultCategorySelected: string;

  ngOnInit(): void {
    this.groups$ = this.groupsService.getGroups();

        //TODO : Dirty workaround 
    setTimeout(() => {
      this.defaultGroupSelected = this.groupsService.defaultGroup;
    }, 100);
    this.defaultCategorySelected = this.categoryService.defaultCategory;
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
