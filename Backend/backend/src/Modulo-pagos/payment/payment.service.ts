import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { CreatedPaymentDto } from './dto/created-payment.dto';
import { PaymentNotFoundException } from './error/payment-not-found.exception';
import { UpdatedPaymentDto } from './dto/updated-payment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<Payment[] | undefined> {
    const offset = (page - 1) * perPage;
    const payment = await this.paymentRepository
      .createQueryBuilder('payment')
      .take(perPage)
      .skip(offset)
      .getMany();
    return payment;
  }

  async create(createdPaymentDto: CreatedPaymentDto): Promise<Payment> {
    const payment = new Payment(createdPaymentDto);
    return await this.paymentRepository.save(payment);
  }

  async findOne(id: number): Promise<Payment> {
    const payment = await this.paymentRepository
      .createQueryBuilder('payment')
      .where('payment.id = :id', { id })
      .getOne();
    if (!payment) {
      throw new PaymentNotFoundException();
    }
    return payment;
  }

  async updated(
    id: number,
    updatedPaymentDto: UpdatedPaymentDto,
  ): Promise<Payment> {
    const payment = await this.paymentRepository
      .createQueryBuilder('payment')
      .where('payment.id = :id', { id })
      .getOne();
    if (!payment) {
      throw new PaymentNotFoundException();
    }
    Object.assign(payment, updatedPaymentDto);
    return await this.paymentRepository.save(payment);
  }

  async deleted(id: number): Promise<void> {
    const payment = await this.paymentRepository
      .createQueryBuilder('payment')
      .where('payment.id = :id', { id })
      .getOne();
    if (!payment) {
      throw new PaymentNotFoundException();
    }
    await this.paymentRepository.softRemove(payment);
    console.log('Payment  Eliminado');
  }
}
