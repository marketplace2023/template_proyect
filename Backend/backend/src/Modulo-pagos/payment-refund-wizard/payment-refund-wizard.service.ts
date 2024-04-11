import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentRefundWizardNotFoundException } from './error/payment-refund-wizard-not-found.exception';
import { PaymentRefundWizard } from './entities/payment-refund-wizard.entity';
import { UpdatedPaymentRefundWizardDto } from './dto/updated-payment-refund-wizard.dto';
import { CreatePaymentRefundWizardDto } from './dto/create-payment-refund-wizard.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentRefundWizardService {
  constructor(
    @InjectRepository(PaymentRefundWizard)
    private readonly paymentRefundWizardRepository: Repository<PaymentRefundWizard>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PaymentRefundWizard[] | undefined> {
    const offset = (page - 1) * perPage;
    const paymentRefundWizard = await this.paymentRefundWizardRepository
      .createQueryBuilder('paymentRefundWizard')
      .take(perPage)
      .skip(offset)
      .getMany();
    return paymentRefundWizard;
  }

  async create(
    createPaymentRefundWizardDto: CreatePaymentRefundWizardDto,
  ): Promise<PaymentRefundWizard> {
    const paymentRefundWizard = new PaymentRefundWizard(
      createPaymentRefundWizardDto,
    );
    return await this.paymentRefundWizardRepository.save(paymentRefundWizard);
  }

  async findOne(id: number): Promise<PaymentRefundWizard> {
    const paymentRefundWizard = await this.paymentRefundWizardRepository
      .createQueryBuilder('paymentRefundWizard')
      .where('paymentRefundWizard.id = :id', { id })
      .getOne();
    if (!paymentRefundWizard) {
      throw new PaymentRefundWizardNotFoundException();
    }
    return paymentRefundWizard;
  }

  async updated(
    id: number,
    updatedPaymentRefundWizardDto: UpdatedPaymentRefundWizardDto,
  ): Promise<PaymentRefundWizard> {
    const paymentRefundWizard = await this.paymentRefundWizardRepository
      .createQueryBuilder('paymentRefundWizard')
      .where('paymentRefundWizard.id = :id', { id })
      .getOne();
    if (!paymentRefundWizard) {
      throw new PaymentRefundWizardNotFoundException();
    }
    Object.assign(paymentRefundWizard, updatedPaymentRefundWizardDto);
    return await this.paymentRefundWizardRepository.save(paymentRefundWizard);
  }

  async deleted(id: number): Promise<void> {
    const paymentRefundWizard = await this.paymentRefundWizardRepository
      .createQueryBuilder('paymentRefundWizard')
      .where('paymentRefundWizard.id = :id', { id })
      .getOne();
    if (!paymentRefundWizard) {
      throw new PaymentRefundWizardNotFoundException();
    }
    await this.paymentRefundWizardRepository.softRemove(paymentRefundWizard);
    console.log('Payment Icon Eliminado');
  }
}
