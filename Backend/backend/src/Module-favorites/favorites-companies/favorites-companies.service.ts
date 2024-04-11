import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoritesCompanies } from './entities/favorites-companies.entity';
import { Repository } from 'typeorm';
import { CreateFavoritesCompaniesDto } from './dto/created-favorites-companies.dto';
import { FavoritesCompaniesNotFoundException } from './error/favorites-companies-not-found.exception';
import { UpdatedFavoritesCompaniesDto } from './dto/updated-favorites-companies.dto';

@Injectable()
export class FavoritesCompaniesService {
  constructor(
    @InjectRepository(FavoritesCompanies)
    private readonly favoritesCompaniesRepository: Repository<FavoritesCompanies>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<FavoritesCompanies[] | undefined> {
    const offset = (page - 1) * perPage;
    const favoritesCompanies = await this.favoritesCompaniesRepository
      .createQueryBuilder('favoritesCompanies')
      .take(perPage)
      .skip(offset)
      .getMany();
    return favoritesCompanies;
  }

  async create(
    createFavoritesCompaniesDto: CreateFavoritesCompaniesDto,
  ): Promise<FavoritesCompanies> {
    const favoritesCompanies = new FavoritesCompanies(
      createFavoritesCompaniesDto,
    );
    return await this.favoritesCompaniesRepository.save(favoritesCompanies);
  }

  async findOne(id: number): Promise<FavoritesCompanies> {
    const favoritesCompanies = await this.favoritesCompaniesRepository
      .createQueryBuilder('favoritesCompanies')
      .where('favoritesCompanies.id = :id', { id })
      .getOne();
    if (!favoritesCompanies) {
      throw new FavoritesCompaniesNotFoundException();
    }
    return favoritesCompanies;
  }

  async updated(
    id: number,
    updatedFavoritesCompaniesDto: UpdatedFavoritesCompaniesDto,
  ): Promise<FavoritesCompanies> {
    const favoritesCompanies = await this.favoritesCompaniesRepository
      .createQueryBuilder('favoritesCompanies')
      .where('favoritesCompanies.id = :id', { id })
      .getOne();
    if (!favoritesCompanies) {
      throw new FavoritesCompaniesNotFoundException();
    }
    Object.assign(favoritesCompanies, updatedFavoritesCompaniesDto);
    return await this.favoritesCompaniesRepository.save(favoritesCompanies);
  }

  async deleted(id: number): Promise<void> {
    const favoritesCompanies = await this.favoritesCompaniesRepository
      .createQueryBuilder('favoritesCompanies')
      .where('favoritesCompanies.id = :id', { id })
      .getOne();
    if (!favoritesCompanies) {
      throw new FavoritesCompaniesNotFoundException();
    }
    await this.favoritesCompaniesRepository.softRemove(favoritesCompanies);
    console.log('favoritesCompanies Eliminado');
  }
}
