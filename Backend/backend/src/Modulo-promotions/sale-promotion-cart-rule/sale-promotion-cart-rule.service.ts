import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalePromotionCartRuleNotFoundException } from './error/sale-promotion-cart-rule-not-found.exception';
import { SalePromotionCartRule } from './entities/sale-promotion-cart-rule.entity';
import { UpdatedSalePromotionCartRuleDto } from './dto/updated-sale-promotion-cart-rule.dto';
import { Repository } from 'typeorm';
import { CreateSalePromotionCartRuleDto } from './dto/created-sale-promotion-cart-rule.dto';

@Injectable()
export class SalePromotionCartRuleService {
  constructor(
    @InjectRepository(SalePromotionCartRule)
    private readonly salePromotionCartRuleRepository: Repository<SalePromotionCartRule>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SalePromotionCartRule[] | undefined> {
    const offset = (page - 1) * perPage;
    const salePromotionCartRule = await this.salePromotionCartRuleRepository
      .createQueryBuilder('salePromotionCartRule')
      .take(perPage)
      .skip(offset)
      .getMany();
    return salePromotionCartRule;
  }

  async create(
    createSalePromotionCartRuleDto: CreateSalePromotionCartRuleDto,
  ): Promise<SalePromotionCartRule> {
    const salePromotionCartRule = new SalePromotionCartRule(
      createSalePromotionCartRuleDto,
    );
    return await this.salePromotionCartRuleRepository.save(
      salePromotionCartRule,
    );
  }

  async findOne(id: number): Promise<SalePromotionCartRule> {
    const salePromotionCartRule = await this.salePromotionCartRuleRepository
      .createQueryBuilder('salePromotionCartRule')
      .where('salePromotionCartRule.id = :id', { id })
      .getOne();
    if (!salePromotionCartRule) {
      throw new SalePromotionCartRuleNotFoundException();
    }
    return salePromotionCartRule;
  }

  async updated(
    id: number,
    updatedSalePromotionCartRuleDto: UpdatedSalePromotionCartRuleDto,
  ): Promise<SalePromotionCartRule> {
    const salePromotionCartRule = await this.salePromotionCartRuleRepository
      .createQueryBuilder('salePromotionCartRule')
      .where('salePromotionCartRule.id = :id', { id })
      .getOne();
    if (!salePromotionCartRule) {
      throw new SalePromotionCartRuleNotFoundException();
    }
    Object.assign(salePromotionCartRule, updatedSalePromotionCartRuleDto);
    return await this.salePromotionCartRuleRepository.save(
      salePromotionCartRule,
    );
  }

  async deleted(id: number): Promise<void> {
    const salePromotionCartRule = await this.salePromotionCartRuleRepository
      .createQueryBuilder('salePromotionCartRule')
      .where('salePromotionCartRule.id = :id', { id })
      .getOne();
    if (!salePromotionCartRule) {
      throw new SalePromotionCartRuleNotFoundException();
    }
    await this.salePromotionCartRuleRepository.softRemove(
      salePromotionCartRule,
    );
    console.log('salePromotionCartRule Eliminado');
  }
}
