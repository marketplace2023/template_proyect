import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsBarcode } from './entities/products-barcode.entity';
import { Repository } from 'typeorm';
import { CreateProductsBarcodeDto } from './dto/create-products-barcode.dto';
import { UpdatedProductsBarcodeDto } from './dto/updated-products-barcode.dto';
import { ProductsBarcodeNotFoundException } from './error/products-barcode-not-found.exception';

@Injectable()
export class ProductsBarcodeService {
  constructor(
    @InjectRepository(ProductsBarcode)
    private readonly productsBarcodeRepository: Repository<ProductsBarcode>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductsBarcode[] | undefined> {
    const offset = (page - 1) * perPage;
    const productsBarcode = await this.productsBarcodeRepository
      .createQueryBuilder('productsBarcode')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productsBarcode;
  }

  async create(
    createProductsBarcodeDto: CreateProductsBarcodeDto,
  ): Promise<ProductsBarcode> {
    const productsBarcode = new ProductsBarcode(createProductsBarcodeDto);
    return await this.productsBarcodeRepository.save(productsBarcode);
  }

  async findOne(id: number): Promise<ProductsBarcode> {
    const productsBarcode = await this.productsBarcodeRepository
      .createQueryBuilder('productsBarcode')
      .where('productsBarcode.id = :id', { id })
      .getOne();
    if (!productsBarcode) {
      throw new ProductsBarcodeNotFoundException();
    }
    return productsBarcode;
  }

  async updated(
    id: number,
    updatedProductsBarcodeDto: UpdatedProductsBarcodeDto,
  ): Promise<ProductsBarcode> {
    const productsBarcode = await this.productsBarcodeRepository
      .createQueryBuilder('productsBarcode')
      .where('productsBarcode.id = :id', { id })
      .getOne();
    if (!productsBarcode) {
      throw new ProductsBarcodeNotFoundException();
    }
    Object.assign(productsBarcode, updatedProductsBarcodeDto);
    return await this.productsBarcodeRepository.save(productsBarcode);
  }

  async deleted(id: number): Promise<void> {
    const productsBarcode = await this.productsBarcodeRepository
      .createQueryBuilder('productsBarcode')
      .where('productsBarcode.id = :id', { id })
      .getOne();
    if (!productsBarcode) {
      throw new ProductsBarcodeNotFoundException();
    }
    await this.productsBarcodeRepository.softRemove(productsBarcode);
    console.log('Productos Barcode Eliminado');
  }
}
