import { Module } from '@nestjs/common';
import { VideoStreamRatingController } from './video-stream-rating.controller';
import { VideoStreamRatingService } from './video-stream-rating.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoStreamRating } from './entities/video-stream-riting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoStreamRating])],
  controllers: [VideoStreamRatingController],
  providers: [VideoStreamRatingService],
})
export class VideoStreamRatingModule {}
