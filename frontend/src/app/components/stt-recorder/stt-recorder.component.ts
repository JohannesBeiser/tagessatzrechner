import { Component, OnInit, NgZone } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { AudioService } from 'src/app/services/audio/audio.service';
import { takeUntil, bufferTime, map } from 'rxjs/operators';


@Component({
  selector: 'app-stt-recorder',
  templateUrl: './stt-recorder.component.html',
  styleUrls: ['./stt-recorder.component.less']
})
export class SttRecorderComponent implements OnInit {

  constructor(
    private audioService: AudioService,
    private zone: NgZone,
  ) { }

  public recordingState$: BehaviorSubject<string> = new BehaviorSubject('inactive');
  private data: Int16Array;
  public results: any[] = [];


  ngOnInit(): void {
  }

  async startRecording(e: MouseEvent) {
    e.preventDefault();
    if (this.recordingState$.value === 'inactive') {
      let audioStream = await this.audioService.getUserMediaStream();

      this.recordingState$.next("recording");

      this.data = new Int16Array();
      this.resampleStream(audioStream).subscribe((data) => {
        this.data = new Int16Array([...this.data, ...data]);
      });
    }
  }

  async stopRecording(e: MouseEvent) {
    if (this.recordingState$.value === 'recording') {
      this.stopResampling();
      this.recordingState$.next('inactive');
      let result = await this.audioService.getTextFromAudio(this.data);
      alert(result.transcription);
      // if (metadataResult.transcription !== "") {
      //   this.results.push(metadataResult);
      // }
    }
  }


  audioContext: AudioContext;
  gumStream: MediaStream;
  resampledFrames$: Subject<Int16Array>;
  streamEndNotifier$: Subject<void>;
  resampledStream$: Observable<Int16Array>;

  resampleStream(sourceStream: MediaStream, emitInterval: number = Number.MAX_SAFE_INTEGER / 10): Observable<Int16Array> {
    this.gumStream = sourceStream;
    this.resampledFrames$ = new Subject<Int16Array>();

    //TODO: Fix 'as any'
    this.audioContext = new ((window as any).AudioContext || (window as any).webkitAudioContext)();
    let audioSource = this.audioContext.createMediaStreamSource(sourceStream);
    let node = this.audioContext.createScriptProcessor(4096, 1, 1);
    node.onaudioprocess = (e) => {
      this.processAudioFrame(e.inputBuffer.getChannelData(0), audioSource.context.sampleRate);
    };
    audioSource.connect(node);
    node.connect(this.audioContext.destination);

    this.streamEndNotifier$ = new Subject<void>();

    this.resampledStream$ = this.resampledFrames$.pipe(
      takeUntil(this.streamEndNotifier$),
      bufferTime(emitInterval),
      map(this.mergeInt16Arrays),
    );
    return this.resampledStream$;
  }
  mergeInt16Arrays(arrays: Int16Array[]): Int16Array {
    return arrays.reduce((previous, current) => {
        return new Int16Array([...previous, ...current]);
    }, new Int16Array())
}

  inputBuffer = [];

  processAudioFrame(inputFrame, inputSampleRate: number) {
    for (let i = 0; i < inputFrame.length; i++) {
        this.inputBuffer.push((inputFrame[i]) * 32767);
    }

    const goalSampleRate = 16000;
    const frameLength = 512;

    while ((this.inputBuffer.length * goalSampleRate / inputSampleRate) > frameLength) {
        let outputFrame = new Int16Array(frameLength);
        let sum = 0;
        let num = 0;
        let outputIndex = 0;
        let inputIndex = 0;

        while (outputIndex < frameLength) {
            sum = 0;
            num = 0;
            while (inputIndex < Math.min(this.inputBuffer.length, (outputIndex + 1) * inputSampleRate / goalSampleRate)) {
                sum += this.inputBuffer[inputIndex];
                num++;
                inputIndex++;
            }
            outputFrame[outputIndex] = sum / num;
            outputIndex++;
        }

        this.resampledFrames$.next(outputFrame);
        this.inputBuffer = this.inputBuffer.slice(inputIndex);
    }
}
stopResampling() {
  //emit last ping since intervall won't ping last time at say 800ms 
  this.streamEndNotifier$.next(); 
  this.audioContext.close();
  this.gumStream.getAudioTracks()[0].stop();
  this.inputBuffer = [];
}



}
