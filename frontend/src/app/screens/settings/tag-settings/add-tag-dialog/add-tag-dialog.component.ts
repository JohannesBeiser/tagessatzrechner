import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Tag, TagService } from 'src/app/services/tag/tag.service';

@Component({
  selector: 'app-add-tag-dialog',
  templateUrl: './add-tag-dialog.component.html',
  styleUrls: ['./add-tag-dialog.component.less']
})
export class AddTagDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public tagToEdit: Tag,
    private tagService: TagService,
    private dialogRef: MatDialogRef<AddTagDialogComponent>
  ) { }

  public tagForm: FormGroup;

  ngOnInit(): void {
    this.tagForm = new FormGroup({
      name: new FormControl(this.tagToEdit?.name || '', [Validators.required, Validators.maxLength(35)]),
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.tagForm.controls[controlName].hasError(errorName);
  }

  async submit() {
    let tag = this.tagForm.value;
    this.setFormGroupTouched(this.tagForm);
    if (this.tagForm.valid) {
      if(this.tagToEdit){
        this.tagService.updateTag( this.tagToEdit.key,{...tag, id: this.tagToEdit.id})
      }else{
        this.tagService.addTag(tag);
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