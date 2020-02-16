import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {

  constructor() { }
  public date: FormControl;
  public datee: Date;
  ngOnInit(): void {
    this.datee= new Date();
    this.date = new FormControl(new Date());
  }

}
