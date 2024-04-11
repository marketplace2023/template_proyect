import { Module } from '@nestjs/common';
import { ProductProductController } from './product-product.controller';
import { ProductProductService } from './product-product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductProduct } from './entities/product-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductProduct])],
  controllers: [ProductProductController],
  providers: [ProductProductService],
})
export class ProductProductModule {}
