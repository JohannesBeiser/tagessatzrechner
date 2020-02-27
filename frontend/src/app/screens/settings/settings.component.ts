import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupsService, GroupItem } from 'src/app/services/groups/groups.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { ExpenseService } from 'src/app/services/expenses/expense.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SettingsBottomSheetComponent } from './settings-bottom-sheet/settings-bottom-sheet.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {

  constructor(
    private groupsService: GroupsService,
    private categoryService: CategoryService,
    private expenseService: ExpenseService,
    private bottomSheet: MatBottomSheet

  ) { }

  public groups$: Observable<GroupItem[]>;
  public newGroupInputValue: string;
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

  hardReloadApp() {
    let shallUpdate = confirm("Hard reloading resets the offline cached app. Data will still remain!");
    if (shallUpdate) {
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        for (let registration of registrations) {
          registration.unregister()
        }
      })
      this.reloadApp();
    }
  }

  reloadApp() {
    window.location.reload();
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

  addGroup() {
    if(this.newGroupInputValue){
      this.groupsService.addGroup(this.newGroupInputValue);
      this.newGroupInputValue = "";
    }
  }

  openBottomSheet(e:MouseEvent, group: any): void {
    e.stopPropagation();
    this.bottomSheet.open(SettingsBottomSheetComponent,{data: group});
  }

}
