import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductReplenishNotFoundException } from './error/product-replenish-not-found.exception';
import { UpdatedProductReplenishDto } from './dto/updated-product-replenish.dto';
import { ProductReplenish } from './entities/product-replenish.entity';
import { CreateProductReplenishDto } from './dto/created-product-replenish.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProductReplenishService {
  constructor(
    @InjectRepository(ProductReplenish)
    private readonly productReplenishRepository: Repository<ProductReplenish>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductReplenish[] | undefined> {
    const offset = (page - 1) * perPage;
    console.log(page);
    console.log(perPage);
    const productReplenish = await this.productReplenishRepository
      .createQueryBuilder('productReplenish')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productReplenish;
  }

  async create(
    createProductReplenishDto: CreateProductReplenishDto,
  ): Promise<ProductReplenish> {
    const productReplenish = new ProductReplenish(createProductReplenishDto);
    return await this.productReplenishRepository.save(productReplenish);
  }

  async findOne(id: number): Promise<ProductReplenish> {
    const productReplenish = await this.productReplenishRepository
      .createQueryBuilder('productReplenish')
      .where('productReplenish.id = :id', { id })
      .getOne();
    if (!productReplenish) {
      throw new ProductReplenishNotFoundException();
    }
    return productReplenish;
  }

  async updated(
    id: number,
    updatedProductReplenishDto: UpdatedProductReplenishDto,
  ): Promise<ProductReplenish> {
    const productReplenish = await this.productReplenishRepository
      .createQueryBuilder('productReplenish')
      .where('productReplenish.id = :id', { id })
      .getOne();
    if (!productReplenish) {
      throw new ProductReplenishNotFoundException();
    }
    Object.assign(productReplenish, updatedProductReplenishDto);
    return await this.productReplenishRepository.save(productReplenish);
  }

  async deleted(id: number): Promise<void> {
    const productReplenish = await this.productReplenishRepository
      .createQueryBuilder('productReplenish')
      .where('productReplenish.id = :id', { id })
      .getOne();
    if (!productReplenish) {
      throw new ProductReplenishNotFoundException();
    }
    await this.productReplenishRepository.softRemove(productReplenish);
    console.log('ProductReplenish Eliminado');
  }
}
