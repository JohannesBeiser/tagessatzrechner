import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Group, GroupsService, Subgroup } from 'src/app/services/groups/groups.service';
import { AddCategoryDialogComponent } from '../../../category-settings/add-category-dialog/add-category-dialog.component';

@Component({
  selector: 'app-edit-subgroup-dialog',
  templateUrl: './edit-subgroup-dialog.component.html',
  styleUrls: ['./edit-subgroup-dialog.component.less']
})
export class EditSubgroupDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public subgroup: Subgroup,
    private dialogRef: MatDialogRef<AddCategoryDialogComponent>,
    private groupService: GroupsService,
  ) { }

  public subgroupName: string;


  ngOnInit(): void {
    this.subgroupName = this.subgroup?.name || ""
  }

  submit(){
    if(this.subgroup){
      this.dialogRef.close({...this.subgroup, name: this.subgroupName})
    }else{
      //add new
      this.dialogRef.close({name: this.subgroupName, id: Date.now()})
    }
  }

}
