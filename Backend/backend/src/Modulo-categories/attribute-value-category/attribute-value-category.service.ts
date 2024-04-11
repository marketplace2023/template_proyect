import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttributeValueCategory } from './entities/attribute-value-category.entity';
import { Repository } from 'typeorm';
import { AttributeValueCategoryNotFoundException } from './error/attribute-value-category-not-found.exception';
import { CreatedAttributeValueCategoryDto } from './dto/created-attribute-value-category.dto';
import { UpdatedAttributeValueCategoryDto } from './dto/updated-attribute-value-category.dto';

@Injectable()
export class AttributeValueCategoryService {
  constructor(
    @InjectRepository(AttributeValueCategory)
    private readonly attributeValueCategoryRepository: Repository<AttributeValueCategory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AttributeValueCategory[] | undefined> {
    const offset = (page - 1) * perPage;
    const attributeValueCategory = await this.attributeValueCategoryRepository
      .createQueryBuilder('attributeValueCategory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return attributeValueCategory;
  }

  async create(
    createAttributeValueCategoryDto: CreatedAttributeValueCategoryDto,
  ): Promise<AttributeValueCategory> {
    const attributeValueCategory = new AttributeValueCategory(
      createAttributeValueCategoryDto,
    );
    return await this.attributeValueCategoryRepository.save(
      attributeValueCategory,
    );
  }

  async findOne(id: number): Promise<AttributeValueCategory> {
    const attributeValueCategory = await this.attributeValueCategoryRepository
      .createQueryBuilder('attributeValueCategory')
      .where('attributeValueCategory.id = :id', { id })
      .getOne();
    if (!attributeValueCategory) {
      throw new AttributeValueCategoryNotFoundException();
    }
    return attributeValueCategory;
  }

  async updated(
    id: number,
    updatedAttributeValueCategoryDto: UpdatedAttributeValueCategoryDto,
  ): Promise<AttributeValueCategory> {
    const attributeValueCategory = await this.attributeValueCategoryRepository
      .createQueryBuilder('attributeValueCategory')
      .where('attributeValueCategory.id = :id', { id })
      .getOne();
    if (!attributeValueCategory) {
      throw new AttributeValueCategoryNotFoundException();
    }
    Object.assign(attributeValueCategory, updatedAttributeValueCategoryDto);
    return await this.attributeValueCategoryRepository.save(
      attributeValueCategory,
    );
  }

  async deleted(id: number): Promise<void> {
    const attributeValueCategory = await this.attributeValueCategoryRepository
      .createQueryBuilder('attributeValueCategory')
      .where('attributeValueCategory.id = :id', { id })
      .getOne();
    if (!attributeValueCategory) {
      throw new AttributeValueCategoryNotFoundException();
    }
    await this.attributeValueCategoryRepository.softRemove(
      attributeValueCategory,
    );
  }
}
