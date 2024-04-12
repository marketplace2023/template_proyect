import { Module } from '@nestjs/common';
import { ProductUomService } from './product_uom.service';
import { ProductUomController } from './product_uom.controller';

@Module({
  controllers: [ProductUomController],
  providers: [ProductUomService],
})
export class ProductUomModule {}
