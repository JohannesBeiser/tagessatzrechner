import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(private http: HttpClient) { }

  
  public getTextFromAudio(binaryData: Int16Array): Promise<any> {
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
