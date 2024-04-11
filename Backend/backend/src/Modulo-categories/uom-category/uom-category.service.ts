import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UomCategory } from './entities/uom-category-entity';
import { Repository } from 'typeorm';
import { CreateUomCategoryDto } from './dto/create-uom-category.dto';
import { UomCategoryNotFoundException } from './error/uom-category-not-found.exception';
import { UpdatedUomCategoryDto } from './dto/updated-uom-category.dto';

@Injectable()
export class UomCategoryService {
  constructor(
    @InjectRepository(UomCategory)
    private readonly uomCategoryRepository: Repository<UomCategory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<UomCategory[] | undefined> {
    const offset = (page - 1) * perPage;
    const uomCategory = await this.uomCategoryRepository
      .createQueryBuilder('uomCategory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return uomCategory;
  }

  async create(
    createUomCategoryDto: CreateUomCategoryDto,
  ): Promise<UomCategory> {
    const uomCategory = new UomCategory(createUomCategoryDto);
    return await this.uomCategoryRepository.save(uomCategory);
  }

  async findOne(id: number): Promise<UomCategory> {
    const uomCategory = await this.uomCategoryRepository
      .createQueryBuilder('uomCategory')
      .where('uomCategory.id = :id', { id })
      .getOne();
    if (!uomCategory) {
      throw new UomCategoryNotFoundException();
    }
    return uomCategory;
  }

  async updated(
    id: number,
    updatedUomCategoryDto: UpdatedUomCategoryDto,
  ): Promise<UomCategory> {
    const uomCategory = await this.uomCategoryRepository
      .createQueryBuilder('uomCategory')
      .where('uomCategory.id = :id', { id })
      .getOne();
    if (!uomCategory) {
      throw new UomCategoryNotFoundException();
    }
    Object.assign(uomCategory, updatedUomCategoryDto);
    return await this.uomCategoryRepository.save(uomCategory);
  }

  async deleted(id: number): Promise<void> {
    const uomCategory = await this.uomCategoryRepository
      .createQueryBuilder('uomCategory')
      .where('uomCategory.id = :id', { id })
      .getOne();
    if (!uomCategory) {
      throw new UomCategoryNotFoundException();
    }
    await this.uomCategoryRepository.softRemove(uomCategory);
    console.log('uomCategory Eliminado');
  }
}
