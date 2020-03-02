import { Component, OnInit, Input } from '@angular/core';
import { Expense, ExpenseService } from 'src/app/services/expenses/expense.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { SliderService } from 'src/app/services/slider/slider.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Observable } from 'rxjs';
import { RecurringExpenseBottomSheetComponent } from './expense-bottom-sheet/recurring-expense-bottom-sheet.component';

@Component({
  selector: 'app-recurring-expense-list',
  animations: [
    trigger('slideInOut', [
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
      })),
      state('in', style({
        opacity: '1',
        overflow: 'hidden',
        height: '*',
      })),
      transition('out => in', animate('150ms ease-in-out')),
      transition('in => out', animate('150ms ease-in-out'))
    ])
  ],
  templateUrl: './recurring-expense-list.component.html',
  styleUrls: ['./recurring-expense-list.component.less']
})
export class RecurringExpenseListComponent implements OnInit {

  constructor(
    public expenseService: ExpenseService,
    public categoryService: CategoryService,
    public sliderService: SliderService,
    private bottomSheet: MatBottomSheet
  ) { }

  @Input() public expenses: Expense[];
  @Input() public collapseNotifier: Observable<void>;
  public detailViewShownForIndex: number;

  ngOnInit(): void {
    this.expenseService.expenseDeletedNotifier.subscribe(()=>{
      this.helper = {}
    });
    this.collapseNotifier.subscribe(()=>{
      this.helper = {}
    })
  }

  public helper = {}
  helpMenuOpenForIndex(index: number):string{
    return this.helper[index] || 'out';
  }

  toggleHelpMenu(index: number): void {
    if(this.helper[index]){
      //already exists --> is open
      this.helper = {};
    }else{
      this.helper = {};
      this.helper[index] =  'in';
    }
  }

  public stopPropagation(e: MouseEvent){
    e.stopPropagation();
  }

  // public toggleDetailView(index: number) {
  //   if (this.detailViewShownForIndex != null && this.detailViewShownForIndex == index) {
  //     this.detailViewShownForIndex = null;
  //   } else {
  //     this.detailViewShownForIndex = index;
  //   }
  // }

  openBottomSheet(e:MouseEvent, expense: any): void {
    e.stopPropagation();
    document.body.style.backgroundColor="#4f5053";
    this.bottomSheet.open(RecurringExpenseBottomSheetComponent,{data: expense});
    // ExpenseBottomSheetComponent.
  }

}
