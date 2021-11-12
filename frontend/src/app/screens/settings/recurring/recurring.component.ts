import { Component, OnInit } from '@angular/core';
import { Expense, ExpenseService } from 'src/app/services/expenses/expense.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-recurring',
  templateUrl: './recurring.component.html',
  styleUrls: ['./recurring.component.less']
})
export class RecurringComponent implements OnInit {

  constructor(
    private expenseService: ExpenseService,

  ) { }
  public recurringExpenses$: Observable<Expense[]>;
  public collapseNotifier: Subject<void> = new Subject();

  ngOnInit(): void {
    this.recurringExpenses$ = this.expenseService.getExpenses("recurringExpenses");
    this.checkRecurringExists();
  }

  public recurringExists: boolean =false;
  checkRecurringExists(){
    this.recurringExpenses$.subscribe((rec=>{
      if(rec.length>0){
        this.recurringExists= true;
      }else{
        this.recurringExists= false;
      }
    }))
    
  }

}
