import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategoryImage } from './entities/product-category-image.entity';
import { CreatedProductCategoryImageDto } from './dto/created-product-category-image.dto';
import { productCategoryImageNotFoundException } from './error/product-category-image-not-found.exception';
import { UpdatedProductCategoryImageDto } from './dto/updated-product-category-image.dto';

@Injectable()
export class ProductCategoryImageService {
  constructor(
    @InjectRepository(ProductCategoryImage)
    private readonly productCategoryImageRepository: Repository<ProductCategoryImage>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductCategoryImage[] | undefined> {
    const offset = (page - 1) * perPage;
    const productCategoryImage = await this.productCategoryImageRepository
      .createQueryBuilder('productCategoryImage')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productCategoryImage;
  }

  async create(
    createdProductCategoryImageDto: CreatedProductCategoryImageDto,
  ): Promise<ProductCategoryImage> {
    const productCategoryImage = new ProductCategoryImage(
      createdProductCategoryImageDto,
    );
    return await this.productCategoryImageRepository.save(productCategoryImage);
  }

  async findOne(id: number): Promise<ProductCategoryImage> {
    const productCategoryImage = await this.productCategoryImageRepository
      .createQueryBuilder('productCategoryImage')
      .where('productCategoryImage.id = :id', { id })
      .getOne();
    if (!productCategoryImage) {
      throw new productCategoryImageNotFoundException();
    }
    return productCategoryImage;
  }

  async updated(
    id: number,
    updatedProductCategoryImageDto: UpdatedProductCategoryImageDto,
  ): Promise<ProductCategoryImage> {
    const productCategoryImage = await this.productCategoryImageRepository
      .createQueryBuilder('productCategoryImage')
      .where('productCategoryImage.id = :id', { id })
      .getOne();
    if (!productCategoryImage) {
      throw new productCategoryImageNotFoundException();
    }
    Object.assign(productCategoryImage, updatedProductCategoryImageDto);
    return await this.productCategoryImageRepository.save(productCategoryImage);
  }

  async deleted(id: number): Promise<void> {
    const productCategoryImage = await this.productCategoryImageRepository
      .createQueryBuilder('productCategoryImage')
      .where('productCategoryImage.id = :id', { id })
      .getOne();
    if (!productCategoryImage) {
      throw new productCategoryImageNotFoundException();
    }
    await this.productCategoryImageRepository.softRemove(productCategoryImage);
  }
}
