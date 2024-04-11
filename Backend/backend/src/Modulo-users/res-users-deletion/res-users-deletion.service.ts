import { Injectable } from '@nestjs/common';
import { ResUsersDeletionNotFoundException } from './error/res-users-deletion-not-found.exception';
import { ResUsersDeletion } from './entities/res-users-deletion.entity';
import { UpdatedResUsersDeletionDto } from './dto/updated-res-users-deletion.dto';
import { CreateResUsersDeletionDto } from './dto/created-res-users-deletion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ResUsersDeletionService {
  constructor(
    @InjectRepository(ResUsersDeletion)
    private readonly resUsersDeletionRepository: Repository<ResUsersDeletion>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ResUsersDeletion[] | undefined> {
    const offset = (page - 1) * perPage;
    const resUsersDeletion = await this.resUsersDeletionRepository
      .createQueryBuilder('resUsersDeletion')
      .take(perPage)
      .skip(offset)
      .getMany();
    return resUsersDeletion;
  }

  async create(
    createResUsersDeletionDto: CreateResUsersDeletionDto,
  ): Promise<ResUsersDeletion> {
    const resUsersDeletion = new ResUsersDeletion(createResUsersDeletionDto);
    return await this.resUsersDeletionRepository.save(resUsersDeletion);
  }

  async findOne(id: number): Promise<ResUsersDeletion> {
    const resUsersDeletion = await this.resUsersDeletionRepository
      .createQueryBuilder('resUsersDeletion')
      .where('resUsersDeletion.id = :id', { id })
      .getOne();
    if (!resUsersDeletion) {
      throw new ResUsersDeletionNotFoundException();
    }
    return resUsersDeletion;
  }

  async updated(
    id: number,
    updatedResUsersDeletionDto: UpdatedResUsersDeletionDto,
  ): Promise<ResUsersDeletion> {
    const resUsersDeletion = await this.resUsersDeletionRepository
      .createQueryBuilder('resUsersDeletion')
      .where('resUsersDeletion.id = :id', { id })
      .getOne();
    if (!resUsersDeletion) {
      throw new ResUsersDeletionNotFoundException();
    }
    Object.assign(resUsersDeletion, updatedResUsersDeletionDto);
    return await this.resUsersDeletionRepository.save(resUsersDeletion);
  }

  async deleted(id: number): Promise<void> {
    const resUsersDeletion = await this.resUsersDeletionRepository
      .createQueryBuilder('resUsersDeletion')
      .where('resUsersDeletion.id = :id', { id })
      .getOne();
    if (!resUsersDeletion) {
      throw new ResUsersDeletionNotFoundException();
    }
    await this.resUsersDeletionRepository.softRemove(resUsersDeletion);
  }
}
