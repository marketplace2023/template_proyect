import { Module } from '@nestjs/common';
import { PaymentAcquirerService } from './payment_acquirer.service';
import { PaymentAcquirerController } from './payment_acquirer.controller';

@Module({
  controllers: [PaymentAcquirerController],
  providers: [PaymentAcquirerService],
})
export class PaymentAcquirerModule {}
