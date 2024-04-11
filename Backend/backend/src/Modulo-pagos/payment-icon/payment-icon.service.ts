import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentIconNotFoundException } from './error/payment-icon-not-found.exception';
import { PaymentIcon } from './entities/payment-icon.entity';
import { Repository } from 'typeorm';
import { CreatePaymentIconDto } from './dto/create-payment-icon.dto';
import { UpdatedPaymentIconDto } from './dto/updated-payment-icon.dto';

@Injectable()
export class PaymentIconService {
  constructor(
    @InjectRepository(PaymentIcon)
    private readonly paymentIconRepository: Repository<PaymentIcon>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PaymentIcon[] | undefined> {
    const offset = (page - 1) * perPage;
    const paymentIcon = await this.paymentIconRepository
      .createQueryBuilder('paymentIcon')
      .take(perPage)
      .skip(offset)
      .getMany();
    return paymentIcon;
  }

  async create(
    createPaymentIconDto: CreatePaymentIconDto,
  ): Promise<PaymentIcon> {
    const paymentIcon = new PaymentIcon(createPaymentIconDto);
    return await this.paymentIconRepository.save(paymentIcon);
  }

  async findOne(id: number): Promise<PaymentIcon> {
    const paymentIcon = await this.paymentIconRepository
      .createQueryBuilder('paymentIcon')
      .where('paymentIcon.id = :id', { id })
      .getOne();
    if (!paymentIcon) {
      throw new PaymentIconNotFoundException();
    }
    return paymentIcon;
  }

  async updated(
    id: number,
    updatedPaymentIconDto: UpdatedPaymentIconDto,
  ): Promise<PaymentIcon> {
    const paymentIcon = await this.paymentIconRepository
      .createQueryBuilder('paymentIcon')
      .where('paymentIcon.id = :id', { id })
      .getOne();
    if (!paymentIcon) {
      throw new PaymentIconNotFoundException();
    }
    Object.assign(paymentIcon, updatedPaymentIconDto);
    return await this.paymentIconRepository.save(paymentIcon);
  }

  async deleted(id: number): Promise<void> {
    const paymentIcon = await this.paymentIconRepository
      .createQueryBuilder('paymentIcon')
      .where('paymentIcon.id = :id', { id })
      .getOne();
    if (!paymentIcon) {
      throw new PaymentIconNotFoundException();
    }
    await this.paymentIconRepository.softRemove(paymentIcon);
    console.log('Payment Icon Eliminado');
  }
}
