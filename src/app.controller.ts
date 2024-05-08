import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('posts')
  async getPosts() {
    return this.appService.getPosts();
  }

  @Get('comments/:id')
  getComments(@Param('id') id: string) {
    return this.appService.getMessagesById(Number(id));
  }
}
