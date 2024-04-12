import { Module } from '@nestjs/common';
import { AccountJournalService } from './account_journal.service';
import { AccountJournalController } from './account_journal.controller';

@Module({
  controllers: [AccountJournalController],
  providers: [AccountJournalService],
})
export class AccountJournalModule {}
