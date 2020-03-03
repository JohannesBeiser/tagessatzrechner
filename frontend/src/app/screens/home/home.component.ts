import { Component, OnInit } from '@angular/core';
import { ExpenseService, Expense } from 'src/app/services/expenses/expense.service';
import { Observable, combineLatest, Subject, BehaviorSubject } from 'rxjs';
import { FilterService, ExpenseFilter, MonthYear } from 'src/app/services/filter/filter.service';
import { isWithinInterval, subDays } from "date-fns";
import { CategoryService } from 'src/app/services/category/category.service';
import * as Highcharts from 'highcharts/highstock';

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
  chartOptions: Highcharts.Options = {
    title: {
      text: null,
      style: {
        color: '#272727'
      }
    },
    rangeSelector: {
      selected: 4,
      inputEnabled: false,
      buttonTheme: {
        visibility: 'hidden'
      },
      labelStyle: {
        visibility: 'hidden'
      }
    },
    tooltip: { enabled: false },
    chart: {
      backgroundColor: "transparent",
    },
    navigator: {
      enabled: false,
      outlineWidth: 0
    },
    plotOptions: {
      line: {
        pointStart: Date.UTC(2020, 0, 0),
        pointInterval: 24 * 3600 * 1000 * 30
      },
      series: {
        marker:{
          enabled: true,
          radius: 3
        },
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
      max: Date.UTC(2020, 4, 1),
      allowDecimals: false,
      type: 'datetime',
      tickInterval: 24 * 3600 * 1000 * 30, //one month
      labels: {
        rotation: 0,
        overflow: 'justify'
      },
      gridLineColor: "red",
      // scrollbar: {
      //   enabled: true
      // }
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
      data: [750, 630, 820, 600, 610, 580, 670, 750, 630, 820, 600, 610, 580, 670],
      type: 'line'
    }]
  };

  private expenses$: Observable<Expense[]>;
  public currentFilter$: BehaviorSubject<ExpenseFilter>;
  public monthSwitched$: BehaviorSubject<MonthYear>;
  public sortMethod$: BehaviorSubject<string>;

  public expenses: Expense[];
  public totalAmount: number = 0;
  public totalCategories: CategoryTotal[];
  public filterTitles: { date: string; group: string } = null;
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
        // debugger;
      } else {
        //take all data change nothing...BUT if last30Days then 
        if (localStorage.getItem("last30Active") == 'active') {
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
