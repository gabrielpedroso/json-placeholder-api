import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import { Post } from './entities/post.entity';
import { Comment } from './entities/comment.entity';
import { NotFoundError } from 'src/error';

@Injectable()
export class PostService {
  constructor(private readonly httpService: HttpService) {}

  async findOne(id: number): Promise<Post> {
    try {
      const response = await firstValueFrom(
        this.httpService.get<Post>(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        ),
      );
      return response.data;
    } catch (error) {
      console.error(error);
      if (error.response.status === 404) {
        throw new NotFoundError(`Post with ID ${id} not found.`);
      }
      throw error;
    }
  }

  async findComments(postId: number): Promise<Comment[]> {
    try {
      const response = await firstValueFrom(
        this.httpService.get<Comment[]>(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        ),
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
