import { Injectable } from '@nestjs/common';
import { SalePromotionProductRuleNotFoundException } from './error/sale-promotion-product-rule-not-found.exception';
import { SalePromotionProductRule } from './entities/sale-promotion-product-rule.entity';
import { UpdatedSalePromotionProductRuleDto } from './dto/updated-sale-promotion-product-rule.dto';
import { CreateSalePromotionProductRuleDto } from './dto/created-sale-promotion-product-rule.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SalePromotionProductRuleService {
  constructor(
    @InjectRepository(SalePromotionProductRule)
    private readonly salePromotionProductRuleRepository: Repository<SalePromotionProductRule>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SalePromotionProductRule[] | undefined> {
    const offset = (page - 1) * perPage;
    const salePromotionProductRule =
      await this.salePromotionProductRuleRepository
        .createQueryBuilder('salePromotionProductRule')
        .take(perPage)
        .skip(offset)
        .getMany();
    return salePromotionProductRule;
  }

  async create(
    createSalePromotionProductRuleDto: CreateSalePromotionProductRuleDto,
  ): Promise<SalePromotionProductRule> {
    const salePromotionProductRule = new SalePromotionProductRule(
      createSalePromotionProductRuleDto,
    );
    return await this.salePromotionProductRuleRepository.save(
      salePromotionProductRule,
    );
  }

  async findOne(id: number): Promise<SalePromotionProductRule> {
    const salePromotionProductRule =
      await this.salePromotionProductRuleRepository
        .createQueryBuilder('salePromotionProductRule')
        .where('salePromotionProductRule.id = :id', { id })
        .getOne();
    if (!salePromotionProductRule) {
      throw new SalePromotionProductRuleNotFoundException();
    }
    return salePromotionProductRule;
  }

  async updated(
    id: number,
    updatedSalePromotionProductRuleDto: UpdatedSalePromotionProductRuleDto,
  ): Promise<SalePromotionProductRule> {
    const salePromotionProductRule =
      await this.salePromotionProductRuleRepository
        .createQueryBuilder('salePromotionProductRule')
        .where('salePromotionProductRule.id = :id', { id })
        .getOne();
    if (!salePromotionProductRule) {
      throw new SalePromotionProductRuleNotFoundException();
    }
    Object.assign(salePromotionProductRule, updatedSalePromotionProductRuleDto);
    return await this.salePromotionProductRuleRepository.save(
      salePromotionProductRule,
    );
  }

  async deleted(id: number): Promise<void> {
    const salePromotionProductRule =
      await this.salePromotionProductRuleRepository
        .createQueryBuilder('salePromotionProductRule')
        .where('salePromotionProductRule.id = :id', { id })
        .getOne();
    if (!salePromotionProductRule) {
      throw new SalePromotionProductRuleNotFoundException();
    }
    await this.salePromotionProductRuleRepository.softRemove(
      salePromotionProductRule,
    );
    console.log('salePromotionProductRule Eliminado');
  }
}
