import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountReportColumn } from './entities/account-report-column.entity';
import { Repository } from 'typeorm';
import { CreateAccountReportColumnDto } from './dto/create-account-report-column.dto';
import { AccountReportColumnNotFoundException } from './error/account-report-column-not-found.exception';
import { UpdatedAccountReportColumnDto } from './dto/updated-account-report-column.dto';

@Injectable()
export class AccountReportColumnService {
  constructor(
    @InjectRepository(AccountReportColumn)
    private readonly accountReportRepository: Repository<AccountReportColumn>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountReportColumn[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountReport = await this.accountReportRepository
      .createQueryBuilder('accountReport')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountReport;
  }

  async create(
    createAccountReportColumnDto: CreateAccountReportColumnDto,
  ): Promise<AccountReportColumn> {
    const accountReport = new AccountReportColumn(createAccountReportColumnDto);
    return await this.accountReportRepository.save(accountReport);
  }

  async findOne(id: number): Promise<AccountReportColumn> {
    const accountReport = await this.accountReportRepository
      .createQueryBuilder('accountReport')
      .where('accountReport.id = :id', { id })
      .getOne();
    if (!accountReport) {
      throw new AccountReportColumnNotFoundException();
    }
    return accountReport;
  }

  async updated(
    id: number,
    updatedAccountReportColumnDto: UpdatedAccountReportColumnDto,
  ): Promise<AccountReportColumn> {
    const accountReport = await this.accountReportRepository
      .createQueryBuilder('accountReport')
      .where('accountReport.id = :id', { id })
      .getOne();
    if (!accountReport) {
      throw new AccountReportColumnNotFoundException();
    }
    Object.assign(accountReport, updatedAccountReportColumnDto);
    return await this.accountReportRepository.save(accountReport);
  }

  async deleted(id: number): Promise<void> {
    const accountReport = await this.accountReportRepository
      .createQueryBuilder('accountReport')
      .where('accountReport.id = :id', { id })
      .getOne();
    if (!accountReport) {
      throw new AccountReportColumnNotFoundException();
    }
    await this.accountReportRepository.softRemove(accountReport);
    console.log('account Report column Eliminado');
  }
}
