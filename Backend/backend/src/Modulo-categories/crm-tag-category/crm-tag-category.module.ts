import { Module } from '@nestjs/common';
import { CrmTagCategoryController } from './crm-tag-category.controller';
import { CrmTagCategoryService } from './crm-tag-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrmTagCategory } from './entities/crm-tag-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CrmTagCategory])],
  controllers: [CrmTagCategoryController],
  providers: [CrmTagCategoryService],
})
export class CrmTagCategoryModule {}
