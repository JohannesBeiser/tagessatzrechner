import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    postAudio(message: any): any;
    getAudio(): any;
}
