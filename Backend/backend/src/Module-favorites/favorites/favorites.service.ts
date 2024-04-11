import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Favorites } from './entities/favorites.entity';
import { Repository } from 'typeorm';
import { CreateFavoritesDto } from './dto/created-favorites.dto';
import { FavoritesNotFoundException } from './error/favorites-not-fount.exception';
import { UpdatedFavoritesDto } from './dto/updated-favorites.dto';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(Favorites)
    private readonly favoritesRepository: Repository<Favorites>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<Favorites[] | undefined> {
    const offset = (page - 1) * perPage;
    const favorites = await this.favoritesRepository
      .createQueryBuilder('favorites')
      .take(perPage)
      .skip(offset)
      .getMany();
    return favorites;
  }

  async create(createFavoritesDto: CreateFavoritesDto): Promise<Favorites> {
    const favorites = new Favorites(createFavoritesDto);
    return await this.favoritesRepository.save(favorites);
  }

  async findOne(id: number): Promise<Favorites> {
    const favorites = await this.favoritesRepository
      .createQueryBuilder('favorites')
      .where('favorites.id = :id', { id })
      .getOne();
    if (!favorites) {
      throw new FavoritesNotFoundException();
    }
    return favorites;
  }

  async updated(
    id: number,
    updatedFavoritesDto: UpdatedFavoritesDto,
  ): Promise<Favorites> {
    const favorites = await this.favoritesRepository
      .createQueryBuilder('favorites')
      .where('favorites.id = :id', { id })
      .getOne();
    if (!favorites) {
      throw new FavoritesNotFoundException();
    }
    Object.assign(favorites, updatedFavoritesDto);
    return await this.favoritesRepository.save(favorites);
  }

  async deleted(id: number): Promise<void> {
    const favorites = await this.favoritesRepository
      .createQueryBuilder('favorites')
      .where('favorites.id = :id', { id })
      .getOne();
    if (!favorites) {
      throw new FavoritesNotFoundException();
    }
    await this.favoritesRepository.softRemove(favorites);
    console.log('favorites Eliminado');
  }
}
