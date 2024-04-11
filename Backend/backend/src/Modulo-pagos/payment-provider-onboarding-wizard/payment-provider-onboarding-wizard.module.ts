import { Module } from '@nestjs/common';
import { PaymentProviderOnboardingWizardController } from './payment-provider-onboarding-wizard.controller';
import { PaymentProviderOnboardingWizardService } from './payment-provider-onboarding-wizard.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentProviderOnboardingWizard } from './entities/payment-provider-onboarding-wizard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentProviderOnboardingWizard])],
  controllers: [PaymentProviderOnboardingWizardController],
  providers: [PaymentProviderOnboardingWizardService],
})
export class PaymentProviderOnboardingWizardModule {}
