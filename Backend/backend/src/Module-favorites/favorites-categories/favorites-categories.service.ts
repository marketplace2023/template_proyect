import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorites } from '../favorites/entities/favorites.entity';
import { FavoritesCategories } from './entities/favorites-categories.entity';
import { FavoritesCategoriesNotFoundException } from './error/favorites-categories-not-found.exception';
import { UpdatedFavoritesCategoriesDto } from './dto/updated-favorites-categories.dto';
import { CreateFavoritesCategoriesDto } from './dto/created-favorites-categories.dto';

@Injectable()
export class FavoritesCategoriesService {
  constructor(
    @InjectRepository(FavoritesCategories)
    private readonly favoritesCategoriesRepository: Repository<FavoritesCategories>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<FavoritesCategories[] | undefined> {
    const offset = (page - 1) * perPage;
    const favoritesCategories = await this.favoritesCategoriesRepository
      .createQueryBuilder('favoritesCategories')
      .take(perPage)
      .skip(offset)
      .getMany();
    return favoritesCategories;
  }

  async create(
    createFavoritesCategoriesDto: CreateFavoritesCategoriesDto,
  ): Promise<FavoritesCategories> {
    const favoritesCategories = new FavoritesCategories(
      createFavoritesCategoriesDto,
    );
    return await this.favoritesCategoriesRepository.save(favoritesCategories);
  }

  async findOne(id: number): Promise<FavoritesCategories> {
    const favoritesCategories = await this.favoritesCategoriesRepository
      .createQueryBuilder('favoritesCategories')
      .where('favoritesCategories.id = :id', { id })
      .getOne();
    if (!favoritesCategories) {
      throw new FavoritesCategoriesNotFoundException();
    }
    return favoritesCategories;
  }

  async updated(
    id: number,
    updatedFavoritesCategoriesDto: UpdatedFavoritesCategoriesDto,
  ): Promise<FavoritesCategories> {
    const favoritesCategories = await this.favoritesCategoriesRepository
      .createQueryBuilder('favoritesCategories')
      .where('favoritesCategories.id = :id', { id })
      .getOne();
    if (!favoritesCategories) {
      throw new FavoritesCategoriesNotFoundException();
    }
    Object.assign(favoritesCategories, updatedFavoritesCategoriesDto);
    return await this.favoritesCategoriesRepository.save(favoritesCategories);
  }

  async deleted(id: number): Promise<void> {
    const favoritesCategories = await this.favoritesCategoriesRepository
      .createQueryBuilder('favoritesCategories')
      .where('favoritesCategories.id = :id', { id })
      .getOne();
    if (!favoritesCategories) {
      throw new FavoritesCategoriesNotFoundException();
    }
    await this.favoritesCategoriesRepository.softRemove(favoritesCategories);
    console.log('favoritesCategories Eliminado');
  }
}
