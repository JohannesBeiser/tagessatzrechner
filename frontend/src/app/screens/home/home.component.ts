import { Component, OnInit } from '@angular/core';
import { ExpenseService, Expense } from 'src/app/services/expenses/expense.service';
import { Observable } from 'rxjs';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(
    public expenseService: ExpenseService,
    public filterService: FilterService
  ) { }

  public expenses$: Observable<Expense[]>;

  ngOnInit(): void {
    this.expenses$= this.expenseService.getExpenses();

  }
}
