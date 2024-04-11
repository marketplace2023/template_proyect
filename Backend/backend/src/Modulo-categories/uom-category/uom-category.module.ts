import { Module } from '@nestjs/common';
import { UomCategoryController } from './uom-category.controller';
import { UomCategoryService } from './uom-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UomCategory } from './entities/uom-category-entity';

@Module({
  imports: [TypeOrmModule.forFeature([UomCategory])],
  controllers: [UomCategoryController],
  providers: [UomCategoryService],
})
export class UomCategoryModule {}
