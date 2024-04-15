import { Module } from '@nestjs/common';
import { AccountPaymentMethodService } from './account_payment_method.service';
import { AccountPaymentMethodController } from './account_payment_method.controller';

@Module({
  controllers: [AccountPaymentMethodController],
  providers: [AccountPaymentMethodService],
})
export class AccountPaymentMethodModule {}
