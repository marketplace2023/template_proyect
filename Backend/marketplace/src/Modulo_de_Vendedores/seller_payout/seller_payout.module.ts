import { Module } from '@nestjs/common';
import { SellerPayoutService } from './seller_payout.service';
import { SellerPayoutController } from './seller_payout.controller';

@Module({
  controllers: [SellerPayoutController],
  providers: [SellerPayoutService],
})
export class SellerPayoutModule {}
