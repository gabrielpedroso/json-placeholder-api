import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getPosts() {
    let posts = [];
    const { status, data } = await firstValueFrom(
      this.httpService.get('https://jsonplaceholder.typicode.com/posts'),
    );

    if (status == 200) {
      posts = data;
    }

    return { posts };
  }

  async getMessagesById(id: number) {
    let comments = [];
    const { status, data } = await firstValueFrom(
      this.httpService.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      ),
    );

    if (status == 200) {
      comments = data;
    }

    return { comments };
  }
}
