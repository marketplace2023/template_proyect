import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountPaymentMethodLineNotFoundException } from './error/account-payment-method-line-not-found.exception';
import { UpdatedAccountPaymentMethodLineDto } from './dto/updated-account-payment-method-line.dto';
import { AccountPaymentMethodLine } from './entities/account-payment-method-line.entity';
import { CreateAccountPaymentMethodLineDto } from './dto/create-account-payment-method-line.dto';

@Injectable()
export class AccountPaymentMethodLineService {
  constructor(
    @InjectRepository(AccountPaymentMethodLine)
    private readonly accountPaymentMethodLineRepository: Repository<AccountPaymentMethodLine>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountPaymentMethodLine[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountPaymentMethodLine =
      await this.accountPaymentMethodLineRepository
        .createQueryBuilder('accountPaymentMethodLine')
        .take(perPage)
        .skip(offset)
        .getMany();
    return accountPaymentMethodLine;
  }

  async create(
    createAccountPaymentMethodLineDto: CreateAccountPaymentMethodLineDto,
  ): Promise<AccountPaymentMethodLine> {
    const accountPaymentMethodLine = new AccountPaymentMethodLine(
      createAccountPaymentMethodLineDto,
    );
    return await this.accountPaymentMethodLineRepository.save(
      accountPaymentMethodLine,
    );
  }

  async findOne(id: number): Promise<AccountPaymentMethodLine> {
    const accountPaymentMethodLine =
      await this.accountPaymentMethodLineRepository
        .createQueryBuilder('accountPaymentMethodLine')
        .where('accountPaymentMethodLine.id = :id', { id })
        .getOne();
    if (!accountPaymentMethodLine) {
      throw new AccountPaymentMethodLineNotFoundException();
    }
    return accountPaymentMethodLine;
  }

  async updated(
    id: number,
    updatedAccountPaymentMethodLineDto: UpdatedAccountPaymentMethodLineDto,
  ): Promise<AccountPaymentMethodLine> {
    const accountPaymentMethodLine =
      await this.accountPaymentMethodLineRepository
        .createQueryBuilder('accountPaymentMethodLine')
        .where('accountPaymentMethodLine.id = :id', { id })
        .getOne();
    if (!accountPaymentMethodLine) {
      throw new AccountPaymentMethodLineNotFoundException();
    }
    Object.assign(accountPaymentMethodLine, updatedAccountPaymentMethodLineDto);
    return await this.accountPaymentMethodLineRepository.save(
      accountPaymentMethodLine,
    );
  }

  async deleted(id: number): Promise<void> {
    const accountPaymentMethodLine =
      await this.accountPaymentMethodLineRepository
        .createQueryBuilder('accountPaymentMethodLine')
        .where('accountPaymentMethodLine.id = :id', { id })
        .getOne();
    if (!accountPaymentMethodLine) {
      throw new AccountPaymentMethodLineNotFoundException();
    }
    await this.accountPaymentMethodLineRepository.softRemove(
      accountPaymentMethodLine,
    );
    console.log('Payment Icon Eliminado');
  }
}
