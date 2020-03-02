import { DateLongShortPipe } from './date-long-short.pipe';
import { DatePipe } from '@angular/common';
import { TestBed, inject } from '@angular/core/testing';

describe('DateLongShortPipe', () => {
  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          DatePipe
        ]
      });
  });

  it('create an instance', inject([DatePipe],(datePipe: DatePipe) => {
    const pipe = new DateLongShortPipe(datePipe);
    expect(pipe).toBeTruthy();
  }));
});
