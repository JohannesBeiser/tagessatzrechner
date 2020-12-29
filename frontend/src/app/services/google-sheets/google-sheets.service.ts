import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { GoogleSpreadsheet } from 'google-spreadsheet';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsService {

  constructor(private http: HttpClient) { }

  private sheetData: Subject<any> = new Subject()


  async getData() {
   this.http.get('/api/sheets').subscribe(data=>{
     debugger;
   })
    // this.http.get('https://sheets.googleapis.com/v4/spreadsheets/1GuEZj6dIUKz0HKtCadotugtH_H8ilnxoMlSglJn7Cx8/values/Sheet1!A1:D5').subscribe(data=>{
    //   this.sheetData.next(data);
    // })
    return this.sheetData.asObservable();
  }
}
