import { Module } from '@nestjs/common';
import { PaymentIconController } from './payment-icon.controller';
import { PaymentIconService } from './payment-icon.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentIcon } from './entities/payment-icon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentIcon])],
  controllers: [PaymentIconController],
  providers: [PaymentIconService],
})
export class PaymentIconModule {}
