import { Module } from '@nestjs/common';
import { AccountBankStatementService } from './account_bank_statement.service';
import { AccountBankStatementController } from './account_bank_statement.controller';

@Module({
  controllers: [AccountBankStatementController],
  providers: [AccountBankStatementService],
})
export class AccountBankStatementModule {}
