import { Module } from '@nestjs/common';
import { PaymentRefundWizardController } from './payment-refund-wizard.controller';
import { PaymentRefundWizardService } from './payment-refund-wizard.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentRefundWizard } from './entities/payment-refund-wizard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentRefundWizard])],
  controllers: [PaymentRefundWizardController],
  providers: [PaymentRefundWizardService],
})
export class PaymentRefundWizardModule {}
