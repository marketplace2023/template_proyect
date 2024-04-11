import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountTax } from './entities/account-tax.entity';
import { Repository } from 'typeorm';
import { CreatedAccountTaxDto } from './dto/created-account-tax.dto';
import { AccountTaxNotFoundException } from './error/account-tax-not-found.exception';
import { UpdatedAccountTaxDto } from './dto/updated-account-tax.dto';

@Injectable()
export class AccountTaxService {
  constructor(
    @InjectRepository(AccountTax)
    private readonly accountTaxRepository: Repository<AccountTax>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountTax[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountTax = await this.accountTaxRepository
      .createQueryBuilder('accountTax')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountTax;
  }

  async create(
    createdAccountTaxDto: CreatedAccountTaxDto,
  ): Promise<AccountTax> {
    const accountTax = new AccountTax(createdAccountTaxDto);
    return await this.accountTaxRepository.save(accountTax);
  }

  async findOne(id: number): Promise<AccountTax> {
    const accountTax = await this.accountTaxRepository
      .createQueryBuilder('accountTax')
      .where('accountTax.id = :id', { id })
      .getOne();
    if (!accountTax) {
      throw new AccountTaxNotFoundException();
    }
    return accountTax;
  }

  async updated(
    id: number,
    updatedAccountTaxDto: UpdatedAccountTaxDto,
  ): Promise<AccountTax> {
    const accountTax = await this.accountTaxRepository
      .createQueryBuilder('accountTax')
      .where('accountTax.id = :id', { id })
      .getOne();
    if (!accountTax) {
      throw new AccountTaxNotFoundException();
    }
    Object.assign(accountTax, updatedAccountTaxDto);
    return await this.accountTaxRepository.save(accountTax);
  }

  async deleted(id: number): Promise<void> {
    const accountTax = await this.accountTaxRepository
      .createQueryBuilder('accountTax')
      .where('accountTax.id = :id', { id })
      .getOne();
    if (!accountTax) {
      throw new AccountTaxNotFoundException();
    }
    await this.accountTaxRepository.softRemove(accountTax);
    console.log('account Tax  Eliminado');
  }
}
