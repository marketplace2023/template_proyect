import { Module } from '@nestjs/common';
import { PaymentLinkWizardController } from './payment-link-wizard.controller';
import { PaymentLinkWizardService } from './payment-link-wizard.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentLinkWizard } from './entities/payment-link-wizard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentLinkWizard])],
  controllers: [PaymentLinkWizardController],
  providers: [PaymentLinkWizardService],
})
export class PaymentLinkWizardModule {}
