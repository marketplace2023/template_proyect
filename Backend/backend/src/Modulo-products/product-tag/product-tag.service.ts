import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductTag } from './entities/product-tag.entity';
import { Repository } from 'typeorm';
import { CreateProductTagDto } from './dto/created-product-tag.dto';
import { ProductTagNotFoundException } from './error/product-tag-not-found.exception';
import { UpdatedProductTagDto } from './dto/updated-product-tag.dto';

@Injectable()
export class ProductTagService {
  constructor(
    @InjectRepository(ProductTag)
    private readonly productTagRepository: Repository<ProductTag>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductTag[] | undefined> {
    const offset = (page - 1) * perPage;
    console.log(page);
    console.log(perPage);
    const productTag = await this.productTagRepository
      .createQueryBuilder('productTag')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productTag;
  }

  async create(createProductTagDto: CreateProductTagDto): Promise<ProductTag> {
    const productTag = new ProductTag(createProductTagDto);
    return await this.productTagRepository.save(productTag);
  }

  async findOne(id: number): Promise<ProductTag> {
    const productTag = await this.productTagRepository
      .createQueryBuilder('productTag')
      .where('productTag.id = :id', { id })
      .getOne();
    if (!productTag) {
      throw new ProductTagNotFoundException();
    }
    return productTag;
  }

  async updated(
    id: number,
    updatedProductTagDto: UpdatedProductTagDto,
  ): Promise<ProductTag> {
    const productTag = await this.productTagRepository
      .createQueryBuilder('productTag')
      .where('productTag.id = :id', { id })
      .getOne();
    if (!productTag) {
      throw new ProductTagNotFoundException();
    }
    Object.assign(productTag, updatedProductTagDto);
    return await this.productTagRepository.save(productTag);
  }

  async deleted(id: number): Promise<void> {
    const productTag = await this.productTagRepository
      .createQueryBuilder('productTag')
      .where('productTag.id = :id', { id })
      .getOne();
    if (!productTag) {
      throw new ProductTagNotFoundException();
    }
    await this.productTagRepository.softRemove(productTag);
    console.log('ProductTag Eliminado');
  }
}
