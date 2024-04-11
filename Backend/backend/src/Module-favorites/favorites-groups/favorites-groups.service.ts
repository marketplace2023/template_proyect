import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FavoritesGroups } from './entities/favorites-groups.entity';
import { CreateFavoritesGroupsDto } from './dto/created-favorites-groups.dto';
import { FavoritesGroupsNotFoundException } from './error/favorites-groups-not-found.exception';
import { UpdatedFavoritesGroupsDto } from './dto/updated-favorites-groups.dto';

@Injectable()
export class FavoritesGroupsService {
  constructor(
    @InjectRepository(FavoritesGroups)
    private readonly favoritesGroupsRepository: Repository<FavoritesGroups>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<FavoritesGroups[] | undefined> {
    const offset = (page - 1) * perPage;
    const favoritesGroups = await this.favoritesGroupsRepository
      .createQueryBuilder('favoritesGroups')
      .take(perPage)
      .skip(offset)
      .getMany();
    return favoritesGroups;
  }

  async create(
    createFavoritesGroupsDto: CreateFavoritesGroupsDto,
  ): Promise<FavoritesGroups> {
    const favoritesGroups = new FavoritesGroups(createFavoritesGroupsDto);
    return await this.favoritesGroupsRepository.save(favoritesGroups);
  }

  async findOne(id: number): Promise<FavoritesGroups> {
    const favoritesGroups = await this.favoritesGroupsRepository
      .createQueryBuilder('favoritesGroups')
      .where('favoritesGroups.id = :id', { id })
      .getOne();
    if (!favoritesGroups) {
      throw new FavoritesGroupsNotFoundException();
    }
    return favoritesGroups;
  }

  async updated(
    id: number,
    updatedFavoritesGroupsDto: UpdatedFavoritesGroupsDto,
  ): Promise<FavoritesGroups> {
    const favoritesGroups = await this.favoritesGroupsRepository
      .createQueryBuilder('favoritesGroups')
      .where('favoritesGroups.id = :id', { id })
      .getOne();
    if (!favoritesGroups) {
      throw new FavoritesGroupsNotFoundException();
    }
    Object.assign(favoritesGroups, updatedFavoritesGroupsDto);
    return await this.favoritesGroupsRepository.save(favoritesGroups);
  }

  async deleted(id: number): Promise<void> {
    const favoritesGroups = await this.favoritesGroupsRepository
      .createQueryBuilder('favoritesGroups')
      .where('favoritesGroups.id = :id', { id })
      .getOne();
    if (!favoritesGroups) {
      throw new FavoritesGroupsNotFoundException();
    }
    await this.favoritesGroupsRepository.softRemove(favoritesGroups);
    console.log('favorites Users Eliminado');
  }
}
