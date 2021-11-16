import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryDialogComponent } from './add-category-dialog/add-category-dialog.component';
import { Observable } from 'rxjs';
import { Category, CategoryService } from 'src/app/services/category/category.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CategorySettingsBottomSheetComponent } from './category-settings-bottom-sheet/category-settings-bottom-sheet.component';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-category-settings',
  templateUrl: './category-settings.component.html',
  styleUrls: ['./category-settings.component.less']
})
export class CategorySettingsComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public categoryService: CategoryService,
    private bottomSheet: MatBottomSheet,
    ) { }

  categories$: Observable<Category[]>;

  ngOnInit(): void {
    // filtering 0 because fallback 'unassigned' shouldn't be displayed in list
    this.categories$ = this.categoryService.getCategoriesNew().pipe(map(el=> el.filter(el=>el.id !== 0)));
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddCategoryDialogComponent); // add initial data here

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openBottomSheet(e: MouseEvent, category: any): void {
    document.body.style.backgroundColor = "#4f5053";
    e.stopPropagation();
    this.bottomSheet.open(CategorySettingsBottomSheetComponent, { data: category });
  }

}
