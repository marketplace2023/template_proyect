import { Module } from '@nestjs/common';
import { AccountJournalController } from './account-journal.controller';
import { AccountJournalService } from './account-journal.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountJournal } from './entities/account-journal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountJournal])],
  controllers: [AccountJournalController],
  providers: [AccountJournalService],
})
export class AccountJournalModule {}
