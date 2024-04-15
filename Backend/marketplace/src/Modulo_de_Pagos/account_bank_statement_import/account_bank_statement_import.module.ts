import { Module } from '@nestjs/common';
import { AccountBankStatementImportService } from './account_bank_statement_import.service';
import { AccountBankStatementImportController } from './account_bank_statement_import.controller';

@Module({
  controllers: [AccountBankStatementImportController],
  providers: [AccountBankStatementImportService],
})
export class AccountBankStatementImportModule {}
