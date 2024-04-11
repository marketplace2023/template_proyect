import { Injectable } from '@nestjs/common';
import { ProductsAttributevalueNotFoundException } from './error/products-attribute-value-not-found.exception';
import { UpdatedProductsAttributeValueDto } from './dto/updated-products-attribute.dto';
import { ProductsAttributeValue } from './entities/products-attribute-value.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductsAttributeValueDto } from './dto/create-products-attribute-value.dto';

@Injectable()
export class ProductsAttributeValueService {
  constructor(
    @InjectRepository(ProductsAttributeValue)
    private readonly productsAttributeValueRepository: Repository<ProductsAttributeValue>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductsAttributeValue[] | undefined> {
    const offset = (page - 1) * perPage;
    const productsAttributeValue = await this.productsAttributeValueRepository
      .createQueryBuilder('productsAttributeValue')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productsAttributeValue;
  }

  async create(
    createProductsAttributeValueDto: CreateProductsAttributeValueDto,
  ): Promise<ProductsAttributeValue> {
    const productsAttributeValue = new ProductsAttributeValue(
      createProductsAttributeValueDto,
    );
    return await this.productsAttributeValueRepository.save(
      productsAttributeValue,
    );
  }

  async findOne(id: number): Promise<ProductsAttributeValue> {
    const productsAttributeValue = await this.productsAttributeValueRepository
      .createQueryBuilder('productsAttributeValue')
      .where('productsAttributeValue.id = :id', { id })
      .getOne();
    if (!productsAttributeValue) {
      throw new ProductsAttributevalueNotFoundException();
    }
    return productsAttributeValue;
  }

  async updated(
    id: number,
    updatedProductsAttributeValueDto: UpdatedProductsAttributeValueDto,
  ): Promise<ProductsAttributeValue> {
    const productsAttributeValue = await this.productsAttributeValueRepository
      .createQueryBuilder('productsAttributeValue')
      .where('productsAttributeValue.id = :id', { id })
      .getOne();
    if (!productsAttributeValue) {
      throw new ProductsAttributevalueNotFoundException();
    }
    Object.assign(productsAttributeValue, updatedProductsAttributeValueDto);
    return await this.productsAttributeValueRepository.save(
      productsAttributeValue,
    );
  }

  async deleted(id: number): Promise<void> {
    const productsAttributeValue = await this.productsAttributeValueRepository
      .createQueryBuilder('productsAttributeValue')
      .where('productsAttributeValue.id = :id', { id })
      .getOne();
    if (!productsAttributeValue) {
      throw new ProductsAttributevalueNotFoundException();
    }
    await this.productsAttributeValueRepository.softRemove(
      productsAttributeValue,
    );
    console.log('Productos AttributeValue Eliminado');
  }
}
