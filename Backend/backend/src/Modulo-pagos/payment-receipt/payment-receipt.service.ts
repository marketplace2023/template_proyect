import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentReceipt } from './entities/payment-receipt.entity';
import { Repository } from 'typeorm';
import { CreatedPaymentReceiptDto } from './dto/created-payment-receipt.dto';
import { PaymentReceiptNotFoundException } from './error/payment-receipt-not-found.exception';
import { UpdatedPaymentReceiptDto } from './dto/updated-payment-receipt.dto';

@Injectable()
export class PaymentReceiptService {
  constructor(
    @InjectRepository(PaymentReceipt)
    private readonly paymentReceiptRepository: Repository<PaymentReceipt>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PaymentReceipt[] | undefined> {
    const offset = (page - 1) * perPage;
    const paymentReceipt = await this.paymentReceiptRepository
      .createQueryBuilder('paymentReceipt')
      .take(perPage)
      .skip(offset)
      .getMany();
    return paymentReceipt;
  }

  async create(
    createdPaymentReceiptDto: CreatedPaymentReceiptDto,
  ): Promise<PaymentReceipt> {
    const paymentReceipt = new PaymentReceipt(createdPaymentReceiptDto);
    return await this.paymentReceiptRepository.save(paymentReceipt);
  }

  async findOne(id: number): Promise<PaymentReceipt> {
    const paymentReceipt = await this.paymentReceiptRepository
      .createQueryBuilder('paymentReceipt')
      .where('paymentReceipt.id = :id', { id })
      .getOne();
    if (!paymentReceipt) {
      throw new PaymentReceiptNotFoundException();
    }
    return paymentReceipt;
  }

  async updated(
    id: number,
    updatedPaymentReceiptDto: UpdatedPaymentReceiptDto,
  ): Promise<PaymentReceipt> {
    const paymentReceipt = await this.paymentReceiptRepository
      .createQueryBuilder('paymentReceipt')
      .where('paymentReceipt.id = :id', { id })
      .getOne();
    if (!paymentReceipt) {
      throw new PaymentReceiptNotFoundException();
    }
    Object.assign(paymentReceipt, updatedPaymentReceiptDto);
    return await this.paymentReceiptRepository.save(paymentReceipt);
  }

  async deleted(id: number): Promise<void> {
    const paymentReceipt = await this.paymentReceiptRepository
      .createQueryBuilder('paymentReceipt')
      .where('paymentReceipt.id = :id', { id })
      .getOne();
    if (!paymentReceipt) {
      throw new PaymentReceiptNotFoundException();
    }
    await this.paymentReceiptRepository.softRemove(paymentReceipt);
    console.log('payment Receipt Eliminado');
  }
}
