import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountBankStatement } from './entities/account-bank-statement.entity';
import { Repository } from 'typeorm';
import { CreatedAccountBankStatementDto } from './dto/created-account-bank-statement.dto';
import { AccountBankStatementNotFoundException } from './error/account-bank-statement-not-found.exception';
import { UpdatedAccountBankStatementDto } from './dto/updated-account-bank-statement.dto';

@Injectable()
export class AccountBankStatementService {
  constructor(
    @InjectRepository(AccountBankStatement)
    private readonly accountBankStatementRepository: Repository<AccountBankStatement>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountBankStatement[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountBankStatement = await this.accountBankStatementRepository
      .createQueryBuilder('accountBankStatement')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountBankStatement;
  }

  async create(
    createAccountBankStatementDto: CreatedAccountBankStatementDto,
  ): Promise<AccountBankStatement> {
    const accountBankStatement = new AccountBankStatement(
      createAccountBankStatementDto,
    );
    return await this.accountBankStatementRepository.save(accountBankStatement);
  }

  async findOne(id: number): Promise<AccountBankStatement> {
    const accountBankStatement = await this.accountBankStatementRepository
      .createQueryBuilder('accountBankStatement')
      .where('accountBankStatement.id = :id', { id })
      .getOne();
    if (!accountBankStatement) {
      throw new AccountBankStatementNotFoundException();
    }
    return accountBankStatement;
  }

  async updated(
    id: number,
    updatedAccountBankStatementDto: UpdatedAccountBankStatementDto,
  ): Promise<AccountBankStatement> {
    const accountBankStatement = await this.accountBankStatementRepository
      .createQueryBuilder('accountBankStatement')
      .where('accountBankStatement.id = :id', { id })
      .getOne();
    if (!accountBankStatement) {
      throw new AccountBankStatementNotFoundException();
    }
    Object.assign(accountBankStatement, updatedAccountBankStatementDto);
    return await this.accountBankStatementRepository.save(accountBankStatement);
  }

  async deleted(id: number): Promise<void> {
    const accountBankStatement = await this.accountBankStatementRepository
      .createQueryBuilder('accountBankStatement')
      .where('accountBankStatement.id = :id', { id })
      .getOne();
    if (!accountBankStatement) {
      throw new AccountBankStatementNotFoundException();
    }
    await this.accountBankStatementRepository.softRemove(accountBankStatement);
    console.log('Payment Icon Eliminado');
  }
}
