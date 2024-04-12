import { Module } from '@nestjs/common';
import { AccountPaymentService } from './account_payment.service';
import { AccountPaymentController } from './account_payment.controller';

@Module({
  controllers: [AccountPaymentController],
  providers: [AccountPaymentService],
})
export class AccountPaymentModule {}
