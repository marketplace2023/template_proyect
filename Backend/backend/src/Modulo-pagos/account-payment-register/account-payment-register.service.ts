import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountPaymentRegisterNotFoundException } from './error/account-payment-register-not-found.exception';
import { UpdatedAccountPaymentRegisterDto } from './dto/updated-account-payment-register.dto';
import { CreateAccountPaymentRegisterDto } from './dto/create-account-payment-register.dto';
import { Repository } from 'typeorm';
import { AccountPaymentRegister } from './entities/account-payment-register.entity';

@Injectable()
export class AccountPaymentRegisterService {
  constructor(
    @InjectRepository(AccountPaymentRegister)
    private readonly accountPaymentRegisterRepository: Repository<AccountPaymentRegister>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountPaymentRegister[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountPaymentRegister = await this.accountPaymentRegisterRepository
      .createQueryBuilder('accountPaymentRegister')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountPaymentRegister;
  }

  async create(
    createAccountPaymentRegisterDto: CreateAccountPaymentRegisterDto,
  ): Promise<AccountPaymentRegister> {
    const accountPaymentRegister = new AccountPaymentRegister(
      createAccountPaymentRegisterDto,
    );
    return await this.accountPaymentRegisterRepository.save(
      accountPaymentRegister,
    );
  }

  async findOne(id: number): Promise<AccountPaymentRegister> {
    const accountPaymentRegister = await this.accountPaymentRegisterRepository
      .createQueryBuilder('accountPaymentRegister')
      .where('accountPaymentRegister.id = :id', { id })
      .getOne();
    if (!accountPaymentRegister) {
      throw new AccountPaymentRegisterNotFoundException();
    }
    return accountPaymentRegister;
  }

  async updated(
    id: number,
    updatedAccountPaymentRegisterDto: UpdatedAccountPaymentRegisterDto,
  ): Promise<AccountPaymentRegister> {
    const accountPaymentRegister = await this.accountPaymentRegisterRepository
      .createQueryBuilder('accountPaymentRegister')
      .where('accountPaymentRegister.id = :id', { id })
      .getOne();
    if (!accountPaymentRegister) {
      throw new AccountPaymentRegisterNotFoundException();
    }
    Object.assign(accountPaymentRegister, updatedAccountPaymentRegisterDto);
    return await this.accountPaymentRegisterRepository.save(
      accountPaymentRegister,
    );
  }

  async deleted(id: number): Promise<void> {
    const accountPaymentRegister = await this.accountPaymentRegisterRepository
      .createQueryBuilder('accountPaymentRegister')
      .where('accountPaymentRegister.id = :id', { id })
      .getOne();
    if (!accountPaymentRegister) {
      throw new AccountPaymentRegisterNotFoundException();
    }
    await this.accountPaymentRegisterRepository.softRemove(
      accountPaymentRegister,
    );
    console.log('Payment Register Eliminado');
  }
}
