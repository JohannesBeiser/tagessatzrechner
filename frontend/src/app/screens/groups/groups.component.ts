import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/services/slider/slider.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.less']
})
export class GroupsComponent implements OnInit {

  constructor(
    public sliderService: SliderService,
  ) { }

  ngOnInit(): void {
  }

}
