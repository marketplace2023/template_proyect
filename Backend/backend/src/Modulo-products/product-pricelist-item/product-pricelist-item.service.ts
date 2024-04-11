import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductPricelistItem } from './entities/product-pricelist-item.entity';
import { Repository } from 'typeorm';
import { CreateProductPricelistItemDto } from './dto/created-product-pricelist-item.dto';
import { ProductPricelistItemNotFoundException } from './error/product-pricelist-item-not-foud.exception';
import { UpdatedProductPricelistItemDto } from './dto/updated-product-pricelist-item.dto';

@Injectable()
export class ProductPricelistItemService {
  constructor(
    @InjectRepository(ProductPricelistItem)
    private readonly productPricelistItemRepository: Repository<ProductPricelistItem>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductPricelistItem[] | undefined> {
    const offset = (page - 1) * perPage;
    const productPricelistItem = await this.productPricelistItemRepository
      .createQueryBuilder('productPricelistItem')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productPricelistItem;
  }

  async create(
    createProductPricelistItemDto: CreateProductPricelistItemDto,
  ): Promise<ProductPricelistItem> {
    const productPricelistItem = new ProductPricelistItem(
      createProductPricelistItemDto,
    );
    return await this.productPricelistItemRepository.save(productPricelistItem);
  }

  async findOne(id: number): Promise<ProductPricelistItem> {
    const productPricelistItem = await this.productPricelistItemRepository
      .createQueryBuilder('productPricelistItem')
      .where('productPricelistItem.id = :id', { id })
      .getOne();
    if (!productPricelistItem) {
      throw new ProductPricelistItemNotFoundException();
    }
    return productPricelistItem;
  }

  async updated(
    id: number,
    updatedProductPricelistItemDto: UpdatedProductPricelistItemDto,
  ): Promise<ProductPricelistItem> {
    const productPricelistItem = await this.productPricelistItemRepository
      .createQueryBuilder('productPricelistItem')
      .where('productPricelistItem.id = :id', { id })
      .getOne();
    if (!productPricelistItem) {
      throw new ProductPricelistItemNotFoundException();
    }
    Object.assign(productPricelistItem, updatedProductPricelistItemDto);
    return await this.productPricelistItemRepository.save(productPricelistItem);
  }

  async deleted(id: number): Promise<void> {
    const productPricelistItem = await this.productPricelistItemRepository
      .createQueryBuilder('productPricelistItem')
      .where('productPricelistItem.id = :id', { id })
      .getOne();
    if (!productPricelistItem) {
      throw new ProductPricelistItemNotFoundException();
    }
    await this.productPricelistItemRepository.softRemove(productPricelistItem);
    console.log('ProductPricelistItem Eliminado');
  }
}
