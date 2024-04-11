import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRibbonNotFoundException } from './error/product-ribbon-not-found.exception';
import { ProductRibbon } from './entities/product-ribbon.entity';
import { UpdatedProductRibbonDto } from './dto/updated-product-ribbon.dto';
import { CreateProductRibbonDto } from './dto/created-product-ribbon.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProductRibbonService {
  constructor(
    @InjectRepository(ProductRibbon)
    private readonly productRibbonRepository: Repository<ProductRibbon>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductRibbon[] | undefined> {
    const offset = (page - 1) * perPage;
    const productRibbon = await this.productRibbonRepository
      .createQueryBuilder('productRibbon')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productRibbon;
  }

  async create(
    createProductRibbonDto: CreateProductRibbonDto,
  ): Promise<ProductRibbon> {
    const productRibbon = new ProductRibbon(createProductRibbonDto);
    return await this.productRibbonRepository.save(productRibbon);
  }

  async findOne(id: number): Promise<ProductRibbon> {
    const productRibbon = await this.productRibbonRepository
      .createQueryBuilder('productRibbon')
      .where('productRibbon.id = :id', { id })
      .getOne();
    if (!productRibbon) {
      throw new ProductRibbonNotFoundException();
    }
    return productRibbon;
  }

  async updated(
    id: number,
    updatedProductRibbonDto: UpdatedProductRibbonDto,
  ): Promise<ProductRibbon> {
    const productRibbon = await this.productRibbonRepository
      .createQueryBuilder('productRibbon')
      .where('productRibbon.id = :id', { id })
      .getOne();
    if (!productRibbon) {
      throw new ProductRibbonNotFoundException();
    }
    Object.assign(productRibbon, updatedProductRibbonDto);
    return await this.productRibbonRepository.save(productRibbon);
  }

  async deleted(id: number): Promise<void> {
    const productRibbon = await this.productRibbonRepository
      .createQueryBuilder('productRibbon')
      .where('productRibbon.id = :id', { id })
      .getOne();
    if (!productRibbon) {
      throw new ProductRibbonNotFoundException();
    }
    await this.productRibbonRepository.softRemove(productRibbon);
    console.log('ProductRibbon Eliminado');
  }
}
