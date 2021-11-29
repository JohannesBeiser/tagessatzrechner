import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Tag, TagService } from 'src/app/services/tag/tag.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.less']
})
export class TagListComponent implements OnInit {


  @Input() tagIds: number[];
  public tags: Tag[];
  
  constructor(
    private tagService: TagService
  ) { }

  ngOnInit(): void {
    this.tagService.getTags().pipe(
      filter(tags=>tags!= undefined && tags.length >0)).subscribe(tags=>{
      this.tags = this.tagService.convertIdsToTags(this.tagIds)
    })
  }

}
