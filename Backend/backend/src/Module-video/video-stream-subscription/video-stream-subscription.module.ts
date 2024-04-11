import { Module } from '@nestjs/common';
import { VideoStreamSubscriptionController } from './video-stream-subscription.controller';
import { VideoStreamSubscriptionService } from './video-stream-subscription.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoStreamSubscription } from './entities/video-stream-subscription.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoStreamSubscription])],
  controllers: [VideoStreamSubscriptionController],
  providers: [VideoStreamSubscriptionService],
})
export class VideoStreamSubscriptionModule {}
