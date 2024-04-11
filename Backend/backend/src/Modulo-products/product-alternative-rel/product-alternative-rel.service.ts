import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductAlternativeRel } from './entities/product-alternative-rel.entity';
import { CreateProductAlternativeRelDto } from './dto/created-product-alternative-rel.dto';
import { ProductAlternativeRelNotFoundException } from './error/product-alternative-rel-not-found.exception';
import { UpdatedProductAlternativeRelDto } from './dto/updated-product-alternative-rel.dto';

@Injectable()
export class ProductAlternativeRelService {
  constructor(
    @InjectRepository(ProductAlternativeRel)
    private readonly productAlternativeRelRepository: Repository<ProductAlternativeRel>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductAlternativeRel[] | undefined> {
    const offset = (page - 1) * perPage;
    const productAlternativeRel = await this.productAlternativeRelRepository
      .createQueryBuilder('productAlternativeRel')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productAlternativeRel;
  }

  async create(
    createProductAlternativeRelDto: CreateProductAlternativeRelDto,
  ): Promise<ProductAlternativeRel> {
    const productAlternativeRel = new ProductAlternativeRel(
      createProductAlternativeRelDto,
    );
    return await this.productAlternativeRelRepository.save(
      productAlternativeRel,
    );
  }

  async findOne(id: number): Promise<ProductAlternativeRel> {
    const productAlternativeRel = await this.productAlternativeRelRepository
      .createQueryBuilder('productAlternativeRel')
      .where('productAlternativeRel.id = :id', { id })
      .getOne();
    if (!productAlternativeRel) {
      throw new ProductAlternativeRelNotFoundException();
    }
    return productAlternativeRel;
  }

  async updated(
    id: number,
    updatedProductAlternativeRelDto: UpdatedProductAlternativeRelDto,
  ): Promise<ProductAlternativeRel> {
    const productAlternativeRel = await this.productAlternativeRelRepository
      .createQueryBuilder('productAlternativeRel')
      .where('productAlternativeRel.id = :id', { id })
      .getOne();
    if (!productAlternativeRel) {
      throw new ProductAlternativeRelNotFoundException();
    }
    Object.assign(productAlternativeRel, updatedProductAlternativeRelDto);
    return await this.productAlternativeRelRepository.save(
      productAlternativeRel,
    );
  }

  async deleted(id: number): Promise<void> {
    const productAlternativeRel = await this.productAlternativeRelRepository
      .createQueryBuilder('productAlternativeRel')
      .where('productAlternativeRel.id = :id', { id })
      .getOne();
    if (!productAlternativeRel) {
      throw new ProductAlternativeRelNotFoundException();
    }
    await this.productAlternativeRelRepository.softRemove(
      productAlternativeRel,
    );
    console.log('Productos Eliminado');
  }
}
