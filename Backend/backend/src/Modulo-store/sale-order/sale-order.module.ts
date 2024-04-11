import { Module } from '@nestjs/common';
import { SaleOrderController } from './sale-order.controller';
import { SaleOrderService } from './sale-order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleOrder } from './entities/sale-order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleOrder])],
  controllers: [SaleOrderController],
  providers: [SaleOrderService],
})
export class SaleOrderModule {}
