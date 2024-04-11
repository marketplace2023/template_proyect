import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentMethodNotFoundException } from './error/payment-method-not-found.exception';
import { PaymentMethod } from './entities/payment-method.entity';
import { Repository } from 'typeorm';
import { CreatedPaymentMethodDto } from './dto/created-payment-method.dto';
import { UpdatedPaymentMethodDto } from './dto/updated-payment-method.dto';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectRepository(PaymentMethod)
    private readonly paymentMethodRepository: Repository<PaymentMethod>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PaymentMethod[] | undefined> {
    const offset = (page - 1) * perPage;
    const paymentMethod = await this.paymentMethodRepository
      .createQueryBuilder('paymentMethod')
      .take(perPage)
      .skip(offset)
      .getMany();
    return paymentMethod;
  }

  async create(
    createdPaymentMethodDto: CreatedPaymentMethodDto,
  ): Promise<PaymentMethod> {
    const paymentMethod = new PaymentMethod(createdPaymentMethodDto);
    return await this.paymentMethodRepository.save(paymentMethod);
  }

  async findOne(id: number): Promise<PaymentMethod> {
    const paymentMethod = await this.paymentMethodRepository
      .createQueryBuilder('paymentMethod')
      .where('paymentMethod.id = :id', { id })
      .getOne();
    if (!paymentMethod) {
      throw new PaymentMethodNotFoundException();
    }
    return paymentMethod;
  }

  async updated(
    id: number,
    updatedPaymentMethodDto: UpdatedPaymentMethodDto,
  ): Promise<PaymentMethod> {
    const paymentMethod = await this.paymentMethodRepository
      .createQueryBuilder('paymentMethod')
      .where('paymentMethod.id = :id', { id })
      .getOne();
    if (!paymentMethod) {
      throw new PaymentMethodNotFoundException();
    }
    Object.assign(paymentMethod, updatedPaymentMethodDto);
    return await this.paymentMethodRepository.save(paymentMethod);
  }

  async deleted(id: number): Promise<void> {
    const paymentMethod = await this.paymentMethodRepository
      .createQueryBuilder('paymentMethod')
      .where('paymentMethod.id = :id', { id })
      .getOne();
    if (!paymentMethod) {
      throw new PaymentMethodNotFoundException();
    }
    await this.paymentMethodRepository.softRemove(paymentMethod);
    console.log('Payment Method Eliminado');
  }
}
