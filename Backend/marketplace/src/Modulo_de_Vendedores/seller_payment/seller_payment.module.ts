import { Module } from '@nestjs/common';
import { SellerPaymentService } from './seller_payment.service';
import { SellerPaymentController } from './seller_payment.controller';

@Module({
  controllers: [SellerPaymentController],
  providers: [SellerPaymentService],
})
export class SellerPaymentModule {}
