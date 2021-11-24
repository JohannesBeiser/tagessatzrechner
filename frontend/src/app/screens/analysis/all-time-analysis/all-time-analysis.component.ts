import { Component, OnInit } from '@angular/core';
import { differenceInDays } from 'date-fns';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category/category.service';
import { Expense, ExpenseService } from 'src/app/services/expenses/expense.service';
import { GroupsService } from 'src/app/services/groups/groups.service';

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

  public expenses$ : Observable<Expense[]>;

  // this Construct is the exact result of all of the expenses and gets build so its easier for the template and charts to display.
  //Everything thats needed is already pre-calculated in here
  public stats: {
    amountOfDays: number,
    averagePerMonth: number,
    averagePerYear: number,
    averageperDay: number,
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

  ngOnInit(): void {

    this.stats = {
      amountOfDays: 0,
      averagePerMonth: 0,
      averagePerYear: 0,
      averageperDay: 0,
      categoryYearsData: [],
      total: 0,
      totalRecurring: 0,
      yearsData: [],
    }

    this.expenses$ = this.expenseService.getExpenses("expenses").pipe(filter(expenses=> expenses.length>0))

    this.expenses$.subscribe(expenses=>{

      let firstDate: Date;
      let lastDate: Date;

      expenses.forEach(expense=>{
      
        //TODO: Ignore dates and expenses which date > current date
        if(new Date(expense.date) < new Date()){
          if(!firstDate){
            firstDate=  new Date(expense.date);
          }
          if(!lastDate){
            lastDate=  new Date(expense.date);
          }
  
          if(new Date(expense.date)<firstDate){
            firstDate = new Date(expense.date);
          }
  
          if(new Date(expense.date)>lastDate){
            lastDate = new Date(expense.date);
          }
  
          // all totals
          this.stats.total+= expense.amount;
          if(expense.recurring){
            this.stats.totalRecurring += expense.amount;
          }
  
          // years total
          let expenseYear: number =  new Date(expense.date).getFullYear();
          let yearsDataMatch = this.stats.yearsData.find(el=>el.year === expenseYear);
          if(!yearsDataMatch){
            this.stats.yearsData.push({year: expenseYear, total: 0, totalRecurring: 0, averagePerMonth: 0, amountInDays: null, firstDate: null, lastDate: null});
          }
          yearsDataMatch = this.stats.yearsData.find(el=>el.year === expenseYear);
          yearsDataMatch.total += expense.amount;
          if(!yearsDataMatch.firstDate){
            yearsDataMatch.firstDate=  new Date(expense.date);
          }
          if(!yearsDataMatch.lastDate){
            yearsDataMatch.lastDate=  new Date(expense.date);
          }
  
          if(new Date(expense.date)<yearsDataMatch.firstDate){
            yearsDataMatch.firstDate = new Date(expense.date);
          }
  
          if(new Date(expense.date)>yearsDataMatch.lastDate){
            yearsDataMatch.lastDate = new Date(expense.date);
          }
  
          if(expense.recurring){
            yearsDataMatch.totalRecurring += expense.amount;
          }
  
          // years categroy totals
          let expenseCategory: number = expense.category;
          // find the category stats object whch matches the expenses category
          let yearsCategoryMatch = this.stats.categoryYearsData.find(el=>el.category === expenseCategory);
          if(!yearsCategoryMatch){
            this.stats.categoryYearsData.push({category: expenseCategory, data: []});
          }
          yearsCategoryMatch = this.stats.categoryYearsData.find(el=>el.category === expenseCategory);
          let yearsCategoryDataMatch = yearsCategoryMatch.data.find(el=>el.year == expenseYear);
          if(!yearsCategoryDataMatch){
            yearsCategoryMatch.data.push({total: 0, year: expenseYear});
          }
          yearsCategoryDataMatch = yearsCategoryMatch.data.find(el=>el.year == expenseYear);
          yearsCategoryDataMatch.total += expense.amount;
        }
      });

      this.stats.amountOfDays = differenceInDays(lastDate, firstDate);

      this.stats.averageperDay = this.stats.total / this.stats.amountOfDays;
      this.stats.averagePerYear = this.stats.averageperDay * 365;
      this.stats.averagePerMonth = this.stats.averageperDay * 30.437; // average month = 30.437
      this.stats.yearsData.forEach(yearData=>{
        yearData.amountInDays = differenceInDays(yearData.lastDate, yearData.firstDate);
        yearData.averagePerMonth = (yearData.total / yearData.amountInDays) * 30.437;
      })

      debugger;

    });
  }

}
