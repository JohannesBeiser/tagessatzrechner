import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { SliderService } from 'src/app/services/slider/slider.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @ViewChild("searchInput") public searchInputElement: ElementRef;
  public seachtext: string;
  componentDestroyed$: Subject<void> = new Subject();

  constructor(
    public sliderService: SliderService
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.searchInputElement.nativeElement.focus();
  }

  public clear() {
    this.seachtext = "";
    this.searchInputElement.nativeElement.focus();
  }

}
