import { Module } from '@nestjs/common';
import { PosMakePaymentController } from './pos-make-payment.controller';
import { PosMakePaymentService } from './pos-make-payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosMakePayment } from './entities/pos-make-payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosMakePayment])],
  controllers: [PosMakePaymentController],
  providers: [PosMakePaymentService],
})
export class PosMakePaymentModule {}
