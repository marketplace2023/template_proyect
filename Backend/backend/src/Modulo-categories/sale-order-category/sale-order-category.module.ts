import { Module } from '@nestjs/common';
import { SaleOrderCategoryService } from './sale-order-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleOrderCategoryController } from './sale-order-category.controller';
import { SaleOrderCategory } from './entities/sale-order-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleOrderCategory])],
  controllers: [SaleOrderCategoryController],
  providers: [SaleOrderCategoryService],
})
export class SaleOrderCategoryModule {}
