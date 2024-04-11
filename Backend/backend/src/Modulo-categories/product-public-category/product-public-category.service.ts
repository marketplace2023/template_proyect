import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductPublicCategory } from './entities/product-category-public.entity';
import { Repository } from 'typeorm';
import { CreateProductPublicCategoryDto } from './dto/create-product-public-category.dto';
import { ProductPublicCategoryNotFoundException } from './error/product-category-public-not-found.exception';
import { UpdatedProductsCategoryDto } from 'src/Modulo-products/products-category/dto/updated-products-category.dto';

@Injectable()
export class ProductPublicCategoryService {
  constructor(
    @InjectRepository(ProductPublicCategory)
    private readonly productPublicCategoryRepository: Repository<ProductPublicCategory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductPublicCategory[] | undefined> {
    const offset = (page - 1) * perPage;
    const productPublicCategory = await this.productPublicCategoryRepository
      .createQueryBuilder('productPublicCategory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productPublicCategory;
  }

  async create(
    createProductPublicCategoryDto: CreateProductPublicCategoryDto,
  ): Promise<ProductPublicCategory> {
    const productPublicCategory = new ProductPublicCategory(
      createProductPublicCategoryDto,
    );
    return await this.productPublicCategoryRepository.save(
      productPublicCategory,
    );
  }

  async findOne(id: number): Promise<ProductPublicCategory> {
    const productPublicCategory = await this.productPublicCategoryRepository
      .createQueryBuilder('productPublicCategory')
      .where('productPublicCategory.id = :id', { id })
      .getOne();
    if (!productPublicCategory) {
      throw new ProductPublicCategoryNotFoundException();
    }
    return productPublicCategory;
  }

  async updated(
    id: number,
    updatedProductPublicCategoryDto: UpdatedProductsCategoryDto,
  ): Promise<ProductPublicCategory> {
    const productPublicCategory = await this.productPublicCategoryRepository
      .createQueryBuilder('productPublicCategory')
      .where('productPublicCategory.id = :id', { id })
      .getOne();
    if (!productPublicCategory) {
      throw new ProductPublicCategoryNotFoundException();
    }
    Object.assign(productPublicCategory, updatedProductPublicCategoryDto);
    return await this.productPublicCategoryRepository.save(
      productPublicCategory,
    );
  }

  async deleted(id: number): Promise<void> {
    const productPublicCategory = await this.productPublicCategoryRepository
      .createQueryBuilder('productPublicCategory')
      .where('productPublicCategory.id = :id', { id })
      .getOne();
    if (!productPublicCategory) {
      throw new ProductPublicCategoryNotFoundException();
    }
    await this.productPublicCategoryRepository.softRemove(
      productPublicCategory,
    );
    console.log('productPublicCategory Eliminado');
  }
}
