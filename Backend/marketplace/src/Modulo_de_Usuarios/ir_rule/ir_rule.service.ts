import { Injectable } from '@nestjs/common';
import { CreateIrRuleDto } from './dto/create-ir_rule.dto';
import { UpdateIrRuleDto } from './dto/update-ir_rule.dto';

@Injectable()
export class IrRuleService {
  create(createIrRuleDto: CreateIrRuleDto) {
    return 'This action adds a new irRule';
  }

  findAll() {
    return `This action returns all irRule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} irRule`;
  }

  update(id: number, updateIrRuleDto: UpdateIrRuleDto) {
    return `This action updates a #${id} irRule`;
  }

  remove(id: number) {
    return `This action removes a #${id} irRule`;
  }
}
