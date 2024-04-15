import { Module } from '@nestjs/common';
import { SaleOrderTemplateOptionService } from './sale_order_template_option.service';
import { SaleOrderTemplateOptionController } from './sale_order_template_option.controller';

@Module({
  controllers: [SaleOrderTemplateOptionController],
  providers: [SaleOrderTemplateOptionService],
})
export class SaleOrderTemplateOptionModule {}
