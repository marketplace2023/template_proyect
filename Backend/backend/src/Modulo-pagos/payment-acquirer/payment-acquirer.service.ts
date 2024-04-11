import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentAcquirer } from './entities/payment-acquirer.entity';
import { CreatedPaymentAcquirerDto } from './dto/created-payment-acquirer.dto';
import { PaymentAcquirerNotFoundException } from './error/payment-acquirer-not-found.exception';
import { UpdatedPaymentAcquirerDto } from './dto/updated-payment-acquirer.dto';

@Injectable()
export class PaymentAcquirerService {
  constructor(
    @InjectRepository(PaymentAcquirer)
    private readonly paymentAcquirerRepository: Repository<PaymentAcquirer>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PaymentAcquirer[] | undefined> {
    const offset = (page - 1) * perPage;
    const paymentAcquirer = await this.paymentAcquirerRepository
      .createQueryBuilder('paymentAcquirer')
      .take(perPage)
      .skip(offset)
      .getMany();
    return paymentAcquirer;
  }

  async create(
    createdPaymentAcquirerDto: CreatedPaymentAcquirerDto,
  ): Promise<PaymentAcquirer> {
    const paymentAcquirer = new PaymentAcquirer(createdPaymentAcquirerDto);
    return await this.paymentAcquirerRepository.save(paymentAcquirer);
  }

  async findOne(id: number): Promise<PaymentAcquirer> {
    const paymentAcquirer = await this.paymentAcquirerRepository
      .createQueryBuilder('paymentAcquirer')
      .where('paymentAcquirer.id = :id', { id })
      .getOne();
    if (!paymentAcquirer) {
      throw new PaymentAcquirerNotFoundException();
    }
    return paymentAcquirer;
  }

  async updated(
    id: number,
    updatedPaymentAcquirerDto: UpdatedPaymentAcquirerDto,
  ): Promise<PaymentAcquirer> {
    const paymentAcquirer = await this.paymentAcquirerRepository
      .createQueryBuilder('paymentAcquirer')
      .where('paymentAcquirer.id = :id', { id })
      .getOne();
    if (!paymentAcquirer) {
      throw new PaymentAcquirerNotFoundException();
    }
    Object.assign(paymentAcquirer, updatedPaymentAcquirerDto);
    return await this.paymentAcquirerRepository.save(paymentAcquirer);
  }

  async deleted(id: number): Promise<void> {
    const paymentAcquirer = await this.paymentAcquirerRepository
      .createQueryBuilder('paymentAcquirer')
      .where('paymentAcquirer.id = :id', { id })
      .getOne();
    if (!paymentAcquirer) {
      throw new PaymentAcquirerNotFoundException();
    }
    await this.paymentAcquirerRepository.softRemove(paymentAcquirer);
    console.log('Payment Acquirer Eliminado');
  }
}
