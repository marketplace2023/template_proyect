import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentProvider } from './entities/payment-provider.entity';
import { Repository } from 'typeorm';
import { CreatePaymentProviderDto } from './dto/create-payment-provider.dto';
import { PaymentProviderOnboardingWizardNotFoundException } from '../payment-provider-onboarding-wizard/error/payment-provider-onboarding-wizard-not-found.exception';
import { UpdatedPaymentProviderDto } from './dto/updated-payment-provider.dto';
import { PaymentProviderNotFoundException } from './error/payment-provider-not-found.exception';

@Injectable()
export class PaymentProviderService {
  constructor(
    @InjectRepository(PaymentProvider)
    private readonly paymentProviderRepository: Repository<PaymentProvider>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PaymentProvider[] | undefined> {
    const offset = (page - 1) * perPage;
    const paymentProvider = await this.paymentProviderRepository
      .createQueryBuilder('paymentProvider')
      .take(perPage)
      .skip(offset)
      .getMany();
    return paymentProvider;
  }

  async create(
    createPaymentProviderDto: CreatePaymentProviderDto,
  ): Promise<PaymentProvider> {
    const paymentProvider = new PaymentProvider(createPaymentProviderDto);
    return await this.paymentProviderRepository.save(paymentProvider);
  }

  async findOne(id: number): Promise<PaymentProvider> {
    const paymentProvider = await this.paymentProviderRepository
      .createQueryBuilder('paymentProvider')
      .where('paymentProvider.id = :id', { id })
      .getOne();
    if (!paymentProvider) {
      throw new PaymentProviderOnboardingWizardNotFoundException();
    }
    return paymentProvider;
  }

  async updated(
    id: number,
    updatedPaymentProviderDto: UpdatedPaymentProviderDto,
  ): Promise<PaymentProvider> {
    const paymentProvider = await this.paymentProviderRepository
      .createQueryBuilder('paymentProvider')
      .where('paymentProvider.id = :id', { id })
      .getOne();
    if (!paymentProvider) {
      throw new PaymentProviderNotFoundException();
    }
    Object.assign(paymentProvider, updatedPaymentProviderDto);
    return await this.paymentProviderRepository.save(paymentProvider);
  }

  async deleted(id: number): Promise<void> {
    const paymentProvider = await this.paymentProviderRepository
      .createQueryBuilder('paymentProvider')
      .where('paymentProvider.id = :id', { id })
      .getOne();
    if (!paymentProvider) {
      throw new PaymentProviderNotFoundException();
    }
    await this.paymentProviderRepository.softRemove(paymentProvider);
    console.log('Payment Icon Eliminado');
  }
}
