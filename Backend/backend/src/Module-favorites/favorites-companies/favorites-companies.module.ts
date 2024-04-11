import { Module } from '@nestjs/common';
import { FavoritesCompaniesController } from './favorites-companies.controller';
import { FavoritesCompaniesService } from './favorites-companies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesCompanies } from './entities/favorites-companies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FavoritesCompanies])],
  controllers: [FavoritesCompaniesController],
  providers: [FavoritesCompaniesService],
})
export class FavoritesCompaniesModule {}
