import { Component, OnInit } from '@angular/core';
import { ExpenseService, Expense } from 'src/app/services/expenses/expense.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(
    public expenseService: ExpenseService
  ) { }

  public expenses$: Observable<Expense[]>;

  ngOnInit(): void {
    this.expenses$= this.expenseService.getExpenses();
  }
  
  myhandler(){
    this.expenses$= this.expenseService.getExpenses();
  }

}
