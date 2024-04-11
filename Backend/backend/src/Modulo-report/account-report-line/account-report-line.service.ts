import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountReportLineNotFoundException } from './error/account-report-line-not-found.exception';
import { AccountReportLine } from './entities/account-report-line.entity';
import { UpdatedAccountReportLineDto } from './dto/updated-account-report-line.dto';
import { Repository } from 'typeorm';
import { CreateAccountReportLineDto } from './dto/create-account-report-line.dto';

@Injectable()
export class AccountReportLineService {
  constructor(
    @InjectRepository(AccountReportLine)
    private readonly accountReportLineRepository: Repository<AccountReportLine>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountReportLine[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountReportLine = await this.accountReportLineRepository
      .createQueryBuilder('accountReportLine')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountReportLine;
  }

  async create(
    createAccountReportLineDto: CreateAccountReportLineDto,
  ): Promise<AccountReportLine> {
    const accountReportLine = new AccountReportLine(createAccountReportLineDto);
    return await this.accountReportLineRepository.save(accountReportLine);
  }

  async findOne(id: number): Promise<AccountReportLine> {
    const accountReportLine = await this.accountReportLineRepository
      .createQueryBuilder('accountReportLine')
      .where('accountReportLine.id = :id', { id })
      .getOne();
    if (!accountReportLine) {
      throw new AccountReportLineNotFoundException();
    }
    return accountReportLine;
  }

  async updated(
    id: number,
    updatedAccountReportLineDto: UpdatedAccountReportLineDto,
  ): Promise<AccountReportLine> {
    const accountReportLine = await this.accountReportLineRepository
      .createQueryBuilder('accountReportLine')
      .where('accountReportLine.id = :id', { id })
      .getOne();
    if (!accountReportLine) {
      throw new AccountReportLineNotFoundException();
    }
    Object.assign(accountReportLine, updatedAccountReportLineDto);
    return await this.accountReportLineRepository.save(accountReportLine);
  }

  async deleted(id: number): Promise<void> {
    const accountReportLine = await this.accountReportLineRepository
      .createQueryBuilder('accountReportLine')
      .where('accountReportLine.id = :id', { id })
      .getOne();
    if (!accountReportLine) {
      throw new AccountReportLineNotFoundException();
    }
    await this.accountReportLineRepository.softRemove(accountReportLine);
    console.log('account Report column Eliminado');
  }
}
