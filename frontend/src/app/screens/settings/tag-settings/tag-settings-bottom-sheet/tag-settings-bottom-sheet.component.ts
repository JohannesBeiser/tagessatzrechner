import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { Tag, TagService } from 'src/app/services/tag/tag.service';
import { AddTagDialogComponent } from '../add-tag-dialog/add-tag-dialog.component';

@Component({
  selector: 'app-tag-settings-bottom-sheet',
  templateUrl: './tag-settings-bottom-sheet.component.html',
  styleUrls: ['./tag-settings-bottom-sheet.component.less']
})
export class TagSettingsBottomSheetComponent implements OnInit {

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public tag: Tag,
    private bottomSheetRef: MatBottomSheetRef<TagSettingsBottomSheetComponent>,
    private tagService: TagService,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.bottomSheetRef.backdropClick().subscribe(()=>{
      document.body.style.backgroundColor="#76757b";
    });
  }

  deleteTag() {
    if (confirm(`Are you sure you want to delete "${this.tag.name}"? If any expenses have this tag assigned, they from now on will not show having that tag anymore`)) {
      this.tagService.deleteTag(this.tag.key, this.tag);
      this.dismiss();
    }
  }

  editTag(){
    //open dialog with preexisting data
    const dialogRef = this.dialog.open(AddTagDialogComponent, { data: this.tag }); // add initial data here
    this.bottomSheetRef.dismiss();

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
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
