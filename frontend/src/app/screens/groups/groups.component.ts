import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/services/slider/slider.service';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.less']
})
export class GroupsComponent implements OnInit {

  constructor(
    public sliderService: SliderService,
    public groupsService: GroupsService
  ) { }

  public groups$: Observable<string[]>

  ngOnInit(): void {
    this.groups$ = this.groupsService.getGroups();
  }

}
