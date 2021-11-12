import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GroupsService, GroupItem } from 'src/app/services/groups/groups.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SettingsBottomSheetComponent } from '../settings-bottom-sheet/settings-bottom-sheet.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-group-settings',
  templateUrl: './group-settings.component.html',
  styleUrls: ['./group-settings.component.less']
})
export class GroupSettingsComponent implements OnInit {

  constructor(
    private groupsService: GroupsService,
    private bottomSheet: MatBottomSheet,
  ) { }

  @ViewChild("addGroupsInput") public addGroupsInputElement: ElementRef;
  public newGroupInputValue: string;

  public groups$: Observable<GroupItem[]>;

  ngOnInit(): void {
    this.groups$ = this.groupsService.getGroups();
  }

  
  addGroup() {
    if (!this.newGroupInputValue) {
      this.addGroupsInputElement.nativeElement.focus();
    } else {
      this.groupsService.addGroup(this.newGroupInputValue);
      this.newGroupInputValue = "";
    }
  }

  openBottomSheet(e: MouseEvent, group: any): void {
    document.body.style.backgroundColor = "#4f5053";
    e.stopPropagation();
    this.bottomSheet.open(SettingsBottomSheetComponent, { data: group });
  }

}
