import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductProductTemplate } from './entities/product-product-template.entity';
import { CreateProductProductTemplateDto } from './dto/created-product-product-template.dto';
import { ProductProductTemplateNotFoundException } from './error/product-product-template-not-found.exception';
import { UpdatedProductProductTemplateDto } from './dto/updated-product-product-template.dto';

@Injectable()
export class ProductProductTemplateService {
  constructor(
    @InjectRepository(ProductProductTemplate)
    private readonly productProductTemplateRepository: Repository<ProductProductTemplate>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ProductProductTemplate[] | undefined> {
    const offset = (page - 1) * perPage;
    const productProductTemplate = await this.productProductTemplateRepository
      .createQueryBuilder('productProductTemplate')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productProductTemplate;
  }

  async create(
    createProductProductTemplateDto: CreateProductProductTemplateDto,
  ): Promise<ProductProductTemplate> {
    const productProductTemplate = new ProductProductTemplate(
      createProductProductTemplateDto,
    );
    return await this.productProductTemplateRepository.save(
      productProductTemplate,
    );
  }

  async findOne(id: number): Promise<ProductProductTemplate> {
    const productProductTemplate = await this.productProductTemplateRepository
      .createQueryBuilder('productProductTemplate')
      .where('productProductTemplate.id = :id', { id })
      .getOne();
    if (!productProductTemplate) {
      throw new ProductProductTemplateNotFoundException();
    }
    return productProductTemplate;
  }

  async updated(
    id: number,
    updatedProductProductTemplateDto: UpdatedProductProductTemplateDto,
  ): Promise<ProductProductTemplate> {
    const productProductTemplate = await this.productProductTemplateRepository
      .createQueryBuilder('productProductTemplate')
      .where('productProductTemplate.id = :id', { id })
      .getOne();
    if (!productProductTemplate) {
      throw new ProductProductTemplateNotFoundException();
    }
    Object.assign(productProductTemplate, updatedProductProductTemplateDto);
    return await this.productProductTemplateRepository.save(
      productProductTemplate,
    );
  }
  async deleted(id: number): Promise<void> {
    const productProductTemplate = await this.productProductTemplateRepository
      .createQueryBuilder('productProductTemplate')
      .where('productProductTemplate.id = :id', { id })
      .getOne();
    if (!productProductTemplate) {
      throw new ProductProductTemplateNotFoundException();
    }
    await this.productProductTemplateRepository.softRemove(
      productProductTemplate,
    );
    console.log('ProductProductTemplate Eliminado');
  }
}
