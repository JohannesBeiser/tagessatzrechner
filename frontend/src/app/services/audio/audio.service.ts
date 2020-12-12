import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export type ExpenseSTTResult ={
  name: string;
  amount: number;
  category: string;
}


@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(private http: HttpClient) { }

  public recentStt$ = new BehaviorSubject(false);
  
  public getTextFromAudio(binaryData: Int16Array): Promise<any> {
    setTimeout(()=>this.recentStt$.next(false),500)
    return this.http.post<any>("/api/audio", binaryData.buffer, { responseType: 'json' }).toPromise()
  }

  public getUserMediaStream(): Promise<MediaStream> {
    const constraints: any = {
      audio: {
        "noiseSuppression": true
      }
    };

    return navigator.mediaDevices.getUserMedia(constraints);
  }


  /**
   * Reads information from the text and returns an object containing information like expense-amount, -name and category
   * @param text result from stt API call
   */
  public parseSttResult(text: string):ExpenseSTTResult {
    text = text.toLowerCase();
    let remainingText: string = "";
    let result: ExpenseSTTResult = {
      amount: undefined,
      category: undefined,
      name: undefined
    }

    const categorySynonyms = {
      "food": ["food", "essen", "verpflegung"],
      "transport": ["transport", "transportation"],
      "accommodation": ["accommodation", "unterkunft"],
      "multimedia": ["multimedia"],
      "leisure": ["leisure", "laser", "freizeit"],
      "gear": ["gear", "ausrüstung"],
      "health_insurance": ["health", "insurance", "gesundheit und versicherung", "gesundheit", "versicherung"],
      "general": ["general", "allgemein", "allgemeines"]
    };

    // find which category is contained in text and remove it from the string
    outerLoop: for(let singleCategory in categorySynonyms){
      innerLoop: for(let synonym of categorySynonyms[singleCategory]){
          if(text.includes(synonym)){
            result.category = singleCategory;
            remainingText = text.replace(synonym, "").toLowerCase();
            break outerLoop;
          }
      }
    } 
    
    result.amount = this.getAmountFromText(remainingText);

    
    result.name=  remainingText.replace(/[0-9€,.]/g, '').replace('euro', '').replace('eur','').replace('cent', '').trim();
    return result;
  }


 //Find amount from text and remove it
    // accounts for "20 € 35" and "20,35 €" and "20,45€" etc
private getAmountFromText(text: string): number{
  // gives you an array of either spaces or numbers (spaces needed since speech api sometimes understands "20 € 50")
  let numbers = text.replace(',', '.').replace(/[a-zA-Z€]/g, '').replace('euro', '').replace('eur', '').split(' ');
  let result="";
  for (const number of numbers) {
    if(parseInt(number)){ // 
      if(result){
        result += (parseInt(number)/100).toString().slice(1)
        return parseFloat(result);
      }else{
        if(text.includes("cent")){
          return (parseInt(number)/100);
        }
        result = number.toString();
      }
    }
  }
  return parseFloat(result);
}

}
