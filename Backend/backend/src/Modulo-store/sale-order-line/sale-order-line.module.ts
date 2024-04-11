import { Module } from '@nestjs/common';
import { SaleOrderLineController } from './sale-order-line.controller';
import { SaleOrderLineService } from './sale-order-line.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleOrderLine } from './entities/sale-order-line.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleOrderLine])],
  controllers: [SaleOrderLineController],
  providers: [SaleOrderLineService],
})
export class SaleOrderLineModule {}
