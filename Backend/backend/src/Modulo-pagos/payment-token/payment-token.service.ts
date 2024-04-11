import { Injectable } from '@nestjs/common';
import { PaymentToken } from './entities/payment-token.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePaymentTokenDto } from './dto/create-payment-token.dto';
import { PaymentTokenNotFoundException } from './error/payment-token-not-found.exception';
import { UpdatedPaymentTokenDto } from './dto/updated-payment-token.dto';

@Injectable()
export class PaymentTokenService {
  constructor(
    @InjectRepository(PaymentToken)
    private readonly paymentTokenRepository: Repository<PaymentToken>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PaymentToken[] | undefined> {
    const offset = (page - 1) * perPage;
    const paymentToken = await this.paymentTokenRepository
      .createQueryBuilder('paymentToken')
      .take(perPage)
      .skip(offset)
      .getMany();
    return paymentToken;
  }

  async create(
    createPaymentTokenDto: CreatePaymentTokenDto,
  ): Promise<PaymentToken> {
    const paymentToken = new PaymentToken(createPaymentTokenDto);
    return await this.paymentTokenRepository.save(paymentToken);
  }

  async findOne(id: number): Promise<PaymentToken> {
    const paymentToken = await this.paymentTokenRepository
      .createQueryBuilder('paymentToken')
      .where('paymentToken.id = :id', { id })
      .getOne();
    if (!paymentToken) {
      throw new PaymentTokenNotFoundException();
    }
    return paymentToken;
  }

  async updated(
    id: number,
    updatedPaymentTokenDto: UpdatedPaymentTokenDto,
  ): Promise<PaymentToken> {
    const paymentToken = await this.paymentTokenRepository
      .createQueryBuilder('paymentToken')
      .where('paymentToken.id = :id', { id })
      .getOne();
    if (!paymentToken) {
      throw new PaymentTokenNotFoundException();
    }
    Object.assign(paymentToken, updatedPaymentTokenDto);
    return await this.paymentTokenRepository.save(paymentToken);
  }

  async deleted(id: number): Promise<void> {
    const paymentToken = await this.paymentTokenRepository
      .createQueryBuilder('paymentToken')
      .where('paymentToken.id = :id', { id })
      .getOne();
    if (!paymentToken) {
      throw new PaymentTokenNotFoundException();
    }
    await this.paymentTokenRepository.softRemove(paymentToken);
    console.log('Payment Icon Eliminado');
  }
}
