import { Component, OnInit, Input } from '@angular/core';
import { Expense, ExpenseService } from 'src/app/services/expenses/expense.service';
import { CategoryService, Category } from 'src/app/services/category/category.service';
import { SliderService } from 'src/app/services/slider/slider.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ExpenseBottomSheetComponent } from './expense-bottom-sheet/expense-bottom-sheet.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Observable, merge } from 'rxjs';
import { FilterService } from 'src/app/services/filter/filter.service';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { TagService } from 'src/app/services/tag/tag.service';

@Component({
  selector: 'app-expense-list',
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
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.less']
})
export class ExpenseListComponent implements OnInit {

  constructor(
    public expenseService: ExpenseService,
    public categoryService: CategoryService,
    public groupService: GroupsService,
    public filterService: FilterService,
    public tagService: TagService,
    public sliderService: SliderService,
    private bottomSheet: MatBottomSheet
  ) { }

  @Input() public expenses: Expense[];
  @Input() public collapseNotifier: Observable<void>;
  public refresh: boolean = true;


  ngOnInit(): void {
    merge(this.expenseService.expenseDeletedNotifier,this.collapseNotifier).subscribe(()=>{
      this.helper= {}
    });
    //TODO : Quick fix for testing --> Debug!
    this.filterService.sortMethod$.subscribe(()=>{
      this.refresh = false;
      setTimeout(() => {
        this.refresh=true;
      }, 0);
    });

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

  openBottomSheet(e:MouseEvent, expense: any): void {
    e.stopPropagation();
    document.body.style.backgroundColor="#4f5053";
    this.bottomSheet.open(ExpenseBottomSheetComponent,{data: expense});
  }

}
