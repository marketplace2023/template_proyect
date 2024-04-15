import { Module } from '@nestjs/common';
import { AccountPaymentAcquirerService } from './account_payment_acquirer.service';
import { AccountPaymentAcquirerController } from './account_payment_acquirer.controller';

@Module({
  controllers: [AccountPaymentAcquirerController],
  providers: [AccountPaymentAcquirerService],
})
export class AccountPaymentAcquirerModule {}
