import { Module } from '@nestjs/common';
import { SaleShopController } from './sale-shop.controller';
import { SaleShopService } from './sale-shop.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleShop } from './entities/sale-shop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleShop])],
  controllers: [SaleShopController],
  providers: [SaleShopService],
})
export class SaleShopModule {}
