import { Module } from '@nestjs/common';
import { ProductLabelLayoutController } from './product-label-layout.controller';
import { ProductLabelLayoutService } from './product-label-layout.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductLabelLayout } from './entities/product-label-layout.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductLabelLayout])],
  controllers: [ProductLabelLayoutController],
  providers: [ProductLabelLayoutService],
})
export class ProductLabelLayoutModule {}
