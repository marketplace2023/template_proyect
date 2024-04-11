import { Module } from '@nestjs/common';
import { AccountPaymentAccountBankStatementLineRelController } from './account-payment-account-bank-statement-line-rel.controller';
import { AccountPaymentAccountBankStatementLineRelService } from './account-payment-account-bank-statement-line-rel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountPaymentAccountBankStatementLineRel } from './entities/account-payment-account-bank-statement-line-rel.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountPaymentAccountBankStatementLineRel]),
  ],
  controllers: [AccountPaymentAccountBankStatementLineRelController],
  providers: [AccountPaymentAccountBankStatementLineRelService],
})
export class AccountPaymentAccountBankStatementLineRelModule {}
