import { Component, OnInit, OnDestroy, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { SliderService } from 'src/app/services/slider/slider.service';
import { Expense, ExpenseService } from 'src/app/services/expenses/expense.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {
  constructor(
    public sliderService: SliderService,
    public expenseService: ExpenseService,
    private _ngZone: NgZone
  ) { }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  public expenseForm: FormGroup;

  ngOnInit(): void {
    this.expenseForm = new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required ),
      date: new FormControl(this.currentDate(), Validators.required),
      category: new FormControl('transport', Validators.required),
      group: new FormControl('general', Validators.required),
      description: new FormControl('', Validators.maxLength(50))
    });
  }

  hasError(controlName: string, errorName: string){
    return this.expenseForm.controls[controlName].hasError(errorName);
  }

  private setFormGroupTouched() {
    Object.keys(this.expenseForm.controls).forEach(field => {
      const control = this.expenseForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  currentDate() {
    const currentDate = new Date();
    return currentDate.toISOString().substring(0,10);
  }
  
  createExpense(expense: Expense){
    this.setFormGroupTouched();
    if(this.expenseForm.valid){
      this.expenseService.addExpense(expense);
      this.expenseForm.reset({
        name: '', 
        amount: '',
        date: this.currentDate(),
        category: 'transport',
        group: 'general', 
        description: ''
      });
      this.sliderService.hide();
    }
  }
}
