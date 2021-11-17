import { Component, OnInit} from '@angular/core';
import { GroupsService, Group } from 'src/app/services/groups/groups.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SettingsBottomSheetComponent } from '../settings-bottom-sheet/settings-bottom-sheet.component';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddGroupDialogComponent } from './add-group-dialog/add-group-dialog.component';

@Component({
  selector: 'app-group-settings',
  templateUrl: './group-settings.component.html',
  styleUrls: ['./group-settings.component.less']
})
export class GroupSettingsComponent implements OnInit {

  constructor(
    private groupsService: GroupsService,
    private bottomSheet: MatBottomSheet,
    public dialog: MatDialog,
  ) { }


  public groups$: Observable<Group[]>;

  ngOnInit(): void {
    this.groups$ = this.groupsService.getGroups().pipe(
      map(groups=> {
        return groups.filter(group => group.id !== 0)
      })
    );
  }

  
  addGroup() {
    //TODO
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddGroupDialogComponent); // add initial data here

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openBottomSheet(e: MouseEvent, group: Group): void {
    document.body.style.backgroundColor = "#4f5053";
    e.stopPropagation();
    this.bottomSheet.open(SettingsBottomSheetComponent, { data: group });
  }

}
