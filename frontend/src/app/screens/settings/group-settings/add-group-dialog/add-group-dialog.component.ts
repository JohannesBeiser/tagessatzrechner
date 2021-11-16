import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/services/category/category.service';
import { Group, GroupsService } from 'src/app/services/groups/groups.service';
import { AddCategoryDialogComponent } from '../../category-settings/add-category-dialog/add-category-dialog.component';

@Component({
  selector: 'app-add-group-dialog',
  templateUrl: './add-group-dialog.component.html',
  styleUrls: ['./add-group-dialog.component.less']
})
export class AddGroupDialogComponent implements OnInit {
  public isActive: boolean = true;
  public subgroupInput: string = "";

  constructor(    
    @Inject(MAT_DIALOG_DATA) public groupToEdit: Group,
    private dialogRef: MatDialogRef<AddCategoryDialogComponent>,
    private groupService: GroupsService
  ) { }

  public groupForm: FormGroup;

  ngOnInit(): void {
    if(this.groupToEdit  && this.groupToEdit.active == false){
      this.isActive = false;
    }
    this.groupForm = new FormGroup({
      name: new FormControl(this.groupToEdit?.name || '', [Validators.required, Validators.maxLength(35)])
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.groupForm.controls[controlName].hasError(errorName);
  }

  async submit() {
    let group = this.groupForm.value;
    this.setFormGroupTouched(this.groupForm);
    if (this.groupForm.valid) {
      if(this.groupToEdit){
        // this.groupToEdit.editCategory({...category, id: this.groupToEdit.id}, this.groupToEdit.key)
      }else{
        // this.categoryService.addCategory(category);
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
