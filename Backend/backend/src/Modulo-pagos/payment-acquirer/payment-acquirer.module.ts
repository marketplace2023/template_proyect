import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentAcquirerController } from './payment-acquirer.controller';
import { PaymentAcquirerService } from './payment-acquirer.service';
import { PaymentAcquirer } from './entities/payment-acquirer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentAcquirer])],
  controllers: [PaymentAcquirerController],
  providers: [PaymentAcquirerService],
})
export class PaymentAcquirerModule {}
