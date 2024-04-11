import { Injectable } from '@nestjs/common';
import { ProductsAttributeNotFoundException } from './error/products-attribute-not-found.exception';
import { ProductsAttribute } from './entities/products-attribute.entity';
import { UpdatedProductsAttributeDto } from './dto/updated-products-attribute.dto';
import { CreateProductsAttributeDto } from './dto/create-products-attribute.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsAttributeService {
  constructor(
    @InjectRepository(ProductsAttribute)
    private readonly productsAttributeRepository: Repository<ProductsAttribute>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductsAttribute[] | undefined> {
    const offset = (page - 1) * perPage;
    const productsAttribute = await this.productsAttributeRepository
      .createQueryBuilder('productsAttribute')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productsAttribute;
  }

  async create(
    createProductsAttributeDto: CreateProductsAttributeDto,
  ): Promise<ProductsAttribute> {
    const productsAttribute = new ProductsAttribute(createProductsAttributeDto);
    return await this.productsAttributeRepository.save(productsAttribute);
  }

  async findOne(id: number): Promise<ProductsAttribute> {
    const productsAttribute = await this.productsAttributeRepository
      .createQueryBuilder('productsAttribute')
      .where('productsAttribute.id = :id', { id })
      .getOne();
    if (!productsAttribute) {
      throw new ProductsAttributeNotFoundException();
    }
    return productsAttribute;
  }

  async updated(
    id: number,
    updatedProductsAttributeDto: UpdatedProductsAttributeDto,
  ): Promise<ProductsAttribute> {
    const productsAttribute = await this.productsAttributeRepository
      .createQueryBuilder('productsAttribute')
      .where('productsAttribute.id = :id', { id })
      .getOne();
    if (!productsAttribute) {
      throw new ProductsAttributeNotFoundException();
    }
    Object.assign(productsAttribute, updatedProductsAttributeDto);
    return await this.productsAttributeRepository.save(productsAttribute);
  }

  async deleted(id: number): Promise<void> {
    const productsAttribute = await this.productsAttributeRepository
      .createQueryBuilder('productsAttribute')
      .where('productsAttribute.id = :id', { id })
      .getOne();
    if (!productsAttribute) {
      throw new ProductsAttributeNotFoundException();
    }
    await this.productsAttributeRepository.softRemove(productsAttribute);
    console.log('Productos Attribute Eliminado');
  }
}
