import { Component, OnInit, OnDestroy } from '@angular/core';
import { SliderService } from 'src/app/services/slider/slider.service';
import { GroupsService, GroupItem, GroupTotal } from 'src/app/services/groups/groups.service';
import { Observable, combineLatest, Subscription } from 'rxjs';
import { ExpenseService, Expense } from 'src/app/services/expenses/expense.service';
import { FilterService } from 'src/app/services/filter/filter.service';
import { transition, trigger, state, style, animate } from '@angular/animations';
import { differenceInDays } from 'date-fns';

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
    private filterService: FilterService
  ) { }

  public groups$: Observable<GroupItem[]>
  public expenses$: Observable<Expense[]>;
  private subscription: Subscription;
  public groupsTotals: GroupTotalCollections[];
  public helper = {}

  ngOnInit(): void {
    this.groups$ = this.groupsService.getGroups();
    this.expenses$ = this.expenseService.getExpenses("expenses")

    this.subscription = combineLatest(this.expenses$, this.groups$).subscribe(([expenses, groups]) => {
      this.groupsTotals = this.calculateGroupsTotals(expenses, groups);
      this.initializeHelper();
    })
    this.helper = {}
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initializeHelper(){
    for (let i = 0; i < this.groupsTotals.length; i++) {
      this.helper[i]={};        
    }
  }

  calculateGroupsTotals(expenses: Expense[], groups_origin: GroupItem[]): GroupTotalCollections[] {
    let sorterHelper = {};
    let groups = [...groups_origin].reverse();
    groups.push({ key: null, groupName: "General"});
    groups.forEach((el) => {
      sorterHelper[el.groupName] = {};
      sorterHelper[el.groupName].amount = 0;
      sorterHelper[el.groupName].expenses = [];
    })
    
    expenses.forEach(expense => {
      let expenseGroup= expense.group;
      //Skip expenses who have a group that has been deleted
      if(sorterHelper[expenseGroup]){
        sorterHelper[expenseGroup].amount += expense.amount;
        sorterHelper[expenseGroup].expenses.push(expense)
      }else{
        groups.push({ key: null, groupName: expenseGroup});
        sorterHelper[expenseGroup] = {}
        sorterHelper[expenseGroup].amount = expense.amount;
        sorterHelper[expenseGroup].expenses = [expense];
        sorterHelper[expenseGroup].deleted = true;
      }
    })
        
    let result: GroupTotal[] = groups.map<GroupTotal>((group) => {
      let amountForGroup: number = sorterHelper[group.groupName].amount;
      let expenses: Expense[] = sorterHelper[group.groupName].expenses;
      let deleted: boolean = sorterHelper[group.groupName].deleted;
      
      let result: GroupTotal ;
      
      if(expenses.length >0){
        let expensesSorted = expenses.sort((a,b)=>this.filterService.dateSorter(a.date,b.date));
        let first= expensesSorted[expensesSorted.length-1].date;
        let last = expensesSorted[0].date;
        let durationInDays = differenceInDays(new Date(last), new Date(first))+1; 
        result= { ...group, ...{ amount: amountForGroup, firstExpenseDate:first , lastExpenseDate: last, duration: durationInDays } }
      }else{
        result= { ...group, ...{ amount: amountForGroup } }
      }
      
      if(deleted){
        result = {...result, ...{deleted: deleted}}
      }
      
      return result
    });
    
    let generalGroup;
    let mapped=  result.reduce((acc, cur)=>{
      if(!cur.deleted){
        if(cur.groupName !== "General"){
          let next = acc;
          next[0].groupTotal.push(cur)
          return next
        }else{
          generalGroup = cur;
          return acc
        }
      }else{
        let next = acc;
        next[1].groupTotal.push(cur)
        return next
      }
    },[{type: "active", groupTotal: []},{type: "deleted", groupTotal: []}]);

    mapped.forEach(groupCollection=>{
      groupCollection.groupTotal.sort((a,b)=>this.filterService.dateSorter(a.firstExpenseDate, b.firstExpenseDate))
    });

    mapped[0].groupTotal.push(generalGroup);

    // mapped[0].groupTotal.fo

    return mapped;
  }


  
  helpMenuOpenForIndex(index: number, outer: number):string{
    return this.helper[outer][index] || 'out';
  }
  
  toggleHelpMenu(index: number, outer: number): void {
    if(this.helper[outer][index]){
      //already exists --> is open
      this.initializeHelper();
    }else{
      this.initializeHelper();
      this.helper[outer][index] =  'in';
    }
  }
}
