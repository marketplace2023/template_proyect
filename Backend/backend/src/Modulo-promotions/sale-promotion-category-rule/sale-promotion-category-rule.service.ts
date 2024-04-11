import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalePromotionCategoryRuleNotFoundException } from './error/sale-promotion-category-rule-not-found.exception';
import { SalePromotionCategoryRule } from './entities/sale-promotion-category-rule.entity';
import { UpdatedSalePromotionCategoryRuleDto } from './dto/updated-sale-promotion-category-rule.dto';
import { CreateSalePromotionCategoryRuleDto } from './dto/created-sale-promotion-category-rule.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SalePromotionCategoryRuleService {
  constructor(
    @InjectRepository(SalePromotionCategoryRule)
    private readonly salePromotionCategoryRuleRepository: Repository<SalePromotionCategoryRule>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SalePromotionCategoryRule[] | undefined> {
    const offset = (page - 1) * perPage;
    const salePromotionCategoryRule =
      await this.salePromotionCategoryRuleRepository
        .createQueryBuilder('salePromotionCategoryRule')
        .take(perPage)
        .skip(offset)
        .getMany();
    return salePromotionCategoryRule;
  }

  async create(
    createSalePromotionCategoryRuleDto: CreateSalePromotionCategoryRuleDto,
  ): Promise<SalePromotionCategoryRule> {
    const salePromotionCategoryRule = new SalePromotionCategoryRule(
      createSalePromotionCategoryRuleDto,
    );
    return await this.salePromotionCategoryRuleRepository.save(
      salePromotionCategoryRule,
    );
  }

  async findOne(id: number): Promise<SalePromotionCategoryRule> {
    const salePromotionCategoryRule =
      await this.salePromotionCategoryRuleRepository
        .createQueryBuilder('salePromotionCategoryRule')
        .where('salePromotionCategoryRule.id = :id', { id })
        .getOne();
    if (!salePromotionCategoryRule) {
      throw new SalePromotionCategoryRuleNotFoundException();
    }
    return salePromotionCategoryRule;
  }

  async updated(
    id: number,
    updatedSalePromotionCategoryRuleDto: UpdatedSalePromotionCategoryRuleDto,
  ): Promise<SalePromotionCategoryRule> {
    const salePromotionCategoryRule =
      await this.salePromotionCategoryRuleRepository
        .createQueryBuilder('salePromotionCategoryRule')
        .where('salePromotionCategoryRule.id = :id', { id })
        .getOne();
    if (!salePromotionCategoryRule) {
      throw new SalePromotionCategoryRuleNotFoundException();
    }
    Object.assign(
      salePromotionCategoryRule,
      updatedSalePromotionCategoryRuleDto,
    );
    return await this.salePromotionCategoryRuleRepository.save(
      salePromotionCategoryRule,
    );
  }

  async deleted(id: number): Promise<void> {
    const salePromotionCategoryRule =
      await this.salePromotionCategoryRuleRepository
        .createQueryBuilder('salePromotionCategoryRule')
        .where('salePromotionCategoryRule.id = :id', { id })
        .getOne();
    if (!salePromotionCategoryRule) {
      throw new SalePromotionCategoryRuleNotFoundException();
    }
    await this.salePromotionCategoryRuleRepository.softRemove(
      salePromotionCategoryRule,
    );
    console.log('salePromotionCategoryRule Eliminado');
  }
}
