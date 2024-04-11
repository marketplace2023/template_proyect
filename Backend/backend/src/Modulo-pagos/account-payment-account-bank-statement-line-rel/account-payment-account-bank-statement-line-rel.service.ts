import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountPaymentAccountBankStatementLineRel } from './entities/account-payment-account-bank-statement-line-rel.entity';
import { CreatedAccountPaymentAccountBankStatementLineRelDto } from './dto/created-account-payment-account-bank-statement-line-rel.dto';
import { AccountPaymentAccountBankStatementLineRelNotFoundException } from './error/account-payment-account-bank-statement-line-rel-not-found.exception';
import { UpdatedAccountPaymentAccountBankStatementLineRelDto } from './dto/updated-account-payment-account-bank-statement-line-rel.dto';

@Injectable()
export class AccountPaymentAccountBankStatementLineRelService {
  constructor(
    @InjectRepository(AccountPaymentAccountBankStatementLineRel)
    private readonly accountPaymentAccountBankStatementLineRelRepository: Repository<AccountPaymentAccountBankStatementLineRel>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountPaymentAccountBankStatementLineRel[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountPaymentAccountBankStatementLineRel =
      await this.accountPaymentAccountBankStatementLineRelRepository
        .createQueryBuilder('accountPaymentAccountBankStatementLineRel')
        .take(perPage)
        .skip(offset)
        .getMany();
    return accountPaymentAccountBankStatementLineRel;
  }

  async create(
    createAccountPaymentAccountBankStatementLineRelDto: CreatedAccountPaymentAccountBankStatementLineRelDto,
  ): Promise<AccountPaymentAccountBankStatementLineRel> {
    const accountPaymentAccountBankStatementLineRel =
      new AccountPaymentAccountBankStatementLineRel(
        createAccountPaymentAccountBankStatementLineRelDto,
      );
    return await this.accountPaymentAccountBankStatementLineRelRepository.save(
      accountPaymentAccountBankStatementLineRel,
    );
  }

  async findOne(
    id: number,
  ): Promise<AccountPaymentAccountBankStatementLineRel> {
    const accountPaymentAccountBankStatementLineRel =
      await this.accountPaymentAccountBankStatementLineRelRepository
        .createQueryBuilder('accountPaymentAccountBankStatementLineRel')
        .where('accountPaymentAccountBankStatementLineRel.id = :id', { id })
        .getOne();
    if (!accountPaymentAccountBankStatementLineRel) {
      throw new AccountPaymentAccountBankStatementLineRelNotFoundException();
    }
    return accountPaymentAccountBankStatementLineRel;
  }

  async updated(
    id: number,
    updatedAccountPaymentAccountBankStatementLineRelDto: UpdatedAccountPaymentAccountBankStatementLineRelDto,
  ): Promise<AccountPaymentAccountBankStatementLineRel> {
    const accountPaymentAccountBankStatementLineRel =
      await this.accountPaymentAccountBankStatementLineRelRepository
        .createQueryBuilder('accountPaymentAccountBankStatementLineRel')
        .where('accountPaymentAccountBankStatementLineRel.id = :id', { id })
        .getOne();
    if (!accountPaymentAccountBankStatementLineRel) {
      throw new AccountPaymentAccountBankStatementLineRelNotFoundException();
    }
    Object.assign(
      accountPaymentAccountBankStatementLineRel,
      updatedAccountPaymentAccountBankStatementLineRelDto,
    );
    return await this.accountPaymentAccountBankStatementLineRelRepository.save(
      accountPaymentAccountBankStatementLineRel,
    );
  }

  async deleted(id: number): Promise<void> {
    const accountPaymentAccountBankStatementLineRel =
      await this.accountPaymentAccountBankStatementLineRelRepository
        .createQueryBuilder('accountPaymentAccountBankStatementLineRel')
        .where('accountPaymentAccountBankStatementLineRel.id = :id', { id })
        .getOne();
    if (!accountPaymentAccountBankStatementLineRel) {
      throw new AccountPaymentAccountBankStatementLineRelNotFoundException();
    }
    await this.accountPaymentAccountBankStatementLineRelRepository.softRemove(
      accountPaymentAccountBankStatementLineRel,
    );
    console.log('account Payment Group Icon Eliminado');
  }
}
