import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductLabelLayoutProductTemplateRel } from './entities/product-label-layout-product-template-rel.entity';
import { Repository } from 'typeorm';
import { CreateProductLabelLayoutProductTemplateRelDto } from './dto/created-product-label-layout-product-template-rel.dto';
import { ProductLabelLayoutProductTemplateRelNotFoundException } from './error/product-label-layout-product-template-rel-not-found.exception';
import { UpdatedProductLabelLayoutProductTemplateRelDto } from './dto/updated-product-label-layout-product-template-rel.dto';

@Injectable()
export class ProductLabelLayoutProductTemplateRelService {
  constructor(
    @InjectRepository(ProductLabelLayoutProductTemplateRel)
    private readonly productLabelLayoutProductTemplateRelRepository: Repository<ProductLabelLayoutProductTemplateRel>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductLabelLayoutProductTemplateRel[] | undefined> {
    const offset = (page - 1) * perPage;
    const productLabelLayoutProductTemplateRel =
      await this.productLabelLayoutProductTemplateRelRepository
        .createQueryBuilder('productLabelLayoutProductTemplateRel')
        .take(perPage)
        .skip(offset)
        .getMany();
    return productLabelLayoutProductTemplateRel;
  }

  async create(
    createProductLabelLayoutProductTemplateRelDto: CreateProductLabelLayoutProductTemplateRelDto,
  ): Promise<ProductLabelLayoutProductTemplateRel> {
    const productLabelLayoutProductTemplateRel =
      new ProductLabelLayoutProductTemplateRel(
        createProductLabelLayoutProductTemplateRelDto,
      );
    return await this.productLabelLayoutProductTemplateRelRepository.save(
      productLabelLayoutProductTemplateRel,
    );
  }

  async findOne(id: number): Promise<ProductLabelLayoutProductTemplateRel> {
    const productLabelLayoutProductTemplateRel =
      await this.productLabelLayoutProductTemplateRelRepository
        .createQueryBuilder('productLabelLayoutProductTemplateRel')
        .where('productLabelLayoutProductTemplateRel.id = :id', { id })
        .getOne();
    if (!productLabelLayoutProductTemplateRel) {
      throw new ProductLabelLayoutProductTemplateRelNotFoundException();
    }
    return productLabelLayoutProductTemplateRel;
  }

  async updated(
    id: number,
    updatedProductLabelLayoutProductTemplateRelDto: UpdatedProductLabelLayoutProductTemplateRelDto,
  ): Promise<ProductLabelLayoutProductTemplateRel> {
    const productLabelLayoutProductTemplateRel =
      await this.productLabelLayoutProductTemplateRelRepository
        .createQueryBuilder('productLabelLayoutProductTemplateRel')
        .where('productLabelLayoutProductTemplateRel.id = :id', { id })
        .getOne();
    if (!productLabelLayoutProductTemplateRel) {
      throw new ProductLabelLayoutProductTemplateRelNotFoundException();
    }
    Object.assign(
      productLabelLayoutProductTemplateRel,
      updatedProductLabelLayoutProductTemplateRelDto,
    );
    return await this.productLabelLayoutProductTemplateRelRepository.save(
      productLabelLayoutProductTemplateRel,
    );
  }

  async deleted(id: number): Promise<void> {
    const productLabelLayoutProductTemplateRel =
      await this.productLabelLayoutProductTemplateRelRepository
        .createQueryBuilder('productLabelLayoutProductTemplateRel')
        .where('productLabelLayoutProductTemplateRel.id = :id', { id })
        .getOne();
    if (!productLabelLayoutProductTemplateRel) {
      throw new ProductLabelLayoutProductTemplateRelNotFoundException();
    }
    await this.productLabelLayoutProductTemplateRelRepository.softRemove(
      productLabelLayoutProductTemplateRel,
    );
    console.log('ProductLabelLayoutProductTemplateRel Eliminado');
  }
}
