import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResCountryNotFoundException } from './error/res-country-not-found.exception';
import { ResCountry } from './entities/res-country.entity';
import { UpdatedResCountryDto } from './dto/updated-res-country.dto';
import { CreateResCountryDto } from './dto/created-res-country.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ResCountryService {
  constructor(
    @InjectRepository(ResCountry)
    private readonly resCountryRepository: Repository<ResCountry>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ResCountry[] | undefined> {
    const offset = (page - 1) * perPage;
    const resCountry = await this.resCountryRepository
      .createQueryBuilder('resCountry')
      .take(perPage)
      .skip(offset)
      .getMany();
    return resCountry;
  }
  async create(createResCountryDto: CreateResCountryDto): Promise<ResCountry> {
    const resCountry = new ResCountry(createResCountryDto);
    return await this.resCountryRepository.save(resCountry);
  }
  async findOne(id: number): Promise<ResCountry> {
    const resCountry = await this.resCountryRepository
      .createQueryBuilder('resCountry')
      .where('resCountry.id = :id', { id })
      .getOne();
    if (!resCountry) {
      throw new ResCountryNotFoundException();
    }
    return resCountry;
  }
  async updated(
    id: number,
    updatedResCountryDto: UpdatedResCountryDto,
  ): Promise<ResCountry> {
    const resCountry = await this.resCountryRepository
      .createQueryBuilder('resCountry')
      .where('resCountry.id = :id', { id })
      .getOne();
    if (!resCountry) {
      throw new ResCountryNotFoundException();
    }
    Object.assign(resCountry, updatedResCountryDto);
    return await this.resCountryRepository.save(resCountry);
  }
  async deleted(id: number): Promise<void> {
    const resCountry = await this.resCountryRepository
      .createQueryBuilder('resCountry')
      .where('resCountry.id = :id', { id })
      .getOne();
    if (!resCountry) {
      throw new ResCountryNotFoundException();
    }
    await this.resCountryRepository.softRemove(resCountry);
    console.log('res Country column Eliminado');
  }
}
