import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoritesNotifications } from './entities/favorites-notifications.entity';
import { Repository } from 'typeorm';
import { CreateFavoritesNotificationsDto } from './dto/created-favorites-notifications.dto';
import { FavoritesNotificationsNotFoundException } from './error/favorites-notifications-not-found.exception';
import { UpdatedFavoritesNotificationsDto } from './dto/updated-favorites-notifications.dto';

@Injectable()
export class FavoritesNotificationsService {
  constructor(
    @InjectRepository(FavoritesNotifications)
    private readonly favoritesNotificationsRepository: Repository<FavoritesNotifications>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<FavoritesNotifications[] | undefined> {
    const offset = (page - 1) * perPage;
    const favoritesNotifications = await this.favoritesNotificationsRepository
      .createQueryBuilder('favoritesNotifications')
      .take(perPage)
      .skip(offset)
      .getMany();
    return favoritesNotifications;
  }

  async create(
    createFavoritesNotificationsDto: CreateFavoritesNotificationsDto,
  ): Promise<FavoritesNotifications> {
    const favoritesNotifications = new FavoritesNotifications(
      createFavoritesNotificationsDto,
    );
    return await this.favoritesNotificationsRepository.save(
      favoritesNotifications,
    );
  }

  async findOne(id: number): Promise<FavoritesNotifications> {
    const favoritesNotifications = await this.favoritesNotificationsRepository
      .createQueryBuilder('favoritesNotifications')
      .where('favoritesNotifications.id = :id', { id })
      .getOne();
    if (!favoritesNotifications) {
      throw new FavoritesNotificationsNotFoundException();
    }
    return favoritesNotifications;
  }

  async updated(
    id: number,
    updatedFavoritesNotificationsDto: UpdatedFavoritesNotificationsDto,
  ): Promise<FavoritesNotifications> {
    const favoritesNotifications = await this.favoritesNotificationsRepository
      .createQueryBuilder('favoritesNotifications')
      .where('favoritesNotifications.id = :id', { id })
      .getOne();
    if (!favoritesNotifications) {
      throw new FavoritesNotificationsNotFoundException();
    }
    Object.assign(favoritesNotifications, updatedFavoritesNotificationsDto);
    return await this.favoritesNotificationsRepository.save(
      favoritesNotifications,
    );
  }

  async deleted(id: number): Promise<void> {
    const favoritesNotifications = await this.favoritesNotificationsRepository
      .createQueryBuilder('favoritesNotifications')
      .where('favoritesNotifications.id = :id', { id })
      .getOne();
    if (!favoritesNotifications) {
      throw new FavoritesNotificationsNotFoundException();
    }
    await this.favoritesNotificationsRepository.softRemove(
      favoritesNotifications,
    );
    console.log('favorites Notifications Eliminado');
  }
}
