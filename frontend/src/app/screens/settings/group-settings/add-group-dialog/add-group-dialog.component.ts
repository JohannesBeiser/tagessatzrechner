import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/services/category/category.service';
import { Group, GroupsService, Subgroup } from 'src/app/services/groups/groups.service';
import { AddCategoryDialogComponent } from '../../category-settings/add-category-dialog/add-category-dialog.component';

@Component({
  selector: 'app-add-group-dialog',
  templateUrl: './add-group-dialog.component.html',
  styleUrls: ['./add-group-dialog.component.less']
})
export class AddGroupDialogComponent implements OnInit {
  public isActive: boolean = true;

  @ViewChild("subgroupInputControl") public subgroupInputControl: ElementRef;
  public subgroupInputValue: string = "";
  public groupForm: FormGroup;
  public subgroups: Subgroup[] = [];

  constructor(    
    @Inject(MAT_DIALOG_DATA) public groupToEdit: Group,
    private dialogRef: MatDialogRef<AddCategoryDialogComponent>,
    private groupService: GroupsService
  ) { }

  ngOnInit(): void {
    if(this.groupToEdit  && this.groupToEdit.active == false){
      this.isActive = false;
    }
    this.groupForm = new FormGroup({
      name: new FormControl(this.groupToEdit?.name || '', [Validators.required, Validators.maxLength(35)])
    });

    if(this.groupToEdit){
      this.subgroups= this.groupToEdit.subgroups;
    }
  }

  hasError(controlName: string, errorName: string) {
    return this.groupForm.controls[controlName].hasError(errorName);
  }

  addSubgroup(){
    if(this.subgroupInputValue == ""){
      this.subgroupInputControl?.nativeElement.focus();
    }else{
      this.subgroups.push({name: this.subgroupInputValue, id: Date.now()});
      this.subgroupInputValue = "";
    }
  }

  async submit() {
    this.setFormGroupTouched(this.groupForm);
    if (this.groupForm.valid) {
      if(this.groupToEdit){
        let group: Group = {
          name: this.groupForm.value.name,
          active: this.isActive,
          subgroups: this.subgroups,
          id: this.groupToEdit.id
        }
        this.groupService.updateGroup(this.groupToEdit.key, group);
      }else{
        let group: Group = {
          name: this.groupForm.value.name,
          active: this.isActive,
          subgroups: this.subgroups,
          id: Date.now()
        }
        debugger;
        this.groupService.addGroup(group);
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
