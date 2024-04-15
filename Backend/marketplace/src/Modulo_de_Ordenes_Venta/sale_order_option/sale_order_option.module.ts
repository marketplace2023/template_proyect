import { Module } from '@nestjs/common';
import { SaleOrderOptionService } from './sale_order_option.service';
import { SaleOrderOptionController } from './sale_order_option.controller';

@Module({
  controllers: [SaleOrderOptionController],
  providers: [SaleOrderOptionService],
})
export class SaleOrderOptionModule {}
