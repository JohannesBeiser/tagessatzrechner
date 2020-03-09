import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GroupsService, GroupItem } from 'src/app/services/groups/groups.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SettingsBottomSheetComponent } from './settings-bottom-sheet/settings-bottom-sheet.component';
import { Expense, ExpenseService } from 'src/app/services/expenses/expense.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent implements OnInit {

  constructor(
    private groupsService: GroupsService,
    private categoryService: CategoryService,
    private bottomSheet: MatBottomSheet,
    private expenseService: ExpenseService
  ) { }

  public groups$: Observable<GroupItem[]>;
  public newGroupInputValue: string;
  public defaultGroupSelected: string;
  public defaultCategorySelected: string;
  public recurringExpenses$: Observable<Expense[]>;
  public collapseNotifier: Subject<void> = new Subject();

  ngOnInit(): void {
    this.groups$ = this.groupsService.getGroups();
    this.recurringExpenses$ = this.expenseService.getExpenses("recurringExpenses");
    //TODO : Dirty workaround 
    setTimeout(() => {
      this.defaultGroupSelected = this.groupsService.defaultGroup;
    }, 100);
    this.defaultCategorySelected = this.categoryService.defaultCategory;
  }

  hardReloadApp() {
    let shallUpdate = confirm("Updating resets the offline cached app. Data will still remain!");
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

  public downloadBackup() {
    this.expenseService.getExpenses("expenses").subscribe(expenses => {
      console.log("expenses retrieved nhow forming json")
      let data = { expenses: expenses }
      this.downloadObjectAsJson(data,"expense_backup")
      // debugger;
    })
  }

  onImport(event) {
    var file = event.srcElement.files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = (evt) =>{
            console.log(JSON.parse(evt.target.result as string));
        }
        reader.onerror = (evt)=> {
            console.log('error reading file');
        }
    }
  }

  private downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    console.log("should download now")
    downloadAnchorNode.remove();
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
    if (this.newGroupInputValue) {
      this.groupsService.addGroup(this.newGroupInputValue);
      this.newGroupInputValue = "";
    }
  }

  openBottomSheet(e: MouseEvent, group: any): void {
    document.body.style.backgroundColor = "#4f5053";
    e.stopPropagation();
    this.bottomSheet.open(SettingsBottomSheetComponent, { data: group });
  }

}
