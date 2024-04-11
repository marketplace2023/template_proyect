import { Module } from '@nestjs/common';
import { ProductTaxesRelController } from './product-taxes-rel.controller';
import { ProductTaxesRelService } from './product-taxes-rel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTaxesRel } from './entities/product-taxes-rel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductTaxesRel])],
  controllers: [ProductTaxesRelController],
  providers: [ProductTaxesRelService],
})
export class ProductTaxesRelModule {}
