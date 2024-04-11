import { Module } from '@nestjs/common';
import { VideoStreamEmbedController } from './video-stream-embed.controller';
import { VideoStreamEmbedService } from './video-stream-embed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoStreamEmbed } from './entities/video-stream-embed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoStreamEmbed])],
  controllers: [VideoStreamEmbedController],
  providers: [VideoStreamEmbedService],
})
export class VideoStreamEmbedModule {}
