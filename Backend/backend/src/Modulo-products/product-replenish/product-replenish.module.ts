import { Module } from '@nestjs/common';
import { ProductReplenishController } from './product-replenish.controller';
import { ProductReplenishService } from './product-replenish.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductReplenish } from './entities/product-replenish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductReplenish])],
  controllers: [ProductReplenishController],
  providers: [ProductReplenishService],
})
export class ProductReplenishModule {}
