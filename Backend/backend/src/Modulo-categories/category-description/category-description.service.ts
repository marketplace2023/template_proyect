import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryDescription } from './entities/category-description.entity';
import { CategoryDescriptionNotFoundException } from './error/category-description-not-found.exception';
import { UpdatedCategoryDescriptionDto } from './dto/updated-category-description.dto';
import { CreatedCategoryDescriptionDto } from './dto/created-category-description.dto';

@Injectable()
export class CategoryDescriptionService {
  constructor(
    @InjectRepository(CategoryDescription)
    private readonly categoryDescriptionRepository: Repository<CategoryDescription>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<CategoryDescription[] | undefined> {
    const offset = (page - 1) * perPage;
    const categoryDescription = await this.categoryDescriptionRepository
      .createQueryBuilder('categoryDescription')
      .take(perPage)
      .skip(offset)
      .getMany();
    return categoryDescription;
  }

  async create(
    createCategoryDescriptionDto: CreatedCategoryDescriptionDto,
  ): Promise<CategoryDescription> {
    const categoryDescription = new CategoryDescription(
      createCategoryDescriptionDto,
    );
    return await this.categoryDescriptionRepository.save(categoryDescription);
  }

  async findOne(id: number): Promise<CategoryDescription> {
    const categoryDescription = await this.categoryDescriptionRepository
      .createQueryBuilder('categoryDescription')
      .where('categoryDescription.id = :id', { id })
      .getOne();
    if (!categoryDescription) {
      throw new CategoryDescriptionNotFoundException();
    }
    return categoryDescription;
  }

  async updated(
    id: number,
    updatedCategoryDescriptionDto: UpdatedCategoryDescriptionDto,
  ): Promise<CategoryDescription> {
    const categoryDescription = await this.categoryDescriptionRepository
      .createQueryBuilder('categoryDescription')
      .where('categoryDescription.id = :id', { id })
      .getOne();
    if (!categoryDescription) {
      throw new CategoryDescriptionNotFoundException();
    }
    Object.assign(categoryDescription, updatedCategoryDescriptionDto);
    return await this.categoryDescriptionRepository.save(categoryDescription);
  }

  async deleted(id: number): Promise<void> {
    const categoryDescription = await this.categoryDescriptionRepository
      .createQueryBuilder('categoryDescription')
      .where('categoryDescription.id = :id', { id })
      .getOne();
    if (!categoryDescription) {
      throw new CategoryDescriptionNotFoundException();
    }
    await this.categoryDescriptionRepository.softRemove(categoryDescription);
  }
}
