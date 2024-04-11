import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsSupplier } from './entities/products-supplier.entity';
import { CreateProductsSupplierDto } from './dto/create-products-supplier.dto';
import { ProductsSupplierNotFoundException } from './error/products-supplier-not-found.exception';
import { UpdatedProductsSupplierDto } from './dto/updated-products-supplier.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsSupplierService {
  constructor(
    @InjectRepository(ProductsSupplier)
    private readonly productsSupplierRepository: Repository<ProductsSupplier>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductsSupplier[] | undefined> {
    const offset = (page - 1) * perPage;
    const productsSupplier = await this.productsSupplierRepository
      .createQueryBuilder('productsSupplier')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productsSupplier;
  }

  async create(
    createProductsSupplierDto: CreateProductsSupplierDto,
  ): Promise<ProductsSupplier> {
    const productsSupplier = new ProductsSupplier(createProductsSupplierDto);
    return await this.productsSupplierRepository.save(productsSupplier);
  }

  async findOne(id: number): Promise<ProductsSupplier> {
    const productsSupplier = await this.productsSupplierRepository
      .createQueryBuilder('productsSupplier')
      .where('productsSupplier.id = :id', { id })
      .getOne();
    if (!productsSupplier) {
      throw new ProductsSupplierNotFoundException();
    }
    return productsSupplier;
  }

  async updated(
    id: number,
    updatedProductsSupplierDto: UpdatedProductsSupplierDto,
  ): Promise<ProductsSupplier> {
    const productsSupplier = await this.productsSupplierRepository
      .createQueryBuilder('productsSupplier')
      .where('productsSupplier.id = :id', { id })
      .getOne();
    if (!productsSupplier) {
      throw new ProductsSupplierNotFoundException();
    }
    Object.assign(productsSupplier, updatedProductsSupplierDto);
    return await this.productsSupplierRepository.save(productsSupplier);
  }

  async deleted(id: number): Promise<void> {
    const productsSupplier = await this.productsSupplierRepository
      .createQueryBuilder('productsSupplier')
      .where('productsSupplier.id = :id', { id })
      .getOne();
    if (!productsSupplier) {
      throw new ProductsSupplierNotFoundException();
    }
    await this.productsSupplierRepository.softRemove(productsSupplier);
    console.log('Productos Eliminado');
  }
}
