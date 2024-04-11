import { Module } from '@nestjs/common';
import { AccountMoveController } from './account-move.controller';
import { AccountMoveService } from './account-move.service';
import { AccountMove } from './entities/account-move.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsCategory } from 'src/Modulo-products/products-category/entities/products-category.entity';
import { ProductProduct } from 'src/Modulo-products/product-product/entities/product-product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountMove, ProductsCategory, ProductProduct]),
  ],
  controllers: [AccountMoveController],
  providers: [AccountMoveService],
})
export class AccountMoveModule {}
