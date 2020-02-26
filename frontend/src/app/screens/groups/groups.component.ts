import { Component, OnInit, OnDestroy } from '@angular/core';
import { SliderService } from 'src/app/services/slider/slider.service';
import { GroupsService, GroupItem, GroupTotal } from 'src/app/services/groups/groups.service';
import { Observable, combineLatest, Subscription } from 'rxjs';
import { ExpenseService, Expense } from 'src/app/services/expenses/expense.service';
import { FilterService } from 'src/app/services/filter/filter.service';



@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.less']
})
export class GroupsComponent implements OnInit, OnDestroy {

  constructor(
    public sliderService: SliderService,
    public groupsService: GroupsService,
    public expenseService: ExpenseService,
    private filterService: FilterService
  ) { }

  public groups$: Observable<GroupItem[]>
  public expenses$: Observable<Expense[]>;
  private subscription: Subscription;
  public groupsTotals: GroupTotal[];

  ngOnInit(): void {
    this.groups$ = this.groupsService.getGroups();
    this.expenses$ = this.expenseService.getExpenses()

    this.subscription = combineLatest(this.expenses$, this.groups$).subscribe(([expenses, groups]) => {
      this.groupsTotals = this.calculateGroupsTotals(expenses, groups);
    })

  }

  calculateGroupsTotals(expenses: Expense[], groups: GroupItem[]): GroupTotal[] {
    let sorterHelper = {};
    groups.push({ key: null, groupName: "general" });
    groups.forEach((el) => {
      sorterHelper[el.groupName] = {};
      sorterHelper[el.groupName].amount = 0;
      sorterHelper[el.groupName].expenses = [];
    })

    expenses.forEach(expense => {
      sorterHelper[expense.group].amount += expense.amount;
      sorterHelper[expense.group].expenses.push(expense)
    })

    // let sorted = expenses.sort(this.filterService.dateSorter);
    // debugger;

    let result: GroupTotal[] = groups.map<GroupTotal>((group) => {
      let amountForGroup = sorterHelper[group.groupName].amount;
      let expenses = sorterHelper[group.groupName].expenses

      let result: GroupTotal ;

      if(expenses.length >0){
        let expensesSorted = expenses.sort(this.filterService.dateSorter);
        result= { ...group, ...{ amount: amountForGroup, firstExpenseDate: expensesSorted[expensesSorted.length-1].date, lastExpenseDate: expensesSorted[0].date } }
      }else{
        result= { ...group, ...{ amount: amountForGroup } }
      }
      return result
    });
    return result
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
