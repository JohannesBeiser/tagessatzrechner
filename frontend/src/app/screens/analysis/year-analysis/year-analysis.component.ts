import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category, CategoryService } from 'src/app/services/category/category.service';
import { Expense, ExpenseService } from 'src/app/services/expenses/expense.service';
import * as Highcharts from 'highcharts';
import { filter, map, take } from 'rxjs/operators';

type Stats= {
  total: number;
  totalTravel: number;
  totalInvest: number;
  expectedTotalEndOfYear: number;
  amountOfDays: number;
  monthsData: {
    month: number;
    total: number;
  }[];
  categoryMonthsData: {
    category: number,
    total: number,
    monthsData: {
      month: number;
      total: number;
    }[];
  }[]
}

@Component({
  selector: 'app-year-analysis',
  templateUrl: './year-analysis.component.html',
  styleUrls: ['./year-analysis.component.less']
})
export class YearAnalysisComponent implements OnInit {

  constructor(
    public categoryService: CategoryService,
    private expenseService: ExpenseService
  ) { }
  
  Highcharts: typeof Highcharts = Highcharts;
  public chartReady: boolean = false;
  public categories$: Observable<Category[]>;
  private expenses$: Observable<Expense[]>;
  public selectedYear$: BehaviorSubject<number>;
  public availableYears: number[];
  public yearSelection: number = new Date().getFullYear();
  chartOptions: Highcharts.Options = {};
  historyCategorySelected: number = 0;
  updateFlag: boolean = false;

  public stats: Stats = {
    total: 0,
    totalTravel: 0,
    totalInvest: 0,
    expectedTotalEndOfYear: 0,
    amountOfDays: 0,
    monthsData: [],
    categoryMonthsData: []
  };

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategoriesNew().pipe(
      filter(categories => categories.length > 0),
      map(categories => categories.filter(category => category.name !== 'unassigned'))
    );


    this.selectedYear$ = new BehaviorSubject(new Date().getFullYear())
    this.expenses$ = this.expenseService.getExpenses("expenses").pipe(
      filter(expenses => expenses.length>0),
      take(1)
      )
    combineLatest([this.expenses$, this.selectedYear$]).subscribe(([expenses, selectedYear])=>{
      this.availableYears = expenses.reduce((acc,cur)=>{
        let currentYear = new Date(cur.date).getFullYear()
        if(!acc.includes(currentYear)){
          acc.push(currentYear);
        }
        return acc;
      },[])

      this.stats = {
        total: 0,
        totalTravel: 0,
        totalInvest: 0,
        expectedTotalEndOfYear: 0,
        amountOfDays: 0,
        monthsData: [],
        categoryMonthsData: []
      };

      expenses = expenses.filter(expense=>new Date(expense.date).getFullYear() === parseInt(selectedYear as any));
      let firstDate: Date;
      let lastDate: Date;

      expenses.forEach(expense => {
        if (new Date(expense.date) < new Date()) {
          if (!firstDate) {
            firstDate = new Date(expense.date);
          }

          if (!lastDate) {
            lastDate = new Date(expense.date);
          }

          if (new Date(expense.date) < firstDate) {
            firstDate = new Date(expense.date);
          }

          if (new Date(expense.date) > lastDate) {
            lastDate = new Date(expense.date);
          }

          // all totals
          this.stats.total += expense.amount;

          // years total
          let expenseMonth: number = new Date(expense.date).getMonth();
          let monthsDataMatch = this.stats.monthsData.find(el => el.month === expenseMonth);
          if (!monthsDataMatch) {
            this.stats.monthsData.push({month: new Date(expense.date).getMonth(), total: 0 });
          }
          monthsDataMatch = this.stats.monthsData.find(el => el.month === expenseMonth);
          monthsDataMatch.total += expense.amount;

          if(expense.tags.indexOf(1638199877164)>=0){
            this.stats.totalTravel += expense.amount;
          }

          // years categroy totals
          let expenseCategory: number = expense.category;
          // find the category stats object whch matches the expenses category
          let monthsCategoryMatch = this.stats.categoryMonthsData.find(el => el.category === expenseCategory);
          if (!monthsCategoryMatch) {
            this.stats.categoryMonthsData.push({ category: expenseCategory, total: 0, monthsData: []});
          }
          monthsCategoryMatch = this.stats.categoryMonthsData.find(el => el.category === expenseCategory);
          let monthsCategoryDataMatch = monthsCategoryMatch.monthsData.find(el => el.month == expenseMonth);
          if (!monthsCategoryDataMatch) {
            monthsCategoryMatch.monthsData.push({ total: 0, month: expenseMonth });
          }
          monthsCategoryDataMatch = monthsCategoryMatch.monthsData.find(el => el.month == expenseMonth);
          monthsCategoryDataMatch.total += expense.amount;
          monthsCategoryMatch.total += expense.amount
        }
      });


      // 
      this.initializeChart();
      this.historyCategoryChanged();
    })
  }

  yearSelectionChanged(){
    this.selectedYear$.next(this.yearSelection);
  }

  
  public historyCategoryChanged() {
    if (this.historyCategorySelected == 0) {
      this.initializeChart()
    } else {

      let selectedCategory: Category = this.categoryService.getCategoryFromId(this.historyCategorySelected);
      let monthsFilled = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(el=>el.substr(0,3));
      let valuesFilled = [0,0,0,0,0,0,0,0,0,0,0,0]
  
      this.stats.categoryMonthsData.find(el => el.category == selectedCategory.id).monthsData.sort((a, b) => { return a.month - b.month })
      .forEach(monthData=>{
        valuesFilled[monthData.month]= monthData.total;
      })

      this.chartOptions.xAxis = {
        categories: monthsFilled,
        crosshair: true
      }    


      this.chartOptions.series = [
        {
          color: selectedCategory.color,
          type: 'column',
          data: valuesFilled
        }
      ]
    }
    this.updateFlag = true;
  }

  private initializeChart() {
    

    let monthsFilled = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(el=>el.substr(0,3));
    let valuesFilled = [0,0,0,0,0,0,0,0,0,0,0,0]

    this.stats.monthsData.sort((a, b) => { return a.month - b.month }).forEach(monthData=>{
      valuesFilled[monthData.month]= monthData.total;
    })
    
    this.chartOptions = {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        height: 200,
      },
      credits: {
        enabled: false
      },
      title: {
        text: ''
      },
      legend: {
        enabled: false
      },
      xAxis: {
        categories: monthsFilled,
        crosshair: true
      },
      yAxis: {
        min: 0,
        endOnTick: true,
        title: {
          text: ''
        },
        labels: {
          formatter: function () {
            return this.value + ' €';
          }
        }
      },
      tooltip: { enabled: false },
      plotOptions: {
        column: {
          pointPadding: 0,
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            align: 'center',
            formatter: function () {
              return this.y + ' €';
            }
          },
        },
        series: {

          states: {
            hover: {
              enabled: false,
            },
          }
        }
      },
      series: [
        {
          color: '#444444',
          name: '',
          type: 'column',
          data: valuesFilled,
          dataLabels: {
            enabled: false,
            inside: false
          }
        }]
    };

    this.chartReady = true; // needed so template doesnt try to initialize before its ready because it gets initialized asynchronously in subscribtion of expenses$
  }


}
