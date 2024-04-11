import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DiscountRule } from './entities/discount-rule.entity';
import { CreateDiscountRuleDto } from './dto/created-discount-rule.dto';
import { UpdatedDiscountRuleDto } from './dto/updated-discount-rule.dto';
import { DiscountRuleNotFoundException } from './error/discount-rule-not-found.exception';

@Injectable()
export class DiscountRuleService {
  constructor(
    @InjectRepository(DiscountRule)
    private readonly discountRuleRepository: Repository<DiscountRule>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<DiscountRule[] | undefined> {
    const offset = (page - 1) * perPage;
    const discountRule = await this.discountRuleRepository
      .createQueryBuilder('discountRule')
      .take(perPage)
      .skip(offset)
      .getMany();
    return discountRule;
  }

  async create(
    createDiscountRuleDto: CreateDiscountRuleDto,
  ): Promise<DiscountRule> {
    const discountRule = new DiscountRule(createDiscountRuleDto);
    return await this.discountRuleRepository.save(discountRule);
  }

  async findOne(id: number): Promise<DiscountRule> {
    const discountRule = await this.discountRuleRepository
      .createQueryBuilder('discountRule')
      .where('discountRule.id = :id', { id })
      .getOne();
    if (!discountRule) {
      throw new DiscountRuleNotFoundException();
    }
    return discountRule;
  }

  async updated(
    id: number,
    updatedDiscountRuleDto: UpdatedDiscountRuleDto,
  ): Promise<DiscountRule> {
    const discountRule = await this.discountRuleRepository
      .createQueryBuilder('discountRule')
      .where('discountRule.id = :id', { id })
      .getOne();
    if (!discountRule) {
      throw new DiscountRuleNotFoundException();
    }
    Object.assign(discountRule, updatedDiscountRuleDto);
    return await this.discountRuleRepository.save(discountRule);
  }

  async deleted(id: number): Promise<void> {
    const discountRule = await this.discountRuleRepository
      .createQueryBuilder('discountRule')
      .where('discountRule.id = :id', { id })
      .getOne();
    if (!discountRule) {
      throw new DiscountRuleNotFoundException();
    }
    await this.discountRuleRepository.softRemove(discountRule);
    console.log('discountRule Eliminado');
  }
}
