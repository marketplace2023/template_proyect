import { Module } from '@nestjs/common';
import { CategoryDescriptionController } from './category-description.controller';
import { CategoryDescriptionService } from './category-description.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryDescription } from './entities/category-description.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryDescription])],
  controllers: [CategoryDescriptionController],
  providers: [CategoryDescriptionService],
})
export class CategoryDescriptionModule {}
