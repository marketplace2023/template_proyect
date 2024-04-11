import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountTaxSaleAdvancePaymentInvRel } from './entities/account-tax-sale-advance-payment-inv-rel.entity';
import { Repository } from 'typeorm';
import { CreatedAccountTaxSaleAdvancePaymentInvRelDto } from './dto/created-account-tax-sale-advance-payment-inv-rel.dto';
import { AccountTaxSaleAdvancePaymentInvRelNotFoundException } from './error/account-tax-sale-advance-payment-inv-rel-not-faound.exception';
import { UpdatedAccountTaxSaleAdvancePaymentInvRelDto } from './dto/updated-account-tax-sale-advance-payment-inv-rel.dto';

@Injectable()
export class AccountTaxSaleAdvancePaymentInvRelService {
  constructor(
    @InjectRepository(AccountTaxSaleAdvancePaymentInvRel)
    private readonly accountTaxSaleAdvancePaymentInvRelRepository: Repository<AccountTaxSaleAdvancePaymentInvRel>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountTaxSaleAdvancePaymentInvRel[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountTaxSaleAdvancePaymentInvRel =
      await this.accountTaxSaleAdvancePaymentInvRelRepository
        .createQueryBuilder('accountTaxSaleAdvancePaymentInvRel')
        .take(perPage)
        .skip(offset)
        .getMany();
    return accountTaxSaleAdvancePaymentInvRel;
  }

  async create(
    createAccountTaxSaleAdvancePaymentInvRelDto: CreatedAccountTaxSaleAdvancePaymentInvRelDto,
  ): Promise<AccountTaxSaleAdvancePaymentInvRel> {
    const accountTaxSaleAdvancePaymentInvRel =
      new AccountTaxSaleAdvancePaymentInvRel(
        createAccountTaxSaleAdvancePaymentInvRelDto,
      );
    return await this.accountTaxSaleAdvancePaymentInvRelRepository.save(
      accountTaxSaleAdvancePaymentInvRel,
    );
  }

  async findOne(id: number): Promise<AccountTaxSaleAdvancePaymentInvRel> {
    const accountTaxSaleAdvancePaymentInvRel =
      await this.accountTaxSaleAdvancePaymentInvRelRepository
        .createQueryBuilder('accountTaxSaleAdvancePaymentInvRel')
        .where('accountTaxSaleAdvancePaymentInvRel.id = :id', { id })
        .getOne();
    if (!accountTaxSaleAdvancePaymentInvRel) {
      throw new AccountTaxSaleAdvancePaymentInvRelNotFoundException();
    }
    return accountTaxSaleAdvancePaymentInvRel;
  }

  async updated(
    id: number,
    updatedAccountTaxSaleAdvancePaymentInvRelDto: UpdatedAccountTaxSaleAdvancePaymentInvRelDto,
  ): Promise<AccountTaxSaleAdvancePaymentInvRel> {
    const accountTaxSaleAdvancePaymentInvRel =
      await this.accountTaxSaleAdvancePaymentInvRelRepository
        .createQueryBuilder('accountTaxSaleAdvancePaymentInvRel')
        .where('accountTaxSaleAdvancePaymentInvRel.id = :id', { id })
        .getOne();
    if (!accountTaxSaleAdvancePaymentInvRel) {
      throw new AccountTaxSaleAdvancePaymentInvRelNotFoundException();
    }
    Object.assign(
      accountTaxSaleAdvancePaymentInvRel,
      updatedAccountTaxSaleAdvancePaymentInvRelDto,
    );
    return await this.accountTaxSaleAdvancePaymentInvRelRepository.save(
      accountTaxSaleAdvancePaymentInvRel,
    );
  }

  async deleted(id: number): Promise<void> {
    const accountTaxSaleAdvancePaymentInvRel =
      await this.accountTaxSaleAdvancePaymentInvRelRepository
        .createQueryBuilder('accountTaxSaleAdvancePaymentInvRel')
        .where('accountTaxSaleAdvancePaymentInvRel.id = :id', { id })
        .getOne();
    if (!accountTaxSaleAdvancePaymentInvRel) {
      throw new AccountTaxSaleAdvancePaymentInvRelNotFoundException();
    }
    await this.accountTaxSaleAdvancePaymentInvRelRepository.softRemove(
      accountTaxSaleAdvancePaymentInvRel,
    );
    console.log('account Tax Sale Advance Payment InvRel Eliminado');
  }
}
