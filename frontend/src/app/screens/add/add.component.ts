import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SliderService } from 'src/app/services/slider/slider.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit, OnDestroy {
  constructor(
    public sliderService: SliderService
  ) { }

  public date: FormControl;
  public datee: Date;
  toggle:boolean= false;

  ngOnInit(): void {
    this.datee= new Date();
    this.date = new FormControl(new Date());
    console.log("added")
  }

  ngOnDestroy(){
    console.log("removed")
  }

}
