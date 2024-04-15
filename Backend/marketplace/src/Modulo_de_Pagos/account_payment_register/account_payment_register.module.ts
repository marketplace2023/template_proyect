import { Module } from '@nestjs/common';
import { AccountPaymentRegisterService } from './account_payment_register.service';
import { AccountPaymentRegisterController } from './account_payment_register.controller';

@Module({
  controllers: [AccountPaymentRegisterController],
  providers: [AccountPaymentRegisterService],
})
export class AccountPaymentRegisterModule {}
