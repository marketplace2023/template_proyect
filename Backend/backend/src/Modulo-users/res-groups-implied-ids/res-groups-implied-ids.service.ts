import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResGroupsImpliedIds } from './entities/res-groups-implied-ids.entity';
import { Repository } from 'typeorm';
import { CreateResGroupsImpliedIdsDto } from './dto/created-res-groups-implied-ids.dto';
import { ResGroupsImpliedIdsNotFoundException } from './error/res-groups-implied-ids-not-found.exception';
import { UpdatedResGroupsImpliedIdsDto } from './dto/updated-res-groups-implied-ids.dto';

@Injectable()
export class ResGroupsImpliedIdsService {
  constructor(
    @InjectRepository(ResGroupsImpliedIds)
    private readonly resGroupsImpliedIdsRepository: Repository<ResGroupsImpliedIds>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ResGroupsImpliedIds[] | undefined> {
    const offset = (page - 1) * perPage;
    const resGroupsImpliedIds = await this.resGroupsImpliedIdsRepository
      .createQueryBuilder('resGroupsImpliedIds')
      .take(perPage)
      .skip(offset)
      .getMany();
    return resGroupsImpliedIds;
  }

  async create(
    createResGroupsImpliedIdsDto: CreateResGroupsImpliedIdsDto,
  ): Promise<ResGroupsImpliedIds> {
    const resGroupsImpliedIds = new ResGroupsImpliedIds(
      createResGroupsImpliedIdsDto,
    );
    return await this.resGroupsImpliedIdsRepository.save(resGroupsImpliedIds);
  }

  async findOne(id: number): Promise<ResGroupsImpliedIds> {
    const resGroupsImpliedIds = await this.resGroupsImpliedIdsRepository
      .createQueryBuilder('resGroupsImpliedIds')
      .where('resGroupsImpliedIds.id = :id', { id })
      .getOne();
    if (!resGroupsImpliedIds) {
      throw new ResGroupsImpliedIdsNotFoundException();
    }
    return resGroupsImpliedIds;
  }

  async updated(
    id: number,
    updatedResGroupsImpliedIdsDto: UpdatedResGroupsImpliedIdsDto,
  ): Promise<ResGroupsImpliedIds> {
    const resGroupsImpliedIds = await this.resGroupsImpliedIdsRepository
      .createQueryBuilder('resGroupsImpliedIds')
      .where('resGroupsImpliedIds.id = :id', { id })
      .getOne();
    if (!resGroupsImpliedIds) {
      throw new ResGroupsImpliedIdsNotFoundException();
    }
    Object.assign(resGroupsImpliedIds, updatedResGroupsImpliedIdsDto);
    return await this.resGroupsImpliedIdsRepository.save(resGroupsImpliedIds);
  }

  async deleted(id: number): Promise<void> {
    const resGroupsImpliedIds = await this.resGroupsImpliedIdsRepository
      .createQueryBuilder('resGroupsImpliedIds')
      .where('resGroupsImpliedIds.id = :id', { id })
      .getOne();
    if (!resGroupsImpliedIds) {
      throw new ResGroupsImpliedIdsNotFoundException();
    }
    await this.resGroupsImpliedIdsRepository.softRemove(resGroupsImpliedIds);
  }
}
