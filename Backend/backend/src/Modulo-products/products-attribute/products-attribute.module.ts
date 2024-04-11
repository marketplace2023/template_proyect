import { Module } from '@nestjs/common';
import { ProductsAttributeService } from './products-attribute.service';
import { ProductsAttribute } from './entities/products-attribute.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsAttributeController } from './products-attribute.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsAttribute])],
  controllers: [ProductsAttributeController],
  providers: [ProductsAttributeService],
})
export class ProductsAttributeModule {}
