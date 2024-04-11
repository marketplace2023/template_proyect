import { Module } from '@nestjs/common';
import { SalePaymentProviderOnboardingWizardController } from './sale-payment-provider-onboarding-wizard.controller';
import { SalePaymentProviderOnboardingWizardService } from './sale-payment-provider-onboarding-wizard.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalePaymentProviderOnboardingWizard } from './entities/sale-payment-provider-onboarding-wizard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalePaymentProviderOnboardingWizard])],
  controllers: [SalePaymentProviderOnboardingWizardController],
  providers: [SalePaymentProviderOnboardingWizardService],
})
export class SalePaymentProviderOnboardingWizardModule {}
