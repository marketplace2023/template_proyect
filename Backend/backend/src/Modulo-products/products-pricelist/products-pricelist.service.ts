import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsPrincelistNotFoundException } from './error/products-pricelist-not-found.exception';
import { Repository } from 'typeorm';
import { ProductsPricelist } from './entities/products-pricelist.entity';
import { CreateProductsPricelistDto } from './dto/create-products-pricelist.dto';
import { UpdatedProductsPricelistDto } from './dto/updated-products-princelist.dto';

@Injectable()
export class ProductsPricelistService {
  constructor(
    @InjectRepository(ProductsPricelist)
    private readonly productsPricelistRepository: Repository<ProductsPricelist>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductsPricelist[] | undefined> {
    const offset = (page - 1) * perPage;
    const productsPricelist = await this.productsPricelistRepository
      .createQueryBuilder('productsPricelist')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productsPricelist;
  }

  async create(
    createProductsPricelistDto: CreateProductsPricelistDto,
  ): Promise<ProductsPricelist> {
    const productsPricelist = new ProductsPricelist(createProductsPricelistDto);
    return await this.productsPricelistRepository.save(productsPricelist);
  }

  async findOne(id: number): Promise<ProductsPricelist> {
    const productsPricelist = await this.productsPricelistRepository
      .createQueryBuilder('productsPricelist')
      .where('productsPricelist.id = :id', { id })
      .getOne();
    if (!productsPricelist) {
      throw new ProductsPrincelistNotFoundException();
    }
    return productsPricelist;
  }

  async updated(
    id: number,
    updatedProductsPricelistDto: UpdatedProductsPricelistDto,
  ): Promise<ProductsPricelist> {
    const productsPricelist = await this.productsPricelistRepository
      .createQueryBuilder('productsPricelist')
      .where('productsPricelist.id = :id', { id })
      .getOne();
    if (!productsPricelist) {
      throw new ProductsPrincelistNotFoundException();
    }
    Object.assign(productsPricelist, updatedProductsPricelistDto);
    return await this.productsPricelistRepository.save(productsPricelist);
  }

  async deleted(id: number): Promise<void> {
    const productsPricelist = await this.productsPricelistRepository
      .createQueryBuilder('productsPricelist')
      .where('productsPricelist.id = :id', { id })
      .getOne();
    if (!productsPricelist) {
      throw new ProductsPrincelistNotFoundException();
    }
    await this.productsPricelistRepository.softRemove(productsPricelist);
    console.log('Productos Eliminado');
  }
}
