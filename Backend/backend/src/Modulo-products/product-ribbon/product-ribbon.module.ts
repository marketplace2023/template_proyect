import { Module } from '@nestjs/common';
import { ProductRibbonController } from './product-ribbon.controller';
import { ProductRibbonService } from './product-ribbon.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRibbon } from './entities/product-ribbon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRibbon])],
  controllers: [ProductRibbonController],
  providers: [ProductRibbonService],
})
export class ProductRibbonModule {}
