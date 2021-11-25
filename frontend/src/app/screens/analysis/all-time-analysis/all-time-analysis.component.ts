import { Component, OnInit } from '@angular/core';
import { differenceInDays } from 'date-fns';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Category, CategoryService } from 'src/app/services/category/category.service';
import { Expense, ExpenseService } from 'src/app/services/expenses/expense.service';
import { GroupsService } from 'src/app/services/groups/groups.service';
import * as Highcharts from 'highcharts';


type Stats =  {
  amountOfDays: number,
  averagePerMonth: number,
  averagePerYear: number,
  averagePerDay: number,
  total: number, // inirial calculation
  totalRecurring: number, // initial calc
  yearsData: {
    year: number, // initial calc
    firstDate: Date,// initial calc
    lastDate: Date,// initial calc
    amountInDays: number,
    total: number,// initial calc
    totalRecurring: number,// initial calc
    averagePerMonth: number,
  }[],
  categoryYearsData: {
    category: number,
    data: {
      year: number,
      total: number,// initial calc
    }[]
  }[]
}

@Component({
  selector: 'app-all-time-analysis',
  templateUrl: './all-time-analysis.component.html',
  styleUrls: ['./all-time-analysis.component.less']
})
export class AllTimeAnalysisComponent implements OnInit {

  constructor(
    private expenseService: ExpenseService,
    private groupService: GroupsService,
    private categoryService: CategoryService,
  ) { }

  public expenses$: Observable<Expense[]>;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  chartReady: boolean = false;

  historyCategorySelected: number = 0;
  averageCategorySelected: number = 0;
  public categories$ : Observable<Category[]>;
  updateFlag: boolean = false;

  averagePerYear: number;
  averagePerMonth: number;
  averagePerDay: number;

  // this Construct is the exact result of all of the expenses and gets build so its easier for the template and charts to display.
  //Everything thats needed is already pre-calculated in here
  public stats: Stats;
  

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategoriesNew().pipe(
      filter(categories=>categories.length>0),
      map(categories=>categories.filter(category=>category.name !== 'unassigned'))
    );

    this.stats = {
      amountOfDays: 0,
      averagePerMonth: 0,
      averagePerYear: 0,
      averagePerDay: 0,
      categoryYearsData: [],
      total: 0,
      totalRecurring: 0,
      yearsData: [],
    }

    this.expenses$ = this.expenseService.getExpenses("expenses").pipe(filter(expenses => expenses.length > 0))

