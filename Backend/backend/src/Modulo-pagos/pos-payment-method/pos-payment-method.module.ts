import { Module } from '@nestjs/common';
import { PosPaymentMethodController } from './pos-payment-method.controller';
import { PosPaymentMethodService } from './pos-payment-method.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosPaymentMethod } from './entities/pos-payment-method.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosPaymentMethod])],
  controllers: [PosPaymentMethodController],
  providers: [PosPaymentMethodService],
})
export class PosPaymentMethodModule {}
