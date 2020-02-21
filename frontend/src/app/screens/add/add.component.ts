import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SliderService } from 'src/app/services/slider/slider.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Expense, ExpenseService } from 'src/app/services/expenses/expense.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit, OnDestroy {
  constructor(
    public sliderService: SliderService,
    public expenseService: ExpenseService
  ) { }

  public expenseForm: FormGroup;


  ngOnInit(): void {
    this.expenseForm = new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required ),
      date: new FormControl(this.currentDate(), Validators.required),
      category: new FormControl('transport', Validators.required),
      description: new FormControl('', Validators.maxLength(50))
    });

    console.log("added")
  }

  hasError(controlName: string, errorName: string){
    return this.expenseForm.controls[controlName].hasError(errorName);
  }

  currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0,10);
  }

  createExpense(expense: Expense){
    this.expenseService.addExpense(expense);
  }
  

  ngOnDestroy(){
    console.log("removed")
  }

}
