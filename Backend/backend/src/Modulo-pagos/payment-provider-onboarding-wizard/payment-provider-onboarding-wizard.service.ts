import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentProviderOnboardingWizardNotFoundException } from './error/payment-provider-onboarding-wizard-not-found.exception';
import { PaymentProviderOnboardingWizard } from './entities/payment-provider-onboarding-wizard.entity';
import { UpdatedPaymentProviderOnboardingWizardDto } from './dto/updated-payment-provider-onboarding-wizard.dto';
import { Repository } from 'typeorm';
import { CreatePaymentProviderOnboardingWizardDto } from './dto/create-payment-provider-onboarding-wizard.dto';

@Injectable()
export class PaymentProviderOnboardingWizardService {
  constructor(
    @InjectRepository(PaymentProviderOnboardingWizard)
    private readonly paymentProviderOnboardingWizardRepository: Repository<PaymentProviderOnboardingWizard>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PaymentProviderOnboardingWizard[] | undefined> {
    const offset = (page - 1) * perPage;
    const paymentProviderOnboardingWizard =
      await this.paymentProviderOnboardingWizardRepository
        .createQueryBuilder('paymentProviderOnboardingWizard')
        .take(perPage)
        .skip(offset)
        .getMany();
    return paymentProviderOnboardingWizard;
  }

  async create(
    createPaymentProviderOnboardingWizardDto: CreatePaymentProviderOnboardingWizardDto,
  ): Promise<PaymentProviderOnboardingWizard> {
    const paymentProviderOnboardingWizard = new PaymentProviderOnboardingWizard(
      createPaymentProviderOnboardingWizardDto,
    );
    return await this.paymentProviderOnboardingWizardRepository.save(
      paymentProviderOnboardingWizard,
    );
  }

  async findOne(id: number): Promise<PaymentProviderOnboardingWizard> {
    const paymentProviderOnboardingWizard =
      await this.paymentProviderOnboardingWizardRepository
        .createQueryBuilder('paymentProviderOnboardingWizard')
        .where('paymentProviderOnboardingWizard.id = :id', { id })
        .getOne();
    if (!paymentProviderOnboardingWizard) {
      throw new PaymentProviderOnboardingWizardNotFoundException();
    }
    return paymentProviderOnboardingWizard;
  }

  async updated(
    id: number,
    updatedPaymentProviderOnboardingWizardDto: UpdatedPaymentProviderOnboardingWizardDto,
  ): Promise<PaymentProviderOnboardingWizard> {
    const paymentProviderOnboardingWizard =
      await this.paymentProviderOnboardingWizardRepository
        .createQueryBuilder('paymentProviderOnboardingWizard')
        .where('paymentProviderOnboardingWizard.id = :id', { id })
        .getOne();
    if (!paymentProviderOnboardingWizard) {
      throw new PaymentProviderOnboardingWizardNotFoundException();
    }
    Object.assign(
      paymentProviderOnboardingWizard,
      updatedPaymentProviderOnboardingWizardDto,
    );
    return await this.paymentProviderOnboardingWizardRepository.save(
      paymentProviderOnboardingWizard,
    );
  }

  async deleted(id: number): Promise<void> {
    const paymentProviderOnboardingWizard =
      await this.paymentProviderOnboardingWizardRepository
        .createQueryBuilder('paymentProviderOnboardingWizard')
        .where('paymentProviderOnboardingWizard.id = :id', { id })
        .getOne();
    if (!paymentProviderOnboardingWizard) {
      throw new PaymentProviderOnboardingWizardNotFoundException();
    }
    await this.paymentProviderOnboardingWizardRepository.softRemove(
      paymentProviderOnboardingWizard,
    );
    console.log('Payment Icon Eliminado');
  }
}
