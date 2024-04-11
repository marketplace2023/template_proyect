import { Module } from '@nestjs/common';
import { PaymentOrderController } from './payment-order.controller';
import { PaymentOrderService } from './payment-order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentOrder } from './entities/payment-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentOrder])],
  controllers: [PaymentOrderController],
  providers: [PaymentOrderService],
})
export class PaymentOrderModule {}
