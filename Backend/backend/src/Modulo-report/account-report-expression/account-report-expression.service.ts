import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountReportExpression } from './entities/account-report-expression.entity';
import { CreateAccountReportExpressionDto } from './dto/create-account-report-expression.dto';
import { UpdatedAccountReportExpressionDto } from './dto/updated-account-report-expression.dto';
import { AccountReportExpressionNotFoundException } from './error/account-report-collumn-not-found.exception';
import { Repository } from 'typeorm';

@Injectable()
export class AccountReportExpressionService {
  constructor(
    @InjectRepository(AccountReportExpression)
    private readonly accountReportExpressionRepository: Repository<AccountReportExpression>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountReportExpression[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountReportExpression = await this.accountReportExpressionRepository
      .createQueryBuilder('accountReportExpression')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountReportExpression;
  }

  async create(
    createAccountReportExpressionDto: CreateAccountReportExpressionDto,
  ): Promise<AccountReportExpression> {
    const accountReportExpression = new AccountReportExpression(
      createAccountReportExpressionDto,
    );
    return await this.accountReportExpressionRepository.save(
      accountReportExpression,
    );
  }

  async findOne(id: number): Promise<AccountReportExpression> {
    const accountReportExpression = await this.accountReportExpressionRepository
      .createQueryBuilder('accountReportExpression')
      .where('accountReportExpression.id = :id', { id })
      .getOne();
    if (!accountReportExpression) {
      throw new AccountReportExpressionNotFoundException();
    }
    return accountReportExpression;
  }

  async updated(
    id: number,
    updatedAccountReportExpressionDto: UpdatedAccountReportExpressionDto,
  ): Promise<AccountReportExpression> {
    const accountReportExpression = await this.accountReportExpressionRepository
      .createQueryBuilder('accountReportExpression')
      .where('accountReportExpression.id = :id', { id })
      .getOne();
    if (!accountReportExpression) {
      throw new AccountReportExpressionNotFoundException();
    }
    Object.assign(accountReportExpression, updatedAccountReportExpressionDto);
    return await this.accountReportExpressionRepository.save(
      accountReportExpression,
    );
  }

  async deleted(id: number): Promise<void> {
    const accountReportExpression = await this.accountReportExpressionRepository
      .createQueryBuilder('accountReportExpression')
      .where('accountReportExpression.id = :id', { id })
      .getOne();
    if (!accountReportExpression) {
      throw new AccountReportExpressionNotFoundException();
    }
    await this.accountReportExpressionRepository.softRemove(
      accountReportExpression,
    );
    console.log('account Report column Eliminado');
  }
}
