import { Module } from '@nestjs/common';
import { ProductsAttributeValue } from './entities/products-attribute-value.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsAttributeValueValueController } from './products-attribute-value.controller';
import { ProductsAttributeValueService } from './products-attribute-value.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsAttributeValue])],
  controllers: [ProductsAttributeValueValueController],
  providers: [ProductsAttributeValueService],
})
export class ProductsAttributeValueModule {}
