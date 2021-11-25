import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratio-bar',
  templateUrl: './ration-bar.component.html',
  styleUrls: ['./ration-bar.component.less']
})
export class RationBarComponent implements OnInit {

  @Input() public value1: number;
  @Input() public value2: number;
  @Input() public color1: string;
  @Input() public color2: string;
  @Input() public showLabels: boolean = true;
  @Input() public labelsInPercent: boolean = false;
  @Input() public labelPrefix1: string;
  @Input() public labelPrefix2: string;
  @Input() public labelFirst: boolean = true;

  public leftValue: number;
  public rightValue: number;
  public leftColor: string;
  public rightColor: string;
  public leftLabel: string;
  public rightLabel: string;
  public leftLabelPrefix: string;
  public rightLabelPrefix: string;


  constructor() { }

  ngOnInit(): void {
    if(this.value1> this.value2){
      this.leftValue = Math.round(this.value1);
      this.leftColor = this.color1
      this.leftLabelPrefix = this.labelPrefix1
      this.rightValue = Math.round(this.value2);
      this.rightColor = this.color2;
      this.rightLabelPrefix = this.labelPrefix2

    }else{
      this.leftValue = Math.round(this.value2);
      this.leftColor = this.color2
      this.leftLabelPrefix = this.labelPrefix2
      this.rightValue = Math.round(this.value1);
      this.rightColor = this.color1;
      this.rightLabelPrefix = this.labelPrefix1
    }
    this.generateLabels();

  }

  generateLabels(){
    let tempLeft: string;
    let tempRight: string;

    if(this.value1> this.value2){
      tempLeft = this.leftValue.toString()
      tempRight = this.rightValue.toString()
    }else{
      tempLeft = this.leftValue.toString()
      tempRight = this.rightValue.toString()
    }

    if(this.labelsInPercent){
      tempLeft += " %"
      tempRight += " %"
    }else{
      tempLeft += " €"
      tempRight += " €"
    }

    this.leftLabel = tempLeft;
    this.rightLabel = tempRight;
  }

}
