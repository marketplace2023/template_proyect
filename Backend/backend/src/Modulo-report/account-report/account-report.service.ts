import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountReport } from './entities/account-report.entity';
import { Repository } from 'typeorm';
import { CreateAccountReportDto } from './dto/create-account-report.dto';
import { UpdatedAccountReportDto } from './dto/updated-account-report.dto';
import { AccountReportNotFoundException } from './error/account-report-not-found.exception';

@Injectable()
export class AccountReportService {
  constructor(
    @InjectRepository(AccountReport)
    private readonly accountReportRepository: Repository<AccountReport>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountReport[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountReport = await this.accountReportRepository
      .createQueryBuilder('accountReport')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountReport;
  }

  async create(
    createAccountReportDto: CreateAccountReportDto,
  ): Promise<AccountReport> {
    const accountReport = new AccountReport(createAccountReportDto);
    return await this.accountReportRepository.save(accountReport);
  }

  async findOne(id: number): Promise<AccountReport> {
    const accountReport = await this.accountReportRepository
      .createQueryBuilder('accountReport')
      .where('accountReport.id = :id', { id })
      .getOne();
    if (!accountReport) {
      throw new AccountReportNotFoundException();
    }
    return accountReport;
  }

  async updated(
    id: number,
    updatedAccountReportDto: UpdatedAccountReportDto,
  ): Promise<AccountReport> {
    const accountReport = await this.accountReportRepository
      .createQueryBuilder('accountReport')
      .where('accountReport.id = :id', { id })
      .getOne();
    if (!accountReport) {
      throw new AccountReportNotFoundException();
    }
    Object.assign(accountReport, updatedAccountReportDto);
    return await this.accountReportRepository.save(accountReport);
  }

  async deleted(id: number): Promise<void> {
    const accountReport = await this.accountReportRepository
      .createQueryBuilder('accountReport')
      .where('accountReport.id = :id', { id })
      .getOne();
    if (!accountReport) {
      throw new AccountReportNotFoundException();
    }
    await this.accountReportRepository.softRemove(accountReport);
    console.log('accountReport Eliminado');
  }
}
