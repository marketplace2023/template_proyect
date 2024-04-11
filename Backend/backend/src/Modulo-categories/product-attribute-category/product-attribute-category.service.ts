import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductAttributeCategory } from './entities/product-attribute-category.entity';
import { ProductAttributeCategoryNotFoundException } from './error/product-attribute-category-not-found.exception';
import { UpdatedProductAttributeCategoryDto } from './dto/updated-product-attribute-category.dto';
import { CreatedProductAttributeCategoryDto } from './dto/created-product-attribute-category.dto';

@Injectable()
export class ProductAttributeCategoryService {
  constructor(
    @InjectRepository(ProductAttributeCategory)
    private readonly productAttributeCategoryRepository: Repository<ProductAttributeCategory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductAttributeCategory[] | undefined> {
    const offset = (page - 1) * perPage;
    const productAttributeCategory =
      await this.productAttributeCategoryRepository
        .createQueryBuilder('productAttributeCategory')
        .take(perPage)
        .skip(offset)
        .getMany();
    return productAttributeCategory;
  }

  async create(
    createProductAttributeCategoryDto: CreatedProductAttributeCategoryDto,
  ): Promise<ProductAttributeCategory> {
    const productAttributeCategory = new ProductAttributeCategory(
      createProductAttributeCategoryDto,
    );
    return await this.productAttributeCategoryRepository.save(
      productAttributeCategory,
    );
  }

  async findOne(id: number): Promise<ProductAttributeCategory> {
    const productAttributeCategory =
      await this.productAttributeCategoryRepository
        .createQueryBuilder('productAttributeCategory')
        .where('productAttributeCategory.id = :id', { id })
        .getOne();
    if (!productAttributeCategory) {
      throw new ProductAttributeCategoryNotFoundException();
    }
    return productAttributeCategory;
  }

  async updated(
    id: number,
    updatedProductAttributeCategoryDto: UpdatedProductAttributeCategoryDto,
  ): Promise<ProductAttributeCategory> {
    const productAttributeCategory =
      await this.productAttributeCategoryRepository
        .createQueryBuilder('productAttributeCategory')
        .where('productAttributeCategory.id = :id', { id })
        .getOne();
    if (!productAttributeCategory) {
      throw new ProductAttributeCategoryNotFoundException();
    }
    Object.assign(productAttributeCategory, updatedProductAttributeCategoryDto);
    return await this.productAttributeCategoryRepository.save(
      productAttributeCategory,
    );
  }

  async deleted(id: number): Promise<void> {
    const productAttributeCategory =
      await this.productAttributeCategoryRepository
        .createQueryBuilder('productAttributeCategory')
        .where('productAttributeCategory.id = :id', { id })
        .getOne();
    if (!productAttributeCategory) {
      throw new ProductAttributeCategoryNotFoundException();
    }
    await this.productAttributeCategoryRepository.softRemove(
      productAttributeCategory,
    );
  }
}
