import { Module } from '@nestjs/common';
import { ProductRemovalController } from './product-removal.controller';
import { ProductRemovalService } from './product-removal.service';
import { ProductRemoval } from './entities/product-removal.emtity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRemoval])],
  controllers: [ProductRemovalController],
  providers: [ProductRemovalService],
})
export class ProductRemovalModule {}
