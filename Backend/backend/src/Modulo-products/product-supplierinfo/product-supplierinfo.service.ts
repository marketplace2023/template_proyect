import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductSupplierinfoNotFoundException } from './error/product-supplierinfo-not-found.exception';
import { UpdatedProductSupplierinfoDto } from './dto/updated-product-supplierinfo.dto';
import { ProductSupplierinfo } from './entities/product-supplierinfo.entity';
import { CreateProductSupplierinfoDto } from './dto/created-product-supplierinfo.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProductSupplierinfoService {
  constructor(
    @InjectRepository(ProductSupplierinfo)
    private readonly productSupplierinfoRepository: Repository<ProductSupplierinfo>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductSupplierinfo[] | undefined> {
    const offset = (page - 1) * perPage;
    console.log(page);
    console.log(perPage);
    const productSupplierinfo = await this.productSupplierinfoRepository
      .createQueryBuilder('productSupplierinfo')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productSupplierinfo;
  }

  async create(
    createProductSupplierinfoDto: CreateProductSupplierinfoDto,
  ): Promise<ProductSupplierinfo> {
    const productSupplierinfo = new ProductSupplierinfo(
      createProductSupplierinfoDto,
    );
    return await this.productSupplierinfoRepository.save(productSupplierinfo);
  }

  async findOne(id: number): Promise<ProductSupplierinfo> {
    const productSupplierinfo = await this.productSupplierinfoRepository
      .createQueryBuilder('productSupplierinfo')
      .where('productSupplierinfo.id = :id', { id })
      .getOne();
    if (!productSupplierinfo) {
      throw new ProductSupplierinfoNotFoundException();
    }
    return productSupplierinfo;
  }

  async updated(
    id: number,
    updatedProductSupplierinfoDto: UpdatedProductSupplierinfoDto,
  ): Promise<ProductSupplierinfo> {
    const productSupplierinfo = await this.productSupplierinfoRepository
      .createQueryBuilder('productSupplierinfo')
      .where('productSupplierinfo.id = :id', { id })
      .getOne();
    if (!productSupplierinfo) {
      throw new ProductSupplierinfoNotFoundException();
    }
    Object.assign(productSupplierinfo, updatedProductSupplierinfoDto);
    return await this.productSupplierinfoRepository.save(productSupplierinfo);
  }

  async deleted(id: number): Promise<void> {
    const productSupplierinfo = await this.productSupplierinfoRepository
      .createQueryBuilder('productSupplierinfo')
      .where('productSupplierinfo.id = :id', { id })
      .getOne();
    if (!productSupplierinfo) {
      throw new ProductSupplierinfoNotFoundException();
    }
    await this.productSupplierinfoRepository.softRemove(productSupplierinfo);
    console.log('ProductSupplierinfo Eliminado');
  }
}
