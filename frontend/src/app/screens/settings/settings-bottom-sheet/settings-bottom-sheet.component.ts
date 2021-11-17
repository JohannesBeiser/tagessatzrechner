import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { Group, GroupsService } from 'src/app/services/groups/groups.service';
import { AddGroupDialogComponent } from '../group-settings/add-group-dialog/add-group-dialog.component';

@Component({
  selector: 'app-settings-bottom-sheet',
  templateUrl: './settings-bottom-sheet.component.html',
  styleUrls: ['./settings-bottom-sheet.component.less']
})
export class SettingsBottomSheetComponent implements OnInit {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public group: Group,
    private bottomSheetRef: MatBottomSheetRef<SettingsBottomSheetComponent>,
    private groupsService: GroupsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.bottomSheetRef.backdropClick().subscribe(()=>{
      document.body.style.backgroundColor="#76757b";
    });
  }

  deleteGroup() {
    if (confirm(`Are you sure you want to finish "${this.group.name}"? This won't delete the expenses you added! You simply can't assign any more expenses to it.`)) {
      this.groupsService.deleteGroup(this.group.key, this.group);
      this.dismiss();
    }
  }

  editGroup() {
    const dialogRef = this.dialog.open(AddGroupDialogComponent, {data: this.group}); // add initial data here
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    // open bottom sheet with initializing data
    // this.groupsService.updateGroup(this.group.key, this.group);
    this.dismiss();
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
