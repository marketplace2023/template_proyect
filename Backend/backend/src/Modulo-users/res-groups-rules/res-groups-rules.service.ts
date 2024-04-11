import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResGroupsRules } from './entities/res-groups-rules.entity';
import { Repository } from 'typeorm';
import { CreateResGroupsRulesDto } from './dto/created-res-groups-rules.dto';
import { ResGroupsRulesNotFoundException } from './error/res-groups-rules-not-found.exception';
import { UpdatedResGroupsRulesDto } from './dto/updated-res-groups-rules.dto';

@Injectable()
export class ResGroupsRulesService {
  constructor(
    @InjectRepository(ResGroupsRules)
    private readonly resGroupsRulesRepository: Repository<ResGroupsRules>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ResGroupsRules[] | undefined> {
    const offset = (page - 1) * perPage;
    const resGroupsRules = await this.resGroupsRulesRepository
      .createQueryBuilder('resGroupsRules')
      .take(perPage)
      .skip(offset)
      .getMany();
    return resGroupsRules;
  }

  async create(
    createResGroupsRulesDto: CreateResGroupsRulesDto,
  ): Promise<ResGroupsRules> {
    const resGroupsRules = new ResGroupsRules(createResGroupsRulesDto);
    return await this.resGroupsRulesRepository.save(resGroupsRules);
  }

  async findOne(id: number): Promise<ResGroupsRules> {
    const resGroupsRules = await this.resGroupsRulesRepository
      .createQueryBuilder('resGroupsRules')
      .where('resGroupsRules.id = :id', { id })
      .getOne();
    if (!resGroupsRules) {
      throw new ResGroupsRulesNotFoundException();
    }
    return resGroupsRules;
  }

  async updated(
    id: number,
    updatedResGroupsRulesDto: UpdatedResGroupsRulesDto,
  ): Promise<ResGroupsRules> {
    const resGroupsRules = await this.resGroupsRulesRepository
      .createQueryBuilder('resGroupsRules')
      .where('resGroupsRules.id = :id', { id })
      .getOne();
    if (!resGroupsRules) {
      throw new ResGroupsRulesNotFoundException();
    }
    Object.assign(resGroupsRules, updatedResGroupsRulesDto);
    return await this.resGroupsRulesRepository.save(resGroupsRules);
  }

  async deleted(id: number): Promise<void> {
    const resGroupsRules = await this.resGroupsRulesRepository
      .createQueryBuilder('resGroupsRules')
      .where('resGroupsRules.id = :id', { id })
      .getOne();
    if (!resGroupsRules) {
      throw new ResGroupsRulesNotFoundException();
    }
    await this.resGroupsRulesRepository.softRemove(resGroupsRules);
  }
}
