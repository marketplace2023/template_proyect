import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentTransaction } from './entities/payment-transaction.entity';
import { CreatePaymentTransactionDto } from './dto/create-payment-transaction.dto';
import { UpdatedPaymentTransactionDto } from './dto/updated-payment-transaction.dto';
import { PaymentTransactionNotFoundException } from './error/payment-transaction-not-found.exception';

@Injectable()
export class PaymentTransactionService {
  constructor(
    @InjectRepository(PaymentTransaction)
    private readonly paymentTransactionRepository: Repository<PaymentTransaction>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PaymentTransaction[] | undefined> {
    const offset = (page - 1) * perPage;
    const paymentTransaction = await this.paymentTransactionRepository
      .createQueryBuilder('paymentTransaction')
      .take(perPage)
      .skip(offset)
      .getMany();
    return paymentTransaction;
  }

  async create(
    createPaymentTransactionDto: CreatePaymentTransactionDto,
  ): Promise<PaymentTransaction> {
    const paymentTransaction = new PaymentTransaction(
      createPaymentTransactionDto,
    );
    return await this.paymentTransactionRepository.save(paymentTransaction);
  }

  async findOne(id: number): Promise<PaymentTransaction> {
    const paymentTransaction = await this.paymentTransactionRepository
      .createQueryBuilder('paymentTransaction')
      .where('paymentTransaction.id = :id', { id })
      .getOne();
    if (!paymentTransaction) {
      throw new PaymentTransactionNotFoundException();
    }
    return paymentTransaction;
  }

  async updated(
    id: number,
    updatedPaymentTransactionDto: UpdatedPaymentTransactionDto,
  ): Promise<PaymentTransaction> {
    const paymentTransaction = await this.paymentTransactionRepository
      .createQueryBuilder('paymentTransaction')
      .where('paymentTransaction.id = :id', { id })
      .getOne();
    if (!paymentTransaction) {
      throw new PaymentTransactionNotFoundException();
    }
    Object.assign(paymentTransaction, updatedPaymentTransactionDto);
    return await this.paymentTransactionRepository.save(paymentTransaction);
  }

  async deleted(id: number): Promise<void> {
    const paymentTransaction = await this.paymentTransactionRepository
      .createQueryBuilder('paymentTransaction')
      .where('paymentTransaction.id = :id', { id })
      .getOne();
    if (!paymentTransaction) {
      throw new PaymentTransactionNotFoundException();
    }
    await this.paymentTransactionRepository.softRemove(paymentTransaction);
    console.log('Payment Icon Eliminado');
  }
}
