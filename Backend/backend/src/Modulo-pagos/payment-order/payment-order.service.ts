import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentOrder } from './entities/payment-order.entity';
import { Repository } from 'typeorm';
import { CreatedPaymentOrderDto } from './dto/created-payment-order.dto';
import { PaymentOrderNotFoundException } from './error/payment-order-not-found.exception';
import { UpdatedPaymentOrderDto } from './dto/updated-payment-order.dto';

@Injectable()
export class PaymentOrderService {
  constructor(
    @InjectRepository(PaymentOrder)
    private readonly paymentOrderRepository: Repository<PaymentOrder>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PaymentOrder[] | undefined> {
    const offset = (page - 1) * perPage;
    const paymentOrder = await this.paymentOrderRepository
      .createQueryBuilder('paymentOrder')
      .take(perPage)
      .skip(offset)
      .getMany();
    return paymentOrder;
  }

  async create(
    createdPaymentOrderDto: CreatedPaymentOrderDto,
  ): Promise<PaymentOrder> {
    const paymentOrder = new PaymentOrder(createdPaymentOrderDto);
    return await this.paymentOrderRepository.save(paymentOrder);
  }

  async findOne(id: number): Promise<PaymentOrder> {
    const paymentOrder = await this.paymentOrderRepository
      .createQueryBuilder('paymentOrder')
      .where('paymentOrder.id = :id', { id })
      .getOne();
    if (!paymentOrder) {
      throw new PaymentOrderNotFoundException();
    }
    return paymentOrder;
  }

  async updated(
    id: number,
    updatedPaymentOrderDto: UpdatedPaymentOrderDto,
  ): Promise<PaymentOrder> {
    const paymentOrder = await this.paymentOrderRepository
      .createQueryBuilder('paymentOrder')
      .where('paymentOrder.id = :id', { id })
      .getOne();
    if (!paymentOrder) {
      throw new PaymentOrderNotFoundException();
    }
    Object.assign(paymentOrder, updatedPaymentOrderDto);
    return await this.paymentOrderRepository.save(paymentOrder);
  }

  async deleted(id: number): Promise<void> {
    const paymentOrder = await this.paymentOrderRepository
      .createQueryBuilder('paymentOrder')
      .where('paymentOrder.id = :id', { id })
      .getOne();
    if (!paymentOrder) {
      throw new PaymentOrderNotFoundException();
    }
    await this.paymentOrderRepository.softRemove(paymentOrder);
    console.log('Payment Order Eliminado');
  }
}
