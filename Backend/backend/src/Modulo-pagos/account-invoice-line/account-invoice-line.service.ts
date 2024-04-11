import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountInvoiceLine } from './entities/account-invoice-line.entity';
import { Repository } from 'typeorm';
import { CreatedAccountInvoiceLineDto } from './dto/created-account-invoice-line.dto';
import { AccountInvoiceLineNotFoundException } from './error/account-invoice-line-not-found.exception';
import { UpdatedAccountInvoiceLineDto } from './dto/updated-account-invoice-line.dto';

@Injectable()
export class AccountInvoiceLineService {
  constructor(
    @InjectRepository(AccountInvoiceLine)
    private readonly accountInvoiceLineRepository: Repository<AccountInvoiceLine>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountInvoiceLine[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountInvoiceLine = await this.accountInvoiceLineRepository
      .createQueryBuilder('accountInvoiceLine')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountInvoiceLine;
  }

  async create(
    createAccountInvoiceLineDto: CreatedAccountInvoiceLineDto,
  ): Promise<AccountInvoiceLine> {
    const accountInvoiceLine = new AccountInvoiceLine(
      createAccountInvoiceLineDto,
    );
    return await this.accountInvoiceLineRepository.save(accountInvoiceLine);
  }

  async findOne(id: number): Promise<AccountInvoiceLine> {
    const accountInvoiceLine = await this.accountInvoiceLineRepository
      .createQueryBuilder('accountInvoiceLine')
      .where('accountInvoiceLine.id = :id', { id })
      .getOne();
    if (!accountInvoiceLine) {
      throw new AccountInvoiceLineNotFoundException();
    }
    return accountInvoiceLine;
  }

  async updated(
    id: number,
    updatedAccountInvoiceLineDto: UpdatedAccountInvoiceLineDto,
  ): Promise<AccountInvoiceLine> {
    const accountInvoiceLine = await this.accountInvoiceLineRepository
      .createQueryBuilder('accountInvoiceLine')
      .where('accountInvoiceLine.id = :id', { id })
      .getOne();
    if (!accountInvoiceLine) {
      throw new AccountInvoiceLineNotFoundException();
    }
    Object.assign(accountInvoiceLine, updatedAccountInvoiceLineDto);
    return await this.accountInvoiceLineRepository.save(accountInvoiceLine);
  }

  async deleted(id: number): Promise<void> {
    const accountInvoiceLine = await this.accountInvoiceLineRepository
      .createQueryBuilder('accountInvoiceLine')
      .where('accountInvoiceLine.id = :id', { id })
      .getOne();
    if (!accountInvoiceLine) {
      throw new AccountInvoiceLineNotFoundException();
    }
    await this.accountInvoiceLineRepository.softRemove(accountInvoiceLine);
    console.log('Payment Icon Eliminado');
  }
}
