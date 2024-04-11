import { Module } from '@nestjs/common';
import { VideoStreamViewController } from './video-stream-view.controller';
import { VideoStreamViewService } from './video-stream-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoStreamView } from './entities/video-stream-view.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoStreamView])],
  controllers: [VideoStreamViewController],
  providers: [VideoStreamViewService],
})
export class VideoStreamViewModule {}
