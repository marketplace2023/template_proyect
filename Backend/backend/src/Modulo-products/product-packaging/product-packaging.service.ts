import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductPackaging } from './entities/product-packaging.entity';
import { Repository } from 'typeorm';
import { CreateProductPackagingDto } from './dto/created-product-packaging.dto';
import { ProductPackagingNotFoundException } from './error/product-packaging-not-found.exception';
import { UpdatedProductPackagingDto } from './dto/updated-product-packaging.dto';

@Injectable()
export class ProductPackagingService {
  constructor(
    @InjectRepository(ProductPackaging)
    private readonly productPackagingRepository: Repository<ProductPackaging>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductPackaging[] | undefined> {
    const offset = (page - 1) * perPage;
    const productPackaging = await this.productPackagingRepository
      .createQueryBuilder('productPackaging')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productPackaging;
  }

  async create(
    createProductPackagingDto: CreateProductPackagingDto,
  ): Promise<ProductPackaging> {
    const productPackaging = new ProductPackaging(createProductPackagingDto);
    return await this.productPackagingRepository.save(productPackaging);
  }

  async findOne(id: number): Promise<ProductPackaging> {
    const productPackaging = await this.productPackagingRepository
      .createQueryBuilder('productPackaging')
      .where('productPackaging.id = :id', { id })
      .getOne();
    if (!productPackaging) {
      throw new ProductPackagingNotFoundException();
    }
    return productPackaging;
  }

  async updated(
    id: number,
    updatedProductPackagingDto: UpdatedProductPackagingDto,
  ): Promise<ProductPackaging> {
    const productPackaging = await this.productPackagingRepository
      .createQueryBuilder('productPackaging')
      .where('productPackaging.id = :id', { id })
      .getOne();
    if (!productPackaging) {
      throw new ProductPackagingNotFoundException();
    }
    Object.assign(productPackaging, updatedProductPackagingDto);
    return await this.productPackagingRepository.save(productPackaging);
  }

  async deleted(id: number): Promise<void> {
    const productPackaging = await this.productPackagingRepository
      .createQueryBuilder('productPackaging')
      .where('productPackaging.id = :id', { id })
      .getOne();
    if (!productPackaging) {
      throw new ProductPackagingNotFoundException();
    }
    await this.productPackagingRepository.softRemove(productPackaging);
    console.log('ProductPackaging Eliminado');
  }
}
