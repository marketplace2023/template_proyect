import { Module } from '@nestjs/common';
import { FavoritesCategoriesController } from './favorites-categories.controller';
import { FavoritesCategoriesService } from './favorites-categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesCategories } from './entities/favorites-categories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FavoritesCategories])],
  controllers: [FavoritesCategoriesController],
  providers: [FavoritesCategoriesService],
})
export class FavoritesCategoriesModule {}
