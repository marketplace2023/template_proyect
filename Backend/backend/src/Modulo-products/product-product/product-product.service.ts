import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductProductNotFoundException } from './error/product-product-not-found.exception';
import { ProductProduct } from './entities/product-product.entity';
import { UpdatedProductProductDto } from './dto/updated-product-product.dto';
import { CreateProductProductDto } from './dto/created-product-product.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProductProductService {
  constructor(
    @InjectRepository(ProductProduct)
    private readonly productProductRepository: Repository<ProductProduct>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductProduct[] | undefined> {
    const offset = (page - 1) * perPage;
    const productProduct = await this.productProductRepository
      .createQueryBuilder('productProduct')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productProduct;
  }

  async create(
    createProductProductDto: CreateProductProductDto,
  ): Promise<ProductProduct> {
    const productProduct = new ProductProduct(createProductProductDto);
    return await this.productProductRepository.save(productProduct);
  }

  async findOne(id: number): Promise<ProductProduct> {
    const productProduct = await this.productProductRepository
      .createQueryBuilder('productProduct')
      .where('productProduct.id = :id', { id })
      .getOne();
    if (!productProduct) {
      throw new ProductProductNotFoundException();
    }
    return productProduct;
  }

  async updated(
    id: number,
    updatedProductProductDto: UpdatedProductProductDto,
  ): Promise<ProductProduct> {
    const productProduct = await this.productProductRepository
      .createQueryBuilder('productProduct')
      .where('productProduct.id = :id', { id })
      .getOne();
    if (!productProduct) {
      throw new ProductProductNotFoundException();
    }
    Object.assign(productProduct, updatedProductProductDto);
    return await this.productProductRepository.save(productProduct);
  }

  async deleted(id: number): Promise<void> {
    const productProduct = await this.productProductRepository
      .createQueryBuilder('productProduct')
      .where('productProduct.id = :id', { id })
      .getOne();
    if (!productProduct) {
      throw new ProductProductNotFoundException();
    }
    await this.productProductRepository.softRemove(productProduct);
    console.log('ProductProduct Eliminado');
  }
}
