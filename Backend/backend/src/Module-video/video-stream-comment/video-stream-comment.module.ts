import { Module } from '@nestjs/common';
import { VideoStreamCommentController } from './video-stream-comment.controller';
import { VideoStreamCommentService } from './video-stream-comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoStreamComment } from './entities/video-stream-comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoStreamComment])],
  controllers: [VideoStreamCommentController],
  providers: [VideoStreamCommentService],
})
export class VideoStreamCommentModule {}
