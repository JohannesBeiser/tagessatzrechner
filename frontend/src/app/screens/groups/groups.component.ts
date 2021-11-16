import { Component, OnInit, OnDestroy } from '@angular/core';
import { SliderService } from 'src/app/services/slider/slider.service';
import { GroupsService, Group, GroupTotal } from 'src/app/services/groups/groups.service';
import { Observable, combineLatest, Subscription } from 'rxjs';
import { ExpenseService, Expense } from 'src/app/services/expenses/expense.service';
import { FilterService } from 'src/app/services/filter/filter.service';
import { transition, trigger, state, style, animate } from '@angular/animations';
import { differenceInDays } from 'date-fns';
import { Router } from '@angular/router';

type GroupTotalCollections = {
  type: string;
  groupTotal: GroupTotal[];
}

@Component({
  selector: 'app-groups',
  animations: [
    trigger('slideInOut', [
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
        margin: '0px'
      })),
      state('in', style({
        opacity: '1',
        overflow: 'hidden',
        height: '*',
        margin: '12px 0 0 0'
      })),
      transition('out => in', animate('150ms ease-in-out')),
      transition('in => out', animate('150ms ease-in-out'))
    ])
  ],
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.less']
})
export class GroupsComponent implements OnInit, OnDestroy {

  constructor(
    public sliderService: SliderService,
    public groupsService: GroupsService,
    public expenseService: ExpenseService,
    private filterService: FilterService,
    private router: Router
  ) { }

  public groups$: Observable<Group[]>
  public expenses$: Observable<Expense[]>;
  private subscription: Subscription;
  public groupsTotals: GroupTotalCollections[];
  public allTotals: { duration: number, amount: number };
  public helper = {}

  ngOnInit(): void {
    this.groups$ = this.groupsService.getGroups();
    this.expenses$ = this.expenseService.getExpenses("expenses")

    this.subscription = combineLatest(this.expenses$, this.groups$).subscribe(([expenses, groups]) => {
      this.groupsTotals = this.calculateGroupsTotals(expenses, groups);
      this.allTotals = this.groupsTotals.map((el) => {
        return el.groupTotal.reduce((acc, cur) => {
          if(!cur.duration){
            return acc;
          }
          return { duration: acc.duration + cur.duration, amount: acc.amount + cur.amount }
        }, { duration: 0, amount: 0 })
      }).reduce((acc, cur) => {
        return { duration: acc.duration + cur.duration, amount: acc.amount + cur.amount }
      });
      this.initializeHelper();
    })
    this.helper = {}
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Shows a expense list just like on home for this group. Opens a slighly modified "home" site with a "x" button to reset the site to its former state
   */
  showDetailList(groupId: number){
    this.filterService.setFilter(
      {
        temporaryFilter: true,
        groups: [this.groupsService.getGroupById(groupId)]
      }
    )
    this.router.navigate(['/home']);
  }

  initializeHelper() {
    for (let i = 0; i < this.groupsTotals.length; i++) {
      this.helper[i] = {};
    }
  }

  calculateGroupsTotals(expenses: Expense[], groups_origin: Group[]): GroupTotalCollections[] {
    let sorterHelper = {};
    let groups = [...groups_origin].reverse();
    // groups.push({ key: null, groupName: "General" });
    groups.forEach((el) => {
      sorterHelper[el.name] = {};
      sorterHelper[el.name].amount = 0;
      sorterHelper[el.name].expenses = [];
    })

    expenses.forEach(expense => {
      let expenseGroup = expense.group;
      //Skip expenses who have a group that has been deleted
      if (expenseGroup !== 0) { // 0 being general
        if (sorterHelper[expenseGroup]) {
          sorterHelper[expenseGroup].amount += expense.amount;
          sorterHelper[expenseGroup].expenses.push(expense)
        } else {
          groups.push({ key: null, name: this.groupsService.getGroupById(expenseGroup).name });
          sorterHelper[expenseGroup] = {}
          sorterHelper[expenseGroup].amount = expense.amount;
          sorterHelper[expenseGroup].expenses = [expense];
          sorterHelper[expenseGroup].deleted = true;
        }
      }
    })

    let result: GroupTotal[] = groups.map<GroupTotal>((group) => {
      let amountForGroup: number = sorterHelper[group.name].amount;
      let expenses: Expense[] = sorterHelper[group.name].expenses;
      let deleted: boolean = sorterHelper[group.name].deleted;

      let result: GroupTotal;

      if (expenses.length > 0) {
        let expensesSorted = expenses.sort((a, b) => this.filterService.dateSorter(a.date, b.date));
        let first = expensesSorted[expensesSorted.length - 1].date;
        let last = expensesSorted[0].date;
        let durationInDays = differenceInDays(new Date(last), new Date(first)) + 1;
        result = { ...group, ...{ amount: amountForGroup, firstExpenseDate: first, lastExpenseDate: last, duration: durationInDays } }
      } else {
        result = { ...group, ...{ amount: amountForGroup } }
      }

      if (deleted) {
        result = { ...result, ...{ deleted: deleted } }
      }

      return result
    });

    let mapped = result.reduce((acc, cur) => {
        if (!cur.deleted) {
          if (cur.name !== "General") {
            let next = acc;
            next[0].groupTotal.push(cur)
            return next
          } else {
            return acc
          }
        } else {
          let next = acc;
          next[1].groupTotal.push(cur)
          return next
        }
    }, [{ type: "active", groupTotal: [] }, { type: "deleted", groupTotal: [] }]);

    mapped.forEach(groupCollection => {
      groupCollection.groupTotal.sort((a, b) => this.filterService.dateSorter(a.firstExpenseDate, b.firstExpenseDate))
    });


    // mapped[0].groupTotal.fo

    return mapped;
  }



  helpMenuOpenForIndex(index: number, outer: number): string {
    return this.helper[outer][index] || 'out';
  }

  toggleHelpMenu(index: number, outer: number): void {
    if (this.helper[outer][index]) {
      //already exists --> is open
      this.initializeHelper();
    } else {
      this.initializeHelper();
      this.helper[outer][index] = 'in';
    }
  }
}
