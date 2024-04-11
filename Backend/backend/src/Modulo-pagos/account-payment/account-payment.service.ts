import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountPayment } from './entities/account-payment.entity';
import { AccountPaymentdNotFoundException } from './error/account-payment-not-found.exception';
import { CreateAccountPaymentDto } from './dto/create-account-payment.dto';
import { Repository } from 'typeorm';
import { UpdatedAccountPaymentDto } from './dto/updated-account-payment.dto';

@Injectable()
export class AccountPaymentService {
  constructor(
    @InjectRepository(AccountPayment)
    private readonly accountPaymentRepository: Repository<AccountPayment>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountPayment[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountPayment = await this.accountPaymentRepository
      .createQueryBuilder('accountPayment')
      .take(perPage)
      .skip(offset)
      .getMany();
    return accountPayment;
  }

  async create(
    createAccountPaymentDto: CreateAccountPaymentDto,
  ): Promise<AccountPayment> {
    const accountPayment = new AccountPayment(createAccountPaymentDto);
    return await this.accountPaymentRepository.save(accountPayment);
  }

  async findOne(id: number): Promise<AccountPayment> {
    const accountPayment = await this.accountPaymentRepository
      .createQueryBuilder('accountPayment')
      .where('accountPayment.id = :id', { id })
      .getOne();
    if (!accountPayment) {
      throw new AccountPaymentdNotFoundException();
    }
    return accountPayment;
  }

  async updated(
    id: number,
    updatedAccountPaymentDto: UpdatedAccountPaymentDto,
  ): Promise<AccountPayment> {
    const accountPayment = await this.accountPaymentRepository
      .createQueryBuilder('accountPayment')
      .where('accountPayment.id = :id', { id })
      .getOne();
    if (!accountPayment) {
      throw new AccountPaymentdNotFoundException();
    }
    Object.assign(accountPayment, updatedAccountPaymentDto);
    return await this.accountPaymentRepository.save(accountPayment);
  }

  async deleted(id: number): Promise<void> {
    const accountPayment = await this.accountPaymentRepository
      .createQueryBuilder('accountPayment')
      .where('accountPayment.id = :id', { id })
      .getOne();
    if (!accountPayment) {
      throw new AccountPaymentdNotFoundException();
    }
    await this.accountPaymentRepository.softRemove(accountPayment);
    console.log('Payment Icon Eliminado');
  }
}
