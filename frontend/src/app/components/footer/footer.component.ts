import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/services/slider/slider.service';
import { BehaviorSubject } from 'rxjs';
import { AudioService } from 'src/app/services/audio/audio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor(
    public sliderService: SliderService,
    private audioService: AudioService
  ) { }

  public recordingState$: BehaviorSubject<string> = new BehaviorSubject('inactive');
  private data: Int16Array;
  public results: any[] = [];


  ngOnInit(): void {
  }


}
