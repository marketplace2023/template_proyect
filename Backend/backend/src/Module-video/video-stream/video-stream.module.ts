import { Module } from '@nestjs/common';
import { VideoStreamController } from './video-stream.controller';
import { VideoStreamService } from './video-stream.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoStream } from './entities/video-stream.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoStream])],
  controllers: [VideoStreamController],
  providers: [VideoStreamService],
})
export class VideoStreamModule {}
