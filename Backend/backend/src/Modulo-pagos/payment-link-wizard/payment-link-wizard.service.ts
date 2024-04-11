import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentLinkWizardNotFoundException } from './error/payment-link-wizard-not-found.exception';
import { PaymentLinkWizard } from './entities/payment-link-wizard.entity';
import { UpdatedPaymentLinkWizardDto } from './dto/updated-payment-link-wizard.dto';
import { CreatePaymentLinkWizardDto } from './dto/create-payment-link-wizard.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentLinkWizardService {
  constructor(
    @InjectRepository(PaymentLinkWizard)
    private readonly paymentLinkWizardRepository: Repository<PaymentLinkWizard>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PaymentLinkWizard[] | undefined> {
    const offset = (page - 1) * perPage;
    const paymentLinkWizard = await this.paymentLinkWizardRepository
      .createQueryBuilder('paymentLinkWizard')
      .take(perPage)
      .skip(offset)
      .getMany();
    return paymentLinkWizard;
  }

  async create(
    createPaymentLinkWizardDto: CreatePaymentLinkWizardDto,
  ): Promise<PaymentLinkWizard> {
    const paymentLinkWizard = new PaymentLinkWizard(createPaymentLinkWizardDto);
    return await this.paymentLinkWizardRepository.save(paymentLinkWizard);
  }

  async findOne(id: number): Promise<PaymentLinkWizard> {
    const paymentLinkWizard = await this.paymentLinkWizardRepository
      .createQueryBuilder('paymentLinkWizard')
      .where('paymentLinkWizard.id = :id', { id })
      .getOne();
    if (!paymentLinkWizard) {
      throw new PaymentLinkWizardNotFoundException();
    }
    return paymentLinkWizard;
  }

  async updated(
    id: number,
    updatedPaymentLinkWizardDto: UpdatedPaymentLinkWizardDto,
  ): Promise<PaymentLinkWizard> {
    const paymentLinkWizard = await this.paymentLinkWizardRepository
      .createQueryBuilder('paymentLinkWizard')
      .where('paymentLinkWizard.id = :id', { id })
      .getOne();
    if (!paymentLinkWizard) {
      throw new PaymentLinkWizardNotFoundException();
    }
    Object.assign(paymentLinkWizard, updatedPaymentLinkWizardDto);
    return await this.paymentLinkWizardRepository.save(paymentLinkWizard);
  }

  async deleted(id: number): Promise<void> {
    const paymentLinkWizard = await this.paymentLinkWizardRepository
      .createQueryBuilder('paymentLinkWizard')
      .where('paymentLinkWizard.id = :id', { id })
      .getOne();
    if (!paymentLinkWizard) {
      throw new PaymentLinkWizardNotFoundException();
    }
    await this.paymentLinkWizardRepository.softRemove(paymentLinkWizard);
    console.log('Payment Icon Eliminado');
  }
}
