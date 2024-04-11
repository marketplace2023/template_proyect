import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalePaymentProviderOnboardingWizardNotFoundException } from './error/sale-payment-provider-onboarding-wizard-not-found.exception';
import { SalePaymentProviderOnboardingWizard } from './entities/sale-payment-provider-onboarding-wizard.entity';
import { UpdatedSalePaymentProviderOnboardingWizardDto } from './dto/updated-sale-payment-provider-onboarding-wizard.dto';
import { CreateSalePaymentProviderOnboardingWizardDto } from './dto/create-sale-payment-provider-onboarding-wizard.dto';

@Injectable()
export class SalePaymentProviderOnboardingWizardService {
  constructor(
    @InjectRepository(SalePaymentProviderOnboardingWizard)
    private readonly salePaymentProviderOnboardingWizardRepository: Repository<SalePaymentProviderOnboardingWizard>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SalePaymentProviderOnboardingWizard[] | undefined> {
    const offset = (page - 1) * perPage;
    const salePaymentProviderOnboardingWizard =
      await this.salePaymentProviderOnboardingWizardRepository
        .createQueryBuilder('salePaymentProviderOnboardingWizard')
        .take(perPage)
        .skip(offset)
        .getMany();
    return salePaymentProviderOnboardingWizard;
  }

  async create(
    createSalePaymentProviderOnboardingWizardDto: CreateSalePaymentProviderOnboardingWizardDto,
  ): Promise<SalePaymentProviderOnboardingWizard> {
    const salePaymentProviderOnboardingWizard =
      new SalePaymentProviderOnboardingWizard(
        createSalePaymentProviderOnboardingWizardDto,
      );
    return await this.salePaymentProviderOnboardingWizardRepository.save(
      salePaymentProviderOnboardingWizard,
    );
  }

  async findOne(id: number): Promise<SalePaymentProviderOnboardingWizard> {
    const salePaymentProviderOnboardingWizard =
      await this.salePaymentProviderOnboardingWizardRepository
        .createQueryBuilder('salePaymentProviderOnboardingWizard')
        .where('salePaymentProviderOnboardingWizard.id = :id', { id })
        .getOne();
    if (!salePaymentProviderOnboardingWizard) {
      throw new SalePaymentProviderOnboardingWizardNotFoundException();
    }
    return salePaymentProviderOnboardingWizard;
  }

  async updated(
    id: number,
    updatedSalePaymentProviderOnboardingWizardDto: UpdatedSalePaymentProviderOnboardingWizardDto,
  ): Promise<SalePaymentProviderOnboardingWizard> {
    const salePaymentProviderOnboardingWizard =
      await this.salePaymentProviderOnboardingWizardRepository
        .createQueryBuilder('salePaymentProviderOnboardingWizard')
        .where('salePaymentProviderOnboardingWizard.id = :id', { id })
        .getOne();
    if (!salePaymentProviderOnboardingWizard) {
      throw new SalePaymentProviderOnboardingWizardNotFoundException();
    }
    Object.assign(
      salePaymentProviderOnboardingWizard,
      updatedSalePaymentProviderOnboardingWizardDto,
    );
    return await this.salePaymentProviderOnboardingWizardRepository.save(
      salePaymentProviderOnboardingWizard,
    );
  }

  async deleted(id: number): Promise<void> {
    const salePaymentProviderOnboardingWizard =
      await this.salePaymentProviderOnboardingWizardRepository
        .createQueryBuilder('salePaymentProviderOnboardingWizard')
        .where('salePaymentProviderOnboardingWizard.id = :id', { id })
        .getOne();
    if (!salePaymentProviderOnboardingWizard) {
      throw new SalePaymentProviderOnboardingWizardNotFoundException();
    }
    await this.salePaymentProviderOnboardingWizardRepository.softRemove(
      salePaymentProviderOnboardingWizard,
    );
    console.log('salePaymentProviderOnboardingWizard Eliminado');
  }
}
