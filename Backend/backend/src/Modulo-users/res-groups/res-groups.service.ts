import { Injectable } from '@nestjs/common';
import { ResGroupsNotFoundException } from './error/res-groups-not-found.exception';
import { ResGroups } from './entities/res-groups.entity';
import { UpdatedResGroupsDto } from './dto/updated-res-groups.dto';
import { CreateResGroupsDto } from './dto/create-res-groups.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResGroupsDeleteNotFoundException } from './error/res-groups-delete-not-found.exception';

@Injectable()
export class ResGroupsService {
  constructor(
    @InjectRepository(ResGroups)
    private readonly resGroupsRepository: Repository<ResGroups>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ResGroups[] | undefined> {
    const offset = (page - 1) * perPage;
    const resGroups = await this.resGroupsRepository
      .createQueryBuilder('resGroups')
      .take(perPage)
      .skip(offset)
      .getMany();
    return resGroups;
  }

  async create(createResGroupsDto: CreateResGroupsDto): Promise<ResGroups> {
    const resGroups = new ResGroups(createResGroupsDto);
    return await this.resGroupsRepository.save(resGroups);
  }

  async findOne(id: number): Promise<ResGroups> {
    const resGroups = await this.resGroupsRepository
      .createQueryBuilder('resGroups')
      .where('resGroups.id = :id', { id })
      .getOne();
    if (!resGroups) {
      throw new ResGroupsNotFoundException();
    }
    return resGroups;
  }

  async updated(
    id: number,
    updatedResGroupsDto: UpdatedResGroupsDto,
  ): Promise<ResGroups> {
    const resGroups = await this.resGroupsRepository
      .createQueryBuilder('resGroups')
      .where('resGroups.id = :id', { id })
      .getOne();
    if (!resGroups) {
      throw new ResGroupsNotFoundException();
    }
    Object.assign(resGroups, updatedResGroupsDto);
    return await this.resGroupsRepository.save(resGroups);
  }

  async deleted(id: number): Promise<void> {
    const resGroups = await this.resGroupsRepository
      .createQueryBuilder('resGroups')
      .where('resGroups.id = :id', { id })
      .getOne();
    if (!resGroups) {
      throw new ResGroupsDeleteNotFoundException();
    }
    await this.resGroupsRepository.softRemove(resGroups);
  }
}
