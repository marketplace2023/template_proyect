import { Module } from '@nestjs/common';
import { ProductProductTemplateController } from './product-product-template.controller';
import { ProductProductTemplateService } from './product-product-template.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductProductTemplate } from './entities/product-product-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductProductTemplate])],
  controllers: [ProductProductTemplateController],
  providers: [ProductProductTemplateService],
})
export class ProductProductTemplateModule {}
