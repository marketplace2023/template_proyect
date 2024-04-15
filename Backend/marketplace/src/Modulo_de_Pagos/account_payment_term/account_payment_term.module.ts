import { Module } from '@nestjs/common';
import { AccountPaymentTermService } from './account_payment_term.service';
import { AccountPaymentTermController } from './account_payment_term.controller';

@Module({
  controllers: [AccountPaymentTermController],
  providers: [AccountPaymentTermService],
})
export class AccountPaymentTermModule {}
