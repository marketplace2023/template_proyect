import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductImage } from './entities/product-image.entity';
import { UpdatedProductImageDto } from './dto/updated-product-image.dto';
import { CreateProductImageDto } from './dto/created-product-image.dto';
import { Repository } from 'typeorm';
import { ProductImageNotFoundException } from './error/product-image-not-found.exception';

@Injectable()
export class ProductImageService {
  constructor(
    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductImage[] | undefined> {
    const offset = (page - 1) * perPage;
    const productImage = await this.productImageRepository
      .createQueryBuilder('productImage')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productImage;
  }

  async create(
    createProductImageDto: CreateProductImageDto,
  ): Promise<ProductImage> {
    const productImage = new ProductImage(createProductImageDto);
    return await this.productImageRepository.save(productImage);
  }

  async findOne(id: number): Promise<ProductImage> {
    const productImage = await this.productImageRepository
      .createQueryBuilder('productImage')
      .where('productImage.id = :id', { id })
      .getOne();
    if (!productImage) {
      throw new ProductImageNotFoundException();
    }
    return productImage;
  }

  async updated(
    id: number,
    updatedProductImageDto: UpdatedProductImageDto,
  ): Promise<ProductImage> {
    const productImage = await this.productImageRepository
      .createQueryBuilder('productImage')
      .where('productImage.id = :id', { id })
      .getOne();
    if (!productImage) {
      throw new ProductImageNotFoundException();
    }
    Object.assign(productImage, updatedProductImageDto);
    return await this.productImageRepository.save(productImage);
  }

  async deleted(id: number): Promise<void> {
    const productImage = await this.productImageRepository
      .createQueryBuilder('productImage')
      .where('productImage.id = :id', { id })
      .getOne();
    if (!productImage) {
      throw new ProductImageNotFoundException();
    }
    await this.productImageRepository.softRemove(productImage);
    console.log('ProductImage Eliminado');
  }
}
