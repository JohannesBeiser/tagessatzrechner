import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { getYear } from 'date-fns';

@Pipe({
  name: 'dateLongShort'
})
export class DateLongShortPipe implements PipeTransform {

  constructor(
    private datePipe: DatePipe,
  ){

  }

  transform(date: string): unknown {
    if(getYear(new Date(date)) == getYear(new Date())){
      return this.datePipe.transform(date, 'd MMM')
    }else{
      return this.datePipe.transform(date, 'd MMM y')
    }

  }

}
