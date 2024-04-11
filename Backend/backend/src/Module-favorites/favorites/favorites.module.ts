import { Module } from '@nestjs/common';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favorites } from './entities/favorites.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Favorites])],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {}
