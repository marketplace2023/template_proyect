import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountReportExternalValueNotFoundException } from './error/account-report-external-value-not-found.exception';
import { AccountReportExternalValue } from './entities/account-report-external-value.entity';
import { UpdatedAccountReportExternalValueDto } from './dto/updated-account-report-external-value.dto';
import { CreateAccountReportExternalValueDto } from './dto/create-account-report-external-value.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AccountReportExternalValueService {
  constructor(
    @InjectRepository(AccountReportExternalValue)
    private readonly accountReportExternalValueRepository: Repository<AccountReportExternalValue>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountReportExternalValue[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountReportExternalValue =
      await this.accountReportExternalValueRepository
        .createQueryBuilder('accountReportExternalValue')
        .take(perPage)
        .skip(offset)
        .getMany();
    return accountReportExternalValue;
  }

  async create(
    createAccountReportExternalValueDto: CreateAccountReportExternalValueDto,
  ): Promise<AccountReportExternalValue> {
    const accountReportExternalValue = new AccountReportExternalValue(
      createAccountReportExternalValueDto,
    );
    return await this.accountReportExternalValueRepository.save(
      accountReportExternalValue,
    );
  }

  async findOne(id: number): Promise<AccountReportExternalValue> {
    const accountReportExternalValue =
      await this.accountReportExternalValueRepository
        .createQueryBuilder('accountReportExternalValue')
        .where('accountReportExternalValue.id = :id', { id })
        .getOne();
    if (!accountReportExternalValue) {
      throw new AccountReportExternalValueNotFoundException();
    }
    return accountReportExternalValue;
  }

  async updated(
    id: number,
    updatedAccountReportExternalValueDto: UpdatedAccountReportExternalValueDto,
  ): Promise<AccountReportExternalValue> {
    const accountReportExternalValue =
      await this.accountReportExternalValueRepository
        .createQueryBuilder('accountReportExternalValue')
        .where('accountReportExternalValue.id = :id', { id })
        .getOne();
    if (!accountReportExternalValue) {
      throw new AccountReportExternalValueNotFoundException();
    }
    Object.assign(
      accountReportExternalValue,
      updatedAccountReportExternalValueDto,
    );
    return await this.accountReportExternalValueRepository.save(
      accountReportExternalValue,
    );
  }

  async deleted(id: number): Promise<void> {
    const accountReportExternalValue =
      await this.accountReportExternalValueRepository
        .createQueryBuilder('accountReportExternalValue')
        .where('accountReportExternalValue.id = :id', { id })
        .getOne();
    if (!accountReportExternalValue) {
      throw new AccountReportExternalValueNotFoundException();
    }
    await this.accountReportExternalValueRepository.softRemove(
      accountReportExternalValue,
    );
    console.log('account Report column Eliminado');
  }
}
