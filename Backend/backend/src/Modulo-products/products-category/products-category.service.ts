import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsCategory } from './entities/products-category.entity';
import { Repository } from 'typeorm';
import { CreateProductsCategoryDto } from './dto/create-products-category.dto';
import { ProductsCategoryNotFoundException } from './error/products-category-not-found.exception';
import { UpdatedProductsCategoryDto } from './dto/updated-products-category.dto';

@Injectable()
export class ProductsCategoryService {
  constructor(
    @InjectRepository(ProductsCategory)
    private readonly productsCategoryRepository: Repository<ProductsCategory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductsCategory[] | undefined> {
    const offset = (page - 1) * perPage;
    const productsCategory = await this.productsCategoryRepository
      .createQueryBuilder('productsCategory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productsCategory;
  }

  async create(
    createProductsCategoryDto: CreateProductsCategoryDto,
  ): Promise<ProductsCategory> {
    const productsCategory = new ProductsCategory(createProductsCategoryDto);
    return await this.productsCategoryRepository.save(productsCategory);
  }

  async findOne(id: number): Promise<ProductsCategory> {
    const productsCategory = await this.productsCategoryRepository
      .createQueryBuilder('productsCategory')
      .where('productsCategory.id = :id', { id })
      .getOne();
    if (!productsCategory) {
      throw new ProductsCategoryNotFoundException();
    }
    return productsCategory;
  }

  async updated(
    id: number,
    updatedProductsCategoryDto: UpdatedProductsCategoryDto,
  ): Promise<ProductsCategory> {
    const productsCategory = await this.productsCategoryRepository
      .createQueryBuilder('productsCategory')
      .where('productsCategory.id = :id', { id })
      .getOne();
    if (!productsCategory) {
      throw new ProductsCategoryNotFoundException();
    }
    Object.assign(productsCategory, updatedProductsCategoryDto);
    return await this.productsCategoryRepository.save(productsCategory);
  }

  async deleted(id: number): Promise<void> {
    const productsCategory = await this.productsCategoryRepository
      .createQueryBuilder('productsCategory')
      .where('productsCategory.id = :id', { id })
      .getOne();
    if (!productsCategory) {
      throw new ProductsCategoryNotFoundException();
    }
    await this.productsCategoryRepository.softRemove(productsCategory);
    console.log('Productos Eliminado');
  }
}
