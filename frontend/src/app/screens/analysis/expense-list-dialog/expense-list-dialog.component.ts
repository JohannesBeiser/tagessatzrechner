import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { Category } from 'src/app/services/category/category.service';
import { Expense } from 'src/app/services/expenses/expense.service';
import { AddCategoryDialogComponent } from '../../settings/category-settings/add-category-dialog/add-category-dialog.component';

@Component({
  selector: 'app-expense-list-dialog',
  templateUrl: './expense-list-dialog.component.html',
  styleUrls: ['./expense-list-dialog.component.less']
})
export class ExpenseListDialogComponent implements OnInit {


  public collapseNotifier: Subject<void> = new Subject();


  constructor(
    @Inject(MAT_DIALOG_DATA) public data:{expenses: Expense[], category: Category} ,
    private dialogRef: MatDialogRef<AddCategoryDialogComponent>
  ) { }

  ngOnInit(): void {

  }

  closeDialog() {
    this.dialogRef.close();
  }

}
