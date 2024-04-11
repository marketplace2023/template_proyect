import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoritesItems } from './entities/favorites-items.entity';
import { Repository } from 'typeorm';
import { CreateFavoritesItemsDto } from './dto/created-favorites-items.dto';
import { FavoritesItemsNotFoundException } from './error/favorites-items-not-found.exception';
import { UpdatedFavoritesItemsDto } from './dto/updated-favorites-items.dto';

@Injectable()
export class FavoritesItemsItemsService {
  constructor(
    @InjectRepository(FavoritesItems)
    private readonly favoritesItemsRepository: Repository<FavoritesItems>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<FavoritesItems[] | undefined> {
    const offset = (page - 1) * perPage;
    const favoritesItems = await this.favoritesItemsRepository
      .createQueryBuilder('favoritesItems')
      .take(perPage)
      .skip(offset)
      .getMany();
    return favoritesItems;
  }

  async create(
    createFavoritesItemsDto: CreateFavoritesItemsDto,
  ): Promise<FavoritesItems> {
    const favoritesItems = new FavoritesItems(createFavoritesItemsDto);
    return await this.favoritesItemsRepository.save(favoritesItems);
  }

  async findOne(id: number): Promise<FavoritesItems> {
    const favoritesItems = await this.favoritesItemsRepository
      .createQueryBuilder('favoritesItems')
      .where('favoritesItems.id = :id', { id })
      .getOne();
    if (!favoritesItems) {
      throw new FavoritesItemsNotFoundException();
    }
    return favoritesItems;
  }

  async updated(
    id: number,
    updatedFavoritesItemsDto: UpdatedFavoritesItemsDto,
  ): Promise<FavoritesItems> {
    const favoritesItems = await this.favoritesItemsRepository
      .createQueryBuilder('favoritesItems')
      .where('favoritesItems.id = :id', { id })
      .getOne();
    if (!favoritesItems) {
      throw new FavoritesItemsNotFoundException();
    }
    Object.assign(favoritesItems, updatedFavoritesItemsDto);
    return await this.favoritesItemsRepository.save(favoritesItems);
  }

  async deleted(id: number): Promise<void> {
    const favoritesItems = await this.favoritesItemsRepository
      .createQueryBuilder('favoritesItems')
      .where('favoritesItems.id = :id', { id })
      .getOne();
    if (!favoritesItems) {
      throw new FavoritesItemsNotFoundException();
    }
    await this.favoritesItemsRepository.softRemove(favoritesItems);
    console.log('favoritesItems Eliminado');
  }
}
