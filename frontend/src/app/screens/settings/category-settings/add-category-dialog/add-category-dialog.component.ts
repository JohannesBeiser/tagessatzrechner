import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.less']
})
export class AddCategoryDialogComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private dialogRef: MatDialogRef<AddCategoryDialogComponent>
  ) { }

  public categoryForm: FormGroup;

  ngOnInit(): void {

    this.categoryForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(35)]),
      color: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.categoryForm.controls[controlName].hasError(errorName);
  }

  async createCategory() {
    let category = this.categoryForm.value;
    this.setFormGroupTouched(this.categoryForm);
    if (this.categoryForm.valid) {
      this.categoryService.addCategory(category);
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
