import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoritesTagsNotFoundException } from './error/favorites-tags-not-found.exception';
import { FavoritesTags } from './entities/favorites-tags.entity';
import { UpdatedFavoritesTagsDto } from './dto/updated-favorites-tags.dto';
import { CreateFavoritesTagsDto } from './dto/created-favorites-tags.dto';
import { Repository } from 'typeorm';

@Injectable()
export class FavoritesTagsService {
  constructor(
    @InjectRepository(FavoritesTags)
    private readonly favoritesTagsRepository: Repository<FavoritesTags>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<FavoritesTags[] | undefined> {
    const offset = (page - 1) * perPage;
    const favoritesTags = await this.favoritesTagsRepository
      .createQueryBuilder('favoritesTags')
      .take(perPage)
      .skip(offset)
      .getMany();
    return favoritesTags;
  }

  async create(
    createFavoritesTagsDto: CreateFavoritesTagsDto,
  ): Promise<FavoritesTags> {
    const favoritesTags = new FavoritesTags(createFavoritesTagsDto);
    return await this.favoritesTagsRepository.save(favoritesTags);
  }

  async findOne(id: number): Promise<FavoritesTags> {
    const favoritesTags = await this.favoritesTagsRepository
      .createQueryBuilder('favoritesTags')
      .where('favoritesTags.id = :id', { id })
      .getOne();
    if (!favoritesTags) {
      throw new FavoritesTagsNotFoundException();
    }
    return favoritesTags;
  }

  async updated(
    id: number,
    updatedFavoritesTagsDto: UpdatedFavoritesTagsDto,
  ): Promise<FavoritesTags> {
    const favoritesTags = await this.favoritesTagsRepository
      .createQueryBuilder('favoritesTags')
      .where('favoritesTags.id = :id', { id })
      .getOne();
    if (!favoritesTags) {
      throw new FavoritesTagsNotFoundException();
    }
    Object.assign(favoritesTags, updatedFavoritesTagsDto);
    return await this.favoritesTagsRepository.save(favoritesTags);
  }

  async deleted(id: number): Promise<void> {
    const favoritesTags = await this.favoritesTagsRepository
      .createQueryBuilder('favoritesTags')
      .where('favoritesTags.id = :id', { id })
      .getOne();
    if (!favoritesTags) {
      throw new FavoritesTagsNotFoundException();
    }
    await this.favoritesTagsRepository.softRemove(favoritesTags);
    console.log('favorites Tags Eliminado');
  }
}
