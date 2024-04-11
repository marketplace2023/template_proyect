import { Module } from '@nestjs/common';
import { FavoritesTagsController } from './favorites-tags.controller';
import { FavoritesTagsService } from './favorites-tags.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesTags } from './entities/favorites-tags.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FavoritesTags])],
  controllers: [FavoritesTagsController],
  providers: [FavoritesTagsService],
})
export class FavoritesTagsModule {}
