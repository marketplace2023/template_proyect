import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResUsersLog } from './entities/res-users-log.entity';
import { Repository } from 'typeorm';
import { CreateResUsersLogDto } from './dto/created-res-users-log.dto';
import { ResUsersLogNotFoundException } from './error/res-users-log-not-found.exception';
import { UpdatedResUsersLogDto } from './dto/updated-res-users-log.dto';

@Injectable()
export class ResUsersLogService {
  constructor(
    @InjectRepository(ResUsersLog)
    private readonly resUsersLogRepository: Repository<ResUsersLog>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ResUsersLog[] | undefined> {
    const offset = (page - 1) * perPage;
    const resUsersLog = await this.resUsersLogRepository
      .createQueryBuilder('resUsersLog')
      .take(perPage)
      .skip(offset)
      .getMany();
    return resUsersLog;
  }

  async create(
    createResUsersLogDto: CreateResUsersLogDto,
  ): Promise<ResUsersLog> {
    const resUsersLog = new ResUsersLog(createResUsersLogDto);
    return await this.resUsersLogRepository.save(resUsersLog);
  }

  async findOne(id: number): Promise<ResUsersLog> {
    const resUsersLog = await this.resUsersLogRepository
      .createQueryBuilder('resUsersLog')
      .where('resUsersLog.id = :id', { id })
      .getOne();
    if (!resUsersLog) {
      throw new ResUsersLogNotFoundException();
    }
    return resUsersLog;
  }

  async updated(
    id: number,
    updatedResUsersLogDto: UpdatedResUsersLogDto,
  ): Promise<ResUsersLog> {
    const resUsersLog = await this.resUsersLogRepository
      .createQueryBuilder('resUsersLog')
      .where('resUsersLog.id = :id', { id })
      .getOne();
    if (!resUsersLog) {
      throw new ResUsersLogNotFoundException();
    }
    Object.assign(resUsersLog, updatedResUsersLogDto);
    return await this.resUsersLogRepository.save(resUsersLog);
  }

  async deleted(id: number): Promise<void> {
    const resUsersLog = await this.resUsersLogRepository
      .createQueryBuilder('resUsersLog')
      .where('resUsersLog.id = :id', { id })
      .getOne();
    if (!resUsersLog) {
      throw new ResUsersLogNotFoundException();
    }
    await this.resUsersLogRepository.softRemove(resUsersLog);
    console.log('resUsersLog Eliminado');
  }
}
