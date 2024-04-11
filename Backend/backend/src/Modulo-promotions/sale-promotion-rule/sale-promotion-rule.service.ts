import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalePromotionRule } from './entities/sale-promotion-rule.entity';
import { CreateSalePromotionRuleDto } from './dto/create-sale-promotion-rule.dto';
import { SalePromotionruleNotFoundException } from './error/sale-promotion-rule-not-found.exception';
import { UpdatedSalePromotionRuleDto } from './dto/updated-sale-promotion-rule.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SalePromotionRuleService {
  constructor(
    @InjectRepository(SalePromotionRule)
    private readonly salePromotionRuleRepository: Repository<SalePromotionRule>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SalePromotionRule[] | undefined> {
    const offset = (page - 1) * perPage;
    const salePromotionRule = await this.salePromotionRuleRepository
      .createQueryBuilder('salePromotionRule')
      .take(perPage)
      .skip(offset)
      .getMany();
    return salePromotionRule;
  }

  async create(
    createSalePromotionRuleDto: CreateSalePromotionRuleDto,
  ): Promise<SalePromotionRule> {
    const salePromotionRule = new SalePromotionRule(createSalePromotionRuleDto);
    return await this.salePromotionRuleRepository.save(salePromotionRule);
  }

  async findOne(id: number): Promise<SalePromotionRule> {
    const salePromotionRule = await this.salePromotionRuleRepository
      .createQueryBuilder('salePromotionRule')
      .where('salePromotionRule.id = :id', { id })
      .getOne();
    if (!salePromotionRule) {
      throw new SalePromotionruleNotFoundException();
    }
    return salePromotionRule;
  }

  async updated(
    id: number,
    updatedSalePromotionRuleDto: UpdatedSalePromotionRuleDto,
  ): Promise<SalePromotionRule> {
    const salePromotionRule = await this.salePromotionRuleRepository
      .createQueryBuilder('salePromotionRule')
      .where('salePromotionRule.id = :id', { id })
      .getOne();
    if (!salePromotionRule) {
      throw new SalePromotionruleNotFoundException();
    }
    Object.assign(salePromotionRule, updatedSalePromotionRuleDto);
    return await this.salePromotionRuleRepository.save(salePromotionRule);
  }

  async deleted(id: number): Promise<void> {
    const salePromotionRule = await this.salePromotionRuleRepository
      .createQueryBuilder('salePromotionRule')
      .where('salePromotionRule.id = :id', { id })
      .getOne();
    if (!salePromotionRule) {
      throw new SalePromotionruleNotFoundException();
    }
    await this.salePromotionRuleRepository.softRemove(salePromotionRule);
    console.log('salePromotionRule Eliminado');
  }
}
