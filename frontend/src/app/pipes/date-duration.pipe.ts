import { Pipe, PipeTransform } from '@angular/core';
import { GroupTotal } from '../services/groups/groups.service';
import { isSameDay, isSameMonth, isSameYear, getDate, getMonth, getYear } from 'date-fns';

@Pipe({
  name: 'dateDuration'
})
export class DateDurationPipe implements PipeTransform {

  private monthsAbbrev: string[]= ["Jan", "Feb", "Mar", "Apr", "May", "Jun" ,"Jul", "Aug", "Sep", "Oct", "Nov", "Dez"];

  transform(value: Partial<GroupTotal>): string {
    let fromDate= new Date(value.firstExpenseDate);
    let toDate =  new Date(value.lastExpenseDate);

    // 25 Feb. 2020
    if(isSameDay(fromDate,toDate)){
      return `${getDate(fromDate)} ${this.monthsAbbrev[getMonth(fromDate)]}. ${getYear(fromDate)}`;
    }
    
    if(isSameMonth(fromDate,toDate)){
      return `${getDate(fromDate)} - ${getDate(toDate)} ${this.monthsAbbrev[getMonth(fromDate)]}. ${getYear(fromDate)}`;
    }

    if(isSameYear(fromDate,toDate)){
      return `${getDate(fromDate)} ${this.monthsAbbrev[getMonth(fromDate)]}. - ${getDate(toDate)} ${this.monthsAbbrev[getMonth(toDate)]}.  ${getYear(fromDate)}`;
    }

    return `${getDate(fromDate)} ${this.monthsAbbrev[getMonth(fromDate)]}. ${getYear(fromDate)} - ${getDate(toDate)} ${this.monthsAbbrev[getMonth(toDate)]}.  ${getYear(toDate)}`;
  }
}
