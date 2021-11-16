import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CategoryService } from 'src/app/services/category/category.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryDialogComponent } from '../add-category-dialog/add-category-dialog.component';

@Component({
  selector: 'app-category-settings-bottom-sheet',
  templateUrl: './category-settings-bottom-sheet.component.html',
  styleUrls: ['./category-settings-bottom-sheet.component.less']
})
export class CategorySettingsBottomSheetComponent implements OnInit {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public category: any,
    private bottomSheetRef: MatBottomSheetRef<CategorySettingsBottomSheetComponent>,
    private categoryService: CategoryService,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.bottomSheetRef.backdropClick().subscribe(()=>{
      document.body.style.backgroundColor="#76757b";
    });
  }

  deleteCategory() {
    if (confirm(`Are you sure you want to delete "${this.category.name}"? If any expenses have this category assigned, they from now on will convert to the category "unassigned". You can change it again any time.`)) {
      this.categoryService.deleteCategory(this.category.key);
      this.dismiss();
    }
  }

  editCategory(){
    //open dialog with preexisting data
    const dialogRef = this.dialog.open(AddCategoryDialogComponent, { data: this.category }); // add initial data here
    this.bottomSheetRef.dismiss();

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }

  close(event: MouseEvent): void {
    this.dismiss();
    event.preventDefault();
  }

  private dismiss(){
    document.body.style.backgroundColor="#76757b";
    this.bottomSheetRef.dismiss();
  }

}
