import { Module } from '@nestjs/common';
import { SellerAnalyticsService } from './seller_analytics.service';
import { SellerAnalyticsController } from './seller_analytics.controller';

@Module({
  controllers: [SellerAnalyticsController],
  providers: [SellerAnalyticsService],
})
export class SellerAnalyticsModule {}
