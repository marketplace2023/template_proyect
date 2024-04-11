import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoritesLocations } from './entities/favorites-locations.entity';
import { Repository } from 'typeorm';
import { FavoritesLocationsNotFoundException } from './error/favorites-locations-not-found.exception';
import { UpdatedFavoritesLocationsDto } from './dto/updated-favorites-locations.dto';
import { CreateFavoritesLocationsDto } from './dto/created-favorites-locations.dto';

@Injectable()
export class FavoritesLocationsService {
  constructor(
    @InjectRepository(FavoritesLocations)
    private readonly favoritesLocationsRepository: Repository<FavoritesLocations>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<FavoritesLocations[] | undefined> {
    const offset = (page - 1) * perPage;
    const favoritesLocations = await this.favoritesLocationsRepository
      .createQueryBuilder('favoritesLocations')
      .take(perPage)
      .skip(offset)
      .getMany();
    return favoritesLocations;
  }

  async create(
    createFavoritesLocationsDto: CreateFavoritesLocationsDto,
  ): Promise<FavoritesLocations> {
    const favoritesLocations = new FavoritesLocations(
      createFavoritesLocationsDto,
    );
    return await this.favoritesLocationsRepository.save(favoritesLocations);
  }

  async findOne(id: number): Promise<FavoritesLocations> {
    const favoritesLocations = await this.favoritesLocationsRepository
      .createQueryBuilder('favoritesLocations')
      .where('favoritesLocations.id = :id', { id })
      .getOne();
    if (!favoritesLocations) {
      throw new FavoritesLocationsNotFoundException();
    }
    return favoritesLocations;
  }

  async updated(
    id: number,
    updatedFavoritesLocationsDto: UpdatedFavoritesLocationsDto,
  ): Promise<FavoritesLocations> {
    const favoritesLocations = await this.favoritesLocationsRepository
      .createQueryBuilder('favoritesLocations')
      .where('favoritesLocations.id = :id', { id })
      .getOne();
    if (!favoritesLocations) {
      throw new FavoritesLocationsNotFoundException();
    }
    Object.assign(favoritesLocations, updatedFavoritesLocationsDto);
    return await this.favoritesLocationsRepository.save(favoritesLocations);
  }

  async deleted(id: number): Promise<void> {
    const favoritesLocations = await this.favoritesLocationsRepository
      .createQueryBuilder('favoritesLocations')
      .where('favoritesLocations.id = :id', { id })
      .getOne();
    if (!favoritesLocations) {
      throw new FavoritesLocationsNotFoundException();
    }
    await this.favoritesLocationsRepository.softRemove(favoritesLocations);
    console.log('favoritesLocations Eliminado');
  }
}
