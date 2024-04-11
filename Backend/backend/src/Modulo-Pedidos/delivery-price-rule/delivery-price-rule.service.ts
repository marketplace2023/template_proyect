import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DeliveryPriceRuleNotFoundException } from './error/delivery-price-rule-not-found.exception';
import { UpdatedDeliveryPriceRuleDto } from './dto/updated-delivery-price-rule.dto';
import { CreateDeliveryPriceRuleDto } from './dto/create-delivery-price-rule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryPriceRule } from './entities/delivery-price-rule.entity';

@Injectable()
export class DeliveryPriceRuleService {
  constructor(
    @InjectRepository(DeliveryPriceRule)
    private readonly deliveryPriceRuleRepository: Repository<DeliveryPriceRule>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<DeliveryPriceRule[] | undefined> {
    const offset = (page - 1) * perPage;
    const deliveryPriceRule = await this.deliveryPriceRuleRepository
      .createQueryBuilder('deliveryPriceRule')
      .take(perPage)
      .skip(offset)
      .getMany();
    return deliveryPriceRule;
  }

  async create(
    createDeliveryPriceRuleDto: CreateDeliveryPriceRuleDto,
  ): Promise<DeliveryPriceRule> {
    const deliveryPriceRule = new DeliveryPriceRule(createDeliveryPriceRuleDto);
    return await this.deliveryPriceRuleRepository.save(deliveryPriceRule);
  }

  async findOne(id: number): Promise<DeliveryPriceRule> {
    const deliveryPriceRule = await this.deliveryPriceRuleRepository
      .createQueryBuilder('deliveryPriceRule')
      .where('deliveryPriceRule.id = :id', { id })
      .getOne();
    if (!deliveryPriceRule) {
      throw new DeliveryPriceRuleNotFoundException();
    }
    return deliveryPriceRule;
  }

  async updated(
    id: number,
    updatedDeliveryPriceRuleDto: UpdatedDeliveryPriceRuleDto,
  ): Promise<DeliveryPriceRule> {
    const deliveryPriceRule = await this.deliveryPriceRuleRepository
      .createQueryBuilder('deliveryPriceRule')
      .where('deliveryPriceRule.id = :id', { id })
      .getOne();
    if (!deliveryPriceRule) {
      throw new DeliveryPriceRuleNotFoundException();
    }
    Object.assign(deliveryPriceRule, updatedDeliveryPriceRuleDto);
    return await this.deliveryPriceRuleRepository.save(deliveryPriceRule);
  }

  async deleted(id: number): Promise<void> {
    const deliveryPriceRule = await this.deliveryPriceRuleRepository
      .createQueryBuilder('deliveryPriceRule')
      .where('deliveryPriceRule.id = :id', { id })
      .getOne();
    if (!deliveryPriceRule) {
      throw new DeliveryPriceRuleNotFoundException();
    }
    await this.deliveryPriceRuleRepository.softRemove(deliveryPriceRule);
    console.log('deliveryPriceRule Eliminado');
  }
}
