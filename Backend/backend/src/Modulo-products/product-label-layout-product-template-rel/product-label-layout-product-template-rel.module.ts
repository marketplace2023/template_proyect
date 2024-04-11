import { Module } from '@nestjs/common';
import { ProductLabelLayoutProductTemplateRelController } from './product-label-layout-product-template-rel.controller';
import { ProductLabelLayoutProductTemplateRelService } from './product-label-layout-product-template-rel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductLabelLayoutProductTemplateRel } from './entities/product-label-layout-product-template-rel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductLabelLayoutProductTemplateRel])],
  controllers: [ProductLabelLayoutProductTemplateRelController],
  providers: [ProductLabelLayoutProductTemplateRelService],
})
export class ProductLabelLayoutProductTemplateRelModule {}
