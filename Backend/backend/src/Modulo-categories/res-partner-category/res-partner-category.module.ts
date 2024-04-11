import { Module } from '@nestjs/common';
import { ResPartnerCategoryController } from './res-partner-category.controller';
import { ResPartnerCategoryService } from './res-partner-category.service';
import { ResPartnerCategory } from './entities/res-partner-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ResPartnerCategory])],
  controllers: [ResPartnerCategoryController],
  providers: [ResPartnerCategoryService],
})
export class ResPartnerCategoryModule {}
