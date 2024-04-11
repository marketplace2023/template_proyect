import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountAccount } from './entities/account-account.entity';
import { Repository } from 'typeorm';
import { CreateAccountAccountDto } from './dto/created_account-account.dto';
import { AccountAccountdNotFoundException } from './error/account-account-not-found.exception';
import { UpdatedAccountAccountDto } from './dto/updated_account-account.dto';

@Injectable()
export class AccountAccountService {
  constructor(
    @InjectRepository(AccountAccount)
    private readonly accountAccountRepository: Repository<AccountAccount>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountAccount[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountAccount = await this.accountAccountRepository
      .createQueryBuilder('accountAccount')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountAccount;
  }

  async create(
    createAccountAccountDto: CreateAccountAccountDto,
  ): Promise<AccountAccount> {
    const accountAccount = new AccountAccount(createAccountAccountDto);
    return await this.accountAccountRepository.save(accountAccount);
  }

  async findOne(id: number): Promise<AccountAccount> {
    const accountAccount = await this.accountAccountRepository
      .createQueryBuilder('accountAccount')
      .where('accountAccount.id = :id', { id })
      .getOne();
    if (!accountAccount) {
      throw new AccountAccountdNotFoundException();
    }
    return accountAccount;
  }

  async updated(
    id: number,
    updatedAccountAccountDto: UpdatedAccountAccountDto,
  ): Promise<AccountAccount> {
    const accountAccount = await this.accountAccountRepository
      .createQueryBuilder('accountAccount')
      .where('accountAccount.id = :id', { id })
      .getOne();
    if (!accountAccount) {
      throw new AccountAccountdNotFoundException();
    }
    Object.assign(accountAccount, updatedAccountAccountDto);
    return await this.accountAccountRepository.save(accountAccount);
  }

  async deleted(id: number): Promise<void> {
    const accountAccount = await this.accountAccountRepository
      .createQueryBuilder('accountAccount')
      .where('accountAccount.id = :id', { id })
      .getOne();
    if (!accountAccount) {
      throw new AccountAccountdNotFoundException();
    }
    await this.accountAccountRepository.softRemove(accountAccount);
    console.log('Payment Icon Eliminado');
  }
}
