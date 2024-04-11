import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountPaymentTermNotFoundException } from './error/account-payment-term-not-found-exception';
import { AccountPaymentTerm } from './entities/account-payment-term.entity';
import { Repository } from 'typeorm';
import { CreateAccountPaymentTermDto } from './dto/create-account-payment-term.dto';
import { UpdatedAccountPaymentTermDto } from './dto/updated-account-payment-term.dto';

@Injectable()
export class AccountPaymentTermService {
  constructor(
    @InjectRepository(AccountPaymentTerm)
    private readonly accountPaymentTermRepository: Repository<AccountPaymentTerm>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountPaymentTerm[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountPaymentTerm = await this.accountPaymentTermRepository
      .createQueryBuilder('accountPaymentTerm')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountPaymentTerm;
  }

  async create(
    createAccountPaymentTermDto: CreateAccountPaymentTermDto,
  ): Promise<AccountPaymentTerm> {
    const accountPaymentTerm = new AccountPaymentTerm(
      createAccountPaymentTermDto,
    );
    return await this.accountPaymentTermRepository.save(accountPaymentTerm);
  }

  async findOne(id: number): Promise<AccountPaymentTerm> {
    const accountPaymentTerm = await this.accountPaymentTermRepository
      .createQueryBuilder('accountPaymentTerm')
      .where('accountPaymentTerm.id = :id', { id })
      .getOne();
    if (!accountPaymentTerm) {
      throw new AccountPaymentTermNotFoundException();
    }
    return accountPaymentTerm;
  }

  async updated(
    id: number,
    updatedAccountPaymentTermDto: UpdatedAccountPaymentTermDto,
  ): Promise<AccountPaymentTerm> {
    const accountPaymentTerm = await this.accountPaymentTermRepository
      .createQueryBuilder('accountPaymentTerm')
      .where('accountPaymentTerm.id = :id', { id })
      .getOne();
    if (!accountPaymentTerm) {
      throw new AccountPaymentTermNotFoundException();
    }
    Object.assign(accountPaymentTerm, updatedAccountPaymentTermDto);
    return await this.accountPaymentTermRepository.save(accountPaymentTerm);
  }

  async deleted(id: number): Promise<void> {
    const accountPaymentTerm = await this.accountPaymentTermRepository
      .createQueryBuilder('accountPaymentTerm')
      .where('accountPaymentTerm.id = :id', { id })
      .getOne();
    if (!accountPaymentTerm) {
      throw new AccountPaymentTermNotFoundException();
    }
    await this.accountPaymentTermRepository.softRemove(accountPaymentTerm);
    console.log('Payment Register Eliminado');
  }
}
