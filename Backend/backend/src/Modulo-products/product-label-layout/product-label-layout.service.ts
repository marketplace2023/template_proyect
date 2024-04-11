import { Injectable } from '@nestjs/common';
import { ProductLabelLayoutNotFoundException } from './error/product-label-layout-not-found.exception';
import { UpdatedProductLabelLayoutDto } from './dto/updated-product-label-layout.dto';
import { ProductLabelLayout } from './entities/product-label-layout.entity';
import { CreateProductLabelLayoutDto } from './dto/created-product-label-layout.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductLabelLayoutService {
  constructor(
    @InjectRepository(ProductLabelLayout)
    private readonly productLabelLayoutRepository: Repository<ProductLabelLayout>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductLabelLayout[] | undefined> {
    const offset = (page - 1) * perPage;
    const productLabelLayout = await this.productLabelLayoutRepository
      .createQueryBuilder('productLabelLayout')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productLabelLayout;
  }

  async create(
    createProductLabelLayoutDto: CreateProductLabelLayoutDto,
  ): Promise<ProductLabelLayout> {
    const productLabelLayout = new ProductLabelLayout(
      createProductLabelLayoutDto,
    );
    return await this.productLabelLayoutRepository.save(productLabelLayout);
  }

  async findOne(id: number): Promise<ProductLabelLayout> {
    const productLabelLayout = await this.productLabelLayoutRepository
      .createQueryBuilder('productLabelLayout')
      .where('productLabelLayout.id = :id', { id })
      .getOne();
    if (!productLabelLayout) {
      throw new ProductLabelLayoutNotFoundException();
    }
    return productLabelLayout;
  }

  async updated(
    id: number,
    updatedProductLabelLayoutDto: UpdatedProductLabelLayoutDto,
  ): Promise<ProductLabelLayout> {
    const productLabelLayout = await this.productLabelLayoutRepository
      .createQueryBuilder('productLabelLayout')
      .where('productLabelLayout.id = :id', { id })
      .getOne();
    if (!productLabelLayout) {
      throw new ProductLabelLayoutNotFoundException();
    }
    Object.assign(productLabelLayout, updatedProductLabelLayoutDto);
    return await this.productLabelLayoutRepository.save(productLabelLayout);
  }

  async deleted(id: number): Promise<void> {
    const productLabelLayout = await this.productLabelLayoutRepository
      .createQueryBuilder('productLabelLayout')
      .where('productLabelLayout.id = :id', { id })
      .getOne();
    if (!productLabelLayout) {
      throw new ProductLabelLayoutNotFoundException();
    }
    await this.productLabelLayoutRepository.softRemove(productLabelLayout);
    console.log('ProductLabelLayout Eliminado');
  }
}
