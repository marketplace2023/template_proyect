import { Injectable } from '@nestjs/common';
import { CreateAccountJournalDto } from './dto/create-account_journal.dto';
import { UpdateAccountJournalDto } from './dto/update-account_journal.dto';

@Injectable()
export class AccountJournalService {
  create(createAccountJournalDto: CreateAccountJournalDto) {
    return 'This action adds a new accountJournal';
  }

  findAll() {
    return `This action returns all accountJournal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountJournal`;
  }

  update(id: number, updateAccountJournalDto: UpdateAccountJournalDto) {
    return `This action updates a #${id} accountJournal`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountJournal`;
  }
}
