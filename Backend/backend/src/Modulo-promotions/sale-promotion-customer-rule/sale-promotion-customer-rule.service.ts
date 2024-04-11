import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalePromotionCustomerRuleNotFoundException } from './error/sale-promotion-customer-rule-not-found.exception';
import { UpdatedSalePromotionCustomerRuleDto } from './dto/deleted-sale-promotion-customer-rule.dto';
import { SalePromotionCustomerRule } from './entities/sale-promotion-customer-rule.entity';
import { CreateSalePromotionCustomerRuleDto } from './dto/created-sale-promotion-customer-rule.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SalePromotionCustomerRuleService {
  constructor(
    @InjectRepository(SalePromotionCustomerRule)
    private readonly salePromotionCustomerRuleRepository: Repository<SalePromotionCustomerRule>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SalePromotionCustomerRule[] | undefined> {
    const offset = (page - 1) * perPage;
    const salePromotionCustomerRule =
      await this.salePromotionCustomerRuleRepository
        .createQueryBuilder('salePromotionCustomerRule')
        .take(perPage)
        .skip(offset)
        .getMany();
    return salePromotionCustomerRule;
  }

  async create(
    createSalePromotionCustomerRuleDto: CreateSalePromotionCustomerRuleDto,
  ): Promise<SalePromotionCustomerRule> {
    const salePromotionCustomerRule = new SalePromotionCustomerRule(
      createSalePromotionCustomerRuleDto,
    );
    return await this.salePromotionCustomerRuleRepository.save(
      salePromotionCustomerRule,
    );
  }

  async findOne(id: number): Promise<SalePromotionCustomerRule> {
    const salePromotionCustomerRule =
      await this.salePromotionCustomerRuleRepository
        .createQueryBuilder('salePromotionCustomerRule')
        .where('salePromotionCustomerRule.id = :id', { id })
        .getOne();
    if (!salePromotionCustomerRule) {
      throw new SalePromotionCustomerRuleNotFoundException();
    }
    return salePromotionCustomerRule;
  }

  async updated(
    id: number,
    updatedSalePromotionCustomerRuleDto: UpdatedSalePromotionCustomerRuleDto,
  ): Promise<SalePromotionCustomerRule> {
    const salePromotionCustomerRule =
      await this.salePromotionCustomerRuleRepository
        .createQueryBuilder('salePromotionCustomerRule')
        .where('salePromotionCustomerRule.id = :id', { id })
        .getOne();
    if (!salePromotionCustomerRule) {
      throw new SalePromotionCustomerRuleNotFoundException();
    }
    Object.assign(
      salePromotionCustomerRule,
      updatedSalePromotionCustomerRuleDto,
    );
    return await this.salePromotionCustomerRuleRepository.save(
      salePromotionCustomerRule,
    );
  }

  async deleted(id: number): Promise<void> {
    const salePromotionCustomerRule =
      await this.salePromotionCustomerRuleRepository
        .createQueryBuilder('salePromotionCustomerRule')
        .where('salePromotionCustomerRule.id = :id', { id })
        .getOne();
    if (!salePromotionCustomerRule) {
      throw new SalePromotionCustomerRuleNotFoundException();
    }
    await this.salePromotionCustomerRuleRepository.softRemove(
      salePromotionCustomerRule,
    );
    console.log('salePromotionCustomerRule Eliminado');
  }
}
