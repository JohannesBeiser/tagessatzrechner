import { Component, OnInit, ViewChild, ElementRef, NgZone, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SliderService } from 'src/app/services/slider/slider.service';
import { Expense, ExpenseService } from 'src/app/services/expenses/expense.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { GroupsService, GroupItem } from 'src/app/services/groups/groups.service';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit, AfterViewInit {
  constructor(
    public sliderService: SliderService,
    public expenseService: ExpenseService,
    public groupsService: GroupsService,
    public categoryService: CategoryService,
    private _ngZone: NgZone
  ) { }

  @ViewChild("focusInput") public focusInput: ElementRef;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  public expenseForm: FormGroup;
  public groups$: Observable<GroupItem[]>

  ngOnInit(): void {
    // debugger;
    this.expenseForm = new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      date: new FormControl(this.currentDate(), Validators.required),
      category: new FormControl(this.categoryService.defaultCategory, Validators.required),
      group: new FormControl("general", Validators.required),
      description: new FormControl('', Validators.maxLength(50))
    });

    //TODO : Dirty workaround 
    setTimeout(() => {
      this.expenseForm.reset({
        name: '',
        amount: '',
        date: this.currentDate(),
        category: this.categoryService.defaultCategory,
        group: this.groupsService.defaultGroup,
        description: ''
      })
    }, 100);
    this.groups$ = this.groupsService.getGroups();
  }
  ngAfterViewInit() {
    // this.focusInput.nativeElement.focus();
  }

  hasError(controlName: string, errorName: string) {
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
    return currentDate.toISOString().substring(0, 10);
  }

  createExpense(expense: Expense) {
    this.setFormGroupTouched();
    if (this.expenseForm.valid) {
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
