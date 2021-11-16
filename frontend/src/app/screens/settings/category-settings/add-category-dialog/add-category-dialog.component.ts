import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService, Category } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.less']
})
export class AddCategoryDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public categoryToEdit: Category,
    private categoryService: CategoryService,
    private dialogRef: MatDialogRef<AddCategoryDialogComponent>
  ) { }

  public categoryForm: FormGroup;

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      name: new FormControl(this.categoryToEdit?.name || '', [Validators.required, Validators.maxLength(35)]),
      color: new FormControl(this.categoryToEdit?.color || '', [Validators.required, Validators.maxLength(7), Validators.minLength(7)]),
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.categoryForm.controls[controlName].hasError(errorName);
  }

  async submit() {
    let category = this.categoryForm.value;
    this.setFormGroupTouched(this.categoryForm);
    if (this.categoryForm.valid) {
      if(this.categoryToEdit){
        this.categoryService.editCategory({...category, id: this.categoryToEdit.id}, this.categoryToEdit.key)
      }else{
        this.categoryService.addCategory(category);
      }

      this.closeDialog();
    }
  }

  private setFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
