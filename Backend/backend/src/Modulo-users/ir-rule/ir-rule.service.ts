import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IrRule } from './entities/ir-rule.entity';
import { Repository } from 'typeorm';
import { CreateIrRuleDto } from './dto/created-ir-rule.dto';
import { IrRuleNotFoundException } from './error/ir-rule-not-found-not-found.exception';
import { UpdatedIrRuleDto } from './dto/updated-ir-rule.dto';

@Injectable()
export class IrRuleService {
  constructor(
    @InjectRepository(IrRule)
    private readonly irRuleRepository: Repository<IrRule>,
  ) {}
  async paginate(page: number, perPage: number): Promise<IrRule[] | undefined> {
    const offset = (page - 1) * perPage;
    const irRule = await this.irRuleRepository
      .createQueryBuilder('irRule')
      .take(perPage)
      .skip(offset)
      .getMany();
    return irRule;
  }
  async create(createIrRuleDto: CreateIrRuleDto): Promise<IrRule> {
    const irRule = new IrRule(createIrRuleDto);
    return await this.irRuleRepository.save(irRule);
  }
  async findOne(id: number): Promise<IrRule> {
    const irRule = await this.irRuleRepository
      .createQueryBuilder('irRule')
      .where('irRule.id = :id', { id })
      .getOne();
    if (!irRule) {
      throw new IrRuleNotFoundException();
    }
    return irRule;
  }
  async updated(
    id: number,
    updatedIrRuleDto: UpdatedIrRuleDto,
  ): Promise<IrRule> {
    const irRule = await this.irRuleRepository
      .createQueryBuilder('irRule')
      .where('irRule.id = :id', { id })
      .getOne();
    if (!irRule) {
      throw new IrRuleNotFoundException();
    }
    Object.assign(irRule, updatedIrRuleDto);
    return await this.irRuleRepository.save(irRule);
  }
  async deleted(id: number): Promise<void> {
    const irRule = await this.irRuleRepository
      .createQueryBuilder('irRule')
      .where('irRule.id = :id', { id })
      .getOne();
    if (!irRule) {
      throw new IrRuleNotFoundException();
    }
    await this.irRuleRepository.softRemove(irRule);
    console.log('ir Rule column Eliminado');
  }
}
