import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResCompany } from './entities/res-company.entity';
import { Repository } from 'typeorm';
import { ResCompanyNotFoundException } from './error/res-company-not-found.exception';
import { UpdatedResCompanyDto } from './dto/updated-res-company.dto';
import { CreateResCompanyDto } from './dto/create-res-company.dto';

@Injectable()
export class ResCompanyService {
  constructor(
    @InjectRepository(ResCompany)
    private readonly resCompanyRepository: Repository<ResCompany>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ResCompany[] | undefined> {
    const offset = (page - 1) * perPage;
    const resCompany = await this.resCompanyRepository
      .createQueryBuilder('resCompany')
      .take(perPage)
      .skip(offset)
      .getMany();
    return resCompany;
  }

  async create(createResCompanyDto: CreateResCompanyDto): Promise<ResCompany> {
    const resCompany = new ResCompany(createResCompanyDto);
    return await this.resCompanyRepository.save(resCompany);
  }

  async findOne(id: number): Promise<ResCompany> {
    const resCompany = await this.resCompanyRepository
      .createQueryBuilder('resCompany')
      .where('resCompany.id = :id', { id })
      .getOne();
    if (!resCompany) {
      throw new ResCompanyNotFoundException();
    }
    return resCompany;
  }

  async updated(
    id: number,
    updatedResCompanyDto: UpdatedResCompanyDto,
  ): Promise<ResCompany> {
    const resCompany = await this.resCompanyRepository
      .createQueryBuilder('resCompany')
      .where('resCompany.id = :id', { id })
      .getOne();
    if (!resCompany) {
      throw new ResCompanyNotFoundException();
    }
    Object.assign(resCompany, updatedResCompanyDto);
    return await this.resCompanyRepository.save(resCompany);
  }

  async deleted(id: number): Promise<void> {
    const resCompany = await this.resCompanyRepository
      .createQueryBuilder('resCompany')
      .where('resCompany.id = :id', { id })
      .getOne();
    if (!resCompany) {
      throw new ResCompanyNotFoundException();
    }
    await this.resCompanyRepository.softRemove(resCompany);
    console.log('users_Company Eliminado');
  }
}
