import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResCountryStateNotFoundException } from './error/res-country-state-not-found.exception';
import { ResCountryState } from './entities/res-country-state.entity';
import { UpdatedResCountryStateDto } from './dto/updated-res-country-state.dto';
import { CreateResCountryStateDto } from './dto/created-res-country-state.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ResCountryStateService {
  constructor(
    @InjectRepository(ResCountryState)
    private readonly resCountryStateRepository: Repository<ResCountryState>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ResCountryState[] | undefined> {
    const offset = (page - 1) * perPage;
    const resCountryState = await this.resCountryStateRepository
      .createQueryBuilder('resCountryState')
      .take(perPage)
      .skip(offset)
      .getMany();
    return resCountryState;
  }

  async create(
    createResCountryStateDto: CreateResCountryStateDto,
  ): Promise<ResCountryState> {
    const resCountryState = new ResCountryState(createResCountryStateDto);
    return await this.resCountryStateRepository.save(resCountryState);
  }

  async findOne(id: number): Promise<ResCountryState> {
    const resCountryState = await this.resCountryStateRepository
      .createQueryBuilder('resCountryState')
      .where('resCountryState.id = :id', { id })
      .getOne();
    if (!resCountryState) {
      throw new ResCountryStateNotFoundException();
    }
    return resCountryState;
  }

  async updated(
    id: number,
    updatedResCountryStateDto: UpdatedResCountryStateDto,
  ): Promise<ResCountryState> {
    const resCountryState = await this.resCountryStateRepository
      .createQueryBuilder('resCountryState')
      .where('resCountryState.id = :id', { id })
      .getOne();
    if (!resCountryState) {
      throw new ResCountryStateNotFoundException();
    }
    Object.assign(resCountryState, updatedResCountryStateDto);
    return await this.resCountryStateRepository.save(resCountryState);
  }

  async deleted(id: number): Promise<void> {
    const resCountryState = await this.resCountryStateRepository
      .createQueryBuilder('resCountryState')
      .where('resCountryState.id = :id', { id })
      .getOne();
    if (!resCountryState) {
      throw new ResCountryStateNotFoundException();
    }
    await this.resCountryStateRepository.softRemove(resCountryState);
  }
}
