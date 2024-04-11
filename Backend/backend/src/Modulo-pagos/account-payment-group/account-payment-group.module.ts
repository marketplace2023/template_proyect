import { Module } from '@nestjs/common';
import { AccountPaymentGroupController } from './account-payment-group.controller';
import { AccountPaymentGroupService } from './account-payment-group.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountPaymentGroup } from './entities/account-payment-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountPaymentGroup])],
  controllers: [AccountPaymentGroupController],
  providers: [AccountPaymentGroupService],
})
export class AccountPaymentGroupModule {}
