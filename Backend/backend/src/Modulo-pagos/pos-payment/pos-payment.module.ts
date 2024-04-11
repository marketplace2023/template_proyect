import { Module } from '@nestjs/common';
import { PosPaymentController } from './pos-payment.controller';
import { PosPaymentService } from './pos-payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosPayment } from './entities/pos-payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosPayment])],
  controllers: [PosPaymentController],
  providers: [PosPaymentService],
})
export class PosPaymentModule {}
