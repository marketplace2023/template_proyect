import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatedAccountMoveLineDto } from '../account-move-line/dto/created-account-move-line.dto';
import { UpdatedAccountMoveLineDto } from '../account-move-line/dto/updated-account-move-line.dto';
import { AccountMoveLine } from './entities/account-move-line.entity';
import { AccountMoveLineNotFoundException } from './error/account-move-line-not-found.exception';

@Injectable()
export class AccountMoveLineService {
  constructor(
    @InjectRepository(AccountMoveLine)
    private readonly accountMoveLineRepository: Repository<AccountMoveLine>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountMoveLine[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountMoveLine = await this.accountMoveLineRepository
      .createQueryBuilder('accountMoveLine')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountMoveLine;
  }

  async create(
    createAccountMoveLineDto: CreatedAccountMoveLineDto,
  ): Promise<AccountMoveLine> {
    const accountMoveLine = new AccountMoveLine(createAccountMoveLineDto);
    return await this.accountMoveLineRepository.save(accountMoveLine);
  }

  async findOne(id: number): Promise<AccountMoveLine> {
    const accountMoveLine = await this.accountMoveLineRepository
      .createQueryBuilder('accountMoveLine')
      .where('accountMoveLine.id = :id', { id })
      .getOne();
    if (!accountMoveLine) {
      throw new AccountMoveLineNotFoundException();
    }
    return accountMoveLine;
  }

  async updated(
    id: number,
    updatedAccountMoveLineDto: UpdatedAccountMoveLineDto,
  ): Promise<AccountMoveLine> {
    const accountMoveLine = await this.accountMoveLineRepository
      .createQueryBuilder('accountMoveLine')
      .where('accountMoveLine.id = :id', { id })
      .getOne();
    if (!accountMoveLine) {
      throw new AccountMoveLineNotFoundException();
    }
    Object.assign(accountMoveLine, updatedAccountMoveLineDto);
    return await this.accountMoveLineRepository.save(accountMoveLine);
  }

  async deleted(id: number): Promise<void> {
    const accountMoveLine = await this.accountMoveLineRepository
      .createQueryBuilder('accountMoveLine')
      .where('accountMoveLine.id = :id', { id })
      .getOne();
    if (!accountMoveLine) {
      throw new AccountMoveLineNotFoundException();
    }
    await this.accountMoveLineRepository.softRemove(accountMoveLine);
    console.log('account Journal Icon Eliminado');
  }
}
