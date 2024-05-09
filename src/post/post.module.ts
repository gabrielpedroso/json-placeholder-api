import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [HttpModule],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
