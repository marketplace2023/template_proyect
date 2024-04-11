import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleCouponRule } from './entities/sale-coupon-rule.entity';
import { Repository } from 'typeorm';
import { CreateSaleCouponRuleDto } from './dto/created-sale-coupon-rule.dto';
import { SaleCouponRuleNotFoundException } from './error/sale-coupon-rule-not-found.exception';
import { UpdatedSaleCouponRuleDto } from './dto/updated-sale-coupon-rule.dto';

@Injectable()
export class SaleCouponRuleService {
  constructor(
    @InjectRepository(SaleCouponRule)
    private readonly saleCouponRuleRepository: Repository<SaleCouponRule>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleCouponRule[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleCouponRule = await this.saleCouponRuleRepository
      .createQueryBuilder('saleCouponRule')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleCouponRule;
  }

  async create(
    createSaleCouponRuleDto: CreateSaleCouponRuleDto,
  ): Promise<SaleCouponRule> {
    const saleCouponRule = new SaleCouponRule(createSaleCouponRuleDto);
    return await this.saleCouponRuleRepository.save(saleCouponRule);
  }

  async findOne(id: number): Promise<SaleCouponRule> {
    const saleCouponRule = await this.saleCouponRuleRepository
      .createQueryBuilder('saleCouponRule')
      .where('saleCouponRule.id = :id', { id })
      .getOne();
    if (!saleCouponRule) {
      throw new SaleCouponRuleNotFoundException();
    }
    return saleCouponRule;
  }

  async updated(
    id: number,
    updatedSaleCouponRuleDto: UpdatedSaleCouponRuleDto,
  ): Promise<SaleCouponRule> {
    const saleCouponRule = await this.saleCouponRuleRepository
      .createQueryBuilder('saleCouponRule')
      .where('saleCouponRule.id = :id', { id })
      .getOne();
    if (!saleCouponRule) {
      throw new SaleCouponRuleNotFoundException();
    }
    Object.assign(saleCouponRule, updatedSaleCouponRuleDto);
    return await this.saleCouponRuleRepository.save(saleCouponRule);
  }

  async deleted(id: number): Promise<void> {
    const saleCouponRule = await this.saleCouponRuleRepository
      .createQueryBuilder('saleCouponRule')
      .where('saleCouponRule.id = :id', { id })
      .getOne();
    if (!saleCouponRule) {
      throw new SaleCouponRuleNotFoundException();
    }
    await this.saleCouponRuleRepository.softRemove(saleCouponRule);
    console.log('saleCouponRule Eliminado');
  }
}
