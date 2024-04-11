import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductTaxesRel } from './entities/product-taxes-rel.entity';
import { Repository } from 'typeorm';
import { CreateProductTaxesRelDto } from './dto/created-product-taxes-rel.dto';
import { ProductTaxesRelNotFoundException } from './error/product-taxes-rel-not-found.exception';
import { UpdatedProductTaxesRelDto } from './dto/updated-product-taxes-rel.dto';

@Injectable()
export class ProductTaxesRelService {
  constructor(
    @InjectRepository(ProductTaxesRel)
    private readonly productTaxesRelRepository: Repository<ProductTaxesRel>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductTaxesRel[] | undefined> {
    const offset = (page - 1) * perPage;
    console.log(page);
    console.log(perPage);
    const productTaxesRel = await this.productTaxesRelRepository
      .createQueryBuilder('productTaxesRel')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productTaxesRel;
  }

  async create(
    createProductTaxesRelDto: CreateProductTaxesRelDto,
  ): Promise<ProductTaxesRel> {
    const productTaxesRel = new ProductTaxesRel(createProductTaxesRelDto);
    return await this.productTaxesRelRepository.save(productTaxesRel);
  }

  async findOne(id: number): Promise<ProductTaxesRel> {
    const productTaxesRel = await this.productTaxesRelRepository
      .createQueryBuilder('productTaxesRel')
      .where('productTaxesRel.id = :id', { id })
      .getOne();
    if (!productTaxesRel) {
      throw new ProductTaxesRelNotFoundException();
    }
    return productTaxesRel;
  }

  async updated(
    id: number,
    updatedProductTaxesRelDto: UpdatedProductTaxesRelDto,
  ): Promise<ProductTaxesRel> {
    const productTaxesRel = await this.productTaxesRelRepository
      .createQueryBuilder('productTaxesRel')
      .where('productTaxesRel.id = :id', { id })
      .getOne();
    if (!productTaxesRel) {
      throw new ProductTaxesRelNotFoundException();
    }
    Object.assign(productTaxesRel, updatedProductTaxesRelDto);
    return await this.productTaxesRelRepository.save(productTaxesRel);
  }

  async deleted(id: number): Promise<void> {
    const productTaxesRel = await this.productTaxesRelRepository
      .createQueryBuilder('productTaxesRel')
      .where('productTaxesRel.id = :id', { id })
      .getOne();
    if (!productTaxesRel) {
      throw new ProductTaxesRelNotFoundException();
    }
    await this.productTaxesRelRepository.softRemove(productTaxesRel);
    console.log('ProductTaxesRel Eliminado');
  }
}
