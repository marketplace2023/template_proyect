import { Module } from '@nestjs/common';
import { SellerCommissionService } from './seller_commission.service';
import { SellerCommissionController } from './seller_commission.controller';

@Module({
  controllers: [SellerCommissionController],
  providers: [SellerCommissionService],
})
export class SellerCommissionModule {}
