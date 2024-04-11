import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountPaymentTermLine } from './entities/account-payment-term-line.entity';
import { Repository } from 'typeorm';
import { CreateAccountPaymentTermLineDto } from './dto/create-account-payment-term-line.dto';
import { AccountPaymentTermLineNotFoundException } from './error/account-payment-term-line-not-found.exception';
import { UpdatedAccountPaymentTermLineDto } from './dto/updated-account-payment-term-line.dto';

@Injectable()
export class AccountPaymentTermLineService {
  constructor(
    @InjectRepository(AccountPaymentTermLine)
    private readonly accountPaymentTermLineRepository: Repository<AccountPaymentTermLine>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountPaymentTermLine[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountPaymentTermLine = await this.accountPaymentTermLineRepository
      .createQueryBuilder('accountPaymentTermLine')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountPaymentTermLine;
  }

  async create(
    createAccountPaymentTermLineDto: CreateAccountPaymentTermLineDto,
  ): Promise<AccountPaymentTermLine> {
    const accountPaymentTermLine = new AccountPaymentTermLine(
      createAccountPaymentTermLineDto,
    );
    return await this.accountPaymentTermLineRepository.save(
      accountPaymentTermLine,
    );
  }

  async findOne(id: number): Promise<AccountPaymentTermLine> {
    const accountPaymentTermLine = await this.accountPaymentTermLineRepository
      .createQueryBuilder('accountPaymentTermLine')
      .where('accountPaymentTermLine.id = :id', { id })
      .getOne();
    if (!accountPaymentTermLine) {
      throw new AccountPaymentTermLineNotFoundException();
    }
    return accountPaymentTermLine;
  }

  async updated(
    id: number,
    updatedAccountPaymentTermLineDto: UpdatedAccountPaymentTermLineDto,
  ): Promise<AccountPaymentTermLine> {
    const accountPaymentTermLine = await this.accountPaymentTermLineRepository
      .createQueryBuilder('accountPaymentTermLine')
      .where('accountPaymentTermLine.id = :id', { id })
      .getOne();
    if (!accountPaymentTermLine) {
      throw new AccountPaymentTermLineNotFoundException();
    }
    Object.assign(accountPaymentTermLine, updatedAccountPaymentTermLineDto);
    return await this.accountPaymentTermLineRepository.save(
      accountPaymentTermLine,
    );
  }

  async deleted(id: number): Promise<void> {
    const accountPaymentTermLine = await this.accountPaymentTermLineRepository
      .createQueryBuilder('accountPaymentTermLine')
      .where('accountPaymentTermLine.id = :id', { id })
      .getOne();
    if (!accountPaymentTermLine) {
      throw new AccountPaymentTermLineNotFoundException();
    }
    await this.accountPaymentTermLineRepository.softRemove(
      accountPaymentTermLine,
    );
    console.log('Payment line Eliminado');
  }
}
