import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/services/slider/slider.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor(
    public sliderService: SliderService
  ) { }

  public recordingState$: BehaviorSubject<string> = new BehaviorSubject('inactive');
  private data: Int16Array;
  public results: any[] = [];


  ngOnInit(): void {
  }

  public handleAddClicked(e:MouseEvent){
    e.stopPropagation();
    e.preventDefault();
    this.sliderService.show('add');
  }

}
