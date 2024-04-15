import { Module } from '@nestjs/common';
import { SaleOrderTemplateService } from './sale_order_template.service';
import { SaleOrderTemplateController } from './sale_order_template.controller';

@Module({
  controllers: [SaleOrderTemplateController],
  providers: [SaleOrderTemplateService],
})
export class SaleOrderTemplateModule {}
