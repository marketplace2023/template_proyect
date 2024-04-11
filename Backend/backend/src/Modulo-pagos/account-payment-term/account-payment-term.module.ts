import { Module } from '@nestjs/common';
import { AccountPaymentTermController } from './account-payment-term.controller';
import { AccountPaymentTermService } from './account-payment-term.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountPaymentTerm } from './entities/account-payment-term.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountPaymentTerm])],
  controllers: [AccountPaymentTermController],
  providers: [AccountPaymentTermService],
})
export class AccountPaymentTermModule {}
