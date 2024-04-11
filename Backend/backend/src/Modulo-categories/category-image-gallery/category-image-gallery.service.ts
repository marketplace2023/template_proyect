import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryImageGallery } from './entities/category-image-gallery.entity';
import { CreatedCategoryImageGalleryDto } from './dto/created-category-image-gallery.dto';
import { CategoryImageGalleryNotFoundException } from './error/category-image-gallery-not-found.exception';
import { UpdatedCategoryImageGalleryDto } from './dto/updated-category-image-gallery.dto';

@Injectable()
export class CategoryImageGalleryService {
  constructor(
    @InjectRepository(CategoryImageGallery)
    private readonly categoryImageGalleryRepository: Repository<CategoryImageGallery>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<CategoryImageGallery[] | undefined> {
    const offset = (page - 1) * perPage;
    const categoryImageGallery = await this.categoryImageGalleryRepository
      .createQueryBuilder('categoryImageGallery')
      .take(perPage)
      .skip(offset)
      .getMany();
    return categoryImageGallery;
  }

  async create(
    createCategoryImageGalleryDto: CreatedCategoryImageGalleryDto,
  ): Promise<CategoryImageGallery> {
    const categoryImageGallery = new CategoryImageGallery(
      createCategoryImageGalleryDto,
    );
    return await this.categoryImageGalleryRepository.save(categoryImageGallery);
  }

  async findOne(id: number): Promise<CategoryImageGallery> {
    const categoryImageGallery = await this.categoryImageGalleryRepository
      .createQueryBuilder('categoryImageGallery')
      .where('categoryImageGallery.id = :id', { id })
      .getOne();
    if (!categoryImageGallery) {
      throw new CategoryImageGalleryNotFoundException();
    }
    return categoryImageGallery;
  }

  async updated(
    id: number,
    updatedCategoryImageGalleryDto: UpdatedCategoryImageGalleryDto,
  ): Promise<CategoryImageGallery> {
    const categoryImageGallery = await this.categoryImageGalleryRepository
      .createQueryBuilder('categoryImageGallery')
      .where('categoryImageGallery.id = :id', { id })
      .getOne();
    if (!categoryImageGallery) {
      throw new CategoryImageGalleryNotFoundException();
    }
    Object.assign(categoryImageGallery, updatedCategoryImageGalleryDto);
    return await this.categoryImageGalleryRepository.save(categoryImageGallery);
  }

  async deleted(id: number): Promise<void> {
    const categoryImageGallery = await this.categoryImageGalleryRepository
      .createQueryBuilder('categoryImageGallery')
      .where('categoryImageGallery.id = :id', { id })
      .getOne();
    if (!categoryImageGallery) {
      throw new CategoryImageGalleryNotFoundException();
    }
    await this.categoryImageGalleryRepository.softRemove(categoryImageGallery);
  }
}
