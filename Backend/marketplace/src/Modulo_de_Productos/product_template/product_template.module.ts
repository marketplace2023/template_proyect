import { Module } from '@nestjs/common';
import { ProductTemplateService } from './product_template.service';
import { ProductTemplateController } from './product_template.controller';

@Module({
  controllers: [ProductTemplateController],
  providers: [ProductTemplateService],
})
export class ProductTemplateModule {}
