import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductSupplierTaxesRel } from './entities/product-supplier-taxes-rel.entity';
import { Repository } from 'typeorm';
import { CreateProductSupplierTaxesRelDto } from './dto/created-product-supplier-taxes-rel.dto';
import { ProductSupplierTaxesRelNotFoundException } from './error/product-supplier-taxes-rel-not-found.exception';
import { UpdatedProductSupplierTaxesRelDto } from './dto/updated-product-supplier-taxes-rel.dto';

@Injectable()
export class ProductSupplierTaxesRelService {
  constructor(
    @InjectRepository(ProductSupplierTaxesRel)
    private readonly productSupplierTaxesRelRepository: Repository<ProductSupplierTaxesRel>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductSupplierTaxesRel[] | undefined> {
    const offset = (page - 1) * perPage;
    console.log(page);
    console.log(perPage);
    const productSupplierTaxesRel = await this.productSupplierTaxesRelRepository
      .createQueryBuilder('productSupplierTaxesRel')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productSupplierTaxesRel;
  }

  async create(
    createProductSupplierTaxesRelDto: CreateProductSupplierTaxesRelDto,
  ): Promise<ProductSupplierTaxesRel> {
    const productSupplierTaxesRel = new ProductSupplierTaxesRel(
      createProductSupplierTaxesRelDto,
    );
    return await this.productSupplierTaxesRelRepository.save(
      productSupplierTaxesRel,
    );
  }

  async findOne(id: number): Promise<ProductSupplierTaxesRel> {
    const productSupplierTaxesRel = await this.productSupplierTaxesRelRepository
      .createQueryBuilder('productSupplierTaxesRel')
      .where('productSupplierTaxesRel.id = :id', { id })
      .getOne();
    if (!productSupplierTaxesRel) {
      throw new ProductSupplierTaxesRelNotFoundException();
    }
    return productSupplierTaxesRel;
  }

  async updated(
    id: number,
    updatedProductSupplierTaxesRelDto: UpdatedProductSupplierTaxesRelDto,
  ): Promise<ProductSupplierTaxesRel> {
    const productSupplierTaxesRel = await this.productSupplierTaxesRelRepository
      .createQueryBuilder('productSupplierTaxesRel')
      .where('productSupplierTaxesRel.id = :id', { id })
      .getOne();
    if (!productSupplierTaxesRel) {
      throw new ProductSupplierTaxesRelNotFoundException();
    }
    Object.assign(productSupplierTaxesRel, updatedProductSupplierTaxesRelDto);
    return await this.productSupplierTaxesRelRepository.save(
      productSupplierTaxesRel,
    );
  }

  async deleted(id: number): Promise<void> {
    const productSupplierTaxesRel = await this.productSupplierTaxesRelRepository
      .createQueryBuilder('productSupplierTaxesRel')
      .where('productSupplierTaxesRel.id = :id', { id })
      .getOne();
    if (!productSupplierTaxesRel) {
      throw new ProductSupplierTaxesRelNotFoundException();
    }
    await this.productSupplierTaxesRelRepository.softRemove(
      productSupplierTaxesRel,
    );
    console.log('ProductSupplierTaxesRel Eliminado');
  }
}
