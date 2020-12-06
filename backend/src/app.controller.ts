import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('audio')
  postAudio(@Body() message: any): any{
    let chunks = [];
    console.log("activated: POST audio")
  }
  @Get('audio')
  getAudio(): any{
    let chunks = [];
    console.log("activated: GET audio")
  }
   

  
}
