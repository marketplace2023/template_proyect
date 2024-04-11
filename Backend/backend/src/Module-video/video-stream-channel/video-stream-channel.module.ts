import { Module } from '@nestjs/common';
import { VideoStreamChannelController } from './video-stream-channel.controller';
import { VideoStreamChannelService } from './video-stream-channel.service';
import { VideoStreamChannel } from './entities/video-stream-channel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VideoStreamChannel])],
  controllers: [VideoStreamChannelController],
  providers: [VideoStreamChannelService],
})
export class VideoStreamChannelModule {}
