import { Component, OnInit } from '@angular/core';
import { ExpenseService, Expense } from 'src/app/services/expenses/expense.service';
import { Observable, combineLatest, Subject, BehaviorSubject } from 'rxjs';
import { FilterService, ExpenseFilter, MonthYear } from 'src/app/services/filter/filter.service';
import { isWithinInterval, subDays } from "date-fns";
import { CategoryService } from 'src/app/services/category/category.service';
import * as Highcharts from 'highcharts';

interface CategoryTotal {
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


  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  private expenses$: Observable<Expense[]>;
  public currentFilter$: BehaviorSubject<ExpenseFilter>;
  public monthSwitched$: BehaviorSubject<MonthYear>;
  public sortMethod$: BehaviorSubject<string>;

  public expenses: Expense[];
  public totalAmount: number = 0;
  public totalCategories: CategoryTotal[];
  public collapseNotifier: Subject<void> = new Subject();

  ngOnInit(): void {
    this.expenses$ = this.expenseService.getExpenses("expenses");
    this.currentFilter$ = this.filterService.getFilter();
    this.monthSwitched$ = this.filterService.monthSwitched$;
    this.sortMethod$ = this.filterService.sortMethod$;

    combineLatest(this.currentFilter$, this.expenses$, this.monthSwitched$, this.sortMethod$)
      .subscribe(([filter, expenses, monthSwitch, sortMethod]) => {
        let filtered = expenses.filter((expense) => {
          return this.matchesFilter(expense, filter, monthSwitch)
        });

        if (sortMethod == "amount") {
          this.expenses = filtered.reverse().sort(this.filterService.amountSorter);
        } else {
          this.expenses = filtered.reverse().sort(this.filterService.dateSorter);
        }

        this.totalAmount = filtered.reduce((acc, cur) => {
          return acc + cur.amount
        }, 0);

        let temp = filtered.reduce((acc, cur) => {
          acc[cur.category] += cur.amount;
          return acc;
        }, {
          food: 0,
          accommodation: 0,
          transport: 0,
          multimedia: 0,
          general: 0
        });
        this.totalCategories = this.objectToArray(temp).filter((item) => {
          return item.amount > 0;
        }).sort((a, b) => {
          return b.amount - a.amount;
        });
      })
    this.initChart();
  }

  private initChart() {

    let data= [750, 630, 820, 600, 610, 580, 670, 750, 630, 820, 600, 610, 580, 670];

    this.chartOptions = {
      title: {
        text: null,
        style: {
          color: '#272727'
        }
      },
      tooltip: { enabled: false },
      chart: {
        backgroundColor: "#eee",
        scrollablePlotArea: {
          minWidth: 16*50, //amountOfEntries *50px
          opacity: 0.9,
          scrollPositionX: (1/14)*3 // 1/ amountOfEntries * startMonth from begin
        }
      },
      plotOptions: {
        line: {
          pointStart: Date.UTC(2020, 0, 0),
          pointInterval: 24 * 3600 * 1000 * 30
        },
        series: {
          // connectNulls: true,
          states: {
            hover: {
              enabled: false
            }
          }
        }
      },
      legend: {
        enabled: false
      },
      xAxis: {
        min: Date.UTC(2020, 0, 0),
        allowDecimals: false,
        type: 'datetime',
        tickInterval: 30 * 24 * 3600 * 1000, //one month
        labels: {
          rotation: 0,
          overflow: 'justify'
        },
        crosshair: {
          width: 0
        },
      },
      yAxis: {
        opposite: false,      
        gridLineColor: "#ccc",
        min: 0,
        title: {
          text: null
        },
        labels: {
          formatter: function () {
            return this.value + "€"
          }
        }
      },
      colors: ["#444"],
      series: [{
        data: data,
        type: 'line'
      }]
    };
  }

  public initialFocus: string;

  private objectToArray(obj: any): CategoryTotal[] {
    return Object.keys(obj).map(key => {
      return { category: key, amount: obj[key] }
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
      } else {
        //take all data change nothing...BUT if last30Days then 
        if (filter.last30Active) {
          let expenseDate = new Date(expense.date);
          matches = isWithinInterval(expenseDate, { start: subDays(new Date(), 30), end: new Date() })
        }
      }
    }

    if (matches && filter.groups) {
      let matchesInternal = false;
      //OR-comparison, true if one of the filters is true
      filter.groups.forEach(groupFilter => {
        if (!matchesInternal) {
          matchesInternal = expense.group.toLowerCase() == groupFilter.toLowerCase()
        }
      })
      matches = matchesInternal;
    }
    return matches
  }
}