    this.expenses$.subscribe(expenses => {
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
          if (expense.recurring) {
            this.stats.totalRecurring += expense.amount;
          }

          // years total
          let expenseYear: number = new Date(expense.date).getFullYear();
          let yearsDataMatch = this.stats.yearsData.find(el => el.year === expenseYear);
          if (!yearsDataMatch) {
            this.stats.yearsData.push({ year: expenseYear, total: 0, totalRecurring: 0, averagePerMonth: 0, amountInDays: null, firstDate: null, lastDate: null });
          }
          yearsDataMatch = this.stats.yearsData.find(el => el.year === expenseYear);
          yearsDataMatch.total += expense.amount;
          if (!yearsDataMatch.firstDate) {
            yearsDataMatch.firstDate = new Date(expense.date);
          }
          if (!yearsDataMatch.lastDate) {
            yearsDataMatch.lastDate = new Date(expense.date);
          }

          if (new Date(expense.date) < yearsDataMatch.firstDate) {
            yearsDataMatch.firstDate = new Date(expense.date);
          }

          if (new Date(expense.date) > yearsDataMatch.lastDate) {
            yearsDataMatch.lastDate = new Date(expense.date);
          }

          if (expense.recurring) {
            yearsDataMatch.totalRecurring += expense.amount;
          }

          // years categroy totals
          let expenseCategory: number = expense.category;
          // find the category stats object whch matches the expenses category
          let yearsCategoryMatch = this.stats.categoryYearsData.find(el => el.category === expenseCategory);
          if (!yearsCategoryMatch) {
            this.stats.categoryYearsData.push({ category: expenseCategory, data: [] });
          }
          yearsCategoryMatch = this.stats.categoryYearsData.find(el => el.category === expenseCategory);
          let yearsCategoryDataMatch = yearsCategoryMatch.data.find(el => el.year == expenseYear);
          if (!yearsCategoryDataMatch) {
            yearsCategoryMatch.data.push({ total: 0, year: expenseYear });
          }
          yearsCategoryDataMatch = yearsCategoryMatch.data.find(el => el.year == expenseYear);
          yearsCategoryDataMatch.total += expense.amount;
        }
      });

      this.stats.amountOfDays = differenceInDays(lastDate, firstDate);

      this.stats.averagePerDay = Math.round(this.stats.total / this.stats.amountOfDays);
      this.stats.averagePerYear = Math.round(this.stats.averagePerDay * 365);
      this.stats.averagePerMonth = Math.round(this.stats.averagePerDay * 30.437); // average month = 30.437
      this.averagePerYear = this.stats.averagePerYear;
      this.averagePerMonth = this.stats.averagePerMonth;
      this.averagePerDay = this.stats.averagePerDay;

      this.stats.yearsData.forEach(yearData => {
        yearData.amountInDays = differenceInDays(yearData.lastDate, yearData.firstDate);
        yearData.averagePerMonth = (yearData.total / yearData.amountInDays) * 30.437;
      });

      this.initializeChart();
    });
  }


  private initializeChart() {

    let years: string[] = this.stats.yearsData.sort((a,b)=>{return a.year - b.year}).map(el=>el.year.toString())

    let values: number[] = this.stats.yearsData.sort((a,b)=>{return a.year - b.year}).map(el=>Math.round(el.total));

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
        categories: years,
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
        data: values,
        dataLabels: {
          inside: false
        }
      }]
    };
    this.chartReady = true; // needed so template doesnt try to initialize before its ready because it gets initialized asynchronously in subscribtion of expenses$
  }

  public historyCategoryChanged(){
    if(this.historyCategorySelected == 0){
      this.initializeChart()      
    }else{

    let selectedCategory: Category = this.categoryService.getCategoryFromId(this.historyCategorySelected);
      
    let years: string[] = this.stats.categoryYearsData.find(el=>el.category==selectedCategory.id).data.sort((a,b)=>{return a.year - b.year}).map(el=>el.year.toString())

    let values: number[] = this.stats.categoryYearsData.find(el=>el.category==selectedCategory.id).data.sort((a,b)=>{return a.year - b.year}).map(el=>Math.round(el.total));
    this.chartOptions.xAxis= {
        categories: years,
        crosshair: true
      }
    this.chartOptions.series = [
      {
        color: selectedCategory.color,
        type: 'column',
        data: values
      }
    ]
    }
    this.updateFlag= true;
  }

  public averageCategoryChanged(){
    if(this.averageCategorySelected == 0){
      this.averagePerYear = this.stats.averagePerYear;
      this.averagePerMonth = this.stats.averagePerMonth;
      this.averagePerDay = this.stats.averagePerDay;     
    }else{
      // a specific category has been chosen
    let selectedCategory: Category = this.categoryService.getCategoryFromId(this.averageCategorySelected);
    let selectedCategoriesTotal: number = this.stats.categoryYearsData.find(el=>el.category==selectedCategory.id).data.reduce((acc,cur)=> acc + cur.total,0)

    this.averagePerYear = Math.round(selectedCategoriesTotal / this.stats.amountOfDays *365);
    this.averagePerMonth = Math.round(selectedCategoriesTotal / this.stats.amountOfDays *30.437);
    this.averagePerDay = Math.round(selectedCategoriesTotal / this.stats.amountOfDays);    
    }
  }

}
