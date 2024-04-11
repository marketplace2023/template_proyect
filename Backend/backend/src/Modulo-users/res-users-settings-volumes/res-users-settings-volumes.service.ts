import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResUsersSettingsVolumesNotFoundException } from './error/res-users-settings-volumes-not-fount.exception';
import { ResUsersSettingsVolumes } from './entities/res-users-settings-volumes.entity';
import { UpdatedResUsersSettingsVolumesDto } from './dto/updated-res-users-settings-volumes.dto';
import { CreateResUsersSettingsVolumesDto } from './dto/created-res-users-settings-volumes.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ResUsersSettingsVolumesService {
  constructor(
    @InjectRepository(ResUsersSettingsVolumes)
    private readonly resUsersSettingsVolumesRepository: Repository<ResUsersSettingsVolumes>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ResUsersSettingsVolumes[] | undefined> {
    const offset = (page - 1) * perPage;
    const resUsersSettingsVolumes = await this.resUsersSettingsVolumesRepository
      .createQueryBuilder('resUsersSettingsVolumes')
      .take(perPage)
      .skip(offset)
      .getMany();
    return resUsersSettingsVolumes;
  }

  async create(
    createResUsersSettingsVolumesDto: CreateResUsersSettingsVolumesDto,
  ): Promise<ResUsersSettingsVolumes> {
    const resUsersSettingsVolumes = new ResUsersSettingsVolumes(
      createResUsersSettingsVolumesDto,
    );
    return await this.resUsersSettingsVolumesRepository.save(
      resUsersSettingsVolumes,
    );
  }

  async findOne(id: number): Promise<ResUsersSettingsVolumes> {
    const resUsersSettingsVolumes = await this.resUsersSettingsVolumesRepository
      .createQueryBuilder('resUsersSettingsVolumes')
      .where('resUsersSettingsVolumes.id = :id', { id })
      .getOne();
    if (!resUsersSettingsVolumes) {
      throw new ResUsersSettingsVolumesNotFoundException();
    }
    return resUsersSettingsVolumes;
  }

  async updated(
    id: number,
    updatedResUsersSettingsVolumesDto: UpdatedResUsersSettingsVolumesDto,
  ): Promise<ResUsersSettingsVolumes> {
    const resUsersSettingsVolumes = await this.resUsersSettingsVolumesRepository
      .createQueryBuilder('resUsersSettingsVolumes')
      .where('resUsersSettingsVolumes.id = :id', { id })
      .getOne();
    if (!resUsersSettingsVolumes) {
      throw new ResUsersSettingsVolumesNotFoundException();
    }
    Object.assign(resUsersSettingsVolumes, updatedResUsersSettingsVolumesDto);
    return await this.resUsersSettingsVolumesRepository.save(
      resUsersSettingsVolumes,
    );
  }

  async deleted(id: number): Promise<void> {
    const resUsersSettingsVolumes = await this.resUsersSettingsVolumesRepository
      .createQueryBuilder('resUsersSettingsVolumes')
      .where('resUsersSettingsVolumes.id = :id', { id })
      .getOne();
    if (!resUsersSettingsVolumes) {
      throw new ResUsersSettingsVolumesNotFoundException();
    }
    await this.resUsersSettingsVolumesRepository.softRemove(
      resUsersSettingsVolumes,
    );
  }
}
