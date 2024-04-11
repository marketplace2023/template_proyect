import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoritesUsers } from './entities/favorites-users.entity';
import { Repository } from 'typeorm';
import { CreateFavoritesUsersDto } from './dto/created-favorites-users.dto';
import { FavoritesUsersNotFoundException } from './error/favorites-users-not-found.exception';
import { UpdatedFavoritesUsersDto } from './dto/updated-favorites-users.dto';

@Injectable()
export class FavoritesUsersService {
  constructor(
    @InjectRepository(FavoritesUsers)
    private readonly favoritesUsersRepository: Repository<FavoritesUsers>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<FavoritesUsers[] | undefined> {
    const offset = (page - 1) * perPage;
    const favoritesUsers = await this.favoritesUsersRepository
      .createQueryBuilder('favoritesUsers')
      .take(perPage)
      .skip(offset)
      .getMany();
    return favoritesUsers;
  }

  async create(
    createFavoritesUsersDto: CreateFavoritesUsersDto,
  ): Promise<FavoritesUsers> {
    const favoritesUsers = new FavoritesUsers(createFavoritesUsersDto);
    return await this.favoritesUsersRepository.save(favoritesUsers);
  }

  async findOne(id: number): Promise<FavoritesUsers> {
    const favoritesUsers = await this.favoritesUsersRepository
      .createQueryBuilder('favoritesUsers')
      .where('favoritesUsers.id = :id', { id })
      .getOne();
    if (!favoritesUsers) {
      throw new FavoritesUsersNotFoundException();
    }
    return favoritesUsers;
  }

  async updated(
    id: number,
    updatedFavoritesUsersDto: UpdatedFavoritesUsersDto,
  ): Promise<FavoritesUsers> {
    const favoritesUsers = await this.favoritesUsersRepository
      .createQueryBuilder('favoritesUsers')
      .where('favoritesUsers.id = :id', { id })
      .getOne();
    if (!favoritesUsers) {
      throw new FavoritesUsersNotFoundException();
    }
    Object.assign(favoritesUsers, updatedFavoritesUsersDto);
    return await this.favoritesUsersRepository.save(favoritesUsers);
  }

  async deleted(id: number): Promise<void> {
    const favoritesUsers = await this.favoritesUsersRepository
      .createQueryBuilder('favoritesUsers')
      .where('favoritesUsers.id = :id', { id })
      .getOne();
    if (!favoritesUsers) {
      throw new FavoritesUsersNotFoundException();
    }
    await this.favoritesUsersRepository.softRemove(favoritesUsers);
    console.log('favorites Users Eliminado');
  }
}
