import { Module } from '@nestjs/common';
import { ProductTagController } from './product-tag.controller';
import { ProductTagService } from './product-tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTag } from './entities/product-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductTag])],
  controllers: [ProductTagController],
  providers: [ProductTagService],
})
export class ProductTagModule {}
