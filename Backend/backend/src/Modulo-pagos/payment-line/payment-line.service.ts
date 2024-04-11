import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentLine } from './entities/payment-line.entity';
import { Repository } from 'typeorm';
import { CreatedPaymentLineDto } from './dto/created-payment-line.dto';
import { PaymentLineNotFoundException } from './error/payment-line-not-found.exception';
import { UpdatedPaymentLineDto } from './dto/updated-payment-line.dto';

@Injectable()
export class PaymentLineService {
  constructor(
    @InjectRepository(PaymentLine)
    private readonly paymentLineRepository: Repository<PaymentLine>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PaymentLine[] | undefined> {
    const offset = (page - 1) * perPage;
    const paymentLine = await this.paymentLineRepository
      .createQueryBuilder('paymentLine')
      .take(perPage)
      .skip(offset)
      .getMany();
    return paymentLine;
  }

  async create(
    createdPaymentLineDto: CreatedPaymentLineDto,
  ): Promise<PaymentLine> {
    const paymentLine = new PaymentLine(createdPaymentLineDto);
    return await this.paymentLineRepository.save(paymentLine);
  }

  async findOne(id: number): Promise<PaymentLine> {
    const paymentLine = await this.paymentLineRepository
      .createQueryBuilder('paymentLine')
      .where('paymentLine.id = :id', { id })
      .getOne();
    if (!paymentLine) {
      throw new PaymentLineNotFoundException();
    }
    return paymentLine;
  }

  async updated(
    id: number,
    updatedPaymentLineDto: UpdatedPaymentLineDto,
  ): Promise<PaymentLine> {
    const paymentLine = await this.paymentLineRepository
      .createQueryBuilder('paymentLine')
      .where('paymentLine.id = :id', { id })
      .getOne();
    if (!paymentLine) {
      throw new PaymentLineNotFoundException();
    }
    Object.assign(paymentLine, updatedPaymentLineDto);
    return await this.paymentLineRepository.save(paymentLine);
  }

  async deleted(id: number): Promise<void> {
    const paymentLine = await this.paymentLineRepository
      .createQueryBuilder('paymentLine')
      .where('paymentLine.id = :id', { id })
      .getOne();
    if (!paymentLine) {
      throw new PaymentLineNotFoundException();
    }
    await this.paymentLineRepository.softRemove(paymentLine);
    console.log('Payment Line Eliminado');
  }
}
