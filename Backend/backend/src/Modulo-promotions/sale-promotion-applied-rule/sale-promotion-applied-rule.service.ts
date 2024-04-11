import { Injectable } from '@nestjs/common';
import { SalePromotionAppliedRule } from './entities/sale-promotion-applied-rule.entity';
import { SalePromotionAppliedRuleNotFoundException } from './error/sale-promotion-applied-rule-not-found.exception';
import { UpdatedSalePromotionAppliedRuleDto } from './dto/updated-sale-promotion-applied.dto';
import { CreateSalePromotionAppliedRuleDto } from './dto/created-sale-promotion-applied-rule.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SalePromotionAppliedRuleService {
  constructor(
    @InjectRepository(SalePromotionAppliedRule)
    private readonly salePromotionAppliedRuleRepository: Repository<SalePromotionAppliedRule>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SalePromotionAppliedRule[] | undefined> {
    const offset = (page - 1) * perPage;
    const salePromotionAppliedRule =
      await this.salePromotionAppliedRuleRepository
        .createQueryBuilder('salePromotionAppliedRule')
        .take(perPage)
        .skip(offset)
        .getMany();
    return salePromotionAppliedRule;
  }

  async create(
    createSalePromotionAppliedRuleDto: CreateSalePromotionAppliedRuleDto,
  ): Promise<SalePromotionAppliedRule> {
    const salePromotionAppliedRule = new SalePromotionAppliedRule(
      createSalePromotionAppliedRuleDto,
    );
    return await this.salePromotionAppliedRuleRepository.save(
      salePromotionAppliedRule,
    );
  }

  async findOne(id: number): Promise<SalePromotionAppliedRule> {
    const salePromotionAppliedRule =
      await this.salePromotionAppliedRuleRepository
        .createQueryBuilder('salePromotionAppliedRule')
        .where('salePromotionAppliedRule.id = :id', { id })
        .getOne();
    if (!salePromotionAppliedRule) {
      throw new SalePromotionAppliedRuleNotFoundException();
    }
    return salePromotionAppliedRule;
  }

  async updated(
    id: number,
    updatedSalePromotionAppliedRuleDto: UpdatedSalePromotionAppliedRuleDto,
  ): Promise<SalePromotionAppliedRule> {
    const salePromotionAppliedRule =
      await this.salePromotionAppliedRuleRepository
        .createQueryBuilder('salePromotionAppliedRule')
        .where('salePromotionAppliedRule.id = :id', { id })
        .getOne();
    if (!salePromotionAppliedRule) {
      throw new SalePromotionAppliedRuleNotFoundException();
    }
    Object.assign(salePromotionAppliedRule, updatedSalePromotionAppliedRuleDto);
    return await this.salePromotionAppliedRuleRepository.save(
      salePromotionAppliedRule,
    );
  }

  async deleted(id: number): Promise<void> {
    const salePromotionAppliedRule =
      await this.salePromotionAppliedRuleRepository
        .createQueryBuilder('salePromotionAppliedRule')
        .where('salePromotionAppliedRule.id = :id', { id })
        .getOne();
    if (!salePromotionAppliedRule) {
      throw new SalePromotionAppliedRuleNotFoundException();
    }
    await this.salePromotionAppliedRuleRepository.softRemove(
      salePromotionAppliedRule,
    );
    console.log('salePromotionAppliedRule Eliminado');
  }
}
