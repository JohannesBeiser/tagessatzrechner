import { Component, OnInit, ɵSWITCH_COMPILE_NGMODULE__POST_R3__ } from '@angular/core';
import { ExpenseService, Expense } from 'src/app/services/expenses/expense.service';
import { Observable, combineLatest, Subject, BehaviorSubject } from 'rxjs';
import { FilterService, ExpenseFilter, MonthYear } from 'src/app/services/filter/filter.service';
import { DatePipe } from '@angular/common';
import { addMonths, subMonths, isWithinInterval, subDays } from "date-fns";
import { CategoryService } from 'src/app/services/category/category.service';

interface CategoryTotal{
  category: string;
  amount: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(
    public expenseService: ExpenseService,
    public filterService: FilterService,
    public categoryService: CategoryService
  ) { }

  private expenses$: Observable<Expense[]>;
  public currentFilter$: BehaviorSubject<ExpenseFilter>;
  public monthSwitched$: BehaviorSubject<MonthYear>;
  public sortMethod$: BehaviorSubject<string>;

  public expenses: Expense[];
  public totalAmount: number = 0;
  public totalCategories: CategoryTotal[];
  public filterTitles: { date: string; group: string } = null;


  ngOnInit(): void {
    this.expenses$ = this.expenseService.getExpenses();
    this.currentFilter$ = this.filterService.getFilter();
    this.monthSwitched$ = this.filterService.monthSwitched$;
    this.sortMethod$ = this.filterService.sortMethod$;

    combineLatest(this.currentFilter$, this.expenses$, this.monthSwitched$, this.sortMethod$).subscribe(([filter, expenses, monthSwitch, sortMethod]) => {
      let filtered= expenses.filter((expense) => {
        return this.matchesFilter(expense, filter, monthSwitch)
      });

      if(sortMethod == "amount"){
        this.expenses= filtered.reverse().sort(this.filterService.amountSorter);
      }else{
        this.expenses= filtered.reverse().sort(this.filterService.dateSorter);
      }

      this.totalAmount = filtered.reduce((acc, cur) => {
        return acc + cur.amount
      }, 0);

      let temp = filtered.reduce((acc, cur) => {
        acc[cur.category] += cur.amount;
        return acc;
      },{
        food: 0,
        accommodation: 0,
        transport: 0,
        multimedia: 0,
        general: 0
      });
      this.totalCategories = this.objectToArray(temp).filter((item)=>{
        return item.amount >0;
      }).sort((a,b)=>{
        return b.amount-a.amount;
      });
    })
  }

  public initialFocus: string;

  private objectToArray(obj: any): CategoryTotal[]{
    return Object.keys(obj).map(key=> {
      return {category: key, amount: obj[key] }
    });
  }


  private matchesFilter(expense: Expense, filter: ExpenseFilter, monthSwitch: MonthYear): boolean {
    let matches = true;
    let expenseYear = expense.date.substring(0, 4);
    let expenseMonth = expense.date.substring(5, 7);

    if (monthSwitch) {
      matches = expenseYear == monthSwitch.year && expenseMonth == monthSwitch.month;
    } else {
      if (filter.date) {
        matches = expenseYear == filter.date.year && expenseMonth == filter.date.month;
        // debugger;
      }else{
        //take all data change nothing...BUT if last30Days then 
        if(localStorage.getItem("last30Active")== 'active'){
          let expenseDate= new Date(expense.date);
          matches = isWithinInterval(expenseDate,{ start: subDays(new Date(), 30), end: new Date()})
        }
      }
    }

    if (matches && filter.group) {
      matches = expense.group.toLowerCase() == filter.group.toLowerCase();
    }

    return matches
  }



}
