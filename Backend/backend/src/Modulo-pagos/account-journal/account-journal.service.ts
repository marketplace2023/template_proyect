import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountJournalNotFoundException } from './error/account-journal-not-found.exception';
import { UpdatedAccountJournaltDto } from './dto/updated-account-journal.dto';
import { AccountJournal } from './entities/account-journal.entity';
import { CreatedAccountJournalDto } from './dto/created-account-journal.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AccountJournalService {
  constructor(
    @InjectRepository(AccountJournal)
    private readonly accountJournalRepository: Repository<AccountJournal>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountJournal[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountJournal = await this.accountJournalRepository
      .createQueryBuilder('accountJournal')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountJournal;
  }

  async create(
    createAccountJournalDto: CreatedAccountJournalDto,
  ): Promise<AccountJournal> {
    const accountJournal = new AccountJournal(createAccountJournalDto);
    return await this.accountJournalRepository.save(accountJournal);
  }

  async findOne(id: number): Promise<AccountJournal> {
    const accountJournal = await this.accountJournalRepository
      .createQueryBuilder('accountJournal')
      .where('accountJournal.id = :id', { id })
      .getOne();
    if (!accountJournal) {
      throw new AccountJournalNotFoundException();
    }
    return accountJournal;
  }

  async updated(
    id: number,
    updatedAccountJournalDto: UpdatedAccountJournaltDto,
  ): Promise<AccountJournal> {
    const accountJournal = await this.accountJournalRepository
      .createQueryBuilder('accountJournal')
      .where('accountJournal.id = :id', { id })
      .getOne();
    if (!accountJournal) {
      throw new AccountJournalNotFoundException();
    }
    Object.assign(accountJournal, updatedAccountJournalDto);
    return await this.accountJournalRepository.save(accountJournal);
  }

  async deleted(id: number): Promise<void> {
    const accountJournal = await this.accountJournalRepository
      .createQueryBuilder('accountJournal')
      .where('accountJournal.id = :id', { id })
      .getOne();
    if (!accountJournal) {
      throw new AccountJournalNotFoundException();
    }
    await this.accountJournalRepository.softRemove(accountJournal);
    console.log('account Journal Icon Eliminado');
  }
}
