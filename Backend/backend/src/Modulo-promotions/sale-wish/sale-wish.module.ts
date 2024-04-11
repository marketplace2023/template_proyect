import { Module } from '@nestjs/common';
import { SaleWishController } from './sale-wish.controller';
import { SaleWishService } from './sale-wish.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleWish } from './entities/sale-wish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleWish])],
  controllers: [SaleWishController],
  providers: [SaleWishService],
})
export class SaleWishModule {}
