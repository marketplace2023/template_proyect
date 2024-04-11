import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentTerm } from './entities/payment-term.entity';
import { Repository } from 'typeorm';
import { CreatedPaymentTermDto } from './dto/created-payment-term.dto';
import { UpdatedPaymentTermDto } from './dto/updated-payment-term.dto';
import { PaymentTermNotFoundException } from './error/payment-term-not-found.exception';

@Injectable()
export class PaymentTermService {
  constructor(
    @InjectRepository(PaymentTerm)
    private readonly paymentTermRepository: Repository<PaymentTerm>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PaymentTerm[] | undefined> {
    const offset = (page - 1) * perPage;
    const paymentTerm = await this.paymentTermRepository
      .createQueryBuilder('paymentTerm')
      .take(perPage)
      .skip(offset)
      .getMany();
    return paymentTerm;
  }

  async create(
    createdPaymentTermDto: CreatedPaymentTermDto,
  ): Promise<PaymentTerm> {
    const paymentTerm = new PaymentTerm(createdPaymentTermDto);
    return await this.paymentTermRepository.save(paymentTerm);
  }

  async findOne(id: number): Promise<PaymentTerm> {
    const paymentTerm = await this.paymentTermRepository
      .createQueryBuilder('paymentTerm')
      .where('paymentTerm.id = :id', { id })
      .getOne();
    if (!paymentTerm) {
      throw new PaymentTermNotFoundException();
    }
    return paymentTerm;
  }

  async updated(
    id: number,
    updatedPaymentTermDto: UpdatedPaymentTermDto,
  ): Promise<PaymentTerm> {
    const paymentTerm = await this.paymentTermRepository
      .createQueryBuilder('paymentTerm')
      .where('paymentTerm.id = :id', { id })
      .getOne();
    if (!paymentTerm) {
      throw new PaymentTermNotFoundException();
    }
    Object.assign(paymentTerm, updatedPaymentTermDto);
    return await this.paymentTermRepository.save(paymentTerm);
  }

  async deleted(id: number): Promise<void> {
    const paymentTerm = await this.paymentTermRepository
      .createQueryBuilder('paymentTerm')
      .where('paymentTerm.id = :id', { id })
      .getOne();
    if (!paymentTerm) {
      throw new PaymentTermNotFoundException();
    }
    await this.paymentTermRepository.softRemove(paymentTerm);
    console.log('account Payment Group Icon Eliminado');
  }
}
