import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GroupsService, Group } from 'src/app/services/groups/groups.service';
import { Tag, TagService } from 'src/app/services/tag/tag.service';
import { SettingsBottomSheetComponent } from '../settings-bottom-sheet/settings-bottom-sheet.component';
import { AddTagDialogComponent } from './add-tag-dialog/add-tag-dialog.component';
import { TagSettingsBottomSheetComponent } from './tag-settings-bottom-sheet/tag-settings-bottom-sheet.component';

@Component({
  selector: 'app-tag-settings',
  templateUrl: './tag-settings.component.html',
  styleUrls: ['./tag-settings.component.less']
})
export class TagSettingsComponent implements OnInit {

  constructor(
    private tagsService: TagService,
    private bottomSheet: MatBottomSheet,
    public dialog: MatDialog,
  ) { }


  public tags$: Observable<Tag[]>;

  ngOnInit(): void {
    this.tags$ = this.tagsService.getTags().pipe(
      map(tags => {
        return tags.filter(tag => tag.id !== 0).reverse();
      })
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddTagDialogComponent); // add initial data here

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openBottomSheet(e: MouseEvent, tag: Tag): void {
    document.body.style.backgroundColor = "#4f5053";
    e.stopPropagation();
    this.bottomSheet.open(TagSettingsBottomSheetComponent, { data: tag });
  }
}
