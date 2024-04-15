import { Module } from '@nestjs/common';
import { SellerDashboardService } from './seller_dashboard.service';
import { SellerDashboardController } from './seller_dashboard.controller';

@Module({
  controllers: [SellerDashboardController],
  providers: [SellerDashboardService],
})
export class SellerDashboardModule {}
