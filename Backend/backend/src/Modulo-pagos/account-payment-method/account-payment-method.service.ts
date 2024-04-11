import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountPaymentMethodNotFoundException } from './error/account-payment-method-not-found.exception';
import { UpdatedAccountPaymentMethodDto } from './dto/updated-account-payment-method.dto';
import { AccountPaymentMethod } from './entities/account-payment-method.entity';
import { CreateAccountPaymentMethodDto } from './dto/create-account-payment-method.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AccountPaymentMethodService {
  constructor(
    @InjectRepository(AccountPaymentMethod)
    private readonly accountPaymentMethodRepository: Repository<AccountPaymentMethod>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountPaymentMethod[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountPaymentMethod = await this.accountPaymentMethodRepository
      .createQueryBuilder('accountPaymentMethod')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountPaymentMethod;
  }

  async create(
    createAccountPaymentMethodDto: CreateAccountPaymentMethodDto,
  ): Promise<AccountPaymentMethod> {
    const accountPaymentMethod = new AccountPaymentMethod(
      createAccountPaymentMethodDto,
    );
    return await this.accountPaymentMethodRepository.save(accountPaymentMethod);
  }

  async findOne(id: number): Promise<AccountPaymentMethod> {
    const accountPaymentMethod = await this.accountPaymentMethodRepository
      .createQueryBuilder('accountPaymentMethod')
      .where('accountPaymentMethod.id = :id', { id })
      .getOne();
    if (!accountPaymentMethod) {
      throw new AccountPaymentMethodNotFoundException();
    }
    return accountPaymentMethod;
  }

  async updated(
    id: number,
    updatedAccountPaymentMethodDto: UpdatedAccountPaymentMethodDto,
  ): Promise<AccountPaymentMethod> {
    const accountPaymentMethod = await this.accountPaymentMethodRepository
      .createQueryBuilder('accountPaymentMethod')
      .where('accountPaymentMethod.id = :id', { id })
      .getOne();
    if (!accountPaymentMethod) {
      throw new AccountPaymentMethodNotFoundException();
    }
    Object.assign(accountPaymentMethod, updatedAccountPaymentMethodDto);
    return await this.accountPaymentMethodRepository.save(accountPaymentMethod);
  }

  async deleted(id: number): Promise<void> {
    const accountPaymentMethod = await this.accountPaymentMethodRepository
      .createQueryBuilder('accountPaymentMethod')
      .where('accountPaymentMethod.id = :id', { id })
      .getOne();
    if (!accountPaymentMethod) {
      throw new AccountPaymentMethodNotFoundException();
    }
    await this.accountPaymentMethodRepository.softRemove(accountPaymentMethod);
    console.log('Payment Icon Eliminado');
  }
}
