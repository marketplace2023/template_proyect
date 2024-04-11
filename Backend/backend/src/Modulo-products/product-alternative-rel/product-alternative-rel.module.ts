import { Module } from '@nestjs/common';
import { ProductAlternativeRelController } from './product-alternative-rel.controller';
import { ProductAlternativeRelService } from './product-alternative-rel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductAlternativeRel } from './entities/product-alternative-rel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductAlternativeRel])],
  controllers: [ProductAlternativeRelController],
  providers: [ProductAlternativeRelService],
})
export class ProductAlternativeRelModule {}
