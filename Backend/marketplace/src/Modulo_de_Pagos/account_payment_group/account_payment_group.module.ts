import { Module } from '@nestjs/common';
import { AccountPaymentGroupService } from './account_payment_group.service';
import { AccountPaymentGroupController } from './account_payment_group.controller';

@Module({
  controllers: [AccountPaymentGroupController],
  providers: [AccountPaymentGroupService],
})
export class AccountPaymentGroupModule {}
