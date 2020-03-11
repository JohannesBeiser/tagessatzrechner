import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationWeekDay'
})
export class DurationWeekDayPipe implements PipeTransform {

  transform(value: number): string {
    let result=[]
    let years = parseInt((value/(365)).toString().split(".")[0]);
    let months = parseInt(((value - years*365)/30.4167).toString().split(".")[0]);
    let weeks = parseInt(((value - years*365 - months*30.4167)/7).toString().split(".")[0]);
    let days = parseInt((value - weeks*7 - months*30.4167 - years*365).toFixed(0));
    
    // if(value >400){
    //   debugger;
    // }

    if(years>0){
      result.push(`${years} ${this.pluralizeYear(years)}`)
    }

    if(months>0){
      result.push(`${months} ${this.pluralizeMonth(months)}`)
    }
    
    if(weeks>0){
      result.push(`${weeks} ${this.pluralizeWeek(weeks)}`);
    }

    if(days>0 && years==0){
      result.push(`${days} ${this.pluralizeDay(days)}`);
    }
    
    return result.join(", ");
    
  }
  
  pluralizeYear(years: number): string{
    if(years>0){
      return "year";
    }else{
      return "years";
    }
  }

  pluralizeMonth(months: number): string{
    if(months>1){
      return "months";
    }else{
      return "month";
    }
  }

  pluralizeWeek(weeks: number): string{
    if(weeks>1){
      return "weeks";
    }else{
      return "week";
    }
  }

  pluralizeDay(days: number): string{
    if(days>1){
      return "days";
    }else{
      return "day";
    }
  }
}
