import { Module } from '@nestjs/common';
import { ProductPackagingController } from './product-packaging.controller';
import { ProductPackagingService } from './product-packaging.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPackaging } from './entities/product-packaging.entity';
import { Products } from '../products/entities/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductPackaging, Products])],
  controllers: [ProductPackagingController],
  providers: [ProductPackagingService],
})
export class ProductPackagingModule {}
