import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';
import { Expense, ExpenseService } from 'src/app/services/expenses/expense.service';
import { GroupItem, GroupsService } from 'src/app/services/groups/groups.service';
import { DatePipe } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-general',
  animations: [
    trigger('slideInOut', [
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
        width: '0px',
      })),
      state('in', style({
        opacity: '1',
        overflow: 'hidden',
        height: '*',
        width: '*'
      })),
      transition('out => in', animate('150ms ease-in-out')),
      transition('in => out', animate('150ms ease-in-out'))
    ])
  ],
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.less']
})
export class GeneralComponent implements OnInit {

  @ViewChild("qrCode") QrCode: ElementRef;
  public shareShown: boolean = false;

  constructor(
    private expenseService: ExpenseService,
    private datePipe: DatePipe,
    private groupsService: GroupsService,
  ) { }


  ngOnInit(): void {
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

  /**
   * Downloads all of the data (expenses, recurringExpenses, groups) as a snapshot in a .json file
   */
  public downloadBackup() {
    combineLatest(this.expenseService.getExpenses("expenses"), this.expenseService.getExpenses("recurringExpenses"), this.groupsService.getGroups())
      .pipe(take(1))
      .subscribe(([expenses, recurringExpenses, groups]) => {
        let data = { expenses, recurringExpenses, groups };
        let fileName = `Expense_backup_${this.datePipe.transform(new Date(), 'MMM y').split(' ').join('_')}`
        this.downloadObjectAsJson(data, fileName)
      })
  }

  /**
   * gets called when a file has been chosen in the file-input
   * @param event FileUploadEvent
   */
  onImport(event) {
    var file = event.srcElement.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = (e) => {
        this.loadDataIntoApp(JSON.parse(e.target.result as string))
      }
      reader.onerror = (e) => {
        console.log('error reading file');
      }
    }
  }

  /**
   * loads all of the backup into the IndexedDB
   * @param json data containing expenses, recurringExpenses, groups
   */
  loadDataIntoApp(json: { expenses: Expense[], recurringExpenses: Expense[], groups: GroupItem[] }) {
    // add normal expenses

    if (confirm("Please confirm you want to load this backup into your app")) {
      json.expenses.forEach(expense => {
        delete expense.key;
        // if(!expense.recurring){
        this.expenseService.addExpense(expense, "expenses")
        // }
      });

      // add recurring expenses
      json.recurringExpenses.forEach(expense => {
        delete expense.key;
        this.expenseService.addExpense(expense, "recurringExpenses", true)
      });

      // add groups
      json.groups.forEach(group => {
        this.groupsService.addGroup(group.groupName);
      });

      alert("Data loaded successfully")
    }

  }

  public deleteData() {
    if (confirm("This will delete all expenses and data associated on this device")) {
      if (confirm("Are you REALLY sure?")) {
        this.expenseService.clearData("expenses");
        this.expenseService.clearData("recurringExpenses")
        this.groupsService.clearData();
      }
    }
  }

  private downloadObjectAsJson(exportObj, exportName) {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    console.log("should download now")
    downloadAnchorNode.remove();
  }

  
  /**
   * Since the height animation overflows the end of scroll by making the container higher then before, one can't see he animation since its happening off-screen
   * Therefore during the animation each frame we scroll to the bottom of the currently animated box
   */
  public animating = false;
  toggleShare() {
    const _scrollWithAnimation = () => {
      if (this.animating) {
        requestAnimationFrame(() => {
          console.log("animated")
          this.QrCode.nativeElement.scrollIntoView({ block: "end" });
          _scrollWithAnimation();
        })
      }
    }

    if (!this.shareShown) {
      this.animating = true
      _scrollWithAnimation()
      setTimeout(() => {
        this.animating = false;
      }, 250);
    }
    this.shareShown = !this.shareShown;
  }

}
