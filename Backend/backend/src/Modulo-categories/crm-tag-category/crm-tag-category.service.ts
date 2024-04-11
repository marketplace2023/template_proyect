import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrmTagCategoryNotFoundException } from './error/crm-tag-category-not-found.exception';
import { CrmTagCategory } from './entities/crm-tag-category.entity';
import { UpdatedCrmTagCategoryDto } from './dto/updated-crm-tag-category.dto';
import { CreatedCrmTagCategoryDto } from './dto/created-crm-tag-category.dto';

@Injectable()
export class CrmTagCategoryService {
  constructor(
    @InjectRepository(CrmTagCategory)
    private readonly crmTagCategoryRepository: Repository<CrmTagCategory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<CrmTagCategory[] | undefined> {
    const offset = (page - 1) * perPage;
    const crmTagCategory = await this.crmTagCategoryRepository
      .createQueryBuilder('crmTagCategory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return crmTagCategory;
  }

  async create(
    createdCrmTagCategoryDto: CreatedCrmTagCategoryDto,
  ): Promise<CrmTagCategory> {
    const crmTagCategory = new CrmTagCategory(createdCrmTagCategoryDto);
    return await this.crmTagCategoryRepository.save(crmTagCategory);
  }

  async findOne(id: number): Promise<CrmTagCategory> {
    const crmTagCategory = await this.crmTagCategoryRepository
      .createQueryBuilder('crmTagCategory')
      .where('crmTagCategory.id = :id', { id })
      .getOne();
    if (!crmTagCategory) {
      throw new CrmTagCategoryNotFoundException();
    }
    return crmTagCategory;
  }

  async updated(
    id: number,
    updatedCrmTagCategoryDto: UpdatedCrmTagCategoryDto,
  ): Promise<CrmTagCategory> {
    const crmTagCategory = await this.crmTagCategoryRepository
      .createQueryBuilder('crmTagCategory')
      .where('crmTagCategory.id = :id', { id })
      .getOne();
    if (!crmTagCategory) {
      throw new CrmTagCategoryNotFoundException();
    }
    Object.assign(crmTagCategory, updatedCrmTagCategoryDto);
    return await this.crmTagCategoryRepository.save(crmTagCategory);
  }

  async deleted(id: number): Promise<void> {
    const crmTagCategory = await this.crmTagCategoryRepository
      .createQueryBuilder('crmTagCategory')
      .where('crmTagCategory.id = :id', { id })
      .getOne();
    if (!crmTagCategory) {
      throw new CrmTagCategoryNotFoundException();
    }
    await this.crmTagCategoryRepository.softRemove(crmTagCategory);
  }
}
