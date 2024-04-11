import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductAccessoryRelNotFoundException } from './error/product-accessory-rel-not-found.exception';
import { ProductAccessoryRel } from './entities/product-accessory-rel.entity';
import { Repository } from 'typeorm';
import { CreateProductAccessoryRelDto } from './dto/created-product-accessory-rel.dto';
import { UpdatedProductAccessoryRelDto } from './dto/updated-product-accessory-rel.dto';

@Injectable()
export class ProductAccessoryRelService {
  constructor(
    @InjectRepository(ProductAccessoryRel)
    private readonly productAccessoryRelRepository: Repository<ProductAccessoryRel>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductAccessoryRel[] | undefined> {
    const offset = (page - 1) * perPage;
    const productAccessoryRel = await this.productAccessoryRelRepository
      .createQueryBuilder('productAccessoryRel')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productAccessoryRel;
  }

  async create(
    createProductAccessoryRelDto: CreateProductAccessoryRelDto,
  ): Promise<ProductAccessoryRel> {
    const productAccessoryRel = new ProductAccessoryRel(
      createProductAccessoryRelDto,
    );
    return await this.productAccessoryRelRepository.save(productAccessoryRel);
  }

  async findOne(id: number): Promise<ProductAccessoryRel> {
    const productAccessoryRel = await this.productAccessoryRelRepository
      .createQueryBuilder('productAccessoryRel')
      .where('productAccessoryRel.id = :id', { id })
      .getOne();
    if (!productAccessoryRel) {
      throw new ProductAccessoryRelNotFoundException();
    }
    return productAccessoryRel;
  }

  async updated(
    id: number,
    updatedProductAccessoryRelDto: UpdatedProductAccessoryRelDto,
  ): Promise<ProductAccessoryRel> {
    const productAccessoryRel = await this.productAccessoryRelRepository
      .createQueryBuilder('productAccessoryRel')
      .where('productAccessoryRel.id = :id', { id })
      .getOne();
    if (!productAccessoryRel) {
      throw new ProductAccessoryRelNotFoundException();
    }
    Object.assign(productAccessoryRel, updatedProductAccessoryRelDto);
    return await this.productAccessoryRelRepository.save(productAccessoryRel);
  }

  async deleted(id: number): Promise<void> {
    const productAccessoryRel = await this.productAccessoryRelRepository
      .createQueryBuilder('productAccessoryRel')
      .where('productAccessoryRel.id = :id', { id })
      .getOne();
    if (!productAccessoryRel) {
      throw new ProductAccessoryRelNotFoundException();
    }
    await this.productAccessoryRelRepository.softRemove(productAccessoryRel);
    console.log('Productos Eliminado');
  }
}
