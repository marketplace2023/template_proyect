import { Module } from '@nestjs/common';
import { VideoStreamTagController } from './video-stream-tag.controller';
import { VideoStreamTagService } from './video-stream-tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoStreamTag } from './entities/video-stream-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoStreamTag])],
  controllers: [VideoStreamTagController],
  providers: [VideoStreamTagService],
})
export class VideoStreamTagModule {}
