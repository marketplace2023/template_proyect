import { Module } from '@nestjs/common';
import { VideoStreamPlaylistController } from './video-stream-playlist.controller';
import { VideoStreamPlaylistService } from './video-stream-playlist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoStreamPlaylist } from './entities/video-stream-playlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoStreamPlaylist])],
  controllers: [VideoStreamPlaylistController],
  providers: [VideoStreamPlaylistService],
})
export class VideoStreamPlaylistModule {}
