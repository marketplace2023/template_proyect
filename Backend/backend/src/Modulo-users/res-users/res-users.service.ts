import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { ResUsers } from './entities/res-users.entity';
import { ResGroups } from '../res-groups/entities/res-groups.entity';
import { Repository } from 'typeorm';
import { CreateResUsersDto } from './dto/create-res-users.dto';
import { UpdatedResUsersDto } from './dto/updated-res-users.dto';
import { ResUsersNotFoundException } from './error/res-users-not-found.exception';

@Injectable()
export class ResUsersService {
  constructor(
    @InjectRepository(ResUsers)
    private readonly resUsersRepository: Repository<ResUsers>,
    @InjectRepository(ResGroups)
    private readonly resGroupsRepository: Repository<ResGroups>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ResUsers[] | undefined> {
    const offset = (page - 1) * perPage;
    const resUsers = await this.resUsersRepository
      .createQueryBuilder('resUsers')
      .take(perPage)
      .skip(offset)
      .getMany();
    return resUsers;
  }

  async create(createResUsersDto: CreateResUsersDto): Promise<ResUsers> {
    const resUsers = new ResUsers(createResUsersDto);
    resUsers.password = await bcrypt.hash(createResUsersDto.password, 8);
    //Relación
    const Groups = await this.resGroupsRepository
      .createQueryBuilder('resGroups')
      .whereInIds(createResUsersDto.grupo)
      .getMany();
    resUsers.resGroups = Groups;
    return await this.resUsersRepository.save(resUsers);
  }

  async findOneByEmail(email: string): Promise<ResUsers | undefined> {
    return await this.resUsersRepository.findOne({ where: { email } });
  }

  async findOne(id: number): Promise<ResUsers> {
    const resUsers = await this.resUsersRepository
      .createQueryBuilder('resUsers')
      .where('resUsers.id = :id', { id })
      .getOne();
    if (!resUsers) {
      throw new ResUsersNotFoundException();
    }
    return resUsers;
  }

  async updated(
    id: number,
    updatedResUsersDto: UpdatedResUsersDto,
  ): Promise<ResUsers> {
    const resUsers = await this.resUsersRepository
      .createQueryBuilder('resUsers')
      .where('resUsers.id = :id', { id })
      .getOne();
    if (!resUsers) {
      throw new ResUsersNotFoundException();
    }
    Object.assign(resUsers, updatedResUsersDto);
    return await this.resUsersRepository.save(resUsers);
  }

  async deleted(id: number): Promise<void> {
    const resUsers = await this.resUsersRepository
      .createQueryBuilder('resUsers')
      .where('resUsers.id = :id', { id })
      .getOne();
    if (!resUsers) {
      throw new ResUsersNotFoundException();
    }
    await this.resUsersRepository.softRemove(resUsers);
  }
}
