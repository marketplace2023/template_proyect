import { Module } from '@nestjs/common';
import { FavoritesLocationsController } from './favorites-locations.controller';
import { FavoritesLocationsService } from './favorites-locations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesLocations } from './entities/favorites-locations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FavoritesLocations])],
  controllers: [FavoritesLocationsController],
  providers: [FavoritesLocationsService],
})
export class FavoritesLocationsModule {}
