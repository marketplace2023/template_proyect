import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountPaymentGroup } from './entities/account-payment-group.entity';
import { Repository } from 'typeorm';
import { CreatedAccountPaymentGroupDto } from './dto/created-account-payment-group.dto';
import { AccountPaymentGroupNotFoundException } from './error/account-payment-group-not-found.exception';
import { UpdatedAccountPaymentGroupDto } from './dto/updated-account-payment-group.dto';

@Injectable()
export class AccountPaymentGroupService {
  constructor(
    @InjectRepository(AccountPaymentGroup)
    private readonly accountPaymentGroupRepository: Repository<AccountPaymentGroup>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountPaymentGroup[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountPaymentGroup = await this.accountPaymentGroupRepository
      .createQueryBuilder('accountPaymentGroup')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountPaymentGroup;
  }

  async create(
    createAccountPaymentGroupDto: CreatedAccountPaymentGroupDto,
  ): Promise<AccountPaymentGroup> {
    const accountPaymentGroup = new AccountPaymentGroup(
      createAccountPaymentGroupDto,
    );
    return await this.accountPaymentGroupRepository.save(accountPaymentGroup);
  }

  async findOne(id: number): Promise<AccountPaymentGroup> {
    const accountPaymentGroup = await this.accountPaymentGroupRepository
      .createQueryBuilder('accountPaymentGroup')
      .where('accountPaymentGroup.id = :id', { id })
      .getOne();
    if (!accountPaymentGroup) {
      throw new AccountPaymentGroupNotFoundException();
    }
    return accountPaymentGroup;
  }

  async updated(
    id: number,
    updatedAccountPaymentGroupDto: UpdatedAccountPaymentGroupDto,
  ): Promise<AccountPaymentGroup> {
    const accountPaymentGroup = await this.accountPaymentGroupRepository
      .createQueryBuilder('accountPaymentGroup')
      .where('accountPaymentGroup.id = :id', { id })
      .getOne();
    if (!accountPaymentGroup) {
      throw new AccountPaymentGroupNotFoundException();
    }
    Object.assign(accountPaymentGroup, updatedAccountPaymentGroupDto);
    return await this.accountPaymentGroupRepository.save(accountPaymentGroup);
  }

  async deleted(id: number): Promise<void> {
    const accountPaymentGroup = await this.accountPaymentGroupRepository
      .createQueryBuilder('accountPaymentGroup')
      .where('accountPaymentGroup.id = :id', { id })
      .getOne();
    if (!accountPaymentGroup) {
      throw new AccountPaymentGroupNotFoundException();
    }
    await this.accountPaymentGroupRepository.softRemove(accountPaymentGroup);
    console.log('account Payment Group Icon Eliminado');
  }
}
