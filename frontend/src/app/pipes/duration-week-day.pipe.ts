import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationWeekDay'
})
export class DurationWeekDayPipe implements PipeTransform {

  transform(value: number): string {
    let result=""
    let weeks = (value/7).toString().split(".")[0];
    let days = value - parseInt(weeks)*7;
    if(parseInt(weeks)>0){
      result+= `${weeks} weeks`;
      if(days>0){
        result+= `, ${days} ${this.pluralize(days)}`
      }
      return result;
    }else{
      return `${days} ${this.pluralize(days)}`;
    }
  }

  pluralize(days: number): string{
    if(days>1){
      return "days";
    }else{
      return "day";
    }
  }
}
