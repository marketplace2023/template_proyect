import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalePromotionTemplate } from './entities/sale-promotion-template.entity';
import { Repository } from 'typeorm';
import { CreateSalePromotiontemplateDto } from './dto/created-sale-promotion-template.dto';
import { SalePromotionTemplateNotFoundException } from './error/sale-promotion-template-not-found.exception';
import { UpdatedSalePromotiontemplateDto } from './dto/updated-sale-promotion-template.dto';

@Injectable()
export class SalePromotionTemplateService {
  constructor(
    @InjectRepository(SalePromotionTemplate)
    private readonly salePromotionTemplateRepository: Repository<SalePromotionTemplate>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SalePromotionTemplate[] | undefined> {
    const offset = (page - 1) * perPage;
    const salePromotionTemplate = await this.salePromotionTemplateRepository
      .createQueryBuilder('salePromotionTemplate')
      .take(perPage)
      .skip(offset)
      .getMany();
    return salePromotionTemplate;
  }

  async create(
    createSalePromotionTemplateDto: CreateSalePromotiontemplateDto,
  ): Promise<SalePromotionTemplate> {
    const salePromotionTemplate = new SalePromotionTemplate(
      createSalePromotionTemplateDto,
    );
    return await this.salePromotionTemplateRepository.save(
      salePromotionTemplate,
    );
  }

  async findOne(id: number): Promise<SalePromotionTemplate> {
    const salePromotionTemplate = await this.salePromotionTemplateRepository
      .createQueryBuilder('salePromotionTemplate')
      .where('salePromotionTemplate.id = :id', { id })
      .getOne();
    if (!salePromotionTemplate) {
      throw new SalePromotionTemplateNotFoundException();
    }
    return salePromotionTemplate;
  }

  async updated(
    id: number,
    updatedSalePromotionTemplateDto: UpdatedSalePromotiontemplateDto,
  ): Promise<SalePromotionTemplate> {
    const salePromotionTemplate = await this.salePromotionTemplateRepository
      .createQueryBuilder('salePromotionTemplate')
      .where('salePromotionTemplate.id = :id', { id })
      .getOne();
    if (!salePromotionTemplate) {
      throw new SalePromotionTemplateNotFoundException();
    }
    Object.assign(salePromotionTemplate, updatedSalePromotionTemplateDto);
    return await this.salePromotionTemplateRepository.save(
      salePromotionTemplate,
    );
  }

  async deleted(id: number): Promise<void> {
    const salePromotionTemplate = await this.salePromotionTemplateRepository
      .createQueryBuilder('salePromotionTemplate')
      .where('salePromotionTemplate.id = :id', { id })
      .getOne();
    if (!salePromotionTemplate) {
      throw new SalePromotionTemplateNotFoundException();
    }
    await this.salePromotionTemplateRepository.softRemove(
      salePromotionTemplate,
    );
    console.log('salePromotiontemplate Eliminado');
  }
}
