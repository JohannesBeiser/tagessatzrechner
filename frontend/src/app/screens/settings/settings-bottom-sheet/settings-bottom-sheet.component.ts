import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { GroupsService } from 'src/app/services/groups/groups.service';

@Component({
  selector: 'app-settings-bottom-sheet',
  templateUrl: './settings-bottom-sheet.component.html',
  styleUrls: ['./settings-bottom-sheet.component.less']
})
export class SettingsBottomSheetComponent implements OnInit {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public group: any,
    private bottomSheetRef: MatBottomSheetRef<SettingsBottomSheetComponent>,
    private groupsService: GroupsService,
  ) { }

  ngOnInit(): void {
    this.bottomSheetRef.backdropClick().subscribe(()=>{
      document.body.style.backgroundColor="#76757b";
    });
  }

  deleteGroup() {
    if (confirm(`Are you sure you want to delete ${this.group.groupName}? This won't delete the expenses you added! You simply can't assign any more expenses to it.`)) {
      this.groupsService.deleteGroup(this.group.key, this.group.groupName);
      this.bottomSheetRef.dismiss();
    }
  }

  close(event: MouseEvent): void {
    document.body.style.backgroundColor="#76757b";
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
