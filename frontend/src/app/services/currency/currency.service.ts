import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrencyValues(): Observable<CurrencyApiResponse>{
    return this.http.get<CurrencyApiResponse>('http://data.fixer.io/api/latest?access_key=45554e3f2ab1ec886137d322c1fd2b04&format=1&base=EUR');
  }
}


export type CurrencyApiResponse = {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: any;
}
