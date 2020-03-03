import { Component, OnInit, ViewChild, ElementRef, NgZone, AfterViewInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SliderService } from 'src/app/services/slider/slider.service';
import { Expense, ExpenseService } from 'src/app/services/expenses/expense.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { GroupsService, GroupItem } from 'src/app/services/groups/groups.service';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category/category.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { FilterService } from 'src/app/services/filter/filter.service';

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
    private filterService: FilterService,
    private _ngZone: NgZone
  ) { }

  @ViewChild("focusInput") public focusInput: ElementRef;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  public expenseForm: FormGroup;
  public recurringForm: FormGroup;
  public selectedTabIndex: number;

  public groups$: Observable<GroupItem[]>;
  public initialData: Expense;

  ngOnInit(): void {
    this.initialData = this.sliderService.currentExpenseForEdit;
    this.selectedTabIndex = (this.initialData?.lastUpdate) ? 1: 0;

    this.expenseForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(35)]),
      amount: new FormControl('', Validators.required),
      date: new FormControl(this.currentDate(), Validators.required),
      category: new FormControl(this.categoryService.defaultCategory, Validators.required),
      group: new FormControl("General", Validators.required),
      description: new FormControl('', Validators.maxLength(200))
    });

    this.recurringForm = new FormGroup({
      name_recurring: new FormControl('', [Validators.required, Validators.maxLength(35)]),
      amount_recurring: new FormControl('', Validators.required),
      month_recurring: new FormControl(this.filterService.getCurrentMonthFilter(), Validators.required),
      category_recurring: new FormControl('general', Validators.required),
      group_recurring: new FormControl("General", Validators.required),
      description_recurring: new FormControl('', Validators.maxLength(200)),
    });

    //TODO : Dirty workaround
    if (this.initialData) {
      setTimeout(() => {
        if(this.initialData.lastUpdate){
          this.recurringForm.reset({
            name_recurring: this.initialData.name,
            amount_recurring: this.initialData.amount,
            month_recurring: this.initialData.date.substring(0,7),
            category_recurring: this.initialData.category,
            group_recurring: this.initialData.group,
            description_recurring: this.initialData.description
          });
        }else{
          this.expenseForm.reset({
            name: this.initialData.name,
            amount: this.initialData.amount,
            date: this.initialData.date,
            category: this.initialData.category,
            group: this.initialData.group,
            description: this.initialData.description
          });
        }
      }, 100);
    } else {
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
    }
    this.groups$ = this.groupsService.getGroupsWithoutUpdate();
  }

  ngAfterViewInit() {
    // this.focusInput.nativeElement.focus();
  }


  tabChanged(e: MatTabChangeEvent) {
    this.selectedTabIndex = e.index;
  }

  hasError(controlName: string, errorName: string, formType: string) {
    if (formType === "single") {
      return this.expenseForm.controls[controlName].hasError(errorName);
    } else {
      return this.recurringForm?.controls[controlName]?.hasError(errorName);
    }
  }

  private setFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  currentDate() {
    const currentDate = new Date();
    
    return `${currentDate.getFullYear()}-${this.filterService.parseMonth(currentDate.getMonth()+1)}-${this.filterService.parseMonth(currentDate.getDate())}`;
  }

  createExpense() {
    if (this.selectedTabIndex === 0) {
      let expense= this.expenseForm.value;
      this.setFormGroupTouched(this.expenseForm);
      if (this.expenseForm.valid) {
        if (!this.initialData) {
          this.expenseService.addExpense(expense, "expenses");
        } else {
          let key = this.initialData.key;
          if(this.initialData.recurring){
            expense.recurring = true;
          }
          this.expenseService.updateExpense(key, expense, "expenses");
        }
        this.sliderService.hide();
      }
    } else {
      this.setFormGroupTouched(this.recurringForm);
      let expense= {
        name: this.recurringForm.value.name_recurring,
        amount: this.recurringForm.value.amount_recurring,
        date: this.recurringForm.value.month_recurring + "-01",
        category: this.recurringForm.value.category_recurring,
        group: this.recurringForm.value.group_recurring,
        description: this.recurringForm.value.description_recurring,
        recurring: true,
        lastUpdate: null
      };
      
      if (this.recurringForm.valid) {
        if(!this.initialData){
          expense.lastUpdate= this.expenseService.getFormatDate(new Date());
          this.expenseService.addExpense(expense, "recurringExpenses");
        }else{
          expense.lastUpdate= this.initialData.lastUpdate
          this.expenseService.updateExpense(this.initialData.key, expense, "recurringExpenses")
        }
        this.sliderService.hide();
      }
    }
  }
}
