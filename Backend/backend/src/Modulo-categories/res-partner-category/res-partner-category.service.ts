import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResPartnerCategory } from './entities/res-partner-category.entity';
import { Repository } from 'typeorm';
import { CreateResPartnerCategoryDto } from './dto/create-res-partner-category.dto';
import { ResPartnerCategoryNotFoundException } from './error/res-partner-category-not-found.exception';
import { UpdatedProductsCategoryDto } from 'src/Modulo-products/products-category/dto/updated-products-category.dto';

@Injectable()
export class ResPartnerCategoryService {
  constructor(
    @InjectRepository(ResPartnerCategory)
    private readonly resPartnerCategoryRepository: Repository<ResPartnerCategory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ResPartnerCategory[] | undefined> {
    const offset = (page - 1) * perPage;
    const resPartnerCategory = await this.resPartnerCategoryRepository
      .createQueryBuilder('resPartnerCategory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return resPartnerCategory;
  }

  async create(
    createResPartnerCategoryDto: CreateResPartnerCategoryDto,
  ): Promise<ResPartnerCategory> {
    const resPartnerCategory = new ResPartnerCategory(
      createResPartnerCategoryDto,
    );
    return await this.resPartnerCategoryRepository.save(resPartnerCategory);
  }

  async findOne(id: number): Promise<ResPartnerCategory> {
    const resPartnerCategory = await this.resPartnerCategoryRepository
      .createQueryBuilder('resPartnerCategory')
      .where('resPartnerCategory.id = :id', { id })
      .getOne();
    if (!resPartnerCategory) {
      throw new ResPartnerCategoryNotFoundException();
    }
    return resPartnerCategory;
  }

  async updated(
    id: number,
    updatedResPartnerCategoryDto: UpdatedProductsCategoryDto,
  ): Promise<ResPartnerCategory> {
    const resPartnerCategory = await this.resPartnerCategoryRepository
      .createQueryBuilder('resPartnerCategory')
      .where('resPartnerCategory.id = :id', { id })
      .getOne();
    if (!resPartnerCategory) {
      throw new ResPartnerCategoryNotFoundException();
    }
    Object.assign(resPartnerCategory, updatedResPartnerCategoryDto);
    return await this.resPartnerCategoryRepository.save(resPartnerCategory);
  }

  async deleted(id: number): Promise<void> {
    const resPartnerCategory = await this.resPartnerCategoryRepository
      .createQueryBuilder('resPartnerCategory')
      .where('resPartnerCategory.id = :id', { id })
      .getOne();
    if (!resPartnerCategory) {
      throw new ResPartnerCategoryNotFoundException();
    }
    await this.resPartnerCategoryRepository.softRemove(resPartnerCategory);
    console.log('resPartnerCategory Eliminado');
  }
}
