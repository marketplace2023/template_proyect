import { Module } from '@nestjs/common';
import { AttributeValueCategoryController } from './attribute-value-category.controller';
import { AttributeValueCategoryService } from './attribute-value-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeValueCategory } from './entities/attribute-value-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AttributeValueCategory])],
  controllers: [AttributeValueCategoryController],
  providers: [AttributeValueCategoryService],
})
export class AttributeValueCategoryModule {}
