import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

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

}
