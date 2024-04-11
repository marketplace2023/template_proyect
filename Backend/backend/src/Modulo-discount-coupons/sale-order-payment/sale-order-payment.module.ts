import { Module } from '@nestjs/common';
import { SaleOrderPaymentController } from './sale-order-payment.controller';
import { SaleOrderPaymentService } from './sale-order-payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleOrderPayment } from './entities/sale-order-payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleOrderPayment])],
  controllers: [SaleOrderPaymentController],
  providers: [SaleOrderPaymentService],
})
export class SaleOrderPaymentModule {}
