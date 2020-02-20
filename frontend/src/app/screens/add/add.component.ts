import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SliderService } from 'src/app/services/slider/slider.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit, OnDestroy {
  constructor(
    public sliderService: SliderService
  ) { }


  public expenseForm: FormGroup;


  public date: Date;

  ngOnInit(): void {
    this.expenseForm = new FormGroup({
      amount: new FormControl('', [Validators.required ]),
      date: new FormControl(this.currentDate()),
      category: new FormControl('transport', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });



    this.date= new Date();
    console.log("added")
  }

  hasError(controlName: string, errorName: string){
    return this.expenseForm.controls[controlName].hasError(errorName);
  }

  currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0,10);
  }

  createExpense(expense: any){
    debugger;
    console.log("added")
  }
  

  ngOnDestroy(){
    console.log("removed")
  }

}
