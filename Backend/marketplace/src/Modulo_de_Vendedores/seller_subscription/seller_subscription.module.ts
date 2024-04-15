import { Module } from '@nestjs/common';
import { SellerSubscriptionService } from './seller_subscription.service';
import { SellerSubscriptionController } from './seller_subscription.controller';

@Module({
  controllers: [SellerSubscriptionController],
  providers: [SellerSubscriptionService],
})
export class SellerSubscriptionModule {}
